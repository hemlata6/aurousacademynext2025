import React from 'react';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Aurous+Academy+MP+Nagar+Bhopal';

const HomeLocationMap = () => {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8" id="campus">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-emerald-900/40 bg-aurous-darkGreen text-white shadow-xl lg:grid-cols-12">
          {/* Campus Image */}
          <div className="group relative min-h-[260px] overflow-hidden lg:col-span-5 lg:min-h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
              alt="Aurous Academy Campus"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-aurous-darkGreen"></div>
            <div className="absolute bottom-4 left-4 right-4 lg:hidden">
              <span className="rounded bg-aurous-yellow px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-slate-950">
                Head Campus
              </span>
            </div>
          </div>

          {/* Campus Details */}
          <div className="flex flex-col justify-between space-y-6 p-6 sm:p-10 lg:col-span-7">
            <div>
              <span className="mb-3 inline-block rounded-full border border-emerald-700/50 bg-emerald-900/80 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-aurous-yellow">
                Visit Our Campus
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Aurous Academy, Bhopal
              </h3>
              <p className="mt-1.5 text-sm font-medium text-emerald-100/90">
                A modern learning environment designed for focus, growth and success.
              </p>

              {/* Address & Phone Details */}
              <div className="mt-5 space-y-2 text-xs font-bold text-emerald-100/90 sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 flex-shrink-0 text-aurous-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>MP Nagar, Bhopal</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 flex-shrink-0 text-aurous-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>9993936947</span>
                </div>
              </div>

              <hr className="my-6 border-emerald-800/80" />

              {/* Infrastructure Highlights Grid */}
              <div className="grid grid-cols-2 gap-3.5 text-xs font-bold text-white sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                  <span>Modern Classrooms</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 01-1.023-.547M12 4.5v15"/>
                  </svg>
                  <span>Well-equipped Labs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                  <span>Library & Study Spaces</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <span>Safe & Secure Campus</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-xl bg-aurous-yellow px-6 py-3 text-center text-xs font-black text-slate-950 shadow-md transition duration-300 hover:bg-amber-400 sm:text-sm"
              >
                <span>Plan a Visit</span>
                <span className="text-base font-bold">→</span>
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-600/80 px-5 py-3 text-center text-xs font-bold text-white transition duration-300 hover:bg-emerald-900/60 sm:text-sm"
              >
                <svg className="h-4 w-4 text-aurous-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>View on Map</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLocationMap;