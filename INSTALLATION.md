# Installation & Setup Guide

## Prerequisites

Before you start, make sure you have:

- **Node.js** 18.17 or later (LTS recommended)
  - Download from: https://nodejs.org/
  - Verify: Run `node --version` in terminal

- **npm** 9 or later (comes with Node.js)
  - Verify: Run `npm --version` in terminal

- **Git** (optional but recommended)
  - Download from: https://git-scm.com/

## 📥 Installation Steps

### Step 1: Navigate to Project Directory

Open your terminal and navigate to the `aurous_pragyan_next` folder:

```bash
cd c:\Users\Classio\Desktop\projects\projects\aurous-pragyan-mainpage-2025\aurous_pragyan_next
```

Or (if you're already in the main projects folder):

```bash
cd aurous_pragyan_next
```

### Step 2: Install Dependencies

Install all required npm packages:

```bash
npm install
```

**What this does:**
- Downloads all packages listed in `package.json` (React, Next.js, MUI, Axios, etc.)
- Creates `node_modules` folder with all dependencies
- Generates `package-lock.json` to lock dependency versions

**Estimated time:** 2-5 minutes (depending on internet speed)

### Step 3: Verify Installation

Check that everything installed correctly:

```bash
npm list --depth=0
```

You should see:
- next
- react
- react-dom
- @mui/material
- axios
- And other dependencies

### Step 4: Start Development Server

Run the development server:

```bash
npm run dev
```

**Expected output:**
```
> aurous-pragyan-nextjs@1.0.0 dev
> next dev

  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
```

### Step 5: Open in Browser

Open your browser and visit:

```
http://localhost:3000
```

You should see the home page load with placeholder content.

## ✅ Verify Installation Success

After starting the dev server, check:

- [ ] Page loads at http://localhost:3000
- [ ] Browser console has no red errors
- [ ] Navigation links appear
- [ ] Can click on navigation items

## 🔧 Configuration Files

The following files have been configured for you:

### `.env.local`
Contains API endpoint configuration:
```
NEXT_PUBLIC_API_BASE_URL=https://prodapi.classiolabs.com/
```

### `tsconfig.json`
TypeScript/JavaScript configuration with path aliases:
- `@/*` → Root directory imports
- Example: `import api from '@/lib/api'`

### `next.config.js`
Next.js configuration with:
- Image optimization settings
- Environment variables
- Build optimizations

### `package.json`
Project dependencies and scripts

## 📚 Testing Routes

Once the server is running, test these routes:

### Home Page
```
http://localhost:3000/
```

### Blog Listing
```
http://localhost:3000/blog
```

### Blog Detail (with Dynamic Metadata & SSR)
```
http://localhost:3000/blog/688276/jee-advanced-result-celebration-2024
```

### Other Pages
```
http://localhost:3000/jee
http://localhost:3000/neet
http://localhost:3000/about
http://localhost:3000/gallery
```

## 🛠️ Common Commands

### Development
```bash
npm run dev
```
Runs development server with hot-reload at `http://localhost:3000`

### Build
```bash
npm run build
```
Creates optimized production build in `.next/` folder

### Start Production Build
```bash
npm run start
```
Runs production server (must run `build` first)

### Lint Code
```bash
npm run lint
```
Checks for code quality issues

## 🐛 Troubleshooting

### Issue: `npm: command not found`

**Solution:** Node.js is not installed
1. Install Node.js from https://nodejs.org/
2. Restart terminal/command prompt
3. Try `npm --version` again

### Issue: Port 3000 is already in use

**Solution:** Another application is using port 3000
```bash
# Run on different port
npm run dev -- -p 3001
```
Then visit http://localhost:3001

### Issue: `Error: Cannot find module`

**Solution:** Dependencies not installed
```bash
# Delete node_modules and reinstall
rm -r node_modules
npm install
```

### Issue: Build fails with error about components

**Solution:** Component files not copied from React project
- See `MIGRATION_CHECKLIST.md` for component migration guide

### Issue: Images not loading

**Solution:** Images in `public/` folder
- Verify images exist in `public/` directory
- Use `/imageName.svg` to reference

## 📦 Install Additional Packages

If you need to add new packages:

```bash
npm install package-name
```

For development-only packages:
```bash
npm install --save-dev package-name
```

Common packages to add:
```bash
npm install react-dom-confetti  # For animations
npm install js-cookie           # For cookies
npm install framer-motion       # For animations
```

## 🚀 Next Steps After Installation

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Verify Routes Work**
   - Visit http://localhost:3000
   - Click navigation links

3. **Test Blog Detail Page**
   - Visit `/blog/688276/jee-advanced-result-celebration-2024`
   - Open DevTools to check metadata

4. **Start Component Migration**
   - See `MIGRATION_CHECKLIST.md`
   - Copy components from React project
   - Update imports and hooks

5. **Build for Production (When Ready)**
   ```bash
   npm run build
   npm run start
   ```

## 📝 Project Structure After Installation

```
aurous_pragyan_next/
├── node_modules/          ← Installed packages (do NOT edit)
├── .next/                 ← Build output (do NOT edit)
├── app/                   ← Next.js pages
├── components/            ← React components
├── lib/                   ← Utilities
├── public/                ← Static assets
├── styles/                ← CSS files
├── package.json           ← Dependencies list
├── next.config.js         ← Next.js config
├── tsconfig.json          ← TypeScript config
├── .env.local             ← Environment variables
└── [documentation files]
```

## 🔐 Environment Variables

Currently configured in `.env.local`:
```
NEXT_PUBLIC_API_BASE_URL=https://prodapi.classiolabs.com/
```

To add more:
1. Open `.env.local`
2. Add new line: `NEXT_PUBLIC_VARIABLE_NAME=value`
3. Restart dev server
4. Access in code: `process.env.NEXT_PUBLIC_VARIABLE_NAME`

## 🎯 Development Workflow

```
1. npm install          → Install dependencies
   ↓
2. npm run dev          → Start development server
   ↓
3. Edit code            → Make changes
   ↓
4. Browser hot-reload   → See changes instantly
   ↓
5. Test routing         → Verify navigation
   ↓
6. Add components       → Migrate from React
   ↓
7. Build & test         → npm run build && npm run start
```

## ✨ Performance Tips

### During Development
- Keep only what you need running
- Use DevTools Network tab to check API calls
- Check Console for any warnings/errors

### Before Production Build
1. Run lint: `npm run lint`
2. Delete .next: `rm -r .next`
3. Build fresh: `npm run build`
4. Test build: `npm run start`

## 📚 Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Node.js Docs**: https://nodejs.org/docs
- **npm Docs**: https://docs.npmjs.com

## ✅ Installation Checklist

- [ ] Node.js 18+ installed
- [ ] Project folder opened in terminal
- [ ] `npm install` completed successfully
- [ ] `npm run dev` started without errors
- [ ] http://localhost:3000 loads in browser
- [ ] Navigation links visible
- [ ] No critical errors in console
- [ ] Development environment ready

---

**Congratulations!** 🎉 You have successfully set up the Next.js project!

Next: Start migrating components (see `MIGRATION_CHECKLIST.md`)
