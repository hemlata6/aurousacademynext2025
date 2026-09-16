'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const stories = [
  {
    quote: 'Aurous Academy’s teachers guided me with the right study material and helped me to resolve every doubt without delay. Their personal attention, one-on-one support and consistent efforts played a major role in my achievement.',
    name: 'Arsh Jain',
    meta: 'AIR 131 | JEE Advanced 2026',
    img: '/arshjain.jpeg',
  },
  {
    quote: 'Aurous Academy provided me with a focused learning environment and a disciplined study routine. The consistent guidance and academic support I received here helped me stay dedicated and confident throughout my preparation',
    name: 'Tanishq Shukla',
    meta: 'AIR 711 | JEE Adavnced 2026',
    img: '/tanishq.jpeg',
  },
  {
    quote: 'I have been studying at Aurous Academy since Class 9. The teachers supported me throughout my journey and always explained my doubts promptly, helping me remain consistent in my preparation.',
    name: 'Bhavya Diwakar',
    meta: 'AIR 1259 | JEE Advanced 2026',
    img: '/bhavyadiwakar.jpeg',
  },
];

const StudentStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (stories.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index) =>
    setCurrentIndex(((index % stories.length) + stories.length) % stories.length);

  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8" id="student-stories">
      <div
        className="mx-auto max-w-7xl rounded-3xl border border-emerald-900/10 p-6 shadow-sm sm:p-10"
        style={{
          background: 'linear-gradient(115deg, #f6fbfc, #f0f9fb)',
        }}
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left Title Block */}
          <div className="space-y-4 lg:col-span-5">
            <span className="inline-block rounded-full bg-emerald-100/80 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-emerald-800">
              Student Stories
            </span>
            <h2 className="text-2xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Real Journeys.<br className="hidden sm:inline" />Real Inspiration.
            </h2>
            <p className="text-sm font-medium text-slate-600">
              Hear from our students and parents.
            </p>
            <div className="pt-2">
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 rounded-xl bg-aurous-darkGreen px-6 py-3 text-xs font-extrabold text-white shadow-md shadow-emerald-950/10 transition hover:bg-[#00523F] sm:text-sm"
              >
                <span>View All Stories</span>
                <span className="text-aurous-yellow transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Right Student Quote Carousel */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm lg:col-span-7">
            {/* Quote Mark Accent */}
            <div className="pointer-events-none absolute right-6 top-4 z-10 select-none font-serif text-8xl font-black leading-none text-emerald-600/15">
              “
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {stories.map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-6 sm:p-8">
                    <div className="relative z-10 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                      <div className="flex-shrink-0">
                        <img
                          src={story.img}
                          alt={story.name}
                          className="h-24 w-20 rounded-xl border-2 border-emerald-100 object-cover shadow-sm sm:h-28 sm:w-24"
                        />
                      </div>
                      <div className="space-y-3 text-center sm:text-left">
                        {/* <div className="font-serif text-2xl text-aurous-darkGreen">“</div> */}
                        <p className="-mt-3 text-sm font-semibold leading-relaxed text-slate-700 sm:text-base">
                          {story.quote}
                        </p>
                        <div>
                          <h4 className="text-sm font-extrabold text-slate-900">{story.name}</h4>
                          {/* <p className="text-xs font-medium italic text-slate-400">{story.meta}</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {stories.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous story"
                  onClick={() => goTo(currentIndex - 1)}
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-2 text-slate-700 shadow-sm transition hover:bg-white hover:text-aurous-darkGreen"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  type="button"
                  aria-label="Next story"
                  onClick={() => goTo(currentIndex + 1)}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-2 text-slate-700 shadow-sm transition hover:bg-white hover:text-aurous-darkGreen"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                </button>

                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Go to story ${index + 1}`}
                      onClick={() => goTo(index)}
                      className={
                        index === currentIndex
                          ? 'h-2.5 w-6 rounded-full bg-aurous-darkGreen transition-all duration-300'
                          : 'h-2.5 w-2.5 rounded-full bg-slate-300 transition-all duration-300 hover:bg-slate-400'
                      }
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentStoriesSection;




