"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export type MediaItem = 
  | { type: "instagram"; shortcode: string }
  | { type: "tiktok"; username: string; videoId: string };

export function CoverFlow({ items }: { items: MediaItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle Embed Processing Safely
  useEffect(() => {
    // 1. Instagram: Safe to process repeatedly
    if (typeof window !== "undefined" && (window as any).instgrm) {
      setTimeout(() => {
        (window as any).instgrm.Embeds.process();
      }, 100);
    }
  }, [activeIndex]);



  return (
    <div className="relative w-full py-6 pb-12" style={{ perspective: "1200px" }}>
      {/* Dynamic Embed Scripts */}
      <Script async src="//www.instagram.com/embed.js" />

      <div className="flex justify-center items-center h-[550px] sm:h-[650px] relative w-full lg:max-w-5xl mx-auto">
        {items.map((item, index) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);
          const isActive = offset === 0;

          const zIndex = 100 - absOffset;
          // X translation: spaces out the cards
          const translateX = offset * 45; 
          // Rotate Y: angles the side cards
          const rotateY = offset === 0 ? 0 : offset > 0 ? -35 : 35;
          // Scale: makes outer cards slightly smaller
          const scale = isActive ? 1 : 1 - absOffset * 0.15;
          // Opacity: hide elements that are too far away to prevent clutter
          const opacity = absOffset > 2 ? 0 : isActive ? 1 : 1 - (absOffset * 0.25);
          
          return (
            <div
              key={index}
              className={`absolute top-0 transition-transform duration-700 ease-out flex justify-center items-center rounded-xl overflow-hidden bg-white shadow-xl border border-[#111]/10`}
              style={{
                zIndex,
                transform: `translateX(${translateX}%) translateZ(${-absOffset * 150}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                width: "min(330px, 75vw)",
                height: "100%",
                pointerEvents: opacity === 0 ? "none" : "auto", 
                transformStyle: "preserve-3d",
              }}
            >
              {/* Overlay for inactive items to capture clicks easily */}
              {!isActive && (
                <div 
                  className="absolute inset-0 z-50 cursor-pointer bg-black/5 hover:bg-black/0 transition-colors duration-300"
                  onClick={() => setActiveIndex(index)}
                  title="Klik for at se"
                />
              )}

              {/* Media Content Wrapper */}
              <div 
                className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-[#fafafa]"
                style={{ pointerEvents: isActive ? "auto" : "none" }}
              >
                {item.type === "instagram" ? (
                  <blockquote
                    className="instagram-media m-0"
                    data-instgrm-permalink={`https://www.instagram.com/reel/${item.shortcode}/`}
                    data-instgrm-version="14"
                    style={{ background: '#FFF', border: 0, margin: 0, maxWidth: '100%', minWidth: '280px', padding: 0, width: '100%' }}
                  ></blockquote>
                ) : (
                  <iframe
                    key={isActive ? "active" : "inactive"}
                    src={`https://www.tiktok.com/embed/v2/${item.videoId}`}
                    className="w-full h-full border-0 m-0 p-0 block"
                    allow="encrypted-media"
                  />
                )}
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={() => setActiveIndex(current => Math.max(0, current - 1))}
          disabled={activeIndex === 0}
          className="absolute left-2 sm:left-4 z-[200] flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#111]/10 shadow-sm transition hover:scale-105 hover:shadow-md disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Forrige video"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>

        <button
          onClick={() => setActiveIndex(current => Math.min(items.length - 1, current + 1))}
          disabled={activeIndex === items.length - 1}
          className="absolute right-2 sm:right-4 z-[200] flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#111]/10 shadow-sm transition hover:scale-105 hover:shadow-md disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Næste video"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Navigation Indicators */}
      <div className="flex justify-center mt-10 gap-2 relative z-50">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === activeIndex ? "bg-[#ff3b2f] w-6" : "bg-black/20 hover:bg-black/40"
            }`}
            aria-label={`Gå til video ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
