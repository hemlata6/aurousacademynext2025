'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Dialog, DialogTitle, DialogContent, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const FAQHomeSection = () => {
    const [open, setOpen] = useState(false);

    const faqs = [
        {
            q: 'How do I know if my child reached the centre safely?',
            a: 'Students punch in and out using the institute’s biometric attendance system. Parents receive an SMS when their child arrives at or leaves the academy.',
        },
        {
            q: 'Will I be notified about absenteeism?',
            a: 'If a student does not record a biometric punch, the attendance SMS is not triggered. The academy also maintains manual attendance and calls the parents of absent students.',
        },
        {
            q: 'How can I track my child’s test scores?',
            a: 'Comprehensive performance data is updated after every mock test. Parents can review attempted and missed scoring opportunities and cumulative peer ranking.',
        },
        {
            q: 'How often are Parent-Teacher Meetings (PTMs) held?',
            a: 'Formal, face-to-face parent-teacher meetings are organized regularly after every major test.',
        },
        {
            q: 'Are scholarships available?',
            a: 'Students can secure fee waivers of up to 100% based on their performance in the admission test. Confirm applicable conditions with the academy.',
        },
    ];

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <>
            <section className="bg-slate-50 px-4 py-6 sm:px-6 lg:px-8" id="resources-faq">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Left Block: Explore Resources */}
                    <div
                        className="flex flex-col justify-between rounded-3xl border border-emerald-900/10 p-6 shadow-sm sm:p-8 lg:col-span-8"
                        style={{
                            background: 'linear-gradient(115deg, #f6fbfc, #f0f9fb)',
                        }}
                    >
                        <div>
                            <h3 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                                Explore Resources
                            </h3>
                            <p className="mb-6 mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                                Previous year papers, blogs and YouTube lectures to support your preparation.
                            </p>
                        </div>

                        {/* 3 Resource Cards Grid */}
                        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                            {/* Papers */}
                            <Link
                                href="/previousyearpaper"
                                className="resource-card group flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-4"
                            >
                                <div className="res-icon flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-aurous-darkGreen transition-colors">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                </div>
                                <span className="text-xs font-extrabold text-slate-800 transition-colors group-hover:text-aurous-darkGreen sm:text-sm">
                                    Previous Year Papers
                                </span>
                            </Link>

                            {/* Blogs */}
                            <Link
                                href="/blog"
                                className="resource-card group flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-4"
                            >
                                <div className="res-icon flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-aurous-darkGreen transition-colors">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </div>
                                <span className="text-xs font-extrabold text-slate-800 transition-colors group-hover:text-aurous-darkGreen sm:text-sm">
                                    Blogs
                                </span>
                            </Link>

                            {/* YouTube */}
                            <Link
                                href="https://www.youtube.com/@aurousdigital"
                                className="resource-card group flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-4"
                            >
                                <div className="res-icon flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-aurous-darkGreen transition-colors">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <span className="text-xs font-extrabold text-slate-800 transition-colors group-hover:text-aurous-darkGreen sm:text-sm">
                                    YouTube Lectures
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Block: Have Questions? */}
                    {/* Right Block: Have Questions? */}
                    <div
                        className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-emerald-900/10 p-6 shadow-sm sm:p-8 lg:col-span-4"
                        style={{
                            background: 'linear-gradient(115deg, #f6fbfc, #f0f9fb)',
                        }}
                    >
                        {/* Subtle background Question Mark watermark */}
                        <div className="pointer-events-none absolute right-4 top-2 select-none text-8xl font-black text-emerald-900/10">
                            ?
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                                Have Questions?
                            </h3>
                            <p className="mb-6 mt-1 max-w-xs text-xs font-medium text-slate-500 sm:text-sm">
                                Find quick answers to common queries about admissions, courses and more.
                            </p>
                        </div>

                        <div className="relative z-10 pt-2">
                            <button
                                type="button"
                                onClick={handleOpen}
                                className="group inline-flex items-center gap-2 rounded-xl bg-aurous-darkGreen px-6 py-3 text-xs font-extrabold text-white shadow-md shadow-emerald-950/10 transition hover:bg-[#00523F] sm:text-sm"
                            >
                                <span>View FAQs</span>
                                <span className="text-aurous-yellow transition-transform group-hover:translate-x-1">→</span>
                            </button>
                        </div>
                    </div>
                </div>

                <style>{`
                    .resource-card {
                        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    .resource-card:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 10px 20px -5px rgba(0, 56, 43, 0.08);
                        border-color: rgba(0, 56, 43, 0.3);
                    }
                    .resource-card:hover .res-icon {
                        background-color: #00382B;
                        color: #FFC800;
                    }
                `}</style>
            </section>

            {/* FAQ Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="md"
                PaperProps={{
                    sx: {
                        borderRadius: '16px',
                        maxHeight: '85vh',
                        margin: { xs: '12px', sm: '24px' },
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontWeight: 800,
                        color: '#1f2937',
                        fontSize: { xs: '1.1rem', md: '1.35rem' },
                    }}
                >
                    Frequently Asked Questions
                    <IconButton onClick={handleClose} size="small" aria-label="Close">
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers sx={{ p: { xs: 1.5, sm: 2.5 } }}>
                    {faqs.map((item) => (
                        <Box
                            component="details"
                            key={item.q}
                            sx={{
                                mb: 1.5,
                                borderRadius: '12px',
                                border: '1px solid #e5e7eb',
                                background: '#fafafa',
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                component="summary"
                                sx={{
                                    cursor: 'pointer',
                                    listStyle: 'none',
                                    '&::-webkit-details-marker': { display: 'none' },
                                    '&::marker': { content: '""' },
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: 2,
                                    px: 2.5,
                                    py: 2,
                                }}
                            >
                                <Typography component="h3" sx={{ fontSize: '1rem', fontWeight: 600, color: '#1f2937' }}>
                                    {item.q}
                                </Typography>
                                <Typography component="span" aria-hidden="true" sx={{ color: '#E8410E', fontSize: '1.25rem', lineHeight: 1 }}>
                                    +
                                </Typography>
                            </Box>
                            <Box sx={{ px: 2.5, pb: 2.5 }}>
                                <Typography sx={{ color: '#4b5563', lineHeight: 1.7 }}>{item.a}</Typography>
                            </Box>
                        </Box>
                    ))}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default FAQHomeSection;