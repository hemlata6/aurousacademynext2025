# Aurous Academy - Next.js Migration

This is the converted Next.js version of the Aurous Academy React project. The migration includes:

## ✅ Completed Features

### 1. **Framework Migration**
- ✅ React → Next.js (App Router)
- ✅ React Router → Next.js routing
- ✅ Vite → Next.js build system

### 2. **Routing Structure**
- ✅ All routes converted to Next.js App Router
- ✅ Dynamic routes: `/blog/[cid]/[slug]/`
- ✅ Routing paths:
  - `/` → Home
  - `/jee` → JEE Courses
  - `/neet` → NEET Courses
  - `/foundation` → Foundation Classes
  - `/blog` → Blog Listing
  - `/blog/[cid]/[slug]` → Blog Details (with SSR & Dynamic Metadata)
  - `/about` → About page
  - `/gallery` → Gallery
  - `/course` → Courses
  - `/ourTeam` → Our Team
  - `/privacyPolicy` → Privacy Policy
  - `/termConditions` → Terms & Conditions
  - `/disclaimer` → Disclaimer
  - `/result` → Results
  - `/timetable` → Time Table
  - `/methodologies` → Methodologies
  - `/freeresources` → Free Resources
  - `/previousyearpaper` → Previous Year Papers
  - `/banner` → Banner/Gallery by Course

### 3. **API Integration**
- ✅ Axios-based API utilities in `lib/api.js`
- ✅ Environment variables configuration
- ✅ SSR-ready API calls (no window usage in server components)

### 4. **SEO Implementation** 🔥
- ✅ Dynamic metadata generation via `generateMetadata()`
- ✅ OpenGraph tags for social sharing
- ✅ Twitter Card meta tags
- ✅ Structured data (JSON-LD) for blog posts
- ✅ Canonical URLs
- ✅ Blog detail page with complete SEO:
  - Dynamic title from blog data
  - Dynamic description and keywords
  - Open Graph images for social media
  - Twitter card tags
  - Structured data for search engines

### 5. **CSS & Styling**
- ✅ All CSS migrated to `styles/globals.css`
- ✅ MUI components configured
- ✅ No Tailwind CSS used (as required)
- ✅ CSS Modules support ready

### 6. **Server-Side Rendering (SSR)**
- ✅ Blog detail page uses SSR for optimal SEO
- ✅ Metadata generation at request/build time
- ✅ Server components for data fetching

### 7. **Components**
- ✅ Client components marked with 'use client'
- ✅ Server components for data fetching
- ✅ Proper hydration handling

## 📋 Remaining Tasks - Component Migration

The component structure is ready with placeholders. You need to migrate the actual React components:

### Priority 1: Home Page Components
- [ ] `HomeSection1.jsx` - Hero/Banner section
- [ ] `HomeSection2.jsx` - Features/Benefits
- [ ] `HomeSection3.jsx` - About section
- [ ] `HomeSection4.jsx` - Courses showcase
- [ ] `HomeSection5.jsx` - Testimonials/Reviews
- [ ] `HomeSection6.jsx` - Call-to-action

### Priority 2: Common Sections
- [ ] `NavBarOne.jsx` - Desktop navigation
- [ ] `NavBarTwo.jsx` - Mobile navigation with links
- [ ] `BlogDetails.jsx` - ✅ Partially done, replace with full component
- [ ] `Footer.jsx` - Update with actual links and layout

### Priority 3: Course Pages
- [ ] JEE Page components
- [ ] NEET Page components
- [ ] Foundation Page components

### Priority 4: Other Pages
- [ ] About Page components
- [ ] Gallery components
- [ ] Blog listing component
- [ ] Result component
- [ ] Our Team component

## 🚀 Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🔗 Key Files Structure

```
aurous_pragyan_next/
├── app/
│   ├── layout.jsx          # Root layout with providers
│   ├── page.jsx            # Home page
│   ├── blog/
│   │   ├── page.jsx        # Blog listing page
│   │   └── [cid]/
│   │       └── [slug]/
│   │           └── page.jsx # Blog detail page (SSR + Metadata)
│   ├── [all other routes]/page.jsx
│   └── globals.css         # Global styles
├── components/
│   ├── CommonSections/     # Navigation, Footer, etc.
│   ├── HomeComponents/     # Home page sections
│   ├── BlogDetailsClient.jsx # Client-side blog wrapper
│   └── [other components]/
├── lib/
│   ├── api.js              # API utilities
│   └── metadata.js         # SEO metadata utilities
├── public/                 # Static assets (images, SVG)
├── styles/                 # CSS files
├── package.json
├── next.config.js
├── tsconfig.json
└── .env.local             # Environment variables
```

## 🎯 SEO Features

### Blog Detail Page Example
When users share `/blog/688276/jee-advanced-result-celebration-2024` on social media:

- ✅ **Title**: Fetched dynamically from API
- ✅ **Description**: From blog.description
- ✅ **Open Graph Image**: blog.image displayed in social preview
- ✅ **Twitter Card**: Summary card with image
- ✅ **Structured Data**: JSON-LD BlogPosting schema
- ✅ **Canonical URL**: Set automatically
- ✅ **Meta Keywords**: Generated from blog title and tags

Works on: WhatsApp, Facebook, LinkedIn, Twitter

## 🔄 API Endpoints Used

- `GET /student/course/fetchCourseContent/{cid}` - Blog detail
- `GET /admin/course/fetch-public/{instId}` - Courses
- `GET /admin/banner/fetch-public-banner/{instId}` - Banner
- `GET /domain/fetch-public?instId=` - Domain
- `GET /admin/employee/fetch-public-employee/{instId}` - Team
- `GET /admin/fetch/gallery/{instId}` - Gallery
- And more... (see `lib/api.js` for full list)

## 📝 Migration Notes

### Changes from React to Next.js:
1. **Routing**: `react-router-dom` → Next.js file-based routing
2. **Navigation**: `useNavigate()` → `useRouter()` from 'next/navigation'
3. **Links**: `<Link>` from 'react-router-dom' → `<Link>` from 'next/link'
4. **Params**: `useParams()` → Server component params
5. **Window API**: Wrapped in `if (typeof window !== 'undefined')` checks
6. **Metadata**: Server component `generateMetadata()` function

### Best Practices Followed:
- ✅ No hydration errors
- ✅ SSR for blog detail page
- ✅ CSR for interactive pages
- ✅ Proper error boundaries
- ✅ Environment variables in .env.local
- ✅ Path aliases (@/) configured

## 🛠️ Component Migration Guide

For each component, follow this pattern:

```jsx
'use client'; // Add if component uses useState, events, etc.

import { useRouter } from 'next/navigation'; // NOT from 'next/router'
import Link from 'next/link';

export default function ComponentName({ prop1, prop2 }) {
  const router = useRouter();
  
  // Replace useNavigate() with useRouter()
  // Replace <Link to="/path"> with <Link href="/path">
  // Remove useParams() - use server components instead
  
  return <div>{/* component JSX */}</div>;
}
```

## 📦 Production Build

```bash
# Build
npm run build

# Test production build
npm run start
```

## 🔍 Testing URLs

When testing the blog detail page:
1. Visit `/blog/688276/jee-advanced-result-celebration-2024`
2. Check page source for:
   - Meta titles and descriptions
   - Open Graph tags
   - JSON-LD structured data
3. Share on social media to verify preview

## 📞 Support

For any issues with the migration:
1. Check the comments in each file
2. Refer to Next.js documentation: https://nextjs.org/docs
3. Verify API endpoints in `lib/api.js`
4. Check environment variables in `.env.local`

---

**Status**: Routing and SEO core ✅ | Components pending migration ⏳
