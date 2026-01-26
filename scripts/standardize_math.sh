#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-.}"

mapfile -t FILES < <(
  find "$ROOT" -type f \( -name "*.md" -o -name "*.markdown" \) \
    -not -path "*/_site/*" -not -path "*/.git/*"
)

echo "Found ${#FILES[@]} markdown files."

for f in "${FILES[@]}"; do
  perl -i -0777 -pe 's/^\s*31785\d+\s*\R//mg' "$f"
done

for f in "${FILES[@]}"; do
  perl -i -0777 -pe '
    s/(^|\R)\s*\\\\\[\s*\R/\n$$\n/gm;
    s/\R\s*\\\\\]\s*(\R|$)/\n$$\n/gm;
    s/(^|\R)\s*\\\[\s*\R/\n$$\n/gm;
    s/\R\s*\\\]\s*(\R|$)/\n$$\n/gm;
  ' "$f"
done

for f in "${FILES[@]}"; do
  perl -i -pe 's/\\\\\((.+?)\\\\\)/\$$1\$/g' "$f"
  perl -i -pe 's/\\\((.+?)\\\)/\$$1\$/g' "$f"
done

echo
echo "Remaining hits (should ideally be empty):"
grep -R --line-number -E "31785|\\\\\[|\\\\\(|\\\\\]|\\\\\)" "$ROOT" \
  --exclude-dir _site --exclude-dir .git || true

echo
echo "Done."
