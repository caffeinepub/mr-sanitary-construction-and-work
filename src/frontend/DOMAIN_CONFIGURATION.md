# Domain Configuration Guide

This document explains how to configure the public site domain for your MR Sanitary Construction and Work application.

## Overview

The application uses the `VITE_PUBLIC_SITE_URL` environment variable to set the canonical domain for SEO and social sharing metadata (canonical link and `og:url`).

When this variable is **not set**, the application automatically falls back to the current origin (`window.location.origin`) at runtime.

## Setting the Domain

### Environment Variable

**Variable Name:** `VITE_PUBLIC_SITE_URL`

**Format:** Full URL with protocol (e.g., `https://mrsanitary.com`)

**When to Set:** At build time, before running `npm run build` or `pnpm build`

### Step-by-Step Instructions

#### Option 1: Using a `.env` file (Recommended for local builds)

1. Create a `.env` file in the `frontend/` directory (if it doesn't exist)
2. Add the following line:
   ```
   VITE_PUBLIC_SITE_URL=https://your-domain.com
   ```
3. Replace `https://your-domain.com` with your actual production domain
4. Run your build command: `npm run build` or `pnpm build`

#### Option 2: Using environment variables directly (CI/CD, production builds)

Set the environment variable before building:

**Linux/macOS:**
