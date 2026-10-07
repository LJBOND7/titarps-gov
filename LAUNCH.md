# Go-live checklist (titarps.us)

1. Register `titarps.us` at Cloudflare Registrar (dash.cloudflare.com > Domain Registration > Register Domains). Nexus: C21 (U.S. business), purpose P1 (business). At-cost pricing, well under the $40 budget.
2. Create GitHub repo `LJBOND7/titarps-gov` (public, required for free Pages), push branch `build/govsite-launch`, open PR, merge to `main`.
3. Repo Settings > Pages: source = Deploy from branch `main` / root. Custom domain = `titarps.us`, enforce HTTPS once the cert issues.
4. Cloudflare DNS for titarps.us (all DNS-only / grey cloud):
   - A @ 185.199.108.153
   - A @ 185.199.109.153
   - A @ 185.199.110.153
   - A @ 185.199.111.153
   - CNAME www -> ljbond7.github.io
5. Add file `CNAME` containing `titarps.us` to the repo root (branch + PR), and change the canonical/og URLs in index.html, sitemap.xml, robots.txt from the github.io URL to https://titarps.us/.
6. Email: add SPF/DMARC for titarps.us if mail will ever be sent from it; otherwise publish `v=spf1 -all` and a reject DMARC so the name cannot be spoofed.
7. Link the new site from titaniumtarps.com navigation ("Government") and paste the PDF URL into the SBA DSBS capability-statement field once SAM is active.
