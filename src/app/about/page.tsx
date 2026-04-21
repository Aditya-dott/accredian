import Link from "next/link";

export const metadata = {
  title: "About Us | Accredian Enterprise",
  description:
    "Learn about Accredian — a brand of FullStack Education Pvt Ltd, empowering enterprises with next-gen corporate training solutions.",
};

const milestones = [
  { year: "2017", text: "Accredian founded as an ed-tech platform" },
  { year: "2019", text: "Launched enterprise training vertical" },
  { year: "2021", text: "Trained 5,000+ professionals across industries" },
  { year: "2023", text: "Partnered with Fortune 500 companies" },
  { year: "2025", text: "10K+ professionals trained, 200+ sessions delivered" },
];

const values = [
  {
    title: "Excellence",
    description: "We set the highest standards in every program we deliver.",
    icon: "⭐",
  },
  {
    title: "Innovation",
    description: "Our CAT Framework and proprietary methods drive real results.",
    icon: "💡",
  },
  {
    title: "Impact",
    description: "Measurable ROI and career growth for every participant.",
    icon: "📈",
  },
  {
    title: "Partnership",
    description: "We work as an extension of your team, not just a vendor.",
    icon: "🤝",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex flex-col items-start">
              <span className="text-2xl font-bold text-primary tracking-tight">accredian</span>
              <span className="text-[10px] text-primary -mt-1 tracking-wide">credentials that matter</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-primary border-b-2 border-primary pb-0.5">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 min-h-screen">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-primary">Accredian</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A brand of FullStack Education Pvt Ltd — empowering enterprises with
            next-generation corporate training and skill development programs.
          </p>
        </section>

        {/* Mission */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="gradient-blue rounded-3xl p-10 lg:p-14 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
              To cultivate high-performance teams through expert learning. We
              bridge the gap between academic knowledge and industry demands by
              delivering tailored, impactful training solutions that drive
              measurable business outcomes.
            </p>
            <div className="absolute bottom-0 left-0 right-0 opacity-10">
              <svg viewBox="0 0 1440 80" fill="white">
                <path d="M0 40 Q360 0 720 40 T1440 40 V80 H0Z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Our <span className="text-primary">Journey</span>
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-6 relative">
                  <div className="w-12 h-12 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0 z-10 shadow-lg">
                    {m.year.slice(2)}
                  </div>
                  <div className="glass-card rounded-xl p-4 flex-1">
                    <span className="text-xs font-semibold text-primary">{m.year}</span>
                    <p className="text-gray-700 text-sm mt-1">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact info */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-2xl p-10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Get in Touch</h2>
            <p className="text-gray-500 mb-4">Want to learn more about our enterprise training solutions?</p>
            <p className="text-sm text-gray-500">
              Email:{" "}
              <a href="mailto:enterprise@accredian.com" className="text-primary hover:underline">
                enterprise@accredian.com
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Office: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
            </p>
            <Link href="/" className="btn-primary inline-block mt-6">
              ← Back to Home
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>
      </footer>
    </>
  );
}
