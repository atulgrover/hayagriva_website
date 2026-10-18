#!/usr/bin/env bash
# ==============================================================================
#  ☁️ SANATAN ECONOMICS — CLOUDFLARE R2 ASSET SYNCHRONIZER
#  Syncs /Users/atulgrover/Desktop/SANATAN/cloudflare_assets to/from Cloudflare R2
# ==============================================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MASTER_DIR="/Users/atulgrover/Desktop/HAYAGRIVA WEBSITE/cloudflare_assets"
PORTAL_ENV="/Users/atulgrover/Desktop/HAYAGRIVA PORTAL/.env.local"
[ ! -f "$PORTAL_ENV" ] && PORTAL_ENV="/Users/atulgrover/Desktop/HAYAGRIVA PORTAL/.env"

GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m'

echo -e "\n${CYAN}${BOLD}====================================================================${NC}"
echo -e "${CYAN}${BOLD}      ☁️  CLOUDFLARE R2 DIGITAL ASSETS SYNCHRONIZER                 ${NC}"
echo -e "${CYAN}${BOLD}====================================================================${NC}\n"

# Load R2 credentials from HAYAGRIVA PORTAL .env if available
if [ -f "$PORTAL_ENV" ]; then
    export $(grep -E '^(R2_|S3_)' "$PORTAL_ENV" | xargs) || true
fi

ACCOUNT_ID="${R2_ACCOUNT_ID:-}"
ACCESS_KEY="${R2_ACCESS_KEY_ID:-${AWS_ACCESS_KEY_ID:-}}"
SECRET_KEY="${R2_SECRET_ACCESS_KEY:-${AWS_SECRET_ACCESS_KEY:-}}"
BUCKET="${R2_BUCKET_NAME:-hayagriva}"

MODE="${1:---dry-run}"

if [ -z "$ACCOUNT_ID" ] || [ -z "$ACCESS_KEY" ] || [ -z "$SECRET_KEY" ]; then
    echo -e "${YELLOW}⚠  Cloudflare R2 credentials (R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY) not set in $PORTAL_ENV.${NC}"
    echo -e "   Running in local simulation / integrity check mode.\n"
    python3 "$SCRIPT_DIR/verify_catalog_parity.py"
    echo -e "\n${CYAN}To sync to real Cloudflare R2, populate credentials in /Users/atulgrover/Desktop/HAYAGRIVA PORTAL/.env.local${NC}"
    exit 0
fi

ENDPOINT="https://${ACCOUNT_ID}.r2.cloudflarestorage.com"
export AWS_ACCESS_KEY_ID="$ACCESS_KEY"
export AWS_SECRET_ACCESS_KEY="$SECRET_KEY"
export AWS_DEFAULT_REGION="auto"

case "$MODE" in
    --dry-run)
        echo -e "${BOLD}Running Dry-Run Sync Check (No files transferred)...${NC}"
        aws s3 sync "$MASTER_DIR" "s3://${BUCKET}/" --endpoint-url "$ENDPOINT" --dryrun --follow-symlinks
        ;;
    --upload)
        echo -e "${BOLD}Uploading local assets to Cloudflare R2 bucket '${BUCKET}'...${NC}"
        aws s3 sync "$MASTER_DIR" "s3://${BUCKET}/" --endpoint-url "$ENDPOINT" --follow-symlinks
        echo -e "${GREEN}✓ Upload completed successfully.${NC}"
        ;;
    --download)
        echo -e "${BOLD}Downloading missing assets from Cloudflare R2 bucket '${BUCKET}'...${NC}"
        aws s3 sync "s3://${BUCKET}/" "$MASTER_DIR" --endpoint-url "$ENDPOINT"
        echo -e "${GREEN}✓ Download completed successfully.${NC}"
        ;;
    *)
        echo "Usage: $0 [--dry-run | --upload | --download]"
        exit 1
        ;;
esac
