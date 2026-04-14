"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  const numMatch = value.match(/(\d+)/);
  const target = numMatch ? parseInt(numMatch[0], 10) : 0;

  const runAnimation = useCallback((duration: number) => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        animationRef.current = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    animationRef.current = window.requestAnimationFrame(step);
  }, [target]);

  useEffect(() => {
    if (!numMatch) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          runAnimation(2000); // Normal speed on scroll
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isVisible, numMatch, runAnimation]);

  // Hook hover on the parent metric card
  useEffect(() => {
    if (!numMatch) return;
    const card = ref.current?.closest('.metric-card');
    if (!card) return;

    const handleMouseEnter = () => {
      runAnimation(600); // Very fast speed on hover
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    return () => card.removeEventListener('mouseenter', handleMouseEnter);
  }, [numMatch, runAnimation]);

  // Cleanup pending animations on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  if (!numMatch) {
    return <span ref={ref}>{value}</span>;
  }

  const prefix = value.substring(0, numMatch.index);
  const suffix = value.substring(numMatch.index! + numMatch[0].length);

  return (
    <span ref={ref}>
      {prefix}
      {isVisible ? count : "0"}
      {suffix}
    </span>
  );
}
