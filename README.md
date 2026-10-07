# Titanium Tarps LLC, government capabilities site

Static site (HTML/CSS, no build step). Intended host: GitHub Pages from `main` (same pattern as titaniumtarps-site), custom domain via Cloudflare DNS.

- `index.html` government-facing home page
- `docs/TitaniumTarps-Capability-Statement-2026.pdf` is Larry's canonical capability statement (Sept 22 2026, ReportLab). Replace the file, do not regenerate it.
- `mission-statement.html` print-exact one-page mission statement; `docs/TitaniumTarps-Mission-Statement-2026.pdf` generated from it with Chrome headless:

```
python3 -m http.server 8794 --bind 127.0.0.1 &
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$PWD/docs/TitaniumTarps-Mission-Statement-2026.pdf" --virtual-time-budget=10000 \
  http://127.0.0.1:8794/mission-statement.html
pdftoppm -r 40 -jpeg docs/TitaniumTarps-Mission-Statement-2026.pdf thumb   # copy to assets/img/capstatement-p2.jpg
```

Rebuild the PDF and thumbnails whenever facts change (SAM status, address, contacts, codes). Never commit to `main` directly; branch and open a PR. See LAUNCH.md for go-live steps.
