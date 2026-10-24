<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep business phone and WhatsApp targets centralized in site-data so every contact action stays consistent.
- Keep the business address, Google Maps target, and coverage-map base coordinates centralized in site-data so location details stay consistent.
- Keep legal company identity and registered office centralized in site-data, separate from the commercial brand and workshop address, so Contact and Footer remain consistent.
- Derive browser icons (favicon, .ico, apple-touch-icon) from the red V of the brand logo as flat renders, with a brighter variant under prefers-color-scheme: dark so the tab icon stays legible.
- Real business photos (from the owner's Facebook/Google profiles) live as optimized WebP files in src/assets/la-uly (max 1200px, hero with a 640px srcset variant) so pages stay light and images are versioned in GitHub.
- Sitemap is router-derived (staticData.sitemap on every route) with service/zone pages added from site-data, so new pages are indexed automatically.
- All site images are real files under src/assets imported via ES modules (no CDN pointers), so they live in GitHub and are hashed into the build.
- Header and footer render the brand as a text wordmark (BrandLogo) built from site-data BRAND and theme tokens, so a rename never needs new logo images and stays legible in both themes.
- Local zone pages and blog posts live as hand-written data in src/lib/zones-data.ts and src/lib/blog-data.ts; retired zone slugs map to 301 targets in zoneRedirects — keeps each local page unique and old URLs alive.
- Keep service-section motion scoped to svc-* styles and one cleaned-up IntersectionObserver; render content visibly without JavaScript and honor reduced motion to preserve usability and mobile performance.
- Blog has per-zone hub pages at /blog/zona/$slug derived from zones + posts (area or zone links), so every served locality gets an indexable article collection automatically.
- Coverage bars are visible by default and animate once when their list enters the viewport; observer delays must never hide arrival information on mobile or without JavaScript.
- The public site address lives only in site-data SITE_URL (canonicals, og:url, JSON-LD, sitemap), so a domain move is a one-line change.
- Map points for every served locality come from servedPoints in zones-data (OpenStreetMap coordinates), separate from zone pages, so the map can show more villages than there are pages.
