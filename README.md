# privacy-site

Static site that hosts the privacy policy for every app in the portfolio, plus `app-ads.txt`.

**Live URLs (once deployed):**

| File | URL |
|---|---|
| Landing | `https://jaimelr10.github.io/` |
| Per-app policy | `https://jaimelr10.github.io/privacy/<slug>/` |
| app-ads.txt | `https://jaimelr10.github.io/app-ads.txt` |

Slugs: `live-earnings`, `burn-rate`, `debt-destroyer`, `freelance-rate`, `compound-interest`,
`inflation-eroder`, `price-of-time`, `savings-countdown`, `fire-calculator`, `daily-budget`.

## Deploy (GitHub Pages, one time)

This must be a repo named exactly `jaimelr10.github.io` for the URLs above to resolve.

```bash
# from this directory
git init
git add .
git commit -m "Privacy policies + app-ads.txt for the app portfolio"
git branch -M main
gh repo create jaimelr10.github.io --public --source=. --push
```

Then: repo → **Settings → Pages** → Source: `Deploy from a branch`, Branch: `main` / `root`.
First publish takes 1–2 minutes. Verify `https://jaimelr10.github.io/app-ads.txt` returns the
single `google.com, pub-...` line as **plain text** before relying on it.

> If you use a repo with a different name, the URLs gain a path segment
> (`https://jaimelr10.github.io/<repo>/privacy/<slug>/`) **and `app-ads.txt` stops working** —
> AdMob only crawls it at the domain root. Use the `jaimelr10.github.io` repo.

## Where these URLs go

- **Play Console** → Store listing → Privacy policy → the per-app URL
- **AdMob** → App settings → the same URL
- **Play Console** → Store listing → Website → `https://jaimelr10.github.io/`
  (this is the domain AdMob crawls for `app-ads.txt`)

## Editing

Never edit `privacy/<slug>/index.html` by hand — it is generated. Edit `_template.html`
(and the `APPS` list / `UPDATED` date in `generate.sh`), then:

```bash
./generate.sh
```

`_template.html` starts with `_` so GitHub Pages' Jekyll build does not publish it.

Source of the policy wording: `../PRIVACY.md`.
