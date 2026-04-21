"use client";

import { useEffect, useRef } from "react";

export default function ContactCTA() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal gradient-blue rounded-3xl overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 lg:p-14">
            {/* Headset icon */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  Want to Learn More About Our Training Solutions?
                </h2>
                <p className="text-blue-100 mt-2">
                  Get Expert Guidance for Your Team&apos;s Success!
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-primary px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl cursor-pointer flex-shrink-0"
            >
              Contact Us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>

          {/* Background wave decoration */}
          <div className="absolute bottom-0 left-0 right-0 opacity-10">
            <svg viewBox="0 0 1440 120" fill="white">
              <path d="M0 60 C360 120, 720 0, 1080 60 S1440 120, 1440 60 V120 H0Z" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
        </div>
      </div>
    </section>
  );
}
