"use client";

import { useEffect, useRef } from "react";

const catSteps = [
  {
    letter: "C",
    title: "Concept",
    description: "Foundational knowledge for deep subject understanding.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <path d="M9 7h6M9 11h4"/>
        <circle cx="15" cy="15" r="2"/>
      </svg>
    ),
  },
  {
    letter: "A",
    title: "Application",
    description: "Practical implementation through real-world scenarios.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
  },
  {
    letter: "T",
    title: "Tools",
    description: "Resources and techniques for effective skill mastery.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
];

export default function CATFramework() {
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
    <section id="cat" ref={sectionRef} className="py-16 lg:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-gray-900">
            The <span className="text-primary">CAT Framework</span>
          </h2>
          <p className="reveal mt-3 text-gray-500 text-lg" style={{ animationDelay: "0.1s" }}>
            Our Proven Approach to <span className="text-primary">Learning Excellence</span>
          </p>
        </div>

        {/* CAT Circular/Path Visualization */}
        <div className="reveal max-w-4xl mx-auto" style={{ animationDelay: "0.2s" }}>
          {/* Desktop: Curved path */}
          <div className="hidden md:block relative">
            <svg viewBox="0 0 800 350" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Flowing S-curve path */}
              <path
                d="M 100 175 C 100 50 300 50 400 100 C 500 150 500 50 700 50"
                fill="none"
                stroke="#1a73e8"
                strokeWidth="3"
                strokeDasharray="0"
                opacity="0.3"
              />
              <path
                d="M 100 175 C 100 300 300 300 400 250 C 500 200 500 300 700 300"
                fill="none"
                stroke="#1a73e8"
                strokeWidth="3"
                opacity="0.3"
              />
              
              {/* Concept circle */}
              <circle cx="200" cy="175" r="70" fill="white" stroke="#1a73e8" strokeWidth="2.5"/>
              <circle cx="200" cy="175" r="60" fill="#e8f0fe"/>
              
              {/* Application circle */}
              <circle cx="400" cy="150" r="70" fill="white" stroke="#1a73e8" strokeWidth="2.5"/>
              <circle cx="400" cy="150" r="60" fill="#e8f0fe"/>
              
              {/* Tools circle */}
              <circle cx="600" cy="175" r="70" fill="white" stroke="#1a73e8" strokeWidth="2.5"/>
              <circle cx="600" cy="175" r="60" fill="#e8f0fe"/>

              {/* Connection dots */}
              <circle cx="290" cy="140" r="5" fill="#1a73e8" opacity="0.5"/>
              <circle cx="500" cy="140" r="5" fill="#1a73e8" opacity="0.5"/>
            </svg>
            
            {/* Text overlays */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full grid grid-cols-3 gap-4 px-4">
                {catSteps.map((step) => (
                  <div key={step.letter} className="flex flex-col items-center text-center" style={{ marginTop: step.letter === "A" ? "-20px" : "0" }}>
                    <div className="mb-2">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 max-w-[200px]">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical flow */}
          <div className="md:hidden flex flex-col gap-8">
            {catSteps.map((step, i) => (
              <div key={step.letter} className="reveal flex flex-col items-center text-center" style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
                <div className="w-24 h-24 rounded-full bg-primary-light border-3 border-primary flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500 mt-2 max-w-xs">{step.description}</p>
                {i < catSteps.length - 1 && (
                  <div className="w-0.5 h-8 bg-primary/30 mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
