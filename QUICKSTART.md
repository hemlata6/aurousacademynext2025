# Quick Start Guide - Aurous Academy Next.js

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# 1. Navigate to the project
cd aurous_pragyan_next

# 2. Install dependencies
npm install

# 3. Set up environment (copy if needed)
# .env.local file already configured with API endpoint

# 4. Run development server
npm run dev
```

The application will be available at: **http://localhost:3000**

## 📋 What's Working Right Now

✅ **Home Page**: Navigate to `/`
✅ **Routing**: All routes defined (pages may show placeholders)
✅ **Blog Detail Page**: Dynamic `/blog/[cid]/[slug]` with SSR and SEO
✅ **API Integration**: Backend API calls configured
✅ **Navigation**: Navbar and links setup
✅ **Styling**: Global CSS migrated from React version

## 🔧 Key Routes

| Route | Status | Notes |
|-------|--------|-------|
| `/` | ✅ Placeholder | Show placeholders for home sections |
| `/blog/[cid]/[slug]` | ✅ Working | Full SSR + Dynamic Metadata |
| `/blog` | ✅ Placeholder | Blog listing page |
| `/jee`, `/neet`, `/foundation` | ✅ Placeholder | Course pages |
| `/about`, `/gallery`, `/ourTeam` | ✅ Placeholder | Info pages |
| All policy pages | ✅ Placeholder | Legal pages |

## 🧪 Test the Blog Detail Page

### Option 1: Via API
The blog detail page fetches real data from the API. To test:

1. Go to: `http://localhost:3000/blog/688276/jee-advanced-result-celebration-2024`
2. The page will fetch blog details via API
3. Check browser console for any errors
4. Inspect page source for SEO metadata

### Option 2: Check Metadata
Open DevTools (F12) → Sources tab:
- View page source
- Look for `<title>` tag
- Check `<meta>` tags
- Look for `<script type="application/ld+json">` (structured data)

## 📁 Project Structure

```
aurous_pragyan_next/
├── app/                    # Next.js App Router
│   ├── page.jsx           # Home page
│   ├── layout.jsx         # Root layout
│   ├── blog/
│   │   ├── page.jsx
│   │   └── [cid]/[slug]/page.jsx
│   └── [other routes]/
│
├── components/            # React components
│   ├── CommonSections/    # Navigation, Footer, etc.
│   ├── HomeComponents/    # Home page sections
│   └── [other components]/
│
├── lib/
│   ├── api.js            # API calls
│   └── metadata.js       # SEO utilities
│
├── styles/
│   └── globals.css       # Global styles
│
├── public/               # Static assets
│   └── whatsAppSvg.svg
│
├── package.json
├── next.config.js
├── tsconfig.json
└── .env.local
```

## 🔌 API Configuration

The API endpoint is defined in `.env.local`:
```
NEXT_PUBLIC_API_BASE_URL=https://prodapi.classiolabs.com/
```

All API utilities are in `lib/api.js`.

## 🎯 Next Steps

### Immediate (To Complete the Migration)

1. **Copy Components**: Copy all React components from `aurous_pragyan/src/Components/` and `aurous_pragyan/src/CommonSections/` to `aurous_pragyan_next/components/`

2. **Update Imports**: In each component, replace:
   - `react-router-dom` imports → `next/link`, `next/navigation`
   - Import paths from `src/Netwrok` → `@/lib/api`

3. **Fix Navigation**: Update all navigation code:
   - `useNavigate()` → `useRouter()` from `next/navigation`
   - `<Link to="">` → `<Link href="">`

4. **Test Each Page**: As components are added, test them

### Build for Production

```bash
# Build
npm run build

# Start production server
npm run start
```

## 🐛 Troubleshooting

### Issue: Component not found
**Solution**: Make sure you've copied the component file to the correct folder in `components/`

### Issue: Import errors
**Solution**: Update import paths to use `@/` alias
Example: `@/lib/api`, `@/components/...`, `@/styles/...`

### Issue: Hydration errors
**Solution**: Wrap window-dependent code:
```javascript
if (typeof window !== 'undefined') {
  // window API code here
}
```

### Issue: Image not loading
**Solution**: Place images in `public/` folder and reference as:
```javascript
<img src="/imageName.svg" alt="description" />
```

## 📚 Documentation

- **README.md** - Full migration details and architecture
- **MIGRATION_CHECKLIST.md** - Component migration tracking
- **Next.js Docs** - https://nextjs.org/docs

## 💡 Key Features Already Implemented

1. ✅ **Dynamic Metadata** - Blog details page generates SEO metadata from API
2. ✅ **Server-Side Rendering** - Blog detail page uses SSR for better SEO
3. ✅ **Structured Data** - JSON-LD schema included for blog posts
4. ✅ **API Integration** - All endpoints mapped in `lib/api.js`
5. ✅ **Routing** - All routes defined with proper paths
6. ✅ **Environment Variables** - API endpoint configured in `.env.local`
7. ✅ **CSS** - Global styles migrated from React version
8. ✅ **Responsive** - MUI components for responsive design

## ✅ SEO Verification

To verify SEO is working on the blog detail page:

1. Open DevTools
2. Go to Elements/Inspector
3. Search for `<meta property="og:title"`
4. Verify OpenGraph tags are present
5. Search for `<script type="application/ld+json"`
6. Verify structured data exists

## 🚀 Deploy to Production

The project is configured for Next.js deployment on:
- Vercel (recommended - automatic)
- Any Node.js hosting (Docker, Heroku, etc.)

See `next.config.js` for production settings.

---

**Status**: Core infrastructure ready ✅ | Component migration needed ⏳

Start copying components one by one and update the MIGRATION_CHECKLIST.md as you go!
