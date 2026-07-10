"use client"
import React, {useState} from 'react';
import {Play, Share2, Check, Sparkles} from 'lucide-react';
import {socialProof} from "../app/content/home";
export default function SocialProof() {
     const {    
  eyebrow,
  heading,
  ctaLabel,
 joinedLabel,
  startingCount,
  targetCount,
  portrait,
   marquee,
 marqueeText1,
  marqueeText2,
  
    }= socialProof;
  const [count, setCount] = useState(startingCount);
  const [isJoined, setIsJoined] = useState(false);

   const handleJoin = () => {
    window.location.href = '/become-part-of-it';

    setIsJoined(true);
    setCount((prev) => prev + 1);
    setTimeout(() => setIsJoined(false), 4000);
  };
   
    return(
         <section
      className="py-20 bg-white relative overflow-hidden flex flex-col justify-between"
      id="community"
    >
      {/* Subtle top horizontal dividers */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gray-100" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 relative z-10 space-y-12">
        {/* TOP ROW HELPER NAVIGATION (Matches screenshot) */}
        <div className="flex items-start justify-between w-full">
          {/* Left Block: Login Pill & Play Icon Row */}
          <div className="space-y-4">
            {/* Utility circle icons stack (Play, iaq logo, Share) */}
            <div className="flex items-center space-x-2.5">
              {/* Play button */}
              <button className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center hover:scale-105 transition-transform">
                <Play className="w-3 h-3 fill-white translate-x-0.5" />
              </button>

              {/* iaq light-blue miniature circle */}
              <span className="w-8 h-8 rounded-full bg-[#d0e5fc] border border-blue-200 flex items-center justify-center font-display font-black text-blue-700 text-xs">
                ia
              </span>

              {/* Share outline circle */}
              <button className="w-8 h-8 rounded-full border border-gray-200 bg-white text-slate-500 flex items-center justify-center hover:border-slate-400 hover:text-slate-900 transition-colors">
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* CENTERED HEADER COPY BLOCK (Matches screenshot) */}
        <div className="text-center space-y-6 pt-4">
          <span className="font-sans text-xs font-semibold text-gray-400 tracking-wide block">
            {eyebrow}
          </span>

          <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-[1.1] max-w-2xl mx-auto">
            {heading}
          </h2>

          <div className="pt-2 flex justify-center">
            <button
              onClick={handleJoin}
              className="bg-[#18191b] hover:bg-indigo-600 hover:scale-[1.03] active:scale-[0.98] text-white font-semibold px-8 py-4 rounded-full text-base shadow-lg transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              {isJoined ? (
                <>
                  <Check className="w-5 h-5 text-white animate-pulse" />
                  <span>{joinedLabel}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4.5 h-4.5 text-indigo-300 animate-pulse" />
                  <span>{ctaLabel}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* GIANT COUNT DISPLAY WITH PORTRAIT FLOAT (Matches screenshot) */}
        <div className="relative flex justify-center py-6">
          <div className="relative inline-flex items-center">
            {/* Giant Number counter blue display text */}
            <h3 className="font-display font-medium text-7xl sm:text-8xl md:text-9xl lg:text-[132px] text-[#afd3f8] tracking-tighter leading-none select-none">
              {count.toLocaleString()}
            </h3>

            <div className="absolute right-[-42px] sm:right-[-64px] bottom-[-10px] sm:bottom-0 z-20 cursor-pointer group hover:scale-110 hover:rotate-5 transition-transform duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-lg bg-orange-100">
                <img
                  src={portrait}
                  alt={''}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTINUOUS DEEP CUSTOM BOTTOM MARQUEE (Matches screenshot) */}
      <div className="mt-12 w-full overflow-hidden border-t border-gray-100 pt-8 relative">
        <div className="flex whitespace-nowrap animate-marquee-text text-slate-900/95">
          {[...Array(3)].map((_, cycle) => (
            <div
              key={cycle}
              className="flex items-center space-x-12 px-6 shrink-0"
            >
              {/* Text 1: PERFORM SMARTER */}
              <span className="font-sans font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase select-none">
                {marqueeText1}
              </span>

              {/* Graphic speed-striped Card inside marquee */}
              <div className="inline-flex w-16 h-16 sm:w-20 sm:h-20 bg-slate-100 rounded-2xl overflow-hidden border border-gray-200/50 p-1 flex-col items-center justify-center relative shadow-3xs shrink-0 self-center">
                {/* Vertical stripes background effect */}
                <div className="absolute inset-0 flex justify-between pointer-events-none opacity-40 px-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-1 h-full bg-slate-300" />
                  ))}
                </div>
                <img
                  src={marquee}
                  alt={''}
                  className="w-full h-full object-cover rounded-xl relative z-10 scale-105 brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text 2: IGNITE YOUR ATHL */}
              <span className="font-sans font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase text-[#afd3f8] select-none">
                {marqueeText2}
              </span>

              {/* Divider spacer circle */}
              <span className="w-4 h-4 rounded-full bg-slate-900 self-center shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee keyframe custom css rules configuration */}
      <style>{`
        @keyframes marqueeText {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee-text {
          display: flex;
          animation: marqueeText 25s linear infinite;
        }
      `}</style>
    </section>
    )
}