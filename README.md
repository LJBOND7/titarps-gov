# Titanium Tarps LLC, government capabilities site

Static site (HTML/CSS, no build step). Intended host: GitHub Pages from `main` (same pattern as titaniumtarps-site), custom domain via Cloudflare DNS.

- `index.html` government-facing home page
- `capability-statement.html` print-exact two-page document (page 1 capability statement, page 2 mission statement and company profile)
- `docs/TitaniumTarps-Capability-Statement-2026.pdf` generated from that page with Chrome headless:

```
python3 -m http.server 8794 --bind 127.0.0.1 &
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$PWD/docs/TitaniumTarps-Capability-Statement-2026.pdf" --virtual-time-budget=10000 \
  http://127.0.0.1:8794/capability-statement.html
pdftoppm -r 40 -jpeg docs/TitaniumTarps-Capability-Statement-2026.pdf thumb   # copy to assets/img/capstatement-p1.jpg and -p2.jpg
```

Rebuild the PDF and thumbnails whenever facts change (SAM status, address, contacts, codes). Never commit to `main` directly; branch and open a PR. See LAUNCH.md for go-live steps.
