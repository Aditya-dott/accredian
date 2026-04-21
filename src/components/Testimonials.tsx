"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    company: "ADP",
    logo: "ADP",
    logoColor: "#d40000",
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
  {
    company: "Bayer",
    logo: "BAYER",
    logoColor: "#10857f",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    company: "HCL",
    logo: "HCL",
    logoColor: "#0072c6",
    quote:
      "The training programs delivered by Accredian have significantly upskilled our workforce. Their customized approach and industry-relevant content made a real difference to our team's performance.",
  },
  {
    company: "IBM",
    logo: "IBM",
    logoColor: "#0043ce",
    quote:
      "Partnering with Accredian was one of the best decisions for our learning and development strategy. Their expert guidance and innovative framework have delivered measurable results.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 2;
  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

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

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-gray-900">
            Testimonials from <span className="text-primary">Our Partners</span>
          </h2>
          <p className="reveal mt-3 text-gray-500 text-lg" style={{ animationDelay: "0.1s" }}>
            What <span className="text-primary">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Carousel */}
        <div className="reveal relative overflow-hidden" style={{ animationDelay: "0.2s" }}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slide groups */}
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
                  {testimonials
                    .slice(slideIndex * slidesPerView, slideIndex * slidesPerView + slidesPerView)
                    .map((testimonial) => (
                      <div
                        key={testimonial.company}
                        className="testimonial-card glass-card rounded-2xl p-8 flex flex-col gap-4"
                      >
                        {/* Company logo */}
                        <div className="flex items-center gap-3">
                          <span
                            className="text-2xl font-black tracking-wider"
                            style={{ color: testimonial.logoColor, fontFamily: testimonial.logo === "IBM" ? "serif" : "inherit" }}
                          >
                            {testimonial.logo === "BAYER" ? (
                              <svg width="45" height="45" viewBox="0 0 50 50">
                                <circle cx="25" cy="25" r="22" fill="none" stroke={testimonial.logoColor} strokeWidth="1.5"/>
                                <circle cx="25" cy="25" r="18" fill="none" stroke="#76c043" strokeWidth="2"/>
                                <text x="25" y="22" textAnchor="middle" fontSize="8" fontWeight="bold" fill={testimonial.logoColor}>BAY</text>
                                <text x="25" y="32" textAnchor="middle" fontSize="8" fontWeight="bold" fill={testimonial.logoColor}>ER</text>
                              </svg>
                            ) : testimonial.logo === "ADP" ? (
                              <span className="italic">{testimonial.logo}<sup className="text-xs">®</sup></span>
                            ) : (
                              testimonial.logo
                            )}
                          </span>
                        </div>

                        {/* Quote */}
                        <blockquote className="text-gray-600 text-sm leading-relaxed italic">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === i
                    ? "bg-primary w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
