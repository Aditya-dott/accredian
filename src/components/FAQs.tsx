"use client";

import { useEffect, useRef, useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqCategories: Record<string, FAQItem[]> = {
  "About the Course": [
    {
      question: "What types of corporate training programs does Accredian offer?",
      answer:
        "Accredian offers a wide range of corporate training programs including certificate programs, executive education, post-graduate certificates, and customized training solutions across domains like Gen-AI, Data Science, Machine Learning, Leadership, Operations, and more.",
    },
    {
      question: "What domain specializations are available?",
      answer:
        "Our domain specializations include Product & Innovation Hub, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation Lab. Each domain is designed to address specific industry needs.",
    },
    {
      question: "How are programs customized for enterprises?",
      answer:
        "We follow a structured approach starting with Skill Gap Analysis, then creating a Customized Training Plan, and finally delivering Flexible Programs. Our CAT Framework (Concept, Application, Tools) ensures comprehensive learning outcomes.",
    },
  ],
  "About the Delivery": [
    {
      question: "What delivery formats are available?",
      answer:
        "We offer both online and offline delivery formats. Programs can be conducted through live virtual sessions, self-paced modules, in-person workshops, or a blended approach combining multiple formats to suit your organization's needs.",
    },
    {
      question: "How long are the training programs?",
      answer:
        "Program duration varies based on the scope and depth. Short workshops can be 1-3 days, while comprehensive certification programs can range from 4 weeks to 6 months. We customize the duration based on your organization's requirements.",
    },
  ],
  Miscellaneous: [
    {
      question: "What is the minimum batch size for corporate training?",
      answer:
        "We can accommodate batches starting from 10 participants. For larger groups, we can run multiple cohorts simultaneously. Contact our team for specific requirements and pricing details.",
    },
    {
      question: "Do you provide post-training support?",
      answer:
        "Yes, we provide comprehensive post-training support including follow-up sessions, access to learning materials, mentorship programs, and performance tracking tools to ensure sustainable skill development.",
    },
  ],
};

export default function FAQs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("About the Course");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentFAQs = faqCategories[activeCategory] || [];

  return (
    <section id="faqs" ref={sectionRef} className="py-16 lg:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category sidebar */}
          <div className="reveal lg:col-span-1 flex lg:flex-col gap-3" style={{ animationDelay: "0.1s" }}>
            {Object.keys(faqCategories).map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
                className={`text-left px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ list */}
          <div className="reveal lg:col-span-3 space-y-4" style={{ animationDelay: "0.2s" }}>
            {currentFAQs.map((faq, i) => (
              <div
                key={i}
                className="glass-card rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                  <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA below FAQs */}
        <div className="reveal text-center mt-12" style={{ animationDelay: "0.3s" }}>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-base px-8 py-3 cursor-pointer"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
