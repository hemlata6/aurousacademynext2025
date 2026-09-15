'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Dialog, DialogTitle, DialogContent, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const FAQHomeSection = () => {
    const [open, setOpen] = useState(false);

    const faqs = [
        {
            q: 'Does Aurous Academy offer JEE coaching in Bhopal for droppers?',
            a: 'Yes. Along with Class 11 and Class 12 batches, Aurous runs a dedicated dropper batch for JEE aspirants who want a focused, second attempt at cracking JEE Main and Advanced.',
        },
        {
            q: 'What makes Aurous Academy different from other IIT coaching institutes in Bhopal?',
            a: 'Small batch sizes, expert faculty, personal mentorship for every student, expert-curated study material, and a scholarship program based on merit rather than just enrollment.',
        },
        {
            q: 'Is there a Foundation course for students below Class 11?',
            a: 'Yes, Aurous Academy offers Foundation batches for Class 7 to Class 10, designed to build strong basics in core subjects before students move on to serious JEE or NEET preparation.',
        },
        {
            q: 'Where is Aurous Academy located in Bhopal?',
            a: 'The campus is located at Plot No. R-4, Opposite Railway Track, Zone-2, MP Nagar, Bhopal, Madhya Pradesh 462011 — a central location accessible from most parts of the city.',
        },
        {
            q: 'Does Aurous Academy provide scholarships?',
            a: 'Yes, Aurous Academy organises APRE (Aurous Potential Recognition Exam) and PRAGYAN Scholarship test, offering up to 100% scholarship on fees for eligible students.',
        },
        {
            q: 'Are online classes available at Aurous Academy?',
            a: 'Yes, along with offline classroom coaching in Bhopal, Aurous Academy also offers online courses and a learning app available on mobile, tablet, and desktop.',
        },
        {
            q: 'How will I manage school along with NEET/JEE preparation?',
            a: 'Aurous Academy follows a structured preparation approach that combines classroom learning, regular practice, tests and mentorship, helping students stay on track with their competitive exam preparation alongside school studies.',
        },
        {
            q: 'How often are tests conducted?',
            a: 'Regular tests and mock exams are conducted to help students assess their preparation, practise under exam-like conditions and identify areas that need improvement.',
        },
        {
            q: 'Will I get study material for my preparation?',
            a: 'Yes. Students get access to expert-curated study material along with classroom learning and the Aurous digital learning platform to support their preparation.',
        },
        {
            q: 'What if I get stuck on a topic?',
            a: 'Stuck on a topic? You don\'t have to wait for the next class. Aurous Academy provides regular doubt-solving sessions, and students can communicate with faculty beyond class hours to get their questions addressed.',
        },
        {
            q: 'What happens if I miss a class?',
            a: 'If you miss a class, you can use Aurous Academy\'s online learning platform and app to stay connected with your preparation. You can also reach out to faculty for guidance and get your doubts addressed so you can get back on track.',
        },
        {
            q: 'How can I contact Aurous Academy for admission details?',
            a: (
                <>
                    You can call +91 95225-12624 (8:00 AM to 8:00 PM), email{' '}
                    <a
                        href="mailto:support@aurousacademy.com"
                        style={{ color: '#E8410E', fontWeight: 600, textDecoration: 'none' }}
                    >
                        support@aurousacademy.com
                    </a>
                    , or visit the campus in MP Nagar, Zone-2, Bhopal directly.
                </>
            ),
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
                                href="/freeresources"
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