#!/usr/bin/env python3
import os
import re
import sys

GARUDA_CATALOG = '/Users/atulgrover/Desktop/HAYAGRIVA PORTAL/src/lib/catalog.ts'
MASTER_ASSETS_DIR = '/Users/atulgrover/Desktop/HAYAGRIVA WEBSITE/cloudflare_assets'

def main():
    if not os.path.exists(GARUDA_CATALOG):
        print(f"Error: Catalog not found at {GARUDA_CATALOG}", file=sys.stderr)
        sys.exit(1)

    with open(GARUDA_CATALOG, 'r') as f:
        content = f.read()

    # Extract all r2Key: '...'
    r2_keys = re.findall(r"r2Key:\s*'([^']+)'", content)
    
    print("\n" + "="*70)
    print("      📊 CLOUDFLARE R2 ASSETS & GARUDA CATALOG PARITY REPORT")
    print("="*70)
    print(f"Master Assets Directory: {MASTER_ASSETS_DIR}")
    print(f"Garuda Catalog:          {GARUDA_CATALOG}\n")

    matched = []
    missing = []

    for key in r2_keys:
        full_path = os.path.join(MASTER_ASSETS_DIR, key)
        if os.path.exists(full_path):
            is_link = os.path.islink(full_path)
            size_mb = os.path.getsize(full_path) / (1024 * 1024)
            matched.append((key, size_mb, is_link))
        else:
            missing.append(key)

    print("✅ PRESENT & READY IN CLOUDFLARE ASSETS:")
    for key, size, is_link in matched:
        link_str = "(symlink)" if is_link else "(direct file)"
        print(f"  ✓ {key:<45} {size:>8.2f} MB  {link_str}")

    print("\n⚠️  PENDING / NOT YET CACHED LOCALLY:")
    if missing:
        for key in missing:
            print(f"  ✗ {key}")
    else:
        print("  (None! All catalog assets are available locally)")

    print("-" * 70)
    print(f"Summary: {len(matched)}/{len(r2_keys)} catalog assets present locally ({len(missing)} pending download/packaging).\n")
    return 0

if __name__ == '__main__':
    sys.exit(main())
