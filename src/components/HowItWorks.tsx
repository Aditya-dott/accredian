"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: 1,
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
  {
    number: 2,
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
        <path d="M13 13h4M13 17h2"/>
      </svg>
    ),
  },
  {
    number: 3,
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <polygon points="10 8 16 12 10 16 10 8" fill="white" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-gray-900">
            How We <span className="text-primary">Deliver Results</span> That Matter?
          </h2>
          <p className="reveal mt-3 text-gray-500 text-lg" style={{ animationDelay: "0.1s" }}>
            A Structured Three-Step Approach to{" "}
            <span className="text-primary">Skill Development</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="reveal relative"
              style={{ animationDelay: `${0.15 + i * 0.15}s` }}
            >
              <div className="glass-card rounded-2xl p-8 text-center h-full flex flex-col items-center gap-5 border-b-4 border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Step number badge */}
                <div className="absolute -top-3 -left-1 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="circle-icon w-16 h-16">
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector arrow (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 text-primary text-2xl font-bold z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
