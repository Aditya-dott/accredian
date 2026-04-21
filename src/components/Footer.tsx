"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Logo + Social */}
          <div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-primary tracking-tight">accredian</span>
              <span className="text-[10px] text-primary -mt-1 tracking-wide">credentials that matter</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              {[
                {
                  name: "Facebook",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
                {
                  name: "Twitter",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                },
                {
                  name: "YouTube",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/>
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Enquire CTA */}
          <div className="flex flex-col items-start lg:items-end gap-2">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary px-8 py-3 cursor-pointer"
            >
              Enquire Now
            </button>
            <span className="text-sm text-gray-400">Speak with our Advisor</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Bottom section */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Accredian</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-gray-500 hover:text-primary transition-colors">
                About
              </Link>
              <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Why Accredian
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact Us</h4>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">
                Email us:{" "}
                <a href="mailto:enterprise@accredian.com" className="text-primary hover:underline">
                  enterprise@accredian.com
                </a>
              </p>
              <p className="text-sm text-gray-500">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="h-px bg-gray-200" />
        <div className="py-6 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
