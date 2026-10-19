# Hayagriva Harness — Direct JWT Authentication & 30-Day Offline Lease Specification

**Document Version:** 1.0  
**Effective Date:** October 2026  
**Target Clients:** Hayagriva Controller Desktop Runtime (macOS ARM/Intel, Windows 10/11, Linux AppImage)  
**Authentication Authority:** Admin-Portal SSO (`https://app-apnet-net.onrender.com`)  
**Data Privacy Compliance:** Digital Personal Data Protection (DPDP) Act 2023 & IT Act Section 72A (Zero-Cloud-Leak Guarantee)

---

## 1. Executive Summary & Problem Statement

Historically, legal desktop tools relied on generating a 32-character static license key in a web portal, copying it to clipboard, and pasting it into the desktop software. This workflow introduces:
1. **Friction & User Fatigue:** Multi-tab copy-paste steps across web and desktop.
2. **Key Sharing & Leakage:** Static keys can be easily forwarded or misplaced.
3. **Revocation Latency:** Static offline keys cannot easily verify subscription renewals or role accreditation without constant online calls.

**The Solution:** Direct Practitioner Login from the Hayagriva Harness desktop app, returning an asymmetrically signed **JSON Web Token (JWT) with a 30-Day Air-Gapped Lease Certificate**. The Harness verifies this cryptographic lease entirely on-device without internet access, enabling practitioners to work in secure hearing chambers, flights, and air-gapped forensic environments with total peace of mind.

---

## 2. High-Level Architecture Topology

```
   ┌───────────────────────────────────────────────────────────┐
   │                   ADMIN-PORTAL NEON DB                    │
   │               (app-apnet-net.onrender.com)                │
   │ ───────────────────────────────────────────────────────── │
   │ • Single Source of Truth for Users, Profiles, & Billing   │
   │ • Holds RS256 Private Key for Signing Lease Certificates  │
   └─────────────────────────────┬─────────────────────────────┘
                                 │
                     1. POST /api/auth/login
                 (Returns Signed 30-Day Lease JWT)
                                 │
                                 ▼
   ┌───────────────────────────────────────────────────────────┐
   │             HAYAGRIVA HARNESS DESKTOP RUNTIME             │
   │               (Local-First Electron / Tauri)              │
   │ ───────────────────────────────────────────────────────── │
   │ • Embedded Public Key (public_key.pem)                    │
   │ • Validates Signature & 30-Day Expiry 100% Offline        │
   │ • Encrypted Storage in OS Keychain (DPDP-Compliant)       │
   │ • Local SQLite/DuckDB holds Claims, Form H, Sec 29A Data  │
   │ • ZERO Cloud Telemetry / Zero Leakage to External LLMs    │
   └───────────────────────────────────────────────────────────┘
```

---

## 3. JWT Handshake Protocol

### 3.1 Initial Login Handshake (Online)
When the user installs and launches Hayagriva Harness for the first time:
1. Harness presents a native login dialog (Email & Password).
2. Harness dispatches a secure HTTPS request:
   ```http
   POST https://app-apnet-net.onrender.com/api/auth/login
   Content-Type: application/json

   {
     "email": "practitioner@chambers.com",
     "password": "••••••••••••",
     "device_id": "mac-arm-uuid-4a9f-8821"
   }
   ```
3. The Admin-Portal verifies the credentials against the central Neon database and returns the signed lease:
   ```json
   {
     "status": "success",
     "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
     "token_type": "Bearer",
     "expires_in": 2592000,
     "lease_days": 30,
     "user": {
       "id": "usr_94819aef",
       "name": "Adv. Rajesh Sharma",
       "email": "practitioner@chambers.com",
       "role": "ip",
       "is_directory_listed": true,
       "firm": "Apex Insolvency Chambers",
       "city": "Mumbai (Principal Bench)"
     }
   }
   ```

### 3.2 JWT Claims Schema
The JWT payload contains the following standardized claims:

```json
{
  "iss": "https://app-apnet-net.onrender.com",
  "aud": "hayagriva-controller-runtime",
  "sub": "usr_94819aef",
  "email": "practitioner@chambers.com",
  "name": "Adv. Rajesh Sharma",
  "role": "ip",
  "tier": "professional_suite",
  "features": [
    "claims_deterministic_engine",
    "form_h_compliance_generator",
    "sec_29a_inquest_evaluator",
    "sha256_evidentiary_stamp",
    "offline_slm_runtime"
  ],
  "device_id": "mac-arm-uuid-4a9f-8821",
  "iat": 1792398000,
  "nbf": 1792398000,
  "exp": 1794990000,
  "lease_duration_days": 30
}
```

*Note: `exp - iat = 2,592,000` seconds (exactly 30 days).*

---

## 4. 100% Offline Air-Gap Verification Algorithm

When running inside an air-gapped data room or courtroom without Wi-Fi:

1. **Read Cached Token:**  
   Harness retrieves the stored JWT from the secure OS Keychain.
2. **Cryptographic Signature Verification:**  
   The Harness binary embeds the Admin-Portal RSA Public Key (`public_key.pem`).  
   Verification is performed strictly in-memory using OpenSSL / WebCrypto:
   $$\text{Verify}(Token, \text{PublicKey}_{\text{admin\_portal}}) == \text{True}$$
3. **Lease Expiration Check:**  
   $$\text{CurrentTime} \le Token.\text{Payload}.\text{exp}$$
   If current system time is within the 30-day lease, all deterministic pipelines (Claims, Form H, Sec 29A) execute with full entitlements.
4. **Anti-Clock Tampering:**  
   Harness maintains a monotonically increasing execution watermark in encrypted SQLite (`last_verified_timestamp`). If `CurrentTime < last_verified_timestamp`, the runtime flags clock rollback and prompts reconnection.

---

## 5. Silent Background Lease Refresh

Whenever the host operating system detects network connectivity:
1. Harness sends a non-blocking background heartbeat:
   ```http
   POST https://app-apnet-net.onrender.com/api/auth/refresh
   Authorization: Bearer <CURRENT_JWT>
   ```
2. The server rolls the expiration timestamp forward by another 30 days from today (`exp = now + 30 days`).
3. Harness updates the cached token in the OS Keychain.
4. The practitioner never experiences interruptions or license expirations as long as they connect to the internet once every 30 days.

---

## 6. Secure Storage Matrix Across Operating Systems

The Harness must **never** store plaintext JWTs in unencrypted files (`localStorage` or cleartext `.json`).

| Operating System | Secure Keystore Implementation | Security Guarantees |
| :--- | :--- | :--- |
| **macOS (ARM / Intel)** | macOS Keychain (`kSecClassGenericPassword`) via `keytar` / `Security.framework` | Hardware-backed Secure Enclave encryption |
| **Windows 10 / 11** | Windows Credential Manager (`DPAPI` via `CryptProtectData`) | User login credential-bound AES-256 encryption |
| **Linux (AppImage)** | FreeDesktop Secret Service API (`gnome-keyring` / `KWallet`) with fallback to local SQLCipher | GPG/PAM keyring isolation |

---

## 7. Directory Listing Auto-Progression

- **Download Controller:** Automatically registers the user into the central Neon database with `is_directory_listed: false`.
- **National Directory Access:** The user can unlock their accredited map marker at any time by updating their profile with:
  1. IBBI / Bar Registration Number (e.g. `IBBI/IPA-002/IP-N00123/2021-2022/10345`)
  2. Primary Bench City (e.g. `Mumbai`, `New Delhi`, `Bengaluru`)
- Upon submission, `is_directory_listed` flips to `true`, and the practitioner appears on the national roster without creating a second account.

---

## 8. Summary Comparison

| Metric | Legacy 32-Char License Model | Modern Direct JWT 30-Day Lease |
| :--- | :--- | :--- |
| **Activation Step** | Copy from web, paste into desktop input field | One-click login with Portal credentials |
| **Offline Runtime** | Supported, but lacks expiration enforcement | Fully offline for 30 consecutive days |
| **Security** | Vulnerable to clipboard snooping & sharing | Signed via RS256; stored in hardware Keychain |
| **Renewal Flow** | User must copy a new key every billing cycle | Silent automatic renewal in the background |
| **DPDP Compliance** | Manual recordkeeping | Cryptographically certified local tenant isolation |
