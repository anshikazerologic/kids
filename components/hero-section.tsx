"use client"
import React, {useState} from 'react';
import {Play, Apple, ArrowUpRight, ArrowRight} from 'lucide-react';
import { heroContent } from "../app/content/home";

export default function  HeroSection () {

     const [researchHovered, setResearchHovered] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
    const {
  eyebrow,
  headingLine1,
  headingLine2,
  headingLine3,
  ctaLabel,
  ctaUrl,
  brandShortText,
  brandName,
  miniLogoText,
  insightCardTitle,
  insightCardButtonLabel,
  statValue,
  statLabel,
  floatingTag1,
  floatingTag2,
  floatingTag3,
  videoTitle,
  videoDescription,
  mainImage,
  inlineAthleteImage,
  avatar1,
  avatar2,
  avatar3,
  videoThumbnail,
} = heroContent;


  return (
       <section
      className="relative w-full bg-[#f8f9fa] min-h-screen py-8 px-4 sm:px-8 lg:px-12 flex flex-col justify-between overflow-hidden"
      id="features"
    >
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-32 h-px w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch my-auto">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-12 pr-0 lg:pr-6 py-4 animate-[homeRise_700ms_ease-out_both]">
          {/* Core Copy & Massive Heading */}
          <div className="space-y-6">
            <span className="text-gray-500 font-sans text-sm font-medium tracking-wide block">
              {eyebrow}
            </span>

            {/* Display Header title */}
            <h1 className="font-display font-medium text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.05] text-slate-950 tracking-tight">
              {headingLine1} <br />
              <span className="flex flex-wrap items-center gap-x-3.5 gap-y-2">
                <span>{headingLine2}</span>

                {/* Embedded Spinning Circle Play Button */}
                <span
                  onClick={() => setVideoModal(true)}
                  className="inline-flex items-center justify-center relative w-14 h-14 bg-indigo-50 hover:bg-indigo-100 rounded-full border border-indigo-200/60 shadow-sm cursor-pointer transition-all duration-300 group hover:scale-105"
                >
                  <svg
                    className="w-full h-full animate-spin-slow absolute inset-0"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        id="circleTextPath"
                        d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                        fill="none"
                      />
                    </defs>
                    {videoTitle && (
                      <text className="text-[10px] font-bold tracking-[0.16em] uppercase fill-indigo-600/70 font-sans">
                        <textPath href="#circleTextPath" startOffset="0%">
                          {videoTitle}
                        </textPath>
                      </text>
                    )}
                  </svg>
                  <Play className="w-4.5 h-4.5 text-indigo-600 fill-indigo-600 relative z-10 translate-x-0.5" />
                </span>

                {/* Blue "iaq" circle logo */}
                <span className="inline-flex items-center justify-center w-14 h-14 bg-[#d0e5fc] rounded-full border border-blue-200 shadow-2xs font-display font-black text-blue-700 text-lg hover:rotate-12 transition-transform duration-300">
                  {miniLogoText}
                </span>

                {inlineAthleteImage && (
                  <span className="inline-block w-14 h-14 rounded-full overflow-hidden border border-gray-200 bg-white shadow-2xs relative">
                    <img
                      src={inlineAthleteImage}
                      alt={''}
                      className="w-full h-full object-cover scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                )}
              </span>
              <span>{headingLine3}</span>
            </h1>

            {/* Action Get Started Button */}
            <div className="pt-4 flex">
              <a
                href={ctaUrl}
                className="bg-white border border-gray-200 hover:border-slate-900 hover:scale-[1.03] active:scale-[0.98] rounded-full pl-6 pr-2 py-2 flex items-center space-x-4 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <span className="font-sans font-semibold text-slate-800 text-base">
                  {ctaLabel}
                </span>
                <span className="w-9 h-9 rounded-full bg-[#d0e5fc] text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4.5 h-4.5" />
                </span>
              </a>
            </div>
          </div>

          {/* Bottom Row Segment containing 2 Custom Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8">
            {/* Card 1: Apple/Play Store and ia Insights */}
            <div className="bg-[#f0f2f5]/60 hover:bg-[#f0f2f5]/90 border border-gray-200/40 rounded-[30px] p-6 flex flex-col justify-between space-y-8 shadow-3xs transition-all duration-300 group">
              <div className="flex items-start justify-between">
                {/* Store mini icons & Big blue ia logo */}
                <div className="flex items-center space-x-3.5">
                  <div className="flex flex-col space-y-1 text-slate-500">
                    <Apple className="w-4 h-4" />
                    <Play className="w-3.5 h-3.5 fill-slate-500 stroke-0" />
                  </div>
                  <div className="w-14 h-14 bg-[#4196fa] rounded-2xl flex items-center justify-center text-white font-display font-black text-2xl shadow-sm shadow-blue-500/20 group-hover:rotate-6 transition-transform">
                    {brandShortText}
                  </div>
                </div>
                {/* Link Northeast arrow */}
                <span className="w-10 h-10 rounded-full bg-white border border-gray-200/50 flex items-center justify-center text-slate-700 shadow-2xs hover:bg-slate-900 hover:text-white transition-colors duration-300 relative z-10 cursor-pointer">
                  <ArrowUpRight className="w-4.5 h-4.5" />
                </span>
              </div>

              <div>
                <span className="font-sans font-semibold text-lg text-slate-900 block mb-3">
                  {insightCardTitle}
                </span>

                {/* Trigger Action button */}
                <button
                  onMouseEnter={() => setResearchHovered(true)}
                  onMouseLeave={() => setResearchHovered(false)}
                  className="w-full py-3 bg-white hover:bg-slate-950 hover:text-white border border-gray-200 text-slate-700 text-sm font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>{insightCardButtonLabel}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${researchHovered ? 'translate-x-1.5' : ''}`}
                  />
                </button>
              </div>
            </div>

            {/* Card 2: 12K+ Training Programs */}
            <div className="bg-[#f1f4f8]/50 border border-gray-200/30 rounded-[30px] p-6 flex flex-col justify-between space-y-8 shadow-3xs transition-all">
              <div className="flex items-start justify-between">
                {/* Stacked Athlete Avatars */}
                <div className="flex items-center -space-x-2.5">
                  {avatar1 && (
                    <img
                      src={avatar1}
                      alt={''}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-3xs"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  {avatar2 && (
                    <img
                      src={avatar2}
                      alt={''}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-3xs"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  {avatar3 && (
                    <img
                      src={avatar3}
                      alt={''}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-3xs"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
                {/* Small blue top link arrow */}
                <span className="w-8 h-8 rounded-full bg-[#d0e5fc] text-blue-700 flex items-center justify-center shadow-3xs">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-3xl text-slate-900 tracking-tight leading-none mb-1">
                  {statValue}
                </h3>
                <span className="font-sans text-sm text-gray-500 font-medium">
                  {statLabel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Premium visual Device display card) */}
        <div className="lg:col-span-5 relative flex justify-center py-4">
          <div className="w-full relative rounded-[40px] overflow-hidden group/card shadow-2xl h-[580px] sm:h-[640px] lg:h-[720px] bg-slate-900 animate-[homeRise_900ms_ease-out_120ms_both]">
            {/* Background image running athlete */}
            <div className="absolute inset-0 z-0">
              <img
                src={mainImage}
                alt={''}
                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Slate gradients overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/30 z-1" />
            </div>

            {/* Inner Content overlay wrapper - Top and Bottom elements */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-8">
              <div />

              {/* Inner BOTTOM floating tag stack */}
              <div className="flex flex-col items-end space-y-3">
                {/* 1. Innovative tag */}
                <div className="bg-white/15 backdrop-blur-sm border border-white/30 text-white font-sans font-medium px-4.5 py-2.5 rounded-full text-sm flex items-center space-x-2 shadow-xs group/tag hover:bg-white/20 transition-all cursor-pointer">
                  <span>{floatingTag1}</span>
                  <span className="text-white/70 group-hover/tag:rotate-95 transition-transform font-light text-base">
                    +
                  </span>
                </div>

                {/* 2. Revolutionary tag - sky blue filled design */}
                <div className="bg-[#d0e5fc] text-blue-900 border border-blue-200/50 font-sans font-semibold px-5 py-3 rounded-full text-base flex items-center space-x-2.5 shadow-md hover:scale-103 transition-transform cursor-pointer">
                  <span>{floatingTag2}</span>
                </div>

                {/* 3. Empowering tag */}
                <div className="bg-white/15 backdrop-blur-sm border border-white/30 text-white font-sans font-medium px-4.5 py-2.5 rounded-full text-sm flex items-center space-x-2 shadow-xs group/tag hover:bg-white/20 transition-all cursor-pointer">
                  <span>{floatingTag3}</span>
                  <span className="text-white/70 group-hover/tag:rotate-95 transition-transform font-light text-base">
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation speeds for spinning video circles */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes homeRise {
          0% { opacity: 0; transform: translateY(22px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>

      {/* Video Modal Player popup */}
      <div>
        {videoModal && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl w-full max-w-2xl relative shadow-2xl">
              <button
                onClick={() => setVideoModal(false)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 text-xs font-semibold cursor-pointer"
              >
                ✕ Close
              </button>

              <div className="space-y-4 pt-4 text-center">
                <span className="w-12 h-12 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold mx-auto mb-2 animate-bounce">
                  ia
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {videoTitle}
                </h3>
                <p className="text-slate-400 text-sm max-w-sm mx-auto">
                  {videoDescription}
                </p>

                {/* Simulated video frame */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center group cursor-pointer">
                  {videoThumbnail && (
                    <img
                      src={videoThumbnail}
                      alt={''}
                      className="w-full h-full object-cover opacity-60"
                    />
                  )}
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors" />
                  <span className="w-16 h-16 rounded-full bg-[#4196fa] flex items-center justify-center text-white shadow-xl hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 fill-white stroke-none translate-x-0.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

