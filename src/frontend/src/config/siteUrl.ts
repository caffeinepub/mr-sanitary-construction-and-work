/**
 * Single source of truth for the public site URL configuration.
 * 
 * Set VITE_PUBLIC_SITE_URL environment variable at build time to configure
 * the canonical domain for SEO and sharing metadata.
 * 
 * Example: VITE_PUBLIC_SITE_URL=https://mrsanitary.com
 * 
 * When not set, falls back to the current origin at runtime.
 */

const CONFIGURED_SITE_URL = import.meta.env.VITE_PUBLIC_SITE_URL as string | undefined;

/**
 * Get the public site origin (protocol + hostname + port if non-standard).
 * Falls back to window.location.origin when no configured URL is set.
 */
export function getPublicSiteOrigin(): string {
  if (CONFIGURED_SITE_URL) {
    try {
      const url = new URL(CONFIGURED_SITE_URL);
      return url.origin;
    } catch {
      console.warn('Invalid VITE_PUBLIC_SITE_URL, falling back to current origin');
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
