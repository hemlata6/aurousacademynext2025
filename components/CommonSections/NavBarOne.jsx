'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dialog, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import images from '@/lib/images';
import Network from '@/lib/Netwrok';
import instId from '@/constant/instId';
import ContactUs from './ContactUs';

const Logo = images.logo;

const NavBarOne = () => {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [banners, setBanners] = useState([]);
    const [openContactUs, setOpenContactUs] = useState(false);
    const [course, setCourse] = useState([]);
    const [resultCourseId, setResultCourseId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openCourses, setOpenCourses] = useState(false);
    const [openResults, setOpenResults] = useState(false);

    useEffect(() => {
        getBanners();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleConvertToBase64 = (e) => {
        e.preventDefault();
        var object = {
            "isAdmitCard": true,
            "contact": ''
        }
        const url = `https://portal.aurousacademy.com/#/data=${btoa(JSON.stringify(object))}`;
        // Open the URL in a new tab
        window.open(url, '_blank');
    };

    const handleNavigate = () => {
        router.push('/');
    };

    const handleOpenContactUs = (e) => {
        e.preventDefault();
        setOpenContactUs(true);
    };

    const handleNavigateAPRE = () => {
        const url = 'https://pragyan.aurousacademy.com/'
        // const url = banners?.length > 0 ? banners[0]?.contentLink : "";
        window.open(url, '_blank', 'noreferrer');
    };

    const getBanners = async () => {
        try {
            const response = await Network.fetchBannerss(instId.instId);
            const fetchedBanners = response.banners || [];

            const newBanners = fetchedBanners.filter(item => item?.group === 'scholarship');
            setBanners(newBanners);
        } catch (error) {
            console.error('Failed to fetch banners:', error);
            setBanners([]);
        }
    };

    const loadCourses = async () => {
        try {
            setLoading(true);
            setError('');
            const response = await Network.fetchCourses(instId.instId);
            const courses = response?.courses || [];
            const target = courses.find(
                (c) => (c?.name || c?.title || '').trim().toLowerCase() === 'website results'
            );

            if (!target?.id) {
                setCourse([]);
                return;
            }

            setResultCourseId(target.id);

            const content = await Network.fetchScheduleApi(target.id, 0);
            const folders = (content?.contentList || []).filter((item) => item?.active !== false);

            const withYears = await Promise.all(
                folders.map(async (folder) => {
                    const childResponse = await Network.fetchScheduleApi(target.id, folder.id);
                    return {
                        ...folder,
                        children: (childResponse?.contentList || []).filter((it) => it?.active !== false),
                    };
                })
            );

            setCourse(withYears);
        } catch (err) {
            console.error('Error fetching courses:', err);
            setError('Failed to load courses.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadCourses();
    }, []);

    return (
        <>
            <header className={`w-full bg-white border-b sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'border-rose-200 shadow-md' : 'border-slate-200 shadow-sm'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* LINE 1: Logo + Action Buttons */}
                    <div className="flex items-center justify-between py-3.5">
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); handleNavigate(); }}
                            className="flex items-center group"
                        >
                            <img
                                className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                src={Logo}
                                alt="Aurous Academy Logo"
                            />
                        </a>

                        {/* Desktop action buttons */}
                        <div className="hidden items-center gap-3.5 lg:flex">
                            <button
                                onClick={(e) => handleConvertToBase64(e)}
                                className="border border-rose-200 bg-rose-50/80 hover:bg-rose-100 text-rose-600 font-extrabold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition flex items-center gap-2 shadow-sm"
                            >
                                <span className="h-2 w-2 rounded-full bg-rose-600 animate-pulse"></span>
                                Download Admit Card
                            </button>

                            <button
                                onClick={handleNavigateAPRE}
                                className="bg-aurous-darkGreen hover:bg-aurous-emeraldAccent text-white font-extrabold px-6 py-3 rounded-xl text-sm sm:text-base transition shadow-lg shadow-emerald-950/20 transform hover:-translate-y-0.5 flex items-center gap-2"
                            >
                                <span>Apply Scholarship Exam</span>
                                <svg className="w-4 h-4 text-aurous-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </div>

                        {/* Mobile hamburger */}
                        <IconButton
                            className="lg:hidden"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open navigation menu"
                            sx={{ color: '#00382B' }}
                        >
                            <MenuIcon sx={{ fontSize: 32 }} />
                        </IconButton>
                    </div>

                    {/* LINE 2: Horizontal Menu Tabs */}
                    <div className="border-t border-slate-100 hidden lg:block">
                        <nav className="flex items-center justify-between w-full py-2.5 text-[15px] font-bold text-slate-700">
                            {/* About Aurous Dropdown */}
                            <div className="relative group">
                                <button className="hover:text-aurous-darkGreen flex items-center gap-1.5 py-1.5 transition">
                                    About Aurous <span className="text-xs text-slate-400 group-hover:text-aurous-darkGreen">▾</span>
                                </button>
                                <div className="absolute left-0 top-full hidden group-hover:block w-52 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                                    <Link href="/about" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">About Academy</Link>
                                    <Link href="/ourTeam" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">Directors' Message</Link>
                                </div>
                            </div>
                            {/* Scholarship Events Dropdown */}
                            <div className="relative group">
                                <button className="hover:text-aurous-darkGreen flex items-center gap-1.5 py-1.5 transition">
                                    Scholarship Events <span className="text-xs text-slate-400 group-hover:text-aurous-darkGreen">▾</span>
                                </button>
                                <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                                    <a href="https://apre.aurousacademy.com/" target="_blank" rel="noreferrer" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">APRE</a>
                                    <a href="https://pragyan.aurousacademy.com/" target="_blank" rel="noreferrer" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">Pragyan Scholarship Exam</a>
                                </div>
                            </div>
                            {/* Courses Dropdown */}
                            <div className="relative group">
                                <button className="hover:text-aurous-darkGreen flex items-center gap-1.5 py-1.5 transition">
                                    Courses <span className="text-xs text-slate-400 group-hover:text-aurous-darkGreen">▾</span>
                                </button>
                                <div className="absolute left-0 top-full hidden group-hover:block w-60 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                                    <Link href="/jee" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">IIT-JEE</Link>
                                    <Link href="/neet" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">NEET</Link>
                                    <Link href="/foundation" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">Olympiad & Foundation</Link>
                                    <Link href="https://aurousacademy.graphy.com/" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">Online Courses</Link>
                                </div>
                            </div>
                            {/* Results Dropdown */}
                            <div className="relative group">
                                <button className="hover:text-aurous-darkGreen flex items-center gap-1.5 py-1.5 transition">
                                    Results <span className="text-xs text-slate-400 group-hover:text-aurous-darkGreen">▾</span>
                                </button>
                                <div className="absolute left-0 top-full hidden group-hover:block w-52 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                                    {course.length > 0 ? (
                                        course.map((item) => (
                                            <div className="relative group/sub" key={item.id}>
                                                <button className="w-full text-left flex items-center justify-between p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">
                                                    <span>{item.title}</span>
                                                    <span className="text-xs text-slate-400">▸</span>
                                                </button>
                                                <div className="absolute left-full top-0 hidden group-hover/sub:block w-36 bg-white shadow-2xl rounded-xl border border-slate-100 p-2 ml-1">
                                                    {(item.children || []).map((year) => (
                                                        <Link
                                                            key={year.id}
                                                            href="/result"
                                                            onClick={() => {
                                                                const data = {
                                                                    courseId: resultCourseId,
                                                                    parentId: year.id,
                                                                };
                                                                sessionStorage.setItem('resultParams', JSON.stringify(data));
                                                                window.dispatchEvent(new CustomEvent('resultParamsChanged', { detail: data }));
                                                            }}
                                                            className="block p-2 hover:bg-emerald-50/60 rounded-lg text-slate-700 hover:text-aurous-darkGreen transition font-semibold"
                                                        >
                                                            {year.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <a href="#" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">Results</a>
                                    )}

                                    {/* <div className="relative group/sub">
                                        <button className="w-full text-left flex items-center justify-between p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">
                                            <span>NEET Results</span>
                                            <span className="text-xs text-slate-400">▸</span>
                                        </button>
                                        <div className="absolute left-full top-0 hidden group-hover/sub:block w-36 bg-white shadow-2xl rounded-xl border border-slate-100 p-2 ml-1">
                                            <a href="#" className="block p-2 hover:bg-emerald-50/60 rounded-lg text-slate-700 hover:text-aurous-darkGreen transition font-semibold">2026</a>
                                            <a href="#" className="block p-2 hover:bg-emerald-50/60 rounded-lg text-slate-700 hover:text-aurous-darkGreen transition font-semibold">2025</a>
                                            <a href="#" className="block p-2 hover:bg-emerald-50/60 rounded-lg text-slate-700 hover:text-aurous-darkGreen transition font-semibold">2024</a>
                                            <a href="#" className="block p-2 hover:bg-emerald-50/60 rounded-lg text-slate-700 hover:text-aurous-darkGreen transition font-semibold">2023</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <Link href="/banner" className="hover:text-aurous-darkGreen transition py-1.5">Gallery</Link>
                            <Link href="/timetable" className="hover:text-aurous-darkGreen transition py-1.5">Timetable</Link>
                            <button onClick={handleOpenContactUs} className="hover:text-aurous-darkGreen transition py-1.5">Contact</button>

                            <a href="tel:+919993936947" className="flex items-center gap-2 bg-slate-900 text-white hover:bg-aurous-darkGreen font-extrabold px-3.5 py-1.5 rounded-lg text-sm transition shadow-sm border border-slate-800">
                                <svg className="w-4 h-4 text-aurous-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span>9993936947</span>
                            </a>

                        </nav>
                    </div>

                </div>
            </header>

            {/* Mobile navigation drawer */}
            <Drawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                PaperProps={{ sx: { width: 300, maxWidth: '85vw' } }}
            >
                <div className="flex h-full flex-col bg-white">
                    <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                        <span className="text-base font-extrabold text-aurous-darkGreen">Menu</span>
                        <IconButton onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                            <CloseIcon />
                        </IconButton>
                    </div>

                    <div className="flex-1 overflow-y-auto px-3 py-2">
                        <button
                            type="button"
                            onClick={() => setOpenCourses((v) => !v)}
                            className="flex w-full items-center justify-between rounded-lg p-3 text-left text-sm font-bold text-slate-800 hover:bg-emerald-50/60"
                        >
                            Courses
                            <span className="text-slate-400">{openCourses ? '▾' : '▸'}</span>
                        </button>
                        {openCourses && (
                            <div className="mb-1 ml-2 border-l border-slate-200 pl-2">
                                <Link href="/jee" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg p-2.5 text-sm font-semibold text-slate-700 hover:bg-emerald-50/60">IIT-JEE</Link>
                                <Link href="/neet" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg p-2.5 text-sm font-semibold text-slate-700 hover:bg-emerald-50/60">NEET</Link>
                                <Link href="/foundation" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg p-2.5 text-sm font-semibold text-slate-700 hover:bg-emerald-50/60">Olympiad & Foundation</Link>
                                <a href="https://aurousacademy.graphy.com/" target="_blank" rel="noreferrer" className="block rounded-lg p-2.5 text-sm font-semibold text-slate-700 hover:bg-emerald-50/60">Online Courses</a>
                            </div>
                        )}

                        <a href="https://apre.aurousacademy.com/" target="_blank" rel="noreferrer" className="block rounded-lg p-3 text-sm font-bold text-slate-800 hover:bg-emerald-50/60">APRE Scholarship Exam</a>
                        <a href="https://pragyan.aurousacademy.com/" target="_blank" rel="noreferrer" className="block rounded-lg p-3 text-sm font-bold text-slate-800 hover:bg-emerald-50/60">Pragyan Scholarship Exam</a>

                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg p-3 text-sm font-bold text-slate-800 hover:bg-emerald-50/60">About Academy</Link>
                        <Link href="/ourTeam" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg p-3 text-sm font-bold text-slate-800 hover:bg-emerald-50/60">Directors' Message</Link>

                        <button
                            type="button"
                            onClick={() => setOpenResults((v) => !v)}
                            className="flex w-full items-center justify-between rounded-lg p-3 text-left text-sm font-bold text-slate-800 hover:bg-emerald-50/60"
                        >
                            Results
                            <span className="text-slate-400">{openResults ? '▾' : '▸'}</span>
                        </button>
                        {openResults && (
                            <div className="mb-1 ml-2 border-l border-slate-200 pl-2">
                                {course.length > 0 ? (
                                    course.map((item) => (
                                        <div key={item.id}>
                                            <div className="p-2.5 text-sm font-bold text-aurous-darkGreen">{item.title}</div>
                                            {(item.children || []).map((year) => (
                                                <Link
                                                    key={year.id}
                                                    href="/result"
                                                    onClick={() => {
                                                        const data = { courseId: resultCourseId, parentId: year.id };
                                                        sessionStorage.setItem('resultParams', JSON.stringify(data));
                                                        window.dispatchEvent(new CustomEvent('resultParamsChanged', { detail: data }));
                                                        setMobileMenuOpen(false);
                                                    }}
                                                    className="block rounded-lg p-2.5 pl-5 text-sm font-semibold text-slate-700 hover:bg-emerald-50/60"
                                                >
                                                    {year.title}
                                                </Link>
                                            ))}
                                        </div>
                                    ))
                                ) : (
                                    <Link href="/result" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg p-2.5 text-sm font-semibold text-slate-700 hover:bg-emerald-50/60">Results</Link>
                                )}
                            </div>
                        )}

                        <Link href="/banner" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg p-3 text-sm font-bold text-slate-800 hover:bg-emerald-50/60">Gallery</Link>
                        <Link href="/timetable" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg p-3 text-sm font-bold text-slate-800 hover:bg-emerald-50/60">Timetable</Link>
                        <button
                            type="button"
                            onClick={() => { setMobileMenuOpen(false); setOpenContactUs(true); }}
                            className="block w-full rounded-lg p-3 text-left text-sm font-bold text-slate-800 hover:bg-emerald-50/60"
                        >
                            Contact
                        </button>
                    </div>

                    <div className="border-t border-slate-200 p-3">
                        <button
                            onClick={(e) => handleConvertToBase64(e)}
                            className="mb-2 flex w-full items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50/80 px-4 py-2.5 text-xs font-extrabold text-rose-600 shadow-sm"
                        >
                            <span className="h-2 w-2 rounded-full bg-rose-600 animate-pulse"></span>
                            Download Admit Card
                        </button>
                        <button
                            onClick={handleNavigateAPRE}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-aurous-darkGreen px-4 py-2.5 text-xs font-extrabold text-white shadow-sm"
                        >
                            Apply Scholarship Exam
                        </button>
                    </div>
                </div>
            </Drawer>

            <Dialog
                open={openContactUs}
                onClose={() => setOpenContactUs(false)}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "450px",
                            borderRadius: '16px',
                        },
                    },
                }}
            >
                <ContactUs handleClose={() => setOpenContactUs(false)} />
            </Dialog>
        </>
    )
}

export default NavBarOne


