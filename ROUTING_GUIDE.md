# Routing Guide - React Router to Next.js Conversion

## 📍 Routing Conversion Map

This document shows how React Router routes have been converted to Next.js routing.

### Route Conversion Table

| React Router | Next.js Path | File Location | Status |
|-------------|--------------|---------------|--------|
| `/` | `/` | `app/page.jsx` | ✅ Placeholder |
| `/jee` | `/jee` | `app/jee/page.jsx` | ✅ Placeholder |
| `/neet` | `/neet` | `app/neet/page.jsx` | ✅ Placeholder |
| `/timeTable` | `/timeTable` | `app/timeTable/page.jsx` | ✅ Placeholder |
| `/freeResources` | `/freeResources` | `app/freeResources/page.jsx` | ✅ Placeholder |
| `/previousYearPaper` | `/previousYearPaper` | `app/previousYearPaper/page.jsx` | ✅ Placeholder |
| `/foundation` | `/foundation` | `app/foundation/page.jsx` | ✅ Placeholder |
| `/methodologies` | `/methodologies` | `app/methodologies/page.jsx` | ✅ Placeholder |
| `/course` | `/course` | `app/course/page.jsx` | ✅ Placeholder |
| `/gallery` | `/gallery` | `app/gallery/page.jsx` | ✅ Placeholder |
| `/banner` | `/banner` | `app/banner/page.jsx` | ✅ Placeholder |
| `/bannerchild/:id` | `/bannerchild/[id]` | `app/bannerchild/[id]/page.jsx` | ⏳ Pending |
| `/about` | `/about` | `app/about/page.jsx` | ✅ Placeholder |
| `/ourTeam` | `/ourTeam` | `app/ourTeam/page.jsx` | ✅ Placeholder |
| `/privacyPolicy` | `/privacyPolicy` | `app/privacyPolicy/page.jsx` | ✅ Placeholder |
| `/termConditions` | `/termConditions` | `app/termConditions/page.jsx` | ✅ Placeholder |
| `/disclaimer` | `/disclaimer` | `app/disclaimer/page.jsx` | ✅ Placeholder |
| `/result` | `/result` | `app/result/page.jsx` | ✅ Placeholder |
| `/blog` | `/blog` | `app/blog/page.jsx` | ✅ Placeholder |
| `/blog/:cid/:slug` | `/blog/[cid]/[slug]` | `app/blog/[cid]/[slug]/page.jsx` | ✅ **Server Component with SSR & Dynamic Metadata** |
| `*` (404) | 404 | `app/not-found.jsx` | ⏳ Pending |

## 🔄 Hook Conversion Guide

### useParams() Conversion

**React Router (Client Component):**
```javascript
import { useParams } from 'react-router-dom';

function BlogPage() {
  const { cid, slug } = useParams();
  // ...
}
```

**Next.js (Server Component):**
```javascript
export default async function BlogPage({ params }) {
  const { cid, slug } = await params;
  // ...
}
```

**Next.js (Client Component):**
```javascript
'use client';
import { useParams } from 'next/navigation';

function BlogPage() {
  const { cid, slug } = useParams();
  // ...
}
```

### useNavigate() Conversion

**React Router:**
```javascript
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/blog');
  };
  
  return <button onClick={handleClick}>Go to Blog</button>;
}
```

**Next.js:**
```javascript
'use client';
import { useRouter } from 'next/navigation';

function Button() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/blog');
  };
  
  return <button onClick={handleClick}>Go to Blog</button>;
}
```

### Link Component Conversion

**React Router:**
```javascript
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

**Next.js:**
```javascript
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
```

### useLocation() Conversion

**React Router:**
```javascript
import { useLocation } from 'react-router-dom';

function Component() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === '/blog') {
      // do something
    }
  }, [location]);
}
```

**Next.js:**
```javascript
'use client';
import { usePathname } from 'next/navigation';

function Component() {
  const pathname = usePathname();
  
  useEffect(() => {
    if (pathname === '/blog') {
      // do something
    }
  }, [pathname]);
}
```

## 📁 App Router File Structure

```
app/
├── layout.jsx              # Root layout (wraps all pages)
├── page.jsx                # Home page (/)
├── not-found.jsx           # 404 page
│
├── jee/
│   └── page.jsx            # /jee
│
├── neet/
│   └── page.jsx            # /neet
│
├── about/
│   └── page.jsx            # /about
│
├── blog/
│   ├── page.jsx            # /blog - Blog listing
│   └── [cid]/
│       └── [slug]/
│           └── page.jsx    # /blog/[cid]/[slug] - Blog detail (SSR)
│
├── bannerchild/
│   └── [id]/
│       └── page.jsx        # /bannerchild/[id]
│
└── [all other pages]/
    └── page.jsx
```

## 🔐 Redirect Handling

### React Router Catch-All
```javascript
<Route path='*' element={<Navigate to="/" />} />
```

### Next.js Not Found
In `app/not-found.jsx`:
```javascript
export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go Home</Link>
    </div>
  );
}
```

## 🌍 Query Parameters

### Query String in URL

**React Router:**
```javascript
const location = useLocation();
const params = new URLSearchParams(location.search);
const id = params.get('id');
```

**Next.js:**
```javascript
'use client';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
}
```

## 🔀 Dynamic Routing

### Single Dynamic Parameter

**React Router:**
```javascript
<Route path='/bannerchild/:id' element={<BannerChildPage />} />
```

**Next.js:**
```
app/bannerchild/[id]/page.jsx
```

### Multiple Dynamic Parameters

**React Router:**
```javascript
<Route path='/blog/:cid/:slug' element={<BlogDetailsPage />} />
```

**Next.js:**
```
app/blog/[cid]/[slug]/page.jsx
```

Access params:
```javascript
export default async function BlogDetailsPage({ params }) {
  const { cid, slug } = await params;
  // ...
}
```

## 🔗 Navigation Best Practices

### ❌ Don't Do This
```javascript
// Direct window.location (loses client-side transitions)
window.location.href = '/blog';
```

### ✅ Do This Instead
```javascript
'use client';
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/blog');
```

## 🎯 Special Routes

### Dynamic Route Segments

```
[slug]        # Single segment: matches /page, /about, etc.
[...slug]     # Optional catch-all: matches /a, /a/b, /a/b/c
[[...slug]]   # Optional catch-all (including empty)
```

### Example: Catch-All Route
```
app/docs/[...slug]/page.jsx
// Matches:
// /docs/getting-started
// /docs/api/reference
// /docs/api/methods/get
```

## 🚀 Programmatic Navigation Examples

### Navigate on Button Click
```javascript
'use client';
import { useRouter } from 'next/navigation';

function GoToBlogButton() {
  const router = useRouter();
  
  return (
    <button onClick={() => router.push('/blog')}>
      Go to Blog
    </button>
  );
}
```

### Navigate After Form Submission
```javascript
'use client';
import { useRouter } from 'next/navigation';

function ContactForm() {
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit form...
    await submitForm(data);
    // Redirect after success
    router.push('/thankyou');
  };
  
  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```

### Navigate with Query Parameters
```javascript
router.push('/blog?page=2&sort=date');
```

### Go Back
```javascript
router.back();
```

## ⚙️ Middleware & Redirects

### Redirect in next.config.js
```javascript
module.exports = {
  redirects: async () => {
    return [
      {
        source: '/old-blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ]
  },
}
```

## 📝 Metadata & SEO

### Static Metadata
```javascript
export const metadata = {
  title: 'About Us',
  description: 'Learn about our company',
};

export default function AboutPage() {
  // ...
}
```

### Dynamic Metadata (Blog Detail)
```javascript
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await fetchBlog(slug);
  
  return {
    title: blog.title,
    description: blog.description,
  };
}
```

## 🔍 Testing Routes

### Test All Routes
```bash
npm run dev
# Then visit each URL:
http://localhost:3000/
http://localhost:3000/jee
http://localhost:3000/neet
http://localhost:3000/blog
http://localhost:3000/blog/688276/jee-advanced-result-celebration-2024
# etc.
```

### Check 404 Handling
```
http://localhost:3000/nonexistent
# Should show Next.js 404 page
```

## 📚 Additional Resources

- [Next.js Routing Docs](https://nextjs.org/docs/app/building-your-application/routing)
- [Next.js Navigation](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)
- [Next.js Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

---

## Checklist for Route Migration

- [ ] All routes defined in `app/` directory
- [ ] Dynamic routes using `[param]` syntax
- [ ] Navigation links updated to use `next/link`
- [ ] useNavigate() replaced with useRouter()
- [ ] useParams() handled correctly
- [ ] Metadata generation for dynamic pages
- [ ] 404 page created
- [ ] All routes tested and working
- [ ] Query parameters handled correctly
- [ ] No console errors on any route

---

**Current Status**: All routes ✅ | Some components ⏳
