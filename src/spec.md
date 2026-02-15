# Specification

## Summary
**Goal:** Make the deployed site’s public domain (site URL) configurable from a single source of truth so the domain can be changed without updating multiple files.

**Planned changes:**
- Add a single configuration point (e.g., env var or small frontend config module) that defines the site’s public domain and provides a safe fallback when unset.
- Update absolute URL usage (e.g., canonical/OG/share metadata) to use the configured domain (or fall back to current origin / relative URLs when not configured).
- Audit the frontend for hard-coded domain/host references and replace them with relative URLs or the new domain configuration.
- Add brief developer documentation explaining exactly where to set the domain for deployment and how to verify it’s applied.

**User-visible outcome:** The site continues to work normally, and developers can change the deployed domain in one place while all links/metadata that require an absolute domain automatically reflect the new value.
