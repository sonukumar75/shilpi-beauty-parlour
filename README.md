# Shilpi Beauty Parlour

Responsive Next.js App Router website for a beauty salon. Built with TypeScript, React and Tailwind CSS v4 (with a custom responsive design system).

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

## Before launch

Edit `src/data/site-config.ts` and replace the demo salon name, domain, locality/city, full address, phone, WhatsApp number, email, opening hours and social URLs. Edit sample prices and services in `src/data/services.ts`. Prices and testimonials are clearly illustrative; replace sample testimonial with a real approved review or remove it. Replace Unsplash imagery with licensed salon-owned imagery as available. Add a real `/public/og-image.jpg` (1200×630) for social previews. Confirm local business details and schema against visible content before publishing. `site.domain` must be the canonical production origin (no trailing slash).

## SEO and deployment

App Router metadata provides page titles, descriptions, canonical URLs, Open Graph/Twitter metadata, `sitemap.xml`, `robots.txt`, and BeautySalon JSON-LD. Deploy to Vercel by importing the repository and retaining the default Next.js build settings, or use any Node.js host that supports Next.js (`npm run build`, then `npm start`). Set the production domain in `site-config.ts`, connect the domain with your hosting provider, and verify it in Google Search Console. Submit `https://YOUR-DOMAIN/sitemap.xml`, inspect key URLs, and monitor indexing and Core Web Vitals. Avoid requesting indexing until placeholder business details have been replaced.

The appointment form validates required fields and opens WhatsApp with a pre-filled enquiry. It does not store submissions or confirm a booking; the salon must reply to confirm availability. The WhatsApp number must be international format without a leading `+` in the `whatsapp` field.
