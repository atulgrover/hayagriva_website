# Architecture & Deployment Roadmap: HuggingFace, Zulip Cloud & Azure PostgreSQL

**Document Date**: 2026-09-10  
**Project**: AgenticProfessionals.Net & LightRAG Ecosystem  
**Author / Architect**: Atul Grover  

---

## 1. Executive Summary & Current State

### A. Azure Cloud Virtual Machine (`pg-server`)
* **Public IP**: `20.198.0.59` (Central India datacenter)
* **SSH Access**: `ssh azureuser@20.198.0.59` (SSH key installed from Mac)
* **Instance Type**: `Standard_B2ts_v2` (Intel, 2 vCPUs, 1 GiB RAM, 30 GiB Standard SSD)
* **Cost**: ~$7.59/month compute + ~$1.50 disk = ~$9.09/mo (100% covered by the $100 Azure for Students annual credit).
* **System Health**: 2.0 GB Swap active and healthy (`1.8 GB free`, memory usage ~500 MB).
* **Database**: PostgreSQL 16 with `pgvector` v0.7.4.
  - Port `5432` open and verified via Azure NSG `Port_5432_Postgres`.
  - Database `lightrag_db` owned by superuser `db` (password: `resolutionbazaar2026`).
  - **Data Status**: All 13 tables, primary keys, and sequences migrated.
  - **Graph Content**: 64,116 Entity Nodes, 89,847 Relationship Edges, 15,521 Document Chunks.
  - **Index Status**: Chunk vector index complete (`idx_036611e7ab3b_hnsw_cosine`). Currently finalizing the 89k relation vector HNSW cosine index.

---

## 2. Plan for Tomorrow: Hugging Face Spaces Integration

### Goal:
Deploy a permanent, public, free LightRAG WebUI + API instance on Hugging Face Spaces (Docker SDK, 2 vCPUs, 16 GB RAM) connected directly to Azure PostgreSQL.

### Architecture:
```
[User Browser / AgenticProfessionals.Net Iframe]
                     │
                     ▼
  [Hugging Face Space: atulgrover/lightrag-workspace]
   (Runs LightRAG FastAPI + WebUI in Docker container)
                     │
                     ▼ (Direct Database Queries)
 [Azure PostgreSQL: postgresql://db:...@20.198.0.59:5432/lightrag_db]
```

### Steps to Execute Tomorrow:
1. Generate a Hugging Face **Write Access Token** from [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens).
2. Create Space: `atulgrover/lightrag-workspace` (Docker SDK).
3. Set Space Secrets:
   - `POSTGRES_HOST`: `20.198.0.59`
   - `POSTGRES_PORT`: `5432`
   - `POSTGRES_USER`: `db`
   - `POSTGRES_PASSWORD`: `resolutionbazaar2026`
   - `POSTGRES_DATABASE`: `lightrag_db`
   - `OPENAI_API_KEY`: *(Your OpenAI Key)*
4. Push Dockerfile and requirements to start LightRAG on port `7860`.
5. Update `index.html` iframe in `agentic_professionals_net` to point to the live Hugging Face URL.

---

## 3. Plan for Tomorrow: Zulip Cloud `@rag_agent` Bot

### Goal:
Connect a free `@rag_agent` bot in your Zulip Cloud workspace (e.g. `https://yourteam.zulipchat.com`) that answers community and member inquiries directly from the commercial law knowledge graph.

### Architecture:
```
Zulip Member in Stream:
"@rag_agent What is the CIRP timeline under Section 12?"
                     │
                     ▼
             [Zulip Cloud Server]
                     │
                     ▼ (Real-time Event Stream / Long Polling)
        [zulip_rag_agent.py on Azure VM (Managed by Systemd)]
                     │
                     ▼ (Queries Knowledge Graph)
       [Localhost LightRAG ➔ PostgreSQL `lightrag_db`]
                     │
                     ▼ (RAG Answer with Legal Citations)
             [Zulip Cloud Server]
                     │
                     ▼
         Markdown reply posted in thread!
```

### Why It Runs on Azure (via Systemd):
- Azure runs a full Ubuntu Linux OS with root access.
- `systemd` manages `zulip-rag-bot.service` so it stays alive 24/7, restarts automatically on failure, and connects locally to PostgreSQL with zero network latency.
- Zulip Python client uses outgoing long-polling, so **no public IP or open webhook ports are needed** for Zulip.

### Steps to Execute Tomorrow:
1. In Zulip Cloud: **Organization settings** ➔ **Bots** ➔ **Add a new bot** (Generic Bot, Name: `RAG Agent`, Username: `rag-agent-bot`).
2. Download `.zuliprc` and copy to Azure VM:
   ```bash
   scp ~/.zuliprc azureuser@20.198.0.59:~/
   ```
3. Deploy `zulip_rag_agent.py` to `/home/azureuser/zulip_rag_agent.py`.
4. Install `zulip` and `requests`:
   ```bash
   ssh azureuser@20.198.0.59 "sudo apt install -y python3-pip && pip install zulip requests --break-system-packages"
   ```
5. Create and start systemd service `/etc/systemd/system/zulip-rag-bot.service`:
   ```bash
   sudo systemctl enable --now zulip-rag-bot
   ```
6. Test in any Zulip stream by tagging `@**RAG Agent**`.

---

## 4. Connection Details Quick-Reference

| Component | Host / URL | Credentials / Notes |
| :--- | :--- | :--- |
| **Azure VM SSH** | `20.198.0.59` (Port 22) | User: `azureuser` (SSH key configured) |
| **Azure PostgreSQL** | `20.198.0.59` (Port 5432) | DB: `lightrag_db`, User: `db`, Pass: `resolutionbazaar2026` |
| **Local PostgreSQL** | `localhost` (Port 5432) | DB: `lightrag_db`, User: `db`, Pass: `resolutionbazaar2026` |
| **Local LightRAG API** | `http://localhost:9621` | Title: `Chat-IBC` |
| **Local Website** | `http://localhost:8000` | Process-Advice default view |
| **Hugging Face Space** | Target: `atulgrover/lightrag-workspace` | Free Docker container |
| **Zulip Cloud Bot** | Outgoing client via `.zuliprc` | Systemd service on Azure |
