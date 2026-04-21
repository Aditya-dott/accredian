"use client";

import { useEffect, useRef } from "react";

const clients = [
  { name: "Reliance Industries Limited", logo: "reliance" },
  { name: "HCL", logo: "hcl" },
  { name: "IBM", logo: "ibm" },
  { name: "CRIF", logo: "crif" },
  { name: "ADP", logo: "adp" },
  { name: "BAYER", logo: "bayer" },
];

function ClientLogo({ name }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center px-8 py-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
      <span className="text-2xl sm:text-3xl font-bold text-gray-400 hover:text-gray-700 transition-colors tracking-tight select-none">
        {name === "Reliance Industries Limited" ? (
          <div className="flex flex-col items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
              <circle cx="20" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 4 L20 20 M14 8 L26 16 M14 16 L26 8" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span className="text-xs mt-1">Reliance</span>
            <span className="text-[8px] -mt-0.5">Industries Limited</span>
          </div>
        ) : name === "HCL" ? (
          <span className="text-4xl font-black tracking-widest">HCL</span>
        ) : name === "IBM" ? (
          <span className="text-3xl font-bold tracking-wider" style={{ fontFamily: "serif" }}>IBM</span>
        ) : name === "CRIF" ? (
          <div className="flex items-center gap-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 12 Q12 4 20 12 Q12 20 4 12Z"/>
            </svg>
            <span className="text-2xl font-bold italic">CRIF</span>
          </div>
        ) : name === "ADP" ? (
          <span className="text-4xl font-black italic">ADP<sup className="text-xs">®</sup></span>
        ) : name === "BAYER" ? (
          <div className="flex flex-col items-center">
            <svg width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="22" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="25" cy="25" r="18" fill="none" stroke="#76c043" strokeWidth="2"/>
              <text x="25" y="20" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor">B</text>
              <text x="25" y="27" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor">A</text>
              <text x="25" y="20" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor" transform="rotate(90 25 25)">Y</text>
              <text x="25" y="34" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor">E</text>
              <text x="25" y="41" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor">R</text>
            </svg>
          </div>
        ) : (
          name
        )}
      </span>
    </div>
  );
}

export default function Clients() {
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
    <section id="clients" ref={sectionRef} className="py-16 lg:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-gray-900">
          Our Proven <span className="text-primary">Partnerships</span>
        </h2>
        <p className="reveal mt-3 text-gray-500 text-lg" style={{ animationDelay: "0.1s" }}>
          Successful Collaborations With the{" "}
          <span className="text-primary">Industry&apos;s Best</span>
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
          {clients.map((client, i) => (
            <div key={client.name} className="reveal" style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
              <ClientLogo name={client.name} logo={client.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
