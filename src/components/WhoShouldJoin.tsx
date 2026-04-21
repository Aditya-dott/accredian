"use client";

import { useEffect, useRef } from "react";

const audiences = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <polyline points="8 21 12 17 16 21"/>
        <polyline points="9 10 12 7 15 10"/>
      </svg>
    ),
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <line x1="7" y1="10" x2="17" y2="10"/>
        <line x1="7" y1="13" x2="12" y2="13"/>
      </svg>
    ),
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>
      </svg>
    ),
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        <line x1="6" y1="11" x2="6" y2="11"/>
        <line x1="18" y1="11" x2="18" y2="11"/>
      </svg>
    ),
  },
];

export default function WhoShouldJoin() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-blue rounded-3xl overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-14">
            {/* Left side */}
            <div className="reveal flex flex-col justify-center">
              <p className="text-blue-100 text-sm font-medium mb-2">Who Should Join?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Strategic Skill<br />Enhancement
              </h2>
              
              {/* Professional figure illustration */}
              <div className="mt-8 hidden lg:block">
                <svg width="280" height="240" viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg">
                  {/* Female professional */}
                  <g transform="translate(20, 20)">
                    <ellipse cx="55" cy="35" rx="32" ry="36" fill="#3d2b1f"/>
                    <ellipse cx="55" cy="20" rx="28" ry="24" fill="#3d2b1f"/>
                    <ellipse cx="55" cy="42" rx="22" ry="26" fill="#d4a574"/>
                    <ellipse cx="47" cy="38" rx="3" ry="2" fill="#2c1810"/>
                    <ellipse cx="63" cy="38" rx="3" ry="2" fill="#2c1810"/>
                    <circle cx="47" cy="38" r="1" fill="white" opacity="0.5"/>
                    <circle cx="63" cy="38" r="1" fill="white" opacity="0.5"/>
                    <path d="M 47 48 Q 55 55 63 48" fill="none" stroke="#c0785c" strokeWidth="1.5"/>
                    {/* Glasses */}
                    <circle cx="47" cy="37" r="7" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
                    <circle cx="63" cy="37" r="7" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
                    <line x1="54" y1="37" x2="56" y2="37" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
                    {/* Body */}
                    <path d="M 25 70 Q 25 66 35 64 L 55 62 L 75 64 Q 85 66 85 70 L 90 180 L 20 180 Z" fill="rgba(255,255,255,0.95)"/>
                    <path d="M 42 64 L 55 78 L 68 64" fill="none" stroke="rgba(200,200,200,0.5)" strokeWidth="1.5"/>
                    {/* Tablet */}
                    <rect x="65" y="110" width="60" height="45" rx="4" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
                    <rect x="70" y="115" width="50" height="32" rx="2" fill="rgba(100,200,255,0.3)"/>
                  </g>
                  
                  {/* Male professional */}
                  <g transform="translate(150, 30)">
                    <ellipse cx="55" cy="30" rx="28" ry="30" fill="#1a1a1a"/>
                    <ellipse cx="55" cy="40" rx="20" ry="24" fill="#c68642"/>
                    <ellipse cx="48" cy="36" rx="2.5" ry="2" fill="#1a1a1a"/>
                    <ellipse cx="62" cy="36" rx="2.5" ry="2" fill="#1a1a1a"/>
                    <path d="M 48 46 Q 55 52 62 46" fill="none" stroke="#a0653c" strokeWidth="1.5"/>
                    {/* Suit */}
                    <path d="M 25 65 L 55 58 L 85 65 L 90 170 L 20 170 Z" fill="#1e293b"/>
                    <path d="M 48 60 L 43 90 L 55 78" fill="#0f172a"/>
                    <path d="M 62 60 L 67 90 L 55 78" fill="#0f172a"/>
                    <path d="M 50 60 L 55 82 L 60 60" fill="rgba(200,210,255,0.8)"/>
                    <rect x="53" y="75" width="4" height="35" fill="#3b82f6"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* Right side - Audience cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {audiences.map((item, i) => (
                <div
                  key={item.title}
                  className="reveal flex flex-col gap-3"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0 opacity-10">
            <svg viewBox="0 0 1440 100" fill="white">
              <path d="M0 50 Q360 0 720 50 T1440 50 V100 H0Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
