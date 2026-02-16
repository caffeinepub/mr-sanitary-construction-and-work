/**
 * Single source of truth for the public site URL configuration.
 * 
 * VITE_PUBLIC_SITE_URL is an optional build-time environment variable that specifies
 * the public origin (e.g., https://mrsanitary.com) used for canonical URLs and og:url meta tags.
 * 
 * When not set or invalid, the application falls back to window.location.origin at runtime.
 * 
 * Example: VITE_PUBLIC_SITE_URL=https://mrsanitary.com
 */

const CONFIGURED_SITE_URL = import.meta.env.VITE_PUBLIC_SITE_URL as string | undefined;

/**
 * Get the public site origin (protocol + hostname + port if non-standard).
 * 
 * Returns the configured VITE_PUBLIC_SITE_URL origin when set and valid,
 * otherwise falls back to window.location.origin.
 * 
 * This matches the behavior of the canonical/OG URL generation in index.html.
 */
export function getPublicSiteOrigin(): string {
  if (CONFIGURED_SITE_URL) {
    try {
      const url = new URL(CONFIGURED_SITE_URL);
      // Extract only the origin (no trailing slash, path, query, or hash)
      return url.origin;
    } catch {
      console.warn('Invalid VITE_PUBLIC_SITE_URL format, falling back to current origin');
    }
  }
  return typeof window !== 'undefined' ? window.location.origin : '';
}

/**
 * Convert a relative path to an absolute URL using the configured site origin.
 * @param path - Relative path (e.g., '/services' or 'about')
 * @returns Absolute URL
 */
export function toAbsoluteUrl(path: string): string {
  const origin = getPublicSiteOrigin();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${normalizedPath}`;
}

/**
 * Get the configured site URL or undefined if not set.
 * Useful for conditional metadata generation.
 */
export function getConfiguredSiteUrl(): string | undefined {
  return CONFIGURED_SITE_URL;
}
