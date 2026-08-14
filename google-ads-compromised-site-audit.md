# Google Ads Compromised Site Audit

## What I checked

- Reviewed the React/Vite source code in this project
- Compared the live homepage HTML with the repository
- Checked domain redirects for `http`, `https`, `www`, and non-`www`
- Looked for common compromise indicators such as hidden scripts, injected iframes, obfuscated JavaScript, redirects, and suspicious third-party domains

## Findings

- I did **not** find obvious malware, hidden redirects, or injected third-party scripts in the repo.
- The live site is a static Vercel deployment and the HTML matches this project.
- The domain redirects are clean and end on the `https://www.rototanksupplierskenya.shop/` version.
- The project had leftover `lovable.dev` social metadata in `index.html`, which reduces trust and makes the site look unfinished or templated.
- The meta description had a mismatched phone number compared with the rest of the site.

## Code changes made

- Updated `index.html` to:
  - remove `lovable.dev` Open Graph and Twitter metadata
  - use the correct site title, description, canonical URL, and image
  - fix the phone number in the meta description
- Added `vercel.json` with basic response security headers:
  - `X-Content-Type-Options`
  - `X-Frame-Options`
  - `Referrer-Policy`
  - `Permissions-Policy`

## Most likely reason for the Google Ads disapproval

Because the live HTML matches the repo and no obvious malicious code was found, the disapproval is more likely caused by one of these:

1. The domain was previously compromised and Google has not cleared it yet.
2. Google detected suspicious URLs on the domain that are not part of the current frontend.
3. A hosting, DNS, or previously deployed file triggered the warning even though the current homepage looks clean.
4. The site was flagged as a false positive and needs manual review after cleanup.

## Next steps for you

1. Redeploy this updated code.
2. In Google Search Console, check **Security Issues** and **Manual Actions**.
3. Ask Google Ads support to provide the exact compromised URL or script they detected.
4. In Google Ads Policy Manager, request a review only after the redeploy is live.
5. If possible, scan the domain with external tools such as VirusTotal URL scan and Google Safe Browsing diagnostics.

## Important note

Google defines a compromised site as a destination whose code has been manipulated to benefit a third party without the owner’s knowledge, often through redirects, malware, pop-ups, or data theft:

- https://support.google.com/adspolicy/answer/15938376?hl=en

If Google support gives you a flagged URL or snippet, compare it against the deployed files immediately. That will tell you whether the issue is in the codebase, the deployment, or the domain history.
