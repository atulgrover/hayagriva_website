# Azure & Local PostgreSQL (`lightrag_db`) Sync Architecture & Credentials Guide

This document outlines the complete implementation plan, sync mechanisms, configuration profiles, and connection credentials for synchronizing the **`lightrag_db`** (3.7 GB LightRAG Knowledge Graph & vector database) between the local Mac workstation and the Azure cloud server.

---

## 1. Connection Credentials & Endpoints

### A. Local Workstation (Source)
* **Host**: `localhost` (or `127.0.0.1`)
* **Port**: `5432`
* **Database**: `lightrag_db`
* **Username**: `db`
* **Password**: `resolutionbazaar2026`
* **Size**: ~3.7 GB (13 tables, pgvector HNSW indexes on `vector(1536)`)
* **Local Connection URI**:
  ```text
  postgresql://db:resolutionbazaar2026@localhost:5432/lightrag_db
  ```

### B. Azure Cloud VM (Target Replica)
* **VM Name**: `pg-server`
* **Public IP**: `20.198.0.59`
* **Private IP**: `172.16.0.4`
* **Region**: `Central India`
* **OS**: Ubuntu Server 24.04 LTS (x64)
* **VM Size**: `Standard_B2ts_v2` (2 vCPUs, 1 GiB RAM)
* **OS Disk**: 30 GiB Standard SSD (~25 GiB available for `lightrag_db`)
* **SSH Access**:
  ```bash
  ssh azureuser@20.198.0.59
  ```
* **PostgreSQL Port**: `5432` (Managed via Network Security Group `pg-server-nsg`)
* **Database**: `lightrag_db`
* **Username**: `studentadmin` (or `db`)
* **Password**: *(Configured during server initialization)*
* **Azure Connection URI**:
  ```text
  postgresql://studentadmin:<AZURE_PASSWORD>@20.198.0.59:5432/lightrag_db
  ```

---

## 2. Implementation Plan: Phase-by-Phase

```
┌────────────────────────────────────────────────────────┐
│                   PHASE 1: PROVISION                   │
│   • Azure VM running (20.198.0.59)                     │
│   • Configure 2GB Swap on VM                           │
│   • Install PostgreSQL 16 + pgvector v0.7.4            │
│   • Open port 5432 in Azure NSG                        │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                 PHASE 2: INITIAL SYNC                  │
│   • Dump local `lightrag_db` using pg_dump             │
│   • Stream/Restore directly into Azure PostgreSQL      │
│   • Verify table count (13 tables) and row parity      │
│   • Verify HNSW vector index build integrity           │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│            PHASE 3: CONTINUOUS / CRON SYNC             │
│   • Option A: Daily automated pg_dump / restore sync   │
│   • Option B: Logical Replication (real-time stream)   │
│   • Dual-Profile switch in LightRAG (`.env`)           │
└──────────────────────────┘
```

---

## 3. Initial Data Migration (One-Time Seeding)

Because `lightrag_db` is 3.7 GB, we use **compressed streaming** with `pg_dump` piped through `gzip` and `ssh` (or piped directly into remote `psql`). This eliminates the need to create massive temporary dump files on your local Mac disk.

### Single-Command Stream Migration:
Run this directly from your Mac terminal:
```bash
PGPASSWORD='resolutionbazaar2026' pg_dump -h localhost -U db -d lightrag_db -Fc \
  | ssh azureuser@20.198.0.59 "pg_restore -U studentadmin -d lightrag_db --clean --if-exists --no-owner --no-privileges"
```

*Or via compressed file upload:*
```bash
# 1. Export compressed dump locally
PGPASSWORD='resolutionbazaar2026' pg_dump -h localhost -U db -d lightrag_db -Fc -f ~/Desktop/lightrag_dump.dump

# 2. Securely copy to Azure VM
scp ~/Desktop/lightrag_dump.dump azureuser@20.198.0.59:/tmp/

# 3. Restore on Azure VM
ssh azureuser@20.198.0.59 "pg_restore -U studentadmin -d lightrag_db --clean --if-exists --no-owner /tmp/lightrag_dump.dump && rm /tmp/lightrag_dump.dump"
```

---

## 4. Future Synchronization Strategies

Depending on how frequently you ingest new judgments and treatises, choose between **Daily Cron Synchronization** or **PostgreSQL Logical Replication**.

### Strategy A: Daily/Scheduled Automated Sync (Recommended for Simplicity)
Best when new documents are ingested locally in batches (e.g. weekly or nightly):
1. A small shell script (`sync_lightrag_to_azure.sh`) runs via cron on your Mac:
   ```bash
   #!/bin/bash
   # sync_lightrag_to_azure.sh
   TIMESTAMP=$(date +%Y%m%d_%H%M%S)
   echo "Starting lightrag_db sync to Azure: $TIMESTAMP"

   PGPASSWORD='resolutionbazaar2026' pg_dump -h localhost -U db -d lightrag_db --data-only -Fc \
     | ssh azureuser@20.198.0.59 "pg_restore -U studentadmin -d lightrag_db --data-only --disable-triggers"

   echo "Sync completed successfully."
   ```
2. Can be triggered manually or automated via `launchd` / `cron`.

---

### Strategy B: PostgreSQL Logical Replication (Real-Time CDC)
Best if you want every new node/edge inserted into local Postgres to appear instantly in Azure:
1. On **Local PostgreSQL** (`postgresql.conf`):
   ```ini
   wal_level = logical
   max_replication_slots = 5
   max_wal_senders = 5
   ```
2. Create publication locally:
   ```sql
   CREATE PUBLICATION lightrag_pub FOR ALL TABLES;
   ```
3. On **Azure PostgreSQL**:
   ```sql
   CREATE SUBSCRIPTION lightrag_sub 
   CONNECTION 'host=<YOUR_MAC_PUBLIC_IP_OR_TAILSCALE> port=5432 dbname=lightrag_db user=db password=resolutionbazaar2026' 
   PUBLICATION lightrag_pub;
   ```

---

## 5. LightRAG Application Configuration (`~/lightrag/.env`)

To switch LightRAG between **Localhost** and **Azure**, use these profiles in `~/lightrag/.env`:

### Profile 1: Local PostgreSQL (Current)
```ini
LIGHTRAG_KV_STORAGE=PGKVStorage
LIGHTRAG_DOC_STATUS_STORAGE=PGDocStatusStorage
LIGHTRAG_GRAPH_STORAGE=PGTableGraphStorage
LIGHTRAG_VECTOR_STORAGE=PGVectorStorage
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=db
POSTGRES_PASSWORD='resolutionbazaar2026'
POSTGRES_DATABASE=lightrag_db
```

### Profile 2: Azure Cloud PostgreSQL
```ini
LIGHTRAG_KV_STORAGE=PGKVStorage
LIGHTRAG_DOC_STATUS_STORAGE=PGDocStatusStorage
LIGHTRAG_GRAPH_STORAGE=PGTableGraphStorage
LIGHTRAG_VECTOR_STORAGE=PGVectorStorage
POSTGRES_HOST=20.198.0.59
POSTGRES_PORT=5432
POSTGRES_USER=studentadmin
POSTGRES_PASSWORD='<YOUR_AZURE_DB_PASSWORD>'
POSTGRES_DATABASE=lightrag_db
```

---

## 6. Verification Checklist
- [x] Azure VM `pg-server` deployed on `20.198.0.59` in Central India.
- [x] Local `lightrag_db` verified running (13 tables, 3.70 GB).
- [ ] SSH into `azureuser@20.198.0.59` and configure 2GB swap file.
- [ ] Install `postgresql-16` and `pgvector` extension on Azure VM.
- [ ] Open port 5432 in Azure Network Security Group (`pg-server-nsg`).
- [ ] Perform initial `pg_dump` stream restore.
- [ ] Query remote node count: `SELECT count(*) FROM lightrag_graph_nodes;` (Expect 57,843).
- [ ] Query remote edge count: `SELECT count(*) FROM lightrag_graph_edges;` (Expect 79,294).
