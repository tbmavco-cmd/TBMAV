# The Bare Method — Owner Setup Guide

This guide explains how to update your website's content, links, products,
prices, and settings **without hiring a developer**.

---

## Table of Contents

1. [Where to Edit Things](#where-to-edit-things)
2. [Phase 1: Links & Contact Info](#phase-1-links--contact-info)
3. [Phase 2: Services, Products & Forms](#phase-2-services-products--forms)
4. [Phase 3: Payment Setup (Later)](#phase-3-payment-setup-later)
5. [Admin Dashboard](#admin-dashboard)
6. [How to Turn Things On or Off](#how-to-turn-things-on-or-off)
7. [Editing Prices](#editing-prices)
8. [Adding a New Service or Product](#adding-a-new-service-or-product)
9. [Updating Legal Pages](#updating-legal-pages)
10. [Email Confirmations](#email-confirmations)

---

## Where to Edit Things

All your editable content lives in these files inside the `src/` folder:

| What You Want to Change | File to Edit |
|---|---|
| Booking links (Vagaro) | `src/config/site.ts` → section 2 |
| My Bare Method destination | `src/config/site.ts` → `myBareMethodUrl` |
| Business name, address, phone, hours | `src/config/site.ts` → section 1 |
| Instagram, Google Business, Analytics | `src/config/site.ts` → section 5 |
| Payment links | Managed by the selected booking/payment provider; no hub checkout is enabled |
| Esthetic services (names, prices, descriptions) | `src/data/estheticServices.ts` |
| Wellness destination copy | `src/pages/WellnessPage.tsx` and `src/config/site.ts` |
| Shop products (skincare, supplements, gift cards) | `src/data/products.ts` |
| Memberships | `src/data/memberships.ts` |
| Education courses | `src/data/courses.ts` |
| FAQs | `src/data/faqs.ts` |
| Testimonials and results | `src/data/testimonials.ts` |
| Legal pages (privacy policy, terms, etc.) | `src/data/legal.ts` |

**You only need to edit one file at a time.** Open the file, find the line you
want to change, update the text between the quotes, and save.

---

## Phase 1: Links & Contact Info

### Vagaro Booking Links

The configured Vagaro MySite URLs are the verified active destinations for The
Bare Method and share the `/thebaremethod` path structure. Do not replace them
with invented paths. If Vagaro provides an intentional business-specific
change, update the corresponding field in `src/config/site.ts` and preserve the
same destination family:

1. Open `src/config/site.ts`
2. Find section 2 (VAGARO)
3. Review the configured destinations:
   - `bookingUrl` — your main booking page
   - `giftCardUrl` — your gift card page
   - `membershipUrl` — your membership page
   - `packagesUrl` — your packages page

You can find these URLs in your Vagaro dashboard under **Business > Booking Page**.

### My Bare Method Wellness Destination

The Bare Method is the parent-brand hub for local esthetics. My Bare Method is a
separate provider-guided wellness brand with its own website, team, policies, and
customer journey. Update only `siteConfig.myBareMethodUrl` when the canonical
destination changes. Do not add intake, portal, prescription, checkout, or other
wellness-platform links to this hub.

### Business Contact Info

1. Open `src/config/site.ts`
2. Find section 1 (BUSINESS INFORMATION)
3. Update your phone, email, address, and hours as needed

### Social Media

1. Open `src/config/site.ts`
2. Find section 5 (SOCIAL MEDIA & ANALYTICS)
3. Paste your Instagram URL and Google Business Profile URL
4. Google Analytics ID and Meta Pixel ID are optional — leave them blank (`''`) if you don't use them

---

## Phase 2: Services, Products & Forms

### Editing Esthetic Services

1. Open `src/data/estheticServices.ts`
2. Each service is a block of text starting with `{ slug: ... }`
3. Edit the `name`, `shortDescription`, `startingPrice`, `treatmentTime`, etc.
4. To hide a service, change `active: true` to `active: false`
5. To feature a service on the homepage, set `featured: true`

### Updating the Wellness Pathway

The wellness pathway is an outbound handoff only. Keep its copy general and
clearly labeled **My Bare Method**; do not add clinical service menus, intake
forms, patient records, prescriptions, or wellness checkout to this repository.

### Editing Shop Products

1. Open `src/data/products.ts`
2. Each product is a block starting with `{ slug: ... }`
3. Edit the `name`, `price`, `shortDescription`, etc.
4. To hide a product, change `active: true` to `active: false`
5. The `actionType` field controls what happens when someone clicks:
   - `add_to_cart` — customer can buy directly
   - `add_to_wellness_plan` — customer adds to their Wellness Plan for review
   - `existing_patient_request` — sends patient to the portal

### Editing Memberships

1. Open `src/data/memberships.ts`
2. Edit the `name`, `price`, `features`, etc.
3. To hide a membership, change `active: true` to `active: false`

### Editing Education Courses

1. Open `src/data/courses.ts`
2. Edit the `name`, `description`, `startDate`, `price`, `deposit`, etc.
3. To hide a course, change `active: true` to `active: false`
4. Set `seatsAvailable: true` when you have open seats

---

## Payment Setup

The hub does not process wellness or medical payments. Esthetics booking and
payment are handled through the configured Vagaro destination. Confirm any
external payment or financing URL with the business owner before publishing it.

---

## Admin Dashboard

### Accessing the Admin Dashboard

1. Go to `yourwebsite.com/admin`
2. Sign in with your email and password (Supabase authentication)
3. You will see three sections:
   - **Dashboard** — overview of website contact submissions
   - **Contact Submissions** — all contact form messages
   - **Configuration** — review all your links and settings

### Creating Your Admin Account

The first time you visit `/admin`, you need to create an account:
1. Go to `yourwebsite.com/admin`
2. Use the sign-up flow to create your first admin account
3. After that, use the same email and password to sign in

---

## How to Turn Things On or Off

Every service, product, program, membership, and course has an `active` field.

- To show it: `active: true`
- To hide it: `active: false`

Hidden items do not appear anywhere on the website. This lets you prepare
content in advance and turn it on when ready, without redesigning anything.

---

## Editing Prices

Prices are text strings, so you can write them however you want:

- `'$38'` — a fixed price
- `'From $99/mo'` — a starting price
- `'Pricing available when booking'` — when you want clients to check Vagaro
- `'Pricing determined after review'` — for wellness programs

For products that can be added to the cart, there is also a `priceCents` field
(the price in cents, as a number). For example, $38.00 = `3800`. This is used
to calculate the cart total. If the price is not a fixed number, leave
`priceCents` out or set it to `undefined`.

---

## Adding a New Service or Product

### New Esthetic Service

1. Open `src/data/estheticServices.ts`
2. Copy an existing service block (everything between two `{ }`)
3. Paste it at the end of the list (before the closing `]`)
4. Change the `slug` (use lowercase words separated by hyphens, e.g. `'new-service'`)
5. Change the `name`, `shortDescription`, `benefits`, etc.
6. Set `active: true` to show it immediately
7. Pick an icon from the `lucide-react` import list at the top of the file

### New Wellness Content

Do not add wellness programs or medical workflows to this hub. Add only a
general, clearly separated handoff to My Bare Method after review.

### New Product

1. Open `src/data/products.ts`
2. Copy an existing product block
3. Paste it at the end of the list
4. Change the `slug`, `name`, `price`, `actionType`, etc.
5. Set `active: true`

---

## Updating Legal Pages

1. Open `src/data/legal.ts`
2. Each legal page has a `slug`, `title`, `lastUpdated` date, and `sections`
3. Edit the `body` text in each section
4. To add a new section, copy an existing `{ heading, body }` block and add it
5. To add a completely new legal page, copy an entire page block and give it a new `slug`

---

## Email Confirmations

The contact form stores submissions for review in the admin area. The existing
email edge-function code is not wired to the current public contact flow and
only logs its payload; treat email delivery as unfinished until separately
implemented and tested.

---

## Quick Reference: What Lives Where

```
src/
  config/
    site.ts          ← ALL your links, contact info, payment settings
  data/
    estheticServices.ts  ← Esthetic service names, prices, descriptions
    memberships.ts        ← Membership tiers and benefits
    faqs.ts               ← Frequently asked questions
    testimonials.ts       ← Client testimonials and results
    legal.ts              ← Legal page content
  lib/
    supabase.ts      ← Database connection (do not edit)
    cart.tsx         ← Shopping cart logic (do not edit)
  pages/             ← Website pages (usually do not need editing)
  components/        ← Shared UI components (usually do not need editing)
```

**In most cases, you only need to edit files in `src/config/` and `src/data/`.**
The pages and components automatically use the data from those files. The
wellness handoff page is intentionally maintained separately in
`src/pages/WellnessPage.tsx`.
