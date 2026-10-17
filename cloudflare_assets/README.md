# ☁️ Cloudflare Master Assets Repository (R2 Staging)

This directory is the **canonical local staging tree** that maps 1:1 with the Cloudflare R2 object storage bucket (`hayagriva` / `sanatan-assets`).

## Directory Hierarchy & Garuda Catalog Parity

| Folder | Content Type | Target Cloudflare R2 Prefix | Garuda Catalog (`catalog.ts`) |
| :--- | :--- | :--- | :--- |
| `models/` | Quantized GGUF LLMs & ONNX Embedders | `models/` | `legalparam-2.9b.gguf`, `inlegal-sbert.onnx`, etc. |
| `vaults/` | AES-256 Encrypted Statutory Knowledge Archives | `vaults/` | `laws_vault_2026-W31.zip`, `cases_vault_2026-W31.zip`, etc. |
| `agent_packs/` | Accredited Specialized Domain Agents (.vlt) | `agent_packs/` | `legal_agents.vlt`, `finance_agents.vlt`, etc. |
| `builds/` | Native Workstation Installers & Binaries | `builds/` | `hayagriva-mac-x64.dmg`, `hayagriva-win-x64.exe`, etc. |
| `dossiers/` | Official 29A Screening Dossiers & Benchmarks | `dossiers/` | `FINAL_29A_COMPLIANCE_REPORT_APOGEE_ENTERPRISES.pdf` |

## Symlinks & Zero-Duplication Policy
Local applications (such as the **Hayagriva Workstation** at `/Users/atulgrover/Desktop/HAYAGRIVA`) reference these assets via symbolic links. 
**Never duplicate multi-gigabyte models into sibling folders.**
