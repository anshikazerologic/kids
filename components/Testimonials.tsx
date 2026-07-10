"use client"
import React, {useRef, useState} from 'react';
import { testimonials } from "app/content/home";
import {ArrowLeft, ArrowRight} from 'lucide-react';



export default function Testimonials(){
    const [activeIndex, setActiveIndex] = useState(0);
  const [revealedIndex, setRevealedIndex] = useState<number | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const fallbackTestimonialImages = [
  'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=700&q=85',
];



  const testimonialItems = testimonials.items.map((item, idx) => ({
    ...item,
    image: undefined, // No image data in current content
    fallbackImage:
      fallbackTestimonialImages[idx % fallbackTestimonialImages.length],
  }));

  const scrollToIndex = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const handleNext = () => {
    if (!testimonialItems.length) return;
    const nextIndex = (activeIndex + 1) % testimonialItems.length;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    if (!testimonialItems.length) return;
    const prevIndex =
      (activeIndex - 1 + testimonialItems.length) % testimonialItems.length;
    setActiveIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

    return(
        <section
      className="min-h-screen bg-[#f8f9fa] py-8 px-4 sm:px-8 lg:px-12 flex flex-col justify-between relative overflow-hidden"
      id="testimonials"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Column Wrapper */}
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-between space-y-12">
        {/* TOP HEADER ROW - REPEATS THE COMMON MODERN BRAND HEADER IN TESTIMONIALS */}

        {/* SECTION HEADER ROW (Layout with indicator, styled Centered title, and active next/prev circles) */}
        <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-6 pt-4 relative z-20">
          {/* Left Column: Number index counter indicator progress */}
          <div className="sm:col-span-3 text-left">
            <span className="font-mono text-sm sm:text-base text-slate-400 font-bold tracking-widest block">
              {`0${activeIndex + 1} // 0${testimonials.items.length}`}
            </span>
          </div>

          {/* Center Column: Grand Title styled exactly like screenshot */}
          <div className="sm:col-span-6 text-center">
            <h2 className="font-display font-medium text-4xl sm:text-5xl text-slate-950 tracking-tight">
              {testimonials.heading}
            </h2>
          </div>

          {/* Right Column: High contrast carousel control circle buttons */}
          <div className="sm:col-span-3 hidden md:flex justify-end space-x-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-gray-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white bg-white text-slate-600 transition-all flex items-center justify-center cursor-pointer shadow-3xs"
              aria-label="Previous Testimonial"
              id="btn-clients-prev"
            >
              <ArrowLeft className="w-5 h-5 stroke-[1.5]" />
            </button>

            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#afd3f8] text-slate-900 hover:bg-[#86baf1] hover:text-slate-950 transition-all flex items-center justify-center cursor-pointer shadow-xs"
              aria-label="Next Testimonial"
              id="btn-clients-next"
            >
              <ArrowRight className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* HIGH-FIDELITY TESTIMONIAL CARDS SLIDER */}
        <div className="flex gap-6 items-stretch pt-4 relative z-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth overscroll-x-contain pb-32 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonialItems.map((item, idx) => {
            const isActive = idx === activeIndex;
            const isRevealed = idx === revealedIndex;

            return (
              <div
                key={item.id}
                ref={(node) => {
                  cardRefs.current[idx] = node;
                }}
                onClick={() => {
                  setActiveIndex(idx);
                  setRevealedIndex(idx);
                }}
                onMouseEnter={() => {
                  setActiveIndex(idx);
                  setRevealedIndex(idx);
                }}
                onMouseLeave={() => setRevealedIndex(null)}
                className={`group relative shrink-0 snap-start w-[300px] h-[380px] rounded-[2rem] overflow-visible transition-all duration-500 cursor-pointer border border-gray-200/50 ${
                  isActive
                    ? 'ring-4 ring-indigo-500/10 shadow-xl border-indigo-200 scale-[1.02]'
                    : 'hover:shadow-md hover:scale-[1.01]'
                }`}
                id={`testimonial-card-${item.id}`}
              >
                {/* Back image layer */}
                <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-slate-900">
                  <img
                    src={item.fallbackImage}
                    alt={`${item.name} testimonial`}
                    className={`w-full h-full object-cover opacity-80 transition-transform duration-700 ease-out ${
                      isRevealed ? 'scale-100' : 'scale-105'
                    } group-hover:scale-100`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/10 to-transparent" />
                </div>

                {/* Front content layer */}
                <div
                  className={`absolute inset-0 z-20 bg-[#f0f2f5]/95 p-8 flex flex-col justify-between rounded-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isRevealed
                      ? 'translate-y-[28%] rotate-[6deg] rounded-[1.75rem] bg-[#afd3f8] shadow-xl'
                      : ''
                  } group-hover:translate-y-[28%] group-hover:rotate-[6deg] group-hover:rounded-[1.75rem] group-hover:bg-[#afd3f8] group-hover:shadow-xl`}
                >
                  <div>
                    <h4 className="font-sans font-bold text-slate-950 text-xl tracking-tight leading-none">
                      {item.name}
                    </h4>
                    <span
                      className={`font-sans font-semibold text-sm mt-2 block transition-colors duration-500 ${
                        isRevealed ? 'text-blue-900/85' : 'text-slate-400'
                      } group-hover:text-blue-900/85`}
                    >
                      {item.role}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-col">
                    <span
                      className={`font-serif font-black text-5xl leading-none select-none block mb-2 transition-colors duration-500 ${
                        isRevealed ? 'text-white' : 'text-[#9fcbf9]'
                      } group-hover:text-white`}
                    >
                      “
                    </span>

                    <p
                      className={`font-sans text-sm leading-relaxed transition-colors duration-500 ${
                        isRevealed ? 'text-slate-900/95' : 'text-slate-700'
                      } group-hover:text-slate-900/95`}
                    >
                      {item.quote}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle footer credit spacer */}
        <div className="text-center pt-6 text-slate-300 font-mono text-[10px] uppercase tracking-widest relative z-10 select-none">
          {testimonials.footerLabel}
        </div>
      </div>
    </section>
    )
}