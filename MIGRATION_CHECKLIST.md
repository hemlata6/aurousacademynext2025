# Component Migration Checklist

Use this checklist to track which components have been migrated from React to Next.js.

## Navigation Components
- [ ] NavBarOne.jsx - Desktop navigation
- [ ] NavBarTwo.jsx - Mobile navigation
- [ ] Footer.jsx - Footer with links and CTA

## Home Page Components
- [ ] HomeSection1.jsx - Hero/Banner
- [ ] HomeSection2.jsx - Features
- [ ] HomeSection3.jsx - About
- [ ] HomeSection4.jsx - Courses
- [ ] HomeSection5.jsx - Testimonials
- [ ] HomeSection6.jsx - CTA

## Blog Components
- [ ] BlogDetails.jsx - Blog post display (Core implementation)
- [ ] BlogSection1.jsx - Blog listing/featured
- [ ] BannerSection.jsx - Banner area
- [ ] AnnouncementDialog.jsx - Announcements

## Course Specific Components
### JEE
- [ ] Class11thCourses.jsx
- [ ] Class12thCourses.jsx
- [ ] Other JEE specifics

### NEET
- [ ] NEETSections components
- [ ] NEET specific courses

### Foundation
- [ ] Class7thCourses.jsx
- [ ] Class8thCourses.jsx
- [ ] Class9thCourses.jsx
- [ ] Class10thCourses.jsx

## Gallery & Media Components
- [ ] GallerySection1.jsx
- [ ] GalleryPageDomainWise.jsx
- [ ] GalleryCourseWise.jsx
- [ ] YoutubePlayer.jsx
- [ ] WatchSection.jsx

## Other Components
- [ ] AboutComponent/AboutSection1.jsx
- [ ] AboutComponent/AboutSection2.jsx
- [ ] AboutComponent/AboutSection3.jsx
- [ ] OurTeamSection components
- [ ] ResultComponent components
- [ ] TimeTableSection components
- [ ] OurMethodologies.jsx
- [ ] CoursesSection.jsx
- [ ] FreeResourcesSection components
- [ ] ContactUs.jsx
- [ ] Thankyou.jsx

## Utility Components
- [ ] Custom hooks migration
- [ ] useMediaQuery usage
- [ ] useNavigate() → useRouter() conversion
- [ ] HTTP client side logic

---

## Migration Priority Levels

### 🔴 Critical (Must have for launch)
1. NavBarTwo - Navigation
2. HomeSection1-6 - All home sections
3. BlogDetails - Blog display
4. Footer - Footer

### 🟠 High (Important for core functionality)
1. JEE/NEET/Foundation course pages
2. Gallery components
3. About section
4. Results component

### 🟡 Medium (Important but can wait)
1. Free resources
2. Time table
3. Previous year papers
4. Our methodologies

### 🟢 Low (Nice to have)
1. Policy pages (can be static content)
2. Team components
3. Contact/Thank you pages

---

## Instructions for Each Component

### Step 1: Copy the component
Copy from: `aurous_pragyan/src/Components/...` or `aurous_pragyan/src/CommonSections/...`
Copy to: `aurous_pragyan_next/components/...` (preserve folder structure)

### Step 2: Update imports
- `react-router-dom`: Remove imports
- Add: `import Link from 'next/link'`
- Add: `import { useRouter } from 'next/navigation'` if needed
- Import paths API from `@/lib/api`

### Step 3: Update hooks
Replace:
- `useNavigate()` → `useRouter()`
- `useParams()` → Use server components or pass props
- `useLocation()` → Use `useRouter()`

### Step 4: Handle window API
Wrap window-dependent code:
```javascript
if (typeof window !== 'undefined') {
  window.location.href = '...'
  // ...
}
```

### Step 5: Update component structure
If it's a page component, convert to server/client hybrid:
```javascript
// Server Component for data fetching
export default async function PageName({ params }) {
  const data = await fetchData();
  return <ClientComponent data={data} />;
}

// Client Component for interactivity
'use client';
function ClientComponent({ data }) {
  // render JSX
}
```

### Step 6: Test
- Run `npm run dev`
- Check page renders
- Verify navigation works
- Check console for errors

---

## Common Patterns to Fix

### Pattern 1: useParams to params
**Before (React):**
```javascript
const { cid, slug } = useParams();
```

**After (Next.js Server Component):**
```javascript
export default async function Page({ params }) {
  const { cid, slug } = await params;
}
```

### Pattern 2: useNavigate to useRouter
**Before (React):**
```javascript
const navigate = useNavigate();
navigate('/path');
```

**After (Next.js):**
```javascript
'use client';
import { useRouter } from 'next/navigation';
const router = useRouter();
router.push('/path');
```

### Pattern 3: Link component
**Before (React):**
```javascript
<Link to="/path">Text</Link>
```

**After (Next.js):**
```javascript
import Link from 'next/link';
<Link href="/path">Text</Link>
```

### Pattern 4: CSS files
**Before (React):**
```javascript
import './ComponentName.css';
```

**After (Next.js):**
Create CSS Modules or use global styles.
```javascript
import styles from './ComponentName.module.css';
// or import from global CSS
```

---

## Testing Checklist for Each Component

- [ ] Component renders without errors
- [ ] CSS styling is preserved
- [ ] Links navigate correctly
- [ ] Responsive design on mobile
- [ ] All images load properly
- [ ] API calls work (if applicable)
- [ ] Event handlers work (buttons, forms, etc.)
- [ ] No console errors or warnings

---

**Total Components to Migrate**: ~30+ (depending on subdirectories)

You can work on these in parallel with multiple developers.
