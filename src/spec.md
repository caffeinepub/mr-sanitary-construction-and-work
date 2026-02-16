# Specification

## Summary
**Goal:** Make the deployed site domain configurable via a single build-time setting and document the process so canonical/OG URLs update correctly.

**Planned changes:**
- Update frontend canonical URL and `og:url` generation to use `VITE_PUBLIC_SITE_URL` when set (normalized for trailing slashes), otherwise fall back to `window.location.origin`.
- Complete/update `frontend/DOMAIN_CONFIGURATION.md` with step-by-step instructions for setting `VITE_PUBLIC_SITE_URL`, accepted formats, trailing slash behavior, and how to verify canonical/OG URLs in the browser.
- Add a checked-in frontend example environment file (e.g., `.env.example`) documenting `VITE_PUBLIC_SITE_URL` format and purpose.
- Update guidance comments in `backend/main.mo` to align with the frontend approach (reference `VITE_PUBLIC_SITE_URL` and remove misleading placeholders unless they correspond to real repo paths/keys).

**User-visible outcome:** The site’s canonical and Open Graph URLs reflect the intended public domain by setting `VITE_PUBLIC_SITE_URL` at build time, with clear documentation on how to change and verify it.
