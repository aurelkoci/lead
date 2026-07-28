#!/usr/bin/env bash
set -euo pipefail

# Run from repository root.
cd "$(dirname "$0")/.."

pattern='#187A43|#283C33|#334155|#F8FAFC|\[#187A43\]|\[#283C33\]|\[#334155\]|\[#F8FAFC\]'

mapfile -t files < <(rg -l --glob '*.vue' --glob '*.ts' --glob '*.js' --glob '*.css' "$pattern" app content || true)

if [[ ${#files[@]} -eq 0 ]]; then
  echo "No brand hex usages found in app/ or content/."
  exit 0
fi

echo "Refactoring ${#files[@]} file(s)..."

for file in "${files[@]}"; do
  perl -0pi.bak -e '
    s/dark:hover:text-\[#187A43\]/dark:hover:text-primary-400/g;
    s/hover:text-\[#187A43\]/hover:text-primary-500/g;
    s/text-\[#187A43\]/text-primary-500/g;
    s/dark:hover:bg-\[#187A43\]\/20/dark:hover:bg-primary-500\/20/g;
    s/hover:bg-\[#187A43\]\/10/hover:bg-primary-500\/10/g;

    s/bg-\[#283C33\]/bg-brand-500/g;
    s/text-\[#283C33\]/text-brand-500/g;
    s/border-\[#283C33\]/border-brand-500/g;

    s/text-\[#334155\]/text-slate-700/g;
    s/bg-\[#F8FAFC\]/bg-slate-50/g;
  ' "$file"
done

echo "Done. Backup files created with .bak extension."
echo "Review changes, then remove backups if everything looks correct:"
echo "  find app content -name '*.bak' -delete"
echo
echo "Remaining hardcoded brand colors:"
rg -n "$pattern" app content || true
