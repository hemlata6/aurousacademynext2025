'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Network from '@/lib/Netwrok';
import instId from '@/constant/instId';
import Endpoints from '@/constant/endpoints';

const HomeBannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banners, setBanners] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  // Fetch banners and apply repeat/unique logic
  const getBanners = async () => {
    try {
      const response = await Network.fetchBannerss(instId.instId);
      const fetchedBanners = response.banners || [];
      let resultBanner = [];
      fetchedBanners.forEach((item) => {
        if (item?.group === 'TOP BANNER 3:1') {
          resultBanner.push(item);
        }
      });
      if (resultBanner.length === 1) {
        // Only one banner, repeat it three times
        setBanners([resultBanner[0], resultBanner[0], resultBanner[0]]);
      } else if (resultBanner.length > 1) {
        // Multiple banners, use as is
        setBanners(resultBanner);
      } else {
        setBanners([]);
      }
    } catch (error) {
      console.error('Failed to fetch banners:', error);
      setBanners([]);
    }
  };

  useEffect(() => {
    getBanners();
  }, []);

  // Auto-scroll only if more than 1 unique banner
  useEffect(() => {
    if (banners.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % banners.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [banners, isPaused]);

  // Listen for external arrow events
  useEffect(() => {
    const handlePrev = () => {
      if (banners.length === 0) return;
      setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };
    const handleNext = () => {
      if (banners.length === 0) return;
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };
    window.addEventListener('carousel-prev', handlePrev);
    window.addEventListener('carousel-next', handleNext);
    return () => {
      window.removeEventListener('carousel-prev', handlePrev);
      window.removeEventListener('carousel-next', handleNext);
    };
  }, [banners]);

  const goToSlide = useCallback(
    (index) => {
      if (banners.length <= 1) return;
      setCurrentIndex(((index % banners.length) + banners.length) % banners.length);
    },
    [banners.length]
  );

  if (banners.length === 0) return null;

  return (
    <section
      className="group relative w-full overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((img, index) => (
            <div
              key={index}
              className="relative w-full flex-shrink-0 aspect-[4.5/1] min-h-[120px] overflow-hidden bg-slate-950"
            >
              <img
                src={`${Endpoints?.mediaBaseUrl}${img?.banner}`}
                alt={img?.title || `Aurous Academy banner ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {banners.length > 1 && (
        <>
          {/* Prev / Next arrows */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goToSlide(currentIndex - 1)}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-950/70 p-2.5 text-white opacity-0 transition hover:bg-slate-900 group-hover:opacity-100"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goToSlide(currentIndex + 1)}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-950/70 p-2.5 text-white opacity-0 transition hover:bg-slate-900 group-hover:opacity-100"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide indicators */}
          <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={
                  index === currentIndex
                    ? 'h-2.5 w-6 rounded-full bg-aurous-yellow transition-all duration-300'
                    : 'h-2.5 w-2.5 rounded-full bg-white/40 transition-all duration-300 hover:bg-white/70'
                }
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default HomeBannerSlider;
