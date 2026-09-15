'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import instId from '@/constant/instId';

const getMediaUrl = (item) => {
  const raw = item?.thumb || item?.image || item?.url || item?.banner;
  if (!raw) return null;
  return raw.startsWith('http') ? raw : `${Endpoints?.mediaBaseUrl || ''}${raw}`;
};

const getItemTitle = (item) => item?.title || item?.name || 'Result';

const stripHtml = (value) =>
  (typeof value === 'string' ? value.replace(/<[^>]*>/g, '') : value || '').trim();

const getCleanTitle = (item) => stripHtml(item?.title || item?.name) || 'Result';

const getPercentile = (item) =>
  stripHtml(item?.percentile || item?.percentage || item?.percent || '');

const getExamName = (item) =>
  stripHtml(item?.examName || item?.exam || item?.subtitle || '');

const getAirRank = (item) =>
  stripHtml(item?.airRank || item?.air || item?.rank || '');

const LEVEL1_ORDER = ['IIT-JEE', 'NEET-UG', 'FOUNDATION & BOARDS', 'FOUNDATION'];

const sortLevel1 = (list) => {
  const order = LEVEL1_ORDER.map((k) => k.toLowerCase());
  const getRank = (item) => {
    const t = getItemTitle(item).trim().toLowerCase();
    const exact = order.indexOf(t);
    if (exact !== -1) return exact;
    const partial = order.findIndex((k) => t.includes(k));
    return partial !== -1 ? partial : LEVEL1_ORDER.length;
  };
  return [...list].sort((a, b) => getRank(a) - getRank(b));
};

const VerifiedStudentsResultSection = () => {
  const [course, setCourse] = useState(null);
  const [level1, setLevel1] = useState([]);
  const [level2, setLevel2] = useState([]);
  const [level3, setLevel3] = useState([]);
  const [selectedLevel1, setSelectedLevel1] = useState(null);
  const [selectedLevel2, setSelectedLevel2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Load courses and keep only the "VERIFIED RESULTS 2026" course
  const loadCourses = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await Network.fetchCourses(instId.instId);
      const courses = response?.courses || [];
      const target = courses.find(
        (c) => (c?.name || c?.title || '').trim().toLowerCase() === 'verified results 2026'
      );
      setCourse(target || null);
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

  // fetchScheduleApi call #1: load the folders of the selected course (auto-run)
  const loadFolders = async (courseId) => {
    try {
      setLoading(true);
      setError('');
      const response = await Network.fetchScheduleApi(courseId, 0);
      const list = (response?.contentList || []).filter((item) => item?.active !== false);
      const sorted = sortLevel1(list);
      setLevel1(sorted);
      setLevel2([]);
      setLevel3([]);
      setSelectedLevel1(null);
      setSelectedLevel2(null);
    } catch (err) {
      console.error('Error fetching schedule:', err);
      setError('Failed to load results.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (course?.id) {
      loadFolders(course.id);
    }
  }, [course]);

  // Auto-select the first level-1 folder by default
  useEffect(() => {
    if (level1.length > 0 && !selectedLevel1) {
      handleLevel1Click(level1[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level1]);

  // Auto-select the first level-2 sub-tab by default
  useEffect(() => {
    if (level2.length > 0 && !selectedLevel2) {
      handleLevel2Click(level2[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level2]);

  // fetchScheduleApi call #2: children of the selected level-1 item
  const handleLevel1Click = async (item) => {
    if (!course?.id || !item?.id) return;
    try {
      setLoading(true);
      setError('');
      const response = await Network.fetchScheduleApi(course.id, item.id);
      const list = (response?.contentList || []).filter((it) => it?.active !== false);
      setLevel2(list);
      setLevel3([]);
      setSelectedLevel1(item);
      setSelectedLevel2(null);
    } catch (err) {
      console.error('Error fetching schedule:', err);
      setError('Failed to load results.');
    } finally {
      setLoading(false);
    }
  };

  // fetchScheduleApi call #3: children of the selected level-2 item (final content)
  const handleLevel2Click = async (item) => {
    if (!course?.id || !item?.id) return;
    try {
      setLoading(true);
      setError('');
      const response = await Network.fetchScheduleApi(course.id, item.id);
      const list = (response?.contentList || []).filter((it) => it?.active !== false);
      setLevel3(list);
      setSelectedLevel2(item);
    } catch (err) {
      console.error('Error fetching schedule:', err);
      setError('Failed to load results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-100/70 px-4 py-12 sm:px-6 lg:px-8" id="results">
      <div className="relative mx-auto max-w-7xl rounded-3xl border border-emerald-900/10 bg-[#F4F9F6] p-6 shadow-sm sm:p-10">
        {/* Top Header & View All CTA */}
        <div className="relative mb-6 flex flex-col items-center gap-4 text-center sm:block sm:text-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-emerald-800">
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-ping"></span>
              Verified Results 2026
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Real Students. Published Outcomes.
            </h2>
          </div>

          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-aurous-darkGreen px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-950/10 transition hover:scale-105 hover:bg-[#00523F] sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:text-sm"
          >
            <span>View All Results</span>
            <svg className="h-4 w-4 text-aurous-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </Link>
        </div>

        {/* LEVEL 1 items (children of the course) */}
        {level1.length > 0 && (
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {level1.map((item) => {
              const active = selectedLevel1?.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleLevel1Click(item)}
                  disabled={loading}
                  className={`tab-btn rounded-xl px-6 py-2.5 text-xs font-extrabold transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm ${
                    active
                      ? 'bg-aurous-darkGreen text-white shadow-sm'
                      : 'border border-slate-200/80 bg-white font-bold text-slate-700 hover:bg-slate-200/80'
                  }`}
                >
                  {getItemTitle(item)}
                </button>
              );
            })}
          </div>
        )}

        {/* LEVEL 2 sub-tabs (children of the selected level-1 item) */}
        {level2.length > 0 && (
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            {level2.map((item) => {
              const active = selectedLevel2?.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleLevel2Click(item)}
                  disabled={loading}
                  className={`tab-btn rounded-lg px-5 py-2 text-[11px] font-bold transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:text-xs ${
                    active
                      ? 'bg-aurous-darkGreen text-white shadow-sm'
                      : 'border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-200/80'
                  }`}
                >
                  {getItemTitle(item)}
                </button>
              );
            })}
          </div>
        )}

        {/* LEVEL 3 cards (final content of the selected level-2 item) */}
        {level3.length > 0 && (
          <div className="grid min-h-[160px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {level3.map((item) => {
              const mediaUrl = getMediaUrl(item);
              const title = item?.title || item?.name || 'Untitled Image';
              const altText = getCleanTitle(item);
              const percentile = getPercentile(item);
              const examName = getExamName(item);
              const airRank = getAirRank(item);
              return (
                <div
                  key={item.id}
                  className="result-card animate-card-entry group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:-translate-y-1.5 hover:border-emerald-700/30 hover:shadow-xl"
                >
                  <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-aurous-yellow opacity-0 transition-opacity group-hover:opacity-100"></div>

                  <div className="relative flex-shrink-0">
                    <div className="h-28 w-24 overflow-hidden rounded-xl bg-slate-100">
                      {mediaUrl ? (
                        <img
                          src={mediaUrl}
                          alt={altText}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-3xl text-emerald-200">★</div>
                      )}
                    </div>

                    <div className="absolute -bottom-2 -right-2 flex items-center gap-1 rounded-lg bg-aurous-darkGreen px-2 py-1 shadow-md">
                      <span className="text-[11px] leading-none text-aurous-yellow">★</span>
                      <span className="text-[10px] font-bold leading-none text-white">Top</span>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4
                      className="truncate text-sm font-extrabold leading-snug text-aurous-darkGreen"
                      dangerouslySetInnerHTML={{ __html: title || 'Untitled Image' }}
                    />
                    {percentile && (
                      <p className="mt-0.5 truncate text-[13px] font-extrabold leading-snug text-aurous-darkGreen">
                        {percentile}
                      </p>
                    )}
                    {examName && (
                      <p className="mt-0.5 truncate text-xs font-semibold leading-snug text-slate-500">
                        {examName}
                      </p>
                    )}
                    {airRank && (
                      <span className="mt-1.5 inline-flex items-center rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-bold text-aurous-darkGreen">
                        {airRank}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Loading / Error / Empty states */}
        {loading && (
          <div className="flex justify-center py-10 text-sm font-semibold text-slate-500">Loading results…</div>
        )}
        {!loading && error && (
          <div className="flex justify-center py-10 text-sm font-semibold text-rose-500">{error}</div>
        )}
        {!loading && !error && !course && (
          <div className="flex justify-center py-10 text-sm font-semibold text-slate-500">
            No “VERIFIED RESULTS 2026” course found.
          </div>
        )}

        {/* Footnote */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-slate-200/60 pt-6 text-xs text-slate-500 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-slate-700">100% Authentic Classroom Ranks</span>
          </div>
          <p className="text-center text-[12px] font-semibold text-slate-600 sm:text-right">
            Premier Coaching Institute in Bhopal, Madhya Pradesh offering interactive Face-to-Face Classroom Learning.
          </p>
        </div>
      </div>

      <style>{`
        .tab-btn { transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
        .result-card { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-card-entry { animation: cardFadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
};

export default VerifiedStudentsResultSection;
