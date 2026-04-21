"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 10, suffix: "K+", label: "Professionals Trained For Exceptional Career Success" },
  { value: 200, suffix: "+", label: "Sessions Delivered With Unmatched Learning Excellence" },
  { value: 5, suffix: "K+", label: "Active Learners Engaged In Dynamic Courses" },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="stat-pill text-2xl sm:text-3xl">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          sectionRef.current?.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-gray-900">
          Our <span className="text-primary">Track Record</span>
        </h2>
        <p className="reveal mt-3 text-gray-500 text-lg" style={{ animationDelay: "0.1s" }}>
          The Numbers Behind <span className="text-primary">Our Success</span>
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal flex flex-col items-center gap-4 relative"
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              <p className="text-gray-600 text-sm sm:text-base max-w-[220px]">{stat.label}</p>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
