"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="pt-20 lg:pt-24 pb-12 min-h-[85vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="hero-gradient rounded-3xl overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-16">
            {/* Left Content */}
            <div className="space-y-6 z-10">
              <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Next-Gen{" "}
                <span className="text-primary">Expertise</span>
                <br />
                For Your{" "}
                <span className="text-primary">Enterprise</span>
              </h1>

              <p className="reveal text-lg sm:text-xl text-gray-600 max-w-xl" style={{ animationDelay: "0.15s" }}>
                Cultivate high-performance
                <br />
                teams through expert learning.
              </p>

              <div className="reveal flex flex-wrap gap-4 sm:gap-6" style={{ animationDelay: "0.3s" }}>
                {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                    </div>
                  )
                )}
              </div>

              <div className="reveal" style={{ animationDelay: "0.45s" }}>
                <button onClick={scrollToContact} className="btn-primary text-lg px-8 py-3.5 cursor-pointer">
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Right Visual - Business professionals illustration */}
            <div className="reveal hidden lg:flex justify-center items-end relative" style={{ animationDelay: "0.3s" }}>
              <div className="relative w-full max-w-lg">
                {/* Professional figure 1 - Female */}
                <div className="relative z-10 flex justify-center">
                  <svg viewBox="0 0 500 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                    {/* Background decorative circles */}
                    <circle cx="250" cy="250" r="200" fill="rgba(26,115,232,0.05)" />
                    <circle cx="250" cy="250" r="150" fill="rgba(26,115,232,0.08)" />
                    
                    {/* Professional female figure */}
                    <g transform="translate(120, 80)">
                      {/* Hair */}
                      <ellipse cx="65" cy="45" rx="45" ry="50" fill="#3d2b1f" />
                      <ellipse cx="65" cy="30" rx="40" ry="35" fill="#3d2b1f" />
                      {/* Face */}
                      <ellipse cx="65" cy="55" rx="30" ry="35" fill="#d4a574" />
                      {/* Eyes */}
                      <ellipse cx="55" cy="50" rx="4" ry="3" fill="#2c1810" />
                      <ellipse cx="75" cy="50" rx="4" ry="3" fill="#2c1810" />
                      {/* Smile */}
                      <path d="M 55 62 Q 65 72 75 62" fill="none" stroke="#c0785c" strokeWidth="2" />
                      {/* Body - Blazer */}
                      <path d="M 30 90 Q 30 85 40 82 L 65 80 L 90 82 Q 100 85 100 90 L 105 200 L 25 200 Z" fill="#f5f0ea" />
                      {/* Blazer collar */}
                      <path d="M 50 82 L 65 95 L 80 82" fill="none" stroke="#e0d5c5" strokeWidth="2" />
                      {/* Laptop */}
                      <rect x="20" y="140" width="90" height="55" rx="4" fill="#c0c0c0" />
                      <rect x="25" y="145" width="80" height="40" rx="2" fill="#4a90d9" />
                      {/* Laptop base */}
                      <rect x="15" y="195" width="100" height="5" rx="2" fill="#a0a0a0" />
                      {/* Arms */}
                      <path d="M 30 95 Q 15 130 25 150" fill="none" stroke="#d4a574" strokeWidth="12" strokeLinecap="round" />
                      <path d="M 100 95 Q 115 130 105 150" fill="none" stroke="#d4a574" strokeWidth="12" strokeLinecap="round" />
                    </g>

                    {/* Professional male figure */}
                    <g transform="translate(260, 100)">
                      {/* Hair */}
                      <ellipse cx="65" cy="35" rx="38" ry="38" fill="#1a1a1a" />
                      {/* Face */}
                      <ellipse cx="65" cy="50" rx="28" ry="32" fill="#c68642" />
                      {/* Eyes */}
                      <ellipse cx="56" cy="45" rx="3.5" ry="2.5" fill="#1a1a1a" />
                      <ellipse cx="74" cy="45" rx="3.5" ry="2.5" fill="#1a1a1a" />
                      {/* Smile */}
                      <path d="M 56 58 Q 65 66 74 58" fill="none" stroke="#a0653c" strokeWidth="2" />
                      {/* Body - Dark Suit */}
                      <path d="M 30 82 Q 30 78 40 75 L 65 73 L 90 75 Q 100 78 100 82 L 105 195 L 25 195 Z" fill="#1e293b" />
                      {/* Suit lapels */}
                      <path d="M 55 75 L 50 110 L 65 95" fill="#0f172a" />
                      <path d="M 75 75 L 80 110 L 65 95" fill="#0f172a" />
                      {/* Shirt */}
                      <path d="M 58 75 L 65 100 L 72 75" fill="#e0e7ff" />
                      {/* Tie */}
                      <rect x="63" y="90" width="4" height="40" fill="#3b82f6" />
                      {/* Arms crossed */}
                      <path d="M 30 85 Q 10 120 40 140 Q 60 150 90 140" fill="none" stroke="#1e293b" strokeWidth="16" strokeLinecap="round" />
                    </g>

                    {/* Decorative elements */}
                    <circle cx="80" cy="120" r="8" fill="rgba(26,115,232,0.2)" className="animate-pulse-soft" />
                    <circle cx="420" cy="150" r="12" fill="rgba(26,115,232,0.15)" className="animate-pulse-soft" />
                    <circle cx="400" cy="380" r="6" fill="rgba(26,115,232,0.2)" className="animate-float" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
