'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dialog } from '@mui/material';
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
                                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                src={Logo}
                                alt="Aurous Academy Logo"
                            />
                        </a>

                        <div className="flex items-center gap-3.5">
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
                    </div>

                    {/* LINE 2: Horizontal Menu Tabs */}
                    <div className="border-t border-slate-100 hidden lg:block">
                        <nav className="flex items-center justify-between w-full py-2.5 text-[15px] font-bold text-slate-700">

                            {/* Courses Dropdown */}
                            <div className="relative group">
                                <button className="hover:text-aurous-darkGreen flex items-center gap-1.5 py-1.5 transition">
                                    Courses <span className="text-xs text-slate-400 group-hover:text-aurous-darkGreen">▾</span>
                                </button>
                                <div className="absolute left-0 top-full hidden group-hover:block w-60 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                                    <Link href="/jee" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">IIT-JEE (Main & Adv)</Link>
                                    <Link href="/neet" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">NEET-UG Medical</Link>
                                    <Link href="/foundation" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">Foundation (Class 7-10)</Link>
                                    <Link href="https://aurousacademy.graphy.com/" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">Online Courses</Link>
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

                            {/* About Aurous Dropdown */}
                            <div className="relative group">
                                <button className="hover:text-aurous-darkGreen flex items-center gap-1.5 py-1.5 transition">
                                    About Aurous <span className="text-xs text-slate-400 group-hover:text-aurous-darkGreen">▾</span>
                                </button>
                                <div className="absolute left-0 top-full hidden group-hover:block w-52 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                                    <Link href="/about" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">About Academy</Link>
                                    <Link href="/ourTeam" className="block p-2.5 hover:bg-emerald-50/60 rounded-lg text-slate-800 hover:text-aurous-darkGreen transition font-semibold">Expert Faculty</Link>
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


