import React from 'react';
import Link from 'next/link';

const HomeSection3 = () => {
    return (
        <section className="overflow-hidden bg-slate-50 px-4 py-12 sm:px-6 lg:px-8" id="courses">
            <div className="relative mx-auto max-w-7xl rounded-3xl border border-emerald-900/10 bg-[#F4F9F6]/80 p-6 shadow-sm sm:p-10">
                {/* Section Header */}
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <span className="mb-2 inline-block rounded-full bg-emerald-100/80 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-emerald-800 shadow-sm">
                            Find Your Program
                        </span>
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                            Choose the Right Course
                        </h2>
                        <p className="mt-1 text-sm font-medium text-slate-600">
                            Focused programs for every stage of your preparation journey.
                        </p>
                    </div>

                    <Link
                        href="/course"
                        className="group inline-flex items-center gap-2 self-start text-xs font-extrabold text-aurous-darkGreen transition hover:text-emerald-700 sm:self-auto sm:text-sm"
                    >
                        <span>View All Courses</span>
                        <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                    </Link>
                </div>

                {/* Course Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Card 1: IIT-JEE */}
                    <div className="course-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-emerald-900/30 bg-aurous-darkGreen p-6 text-white sm:p-8">
                        <div className="card-glow pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/20 opacity-0 blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="mb-2 flex items-center gap-3.5">
                                <div className="card-icon-container flex items-center justify-center rounded-2xl border border-emerald-700/60 bg-emerald-900/80 p-3 text-white shadow-inner transition-transform">
                                    <svg
                                        className="h-8 w-8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="1" />
                                        <ellipse cx="12" cy="12" rx="11" ry="4" />
                                        <ellipse
                                            cx="12"
                                            cy="12"
                                            rx="11"
                                            ry="4"
                                            transform="rotate(60 12 12)"
                                        />
                                        <ellipse
                                            cx="12"
                                            cy="12"
                                            rx="11"
                                            ry="4"
                                            transform="rotate(120 12 12)"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black tracking-tight text-white transition-colors group-hover:text-aurous-yellow">IIT-JEE</h3>
                                    <p className="mt-0.5 text-[11px] font-bold tracking-wide text-emerald-200/90">Class 11 | Class 12 | Droppers</p>
                                </div>
                            </div>

                            <p className="mb-8 mt-6 text-sm font-medium leading-relaxed text-emerald-100/90">
                                For dreamers who want to build what’s next.
                            </p>
                        </div>

                        <Link
                            href="/jee"
                            className="relative z-10 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-center text-xs font-extrabold text-aurous-darkGreen shadow-md transition-all duration-300 hover:bg-slate-100 hover:shadow-lg sm:text-sm"
                        >
                            <span>Explore JEE Program</span>
                            <span className="arrow-icon inline-block transition-transform duration-300">→</span>
                        </Link>
                    </div>

                    {/* Card 2: NEET */}
                    <div className="course-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-amber-300 bg-aurous-yellow p-6 text-slate-900 sm:p-8">
                        <div className="card-glow pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-amber-200/60 opacity-0 blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="mb-2 flex items-center gap-3.5">
                                <div className="card-icon-container flex items-center justify-center rounded-2xl border border-amber-500/40 bg-amber-400/60 p-3 text-aurous-darkGreen shadow-inner transition-transform">
                                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 2v7a6 6 0 0 0 12 0V2M1 2h4m8 0h4M9 15v2a5 5 0 0 0 10 0v-3"/><circle cx="19" cy="11" r="3"/></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black tracking-tight text-slate-950">NEET</h3>
                                    <p className="mt-0.5 text-[11px] font-bold tracking-wide text-slate-800">Class 11 | Class 12 | Droppers</p>
                                </div>
                            </div>

                            <p className="mb-8 mt-6 text-sm font-semibold leading-relaxed text-slate-900">
                                For those who want to build a healthier tomorrow.
                            </p>
                        </div>

                        <Link
                            href="/neet"
                            className="relative z-10 flex w-full items-center justify-center gap-2 rounded-xl bg-aurous-darkGreen px-5 py-3.5 text-center text-xs font-extrabold text-white shadow-md transition-all duration-300 hover:bg-[#00523F] hover:shadow-lg sm:text-sm"
                        >
                            <span>Explore NEET Program</span>
                            <span className="arrow-icon inline-block transition-transform duration-300">→</span>
                        </Link>
                    </div>

                    {/* Card 3: Olympiads & Foundation */}
                    <div className="course-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-emerald-200/80 bg-emerald-50/90 p-6 text-slate-900 sm:p-8">
                        <div className="card-glow pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-200/50 opacity-0 blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="mb-2 flex items-center gap-3.5">
                                <div className="card-icon-container flex items-center justify-center rounded-2xl border border-emerald-200/80 bg-emerald-100 p-3 text-aurous-darkGreen shadow-inner transition-transform">
                                   <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 8l11-6 11 6-11 6zM5 10v7c5 4 9 4 14 0v-7M23 8v11"/></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-aurous-darkGreen">Olympiads & Foundation</h3>
                                    <p className="mt-0.5 text-[11px] font-bold tracking-wide text-slate-600">Class 7 | Class 8 | Class 9 | Class 10</p>
                                </div>
                            </div>

                            <p className="mb-8 mt-6 text-sm font-semibold leading-relaxed text-slate-700">
                                For curious minds in Classes 7 to 10.
                            </p>
                        </div>

                        <Link
                            href="/foundation"
                            className="relative z-10 flex w-full items-center justify-center gap-2 rounded-xl bg-aurous-darkGreen px-5 py-3.5 text-center text-xs font-extrabold text-white shadow-md transition-all duration-300 hover:bg-[#00523F] hover:shadow-lg sm:text-sm"
                        >
                            <span>Explore Foundation Program</span>
                            <span className="arrow-icon inline-block transition-transform duration-300">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
                .course-card {
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .course-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 25px 35px -10px rgba(0, 56, 43, 0.2), 0 12px 15px -8px rgba(0, 0, 0, 0.08);
                }
                @keyframes gentleFloat {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-6px) rotate(3deg); }
                }
                .course-card:hover .card-icon-container {
                    animation: gentleFloat 2.5s ease-in-out infinite;
                }
                .course-card:hover .arrow-icon {
                    transform: translateX(4px);
                }
                .card-glow {
                    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
                }
                .course-card:hover .card-glow {
                    opacity: 0.8;
                    transform: scale(1.2);
                }
            `}</style>
        </section>
    );
};

export default HomeSection3;


