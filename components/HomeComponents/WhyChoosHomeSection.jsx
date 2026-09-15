import React from 'react';

const features = [
  {
    title: 'Biometric Attendance',
    icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457-.315-2.84-.873-4.085',
  },
  {
    title: 'Absence Notifications',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  },
  {
    title: 'Regular PTMs',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Structured Study Plan',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    title: 'Regular Tests & Analysis',
    icon: 'M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Personal Mentorship',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  },
  {
    title: 'Safe & Supportive Environment',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Proven Track Record',
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
  },
];

const WhyChoosHomeSection = () => {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8" id="why-aurous">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10">
          {/* Header */}
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="mb-2 inline-block rounded-full bg-emerald-100/80 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-emerald-800">
              Why Aurous
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              A Trusted Choice in Bhopal
            </h2>
            <p className="mt-1.5 text-sm font-medium text-slate-500">
              More than coaching — a complete learning ecosystem.
            </p>
          </div>

          {/* 8 Feature Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="feature-card flex flex-col items-center justify-center rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5 text-center transition-all hover:border-aurous-darkGreen/30"
              >
                <div className="icon-box mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-aurous-darkGreen shadow-sm transition-all duration-300">
                  <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d={feature.icon} />
                  </svg>
                </div>
                <h4 className="text-sm font-normal text-slate-800 sm:text-base">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .feature-card {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 25px -5px rgba(0, 56, 43, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
        }
        .feature-card:hover .icon-box {
          background-color: #00382B;
          color: #FFC800;
          transform: scale(1.1) rotate(-3deg);
        }
      `}</style>
    </section>
  );
};

export default WhyChoosHomeSection;