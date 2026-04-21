"use client";

import { useEffect, useRef } from "react";

const courses = [
  {
    title: "Program Specific",
    items: "Certificate, Executive, Post Graduate Certificate",
    gradient: "from-blue-600 to-blue-800",
    image: "📊",
  },
  {
    title: "Industry Specific",
    items: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    gradient: "from-purple-600 to-purple-800",
    image: "🤖",
  },
  {
    title: "Topic Specific",
    items: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    gradient: "from-indigo-600 to-indigo-800",
    image: "💻",
  },
  {
    title: "Level Specific",
    items: "Senior Leadership, Mid-Career Professionals, Freshers",
    gradient: "from-teal-600 to-teal-800",
    image: "👥",
  },
];

export default function CourseSegmentation() {
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
        <div className="text-center mb-14">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-gray-900">
            Tailored <span className="text-primary">Course Segmentation</span>
          </h2>
          <p className="reveal mt-3 text-gray-500 text-lg" style={{ animationDelay: "0.1s" }}>
            Explore <span className="text-primary">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div
              key={course.title}
              className="reveal group cursor-pointer"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Card image area */}
                <div className={`h-48 bg-gradient-to-br ${course.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-6xl opacity-80">{course.image}</span>
                  {/* Decorative circles */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/10" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-primary mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.items}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
