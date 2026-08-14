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
| Patient portal links (Legend) | `src/config/site.ts` → section 3 |
| Business name, address, phone, hours | `src/config/site.ts` → section 1 |
| Instagram, Google Business, Analytics | `src/config/site.ts` → section 5 |
| Payment links (Phase 3) | `src/config/site.ts` → section 4 |
| Esthetic services (names, prices, descriptions) | `src/data/estheticServices.ts` |
| Wellness programs (names, descriptions, fees) | `src/data/wellnessPrograms.ts` |
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

1. Open `src/config/site.ts`
2. Find section 2 (VAGARO)
3. Replace each URL between the quotes with your real Vagaro URL:
   - `bookingUrl` — your main booking page
   - `giftCardUrl` — your gift card page
   - `membershipUrl` — your membership page
   - `packagesUrl` — your packages page

You can find these URLs in your Vagaro dashboard under **Business > Booking Page**.

### Legend (OptiMantra) Patient Portal Links

1. Open `src/config/site.ts`
2. Find section 3 (LEGEND)
3. Replace each URL with your real Legend/OptiMantra URL:
   - `intakeUrl` — where new patients start intake
   - `patientPortalUrl` — where existing patients log in
   - `bookingUrl` — where patients schedule consultations
   - `existingPatientLoginUrl` — login page for returning patients

You can find these in your Legend/OptiMantra admin dashboard under **Patient Links**.

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

### Editing Wellness Programs

1. Open `src/data/wellnessPrograms.ts`
2. Each program is a block starting with `{ slug: ... }`
3. Edit the `name`, `shortDescription`, `startingFee`, `mayAddress`, `mayInclude`, etc.
4. To hide a program, change `active: true` to `active: false`
5. To feature a program on the homepage, set `featured: true`

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

## Phase 3: Payment Setup (Later)

Do not set up payments until your merchant account is arranged through
**Organic Payment Gateways**. When ready:

1. Open `src/config/site.ts`
2. Find section 4 (PAYMENT)
3. Paste your hosted checkout page URLs into the `hostedPaymentUrl` fields
4. There are four separate lanes: Esthetics, Medical, Retail, Education
5. Each lane can have its own merchant account and checkout page

**Never paste API keys, passwords, or merchant credentials into this file.**
Only paste the hosted checkout page URLs that your gateway provider gives you.

---

## Admin Dashboard

### Accessing the Admin Dashboard

1. Go to `yourwebsite.com/admin`
2. Sign in with your email and password (Supabase authentication)
3. You will see three sections:
   - **Dashboard** — overview of request counts
   - **Wellness Requests** — all Wellness Plan submissions
   - **Contact Submissions** — all contact form messages
   - **Configuration** — review all your links and settings

### Managing Wellness Requests

1. Click any request to see full details
2. Update the status using the dropdown:
   - **Awaiting Review** — new request, not yet reviewed
   - **Intake Required** — patient needs to complete medical intake
   - **Invoice Sent** — you have sent an invoice link to the customer
   - **Paid** — the invoice has been paid
   - **Cancelled** — the request is no longer active
3. Paste an external invoice link in the Invoice Management section
4. Add internal notes for your team
5. All status changes are logged in the history

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

### New Wellness Program

1. Open `src/data/wellnessPrograms.ts`
2. Copy an existing program block
3. Paste it at the end of the list
4. Change the `slug`, `name`, `shortDescription`, `mayAddress`, `mayInclude`, etc.
5. Set `active: true`

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

When a customer submits a Wellness Plan request or contact form, a
confirmation email is queued through an edge function. To enable actual
email sending:

1. Sign up for a free account at [Resend.com](https://resend.com)
2. Get your API key
3. Add it as a secret named `RESEND_API_KEY` in your Supabase project
4. Uncomment the Resend code in `supabase/functions/send-confirmation-email/index.ts`

Until email sending is enabled, submissions still work — they are stored in
the database and visible in the admin dashboard. The email step is optional and
does not affect the form submission.

---

## Quick Reference: What Lives Where

```
src/
  config/
    site.ts          ← ALL your links, contact info, payment settings
  data/
    estheticServices.ts  ← Esthetic service names, prices, descriptions
    wellnessPrograms.ts   ← Wellness program names, descriptions, fees
    products.ts           ← Shop products (skincare, supplements, etc.)
    memberships.ts        ← Membership tiers and benefits
    courses.ts            ← Education courses and dates
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
The pages and components automatically use the data from those files.
