"use client"
import React, {useState, useEffect} from 'react';
import {ArrowUpRight} from 'lucide-react';
import { services } from "../app/content/home";
export default function ServicesCarousel(){
    const {
        headingLine1,
        headingLine2,
        headingLine3,
        description,
        ctaLabel,
        footerLabel,
    }= services;
    const fallbackServiceImages = [
  'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=85',
];

    const [hoveredIdx, setHoveredIdx] = useState(0);
      const archBackgrounds = [
    'bg-gradient-to-b from-indigo-50/25 via-blue-50/15 to-indigo-50/35',
    'bg-gradient-to-b from-indigo-50/25 via-blue-50/15 to-indigo-50/35',
    'bg-gradient-to-b from-blue-50/25 via-indigo-50/15 to-blue-50/35',
  ];
      const arches =
    services?.serviceCards?.map((card, idx) => ({
      id: card.id ?? String(idx),
      label: card.title?.toUpperCase(),
      labelLine1: card.labelLine1,
      labelLine2: card.labelLine2,
      type: card.cardType === 'image' ? 'image' : 'vertical-text',
      image:
        card.image?.url ||
        fallbackServiceImages[idx % fallbackServiceImages.length],
      imageAlt: card.image?.altText,
      bg: archBackgrounds[idx] ?? archBackgrounds[1],
    })) ?? [];
    // Auto-slide on mobile every 2 seconds
    useEffect(() => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      if (!isMobile) return;
      const timer = setInterval(() => {
        setHoveredIdx((prev) => (prev + 1) % arches.length);
      }, 2000);
      return () => clearInterval(timer);
    }, [arches.length]);
    return(
          <section
      className="bg-[#f8f9fa] py-12 md:py-8 px-4 sm:px-8 lg:px-12 relative overflow-hidden"
      id="services"
    >
      {/* Dynamic graphic lighting */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Outer Content frame */}
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-between space-y-12 relative z-10">
        {/* COMMON BRAND NAVBAR AT THE TOP (Matches screenshot) */}

        {/* HERO TITLE GRID CONTAINER (Exact copy & layout of the screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
          <div className="lg:col-span-8 text-center lg:text-left">
            <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-7xl lg:text-[76px] leading-[1.05] text-slate-950 tracking-tight">
              {headingLine1}
              <br />
              {headingLine2}
              <br />
              <span>{headingLine3}</span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {description}
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-white border border-gray-200 rounded-full pl-6 pr-2 py-2 flex items-center space-x-4 shadow-sm">
                <span>{ctaLabel}</span>
                <span className="w-9 h-9 rounded-full bg-[#afd3f8] flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile-only cards section */}
        <div className="md:hidden mt-10">
          <div className="relative h-[420px] rounded-[36px] overflow-hidden shadow-xl">
            <img
              src={arches[hoveredIdx]?.image}
              alt={arches[hoveredIdx]?.imageAlt ?? ""}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-6 right-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] mb-2">
                Service
              </p>
              <h3 className="font-display text-3xl leading-tight">
                {arches[hoveredIdx]?.labelLine1}
              </h3>
              <h3 className="font-display text-3xl leading-tight">
                {arches[hoveredIdx]?.labelLine2}
              </h3>
              <button className="mt-6 w-12 h-12 rounded-full bg-[#afd3f8] text-slate-900 flex items-center justify-center">
                <ArrowUpRight />
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-6">
            {arches.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHoveredIdx(idx)}
                className={`transition-all rounded-full ${
                  hoveredIdx === idx
                    ? "w-8 h-2 bg-slate-900"
                    : "w-2 h-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* PARABOLIC / CAPSULE ARCHES LIST SECTIONS (Exact replica of the screenshot visual) */}
        <div
          className="hidden md:flex gap-6 pt-8 items-stretch relative z-10 w-full min-h-[520px]"
          onMouseLeave={() => setHoveredIdx(0)}
        >
          {arches.map((arch, idx) => {
            const isHovered = hoveredIdx === idx;
            const borderRadiusClass = isHovered
              ? 'rounded-full'
              : 'rounded-t-[180px] rounded-b-[40px]';
            const flexClass = isHovered ? 'md:flex-[1.4]' : 'md:flex-[0.8]';
            const bgClass = isHovered
              ? 'bg-gradient-to-b from-[#e8f1fc] via-[#f0f6fd] to-[#dbebfa] border-transparent'
              : arch.bg;

            return (
              <div
                key={arch.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`relative overflow-hidden min-h-[460px] sm:min-h-[520px] flex flex-col justify-between border border-gray-200/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer ${borderRadiusClass} ${flexClass} ${bgClass}`}
                id={`arch-card-${arch.id}`}
              >
                {arch.image && (
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isHovered
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  >
                    <img
                      src={arch.image}
                      alt={arch.imageAlt ?? ''}
                      className="w-full h-full object-cover transition-transform duration-700 brightness-95"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  </div>
                )}

                {/* Animated text: rotated in capsule mode, normal in active circle mode */}
                <div
                  className={`absolute inset-0 z-20 flex items-center justify-center p-6 select-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isHovered ? 'rotate-0 scale-100' : 'rotate-90 scale-100'
                  }`}
                >
                  <div
                    className={`flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isHovered ? 'gap-y-2' : 'gap-y-4 sm:gap-y-6'
                    }`}
                  >
                    <div
                      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isHovered
                          ? 'bg-[#afd3f8]/55 backdrop-blur-md border border-white/20 py-2.5 px-7 rounded-full text-center shadow-xs'
                          : 'bg-transparent border border-transparent p-0'
                      }`}
                    >
                      <span
                        className={`uppercase block whitespace-nowrap transition-all duration-700 ${
                          isHovered
                            ? 'font-sans font-black text-white text-base sm:text-lg tracking-widest'
                            : 'font-display font-medium tracking-tight text-4xl sm:text-5xl lg:text-[54px] text-slate-800/60'
                        }`}
                      >
                        {arch.labelLine1}
                      </span>
                    </div>
                    <div
                      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isHovered
                          ? 'bg-[#afd3f8]/55 backdrop-blur-md border border-white/20 py-2.5 px-7 rounded-full text-center shadow-xs'
                          : 'bg-transparent border border-transparent p-0'
                      }`}
                    >
                      <span
                        className={`uppercase block whitespace-nowrap transition-all duration-700 ${
                          isHovered
                            ? 'font-sans font-black text-white text-base sm:text-lg tracking-widest'
                            : 'font-display font-medium tracking-tight text-4xl sm:text-5xl lg:text-[54px] text-slate-800/60'
                        }`}
                      >
                        {arch.labelLine2}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Active state accents */}
                <div
                  className={`absolute inset-0 z-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between p-8 ${
                    isHovered
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 translate-y-8 pointer-events-none'
                  }`}
                >
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-13 h-13 rounded-full bg-[#afd3f8] hover:bg-slate-900 hover:text-white text-slate-950 flex items-center justify-center shadow-md transition-all duration-300">
                      <ArrowUpRight className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global telemetry subtitle credit label */}
        <div className="text-center pt-4 text-slate-300 font-mono text-[10px] uppercase tracking-widest relative z-10 select-none">
          {footerLabel}
        </div>
      </div>
    </section>
    )
}