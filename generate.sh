#!/usr/bin/env bash
# Regenerates every per-app privacy policy page from _template.html.
# Run from privacy-site/:  ./generate.sh
set -euo pipefail
cd "$(dirname "$0")"

UPDATED="2026-08-19"

# slug|display name  — slug becomes /privacy/<slug>/
APPS='live-earnings|Live Earnings
burn-rate|Burn Rate
debt-destroyer|Debt Destroyer
freelance-rate|Freelance Rate
compound-interest|Compound Interest Live
inflation-eroder|Inflation Eroder
price-of-time|Price of Time
savings-countdown|Savings Countdown
fire-calculator|FIRE Calculator
daily-budget|Daily Budget'

while IFS='|' read -r slug name; do
  mkdir -p "privacy/$slug"
  sed -e "s/__APP_NAME__/$name/g" -e "s/__UPDATED__/$UPDATED/g" \
    _template.html > "privacy/$slug/index.html"
  echo "  privacy/$slug/index.html  ($name)"
done <<< "$APPS"
