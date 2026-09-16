import React from 'react';
import Link from 'next/link';
import images from '@/lib/images';
import { SOCIAL_URLS } from '@/lib/site';

const Footer = () => {
  return (
    <footer className="mt-0 w-full rounded-t-3xl border-t border-emerald-900 bg-aurous-darkGreen pb-8 pt-14 text-white">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4 lg:col-span-3">
            <Link href="/" className="inline-block rounded-xl bg-white p-2.5 shadow-sm">
              <img className="h-12 w-auto object-contain" src={images.logo} alt="Aurous Academy Logo" />
            </Link>
            <p className="pt-1 text-xs font-bold uppercase tracking-widest text-aurous-yellow">
              Dream • Prepare • Achieve
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3 lg:col-span-3">
            <h4 className="inline-block border-b border-emerald-800 pb-2 text-base font-extrabold tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-emerald-100/80 sm:text-sm">
              <li>
                <Link href="/about" className="transition hover:text-aurous-yellow">About Aurous</Link>
              </li>
              <li>
                <a href="#" className="transition hover:text-aurous-yellow">Scholarship Exams</a>
              </li>
              <li>
                <Link href="/course" className="transition hover:text-aurous-yellow">Courses</Link>
              </li>
              <li>
                <Link href="/result" className="transition hover:text-aurous-yellow">Result</Link>
              </li>
              <li>
                <Link href="/gallery" className="transition hover:text-aurous-yellow">Gallery</Link>
              </li>
              <li>
                <Link href="/timetable" className="transition hover:text-aurous-yellow">Timetable</Link>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-aurous-yellow">Contact us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div className="space-y-3 lg:col-span-3">
            <h4 className="inline-block border-b border-emerald-800 pb-2 text-base font-extrabold tracking-wide text-white">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs font-semibold text-emerald-100/90 sm:text-sm">
              <div className="flex items-center gap-2.5">
                <svg className="h-4 w-4 flex-shrink-0 text-aurous-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+919685099770" className="transition hover:text-aurous-yellow">9685099770</a>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-aurous-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>MP Nagar, Bhopal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="h-4 w-4 flex-shrink-0 text-aurous-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:support@aurousacademy.com" className="truncate transition hover:text-aurous-yellow">support@aurousacademy.com</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              {/* YouTube */}
              <a href={SOCIAL_URLS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-900/80 text-white transition hover:bg-aurous-yellow hover:text-slate-950">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              {/* Instagram */}
              <a href={SOCIAL_URLS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-900/80 text-white transition hover:bg-aurous-yellow hover:text-slate-950">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* Facebook */}
              <a href={SOCIAL_URLS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-900/80 text-white transition hover:bg-aurous-yellow hover:text-slate-950">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.847 9 5.192V8z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href={SOCIAL_URLS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-900/80 text-white transition hover:bg-aurous-yellow hover:text-slate-950">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 4: Download Our App */}
          <div className="space-y-3 lg:col-span-3">
            <h4 className="inline-block border-b border-emerald-800 pb-2 text-base font-extrabold tracking-wide text-white">
              Download Our App
            </h4>
            <div className="flex flex-col gap-2.5 pt-1 sm:flex-row lg:flex-col">
              {/* Google Play */}
              <a href="https://play.google.com/store/apps/details?id=com.classiolabs.aurousacademy&hl=en" className="group flex items-center gap-3 rounded-xl border border-emerald-700/80 bg-black/60 p-2.5 transition hover:bg-black">
                <svg className="h-6 w-6 text-emerald-400 transition group-hover:text-aurous-yellow" fill="currentColor" viewBox="0 0 24 24"><path d="M3 20.5v-17c0-.55.45-1 1-1h.2l9.8 8.8L4.2 21.1c-.2-.1-.2-.3-.2-.6zm11.2-8.2L16 10.5l3.5 2c.7.4.7 1.1 0 1.5L16 16l-1.8-1.8 11.2-8.2z"/></svg>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-300">Get It On</div>
                  <div className="text-xs font-black text-white">Google Play</div>
                </div>
              </a>

              {/* App Store */}
              <a href="#" className="group flex items-center gap-3 rounded-xl border border-emerald-700/80 bg-black/60 p-2.5 transition hover:bg-black">
                <svg className="h-6 w-6 text-emerald-400 transition group-hover:text-aurous-yellow" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.63-.77 1.06-1.84.94-2.91-.91.04-2.03.61-2.68 1.37-.58.67-1.09 1.76-.95 2.81 1.02.08 2.06-.5 2.69-1.27z"/></svg>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-300">Download on the</div>
                  <div className="text-xs font-black text-white">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-emerald-900/90 pt-6 text-xs font-medium text-emerald-200/60 sm:flex-row">
          <p>© 2026 Aurous Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacyPolicy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/termConditions" className="transition hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
