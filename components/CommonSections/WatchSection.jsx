import React from 'react';
import Link from 'next/link';

const StudentStoriesSection = () => {
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

          {/* Right Student Quote Card */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
            {/* Quote Mark Accent */}
            <div className="pointer-events-none absolute right-6 top-4 select-none font-serif text-8xl font-black leading-none text-emerald-600/15">
              “
            </div>

            <div className="relative z-10 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
                  alt="Student Story Preview"
                  className="h-24 w-20 rounded-xl border-2 border-emerald-100 object-cover shadow-sm sm:h-28 sm:w-24"
                />
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <div className="font-serif text-2xl text-aurous-darkGreen">“</div>
                <p className="-mt-3 text-sm font-semibold leading-relaxed text-slate-700 sm:text-base">
                  Aurous gave me the right guidance, regular practice and the confidence to keep going.
                </p>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">Student story preview</h4>
                  <p className="text-xs font-medium italic text-slate-400">
                    Illustrative copy · replace with an approved testimonial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentStoriesSection;




