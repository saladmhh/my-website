import React from 'react';

interface LogoProps {
  className?: string;
  scaleX?: number;
  letterSpacing?: string;
}

export function Logo({ 
  className = "", 
  scaleX = 1.35, 
  letterSpacing = "-0.03em" 
}: LogoProps) {
  return (
    <span 
      className={`inline-block font-black tracking-tighter uppercase lowercase ${className}`}
      style={{
        transform: `scaleX(${scaleX})`,
        transformOrigin: "left center",
        letterSpacing: letterSpacing,
        display: "inline-block"
      }}
    >
      twentytwo
    </span>
  );
}
