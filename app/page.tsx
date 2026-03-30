"use client";

import { useState } from "react";

/* ─── SVG Icon Components ─── */

function CameraIcon() {
  return (
    <svg className="w-10 h-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg className="w-10 h-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg className="w-10 h-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
  );
}

function HelmetIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C7.03 2 3 6.03 3 11v2h18v-2c0-4.97-4.03-9-9-9ZM3 15h18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Z" />
    </svg>
  );
}

function VestIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  );
}

function BarrierIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-10 h-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function WifiOffIcon() {
  return (
    <svg className="w-10 h-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 18h.008v.008H12V18Z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="w-10 h-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

/* ─── Nav ─── */

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <img src="/sitinel-icon.svg" alt="Sitinel" className="h-10 w-10 object-contain brightness-0 invert" />
            <span className="text-white text-xl font-bold tracking-tight">SITINEL</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-white/70 hover:text-white text-sm transition-colors">
              How It Works
            </a>
            <a href="#detect" className="text-white/70 hover:text-white text-sm transition-colors">
              What We Detect
            </a>
            <a href="#pilot" className="text-white/70 hover:text-white text-sm transition-colors">
              Pilot Program
            </a>
            <a
              href="#pilot"
              className="bg-orange hover:bg-orange-hover text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
            >
              Request a Demo
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-4 space-y-3">
          <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="block text-white/70 hover:text-white text-sm py-2">
            How It Works
          </a>
          <a href="#detect" onClick={() => setMobileOpen(false)} className="block text-white/70 hover:text-white text-sm py-2">
            What We Detect
          </a>
          <a href="#pilot" onClick={() => setMobileOpen(false)} className="block text-white/70 hover:text-white text-sm py-2">
            Pilot Program
          </a>
          <a
            href="#pilot"
            onClick={() => setMobileOpen(false)}
            className="block bg-orange hover:bg-orange-hover text-white text-sm font-semibold px-5 py-2 rounded-lg text-center transition-colors"
          >
            Request a Demo
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center mb-8">
          <img src="/sitinel-icon.svg" alt="Sitinel" className="h-24 w-24 object-contain brightness-0 invert" />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          Know What&apos;s Happening On Your Site.{" "}
          <span className="text-orange">Before Something Goes Wrong.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Sitinel monitors your existing cameras with on-premise AI — detecting PPE violations, safety hazards, and
          site incidents in real time. No video ever leaves your site.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pilot"
            className="bg-orange hover:bg-orange-hover text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors w-full sm:w-auto"
          >
            Request a Demo
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors w-full sm:w-auto"
          >
            See How It Works&ensp;&darr;
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */

function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <CameraIcon />,
      title: "Connects to Your Cameras",
      desc: "Uses your existing IP cameras. No new camera hardware required for most sites.",
    },
    {
      num: "02",
      icon: <CpuIcon />,
      title: "AI Runs On-Site",
      desc: "All processing on a dedicated edge device at your site. No cloud. No video upload. Ever.",
    },
    {
      num: "03",
      icon: <BellIcon />,
      title: "Instant Alerts",
      desc: "Email or SMS the moment a violation is detected.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">How It Works</h2>
        <div className="mt-16 grid md:grid-cols-3 gap-12">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange/10 mb-6">
                {s.icon}
              </div>
              <span className="block text-xs font-bold tracking-widest text-orange/60 uppercase mb-2">
                Step {s.num}
              </span>
              <h3 className="text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── What We Detect ─── */

function WhatWeDetect() {
  const detections = [
    { icon: <HelmetIcon />, title: "Hard Hat Violations" },
    { icon: <VestIcon />, title: "Missing Hi-Vis Vest" },
    { icon: <BarrierIcon />, title: "Unauthorized Zone Entry" },
    { icon: <WarningIcon />, title: "Slip & Fall Risk" },
    { icon: <PeopleIcon />, title: "Multi-Worker Monitoring" },
    { icon: <MicIcon />, title: "Audio Event Detection", comingSoon: true },
  ];

  return (
    <section id="detect" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">What We Detect</h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {detections.map((d) => (
            <div
              key={d.title}
              className={`relative bg-white rounded-xl border p-6 transition-shadow ${
                d.comingSoon
                  ? "border-gray-200 opacity-60"
                  : "border-gray-200 hover:shadow-lg hover:border-orange/30"
              }`}
            >
              {d.comingSoon && (
                <span className="absolute top-4 right-4 bg-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  d.comingSoon ? "bg-gray-100 text-gray-400" : "bg-orange/10 text-orange"
                }`}
              >
                {d.icon}
              </div>
              <h3 className={`text-lg font-semibold ${d.comingSoon ? "text-gray-400" : "text-navy"}`}>
                {d.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why On-Premise ─── */

function WhyOnPremise() {
  const features = [
    {
      icon: <ShieldIcon />,
      title: "Zero Video Egress",
      desc: "No footage ever leaves your site. Not stored in the cloud. Not transmitted anywhere.",
    },
    {
      icon: <WifiOffIcon />,
      title: "Works Offline",
      desc: "Full functionality with no internet connection. Your site, your network, your rules.",
    },
    {
      icon: <LockIcon />,
      title: "Privacy Compliant",
      desc: "Meets the strictest on-site privacy and security policies.",
    },
  ];

  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
          Your Site. Your Data. Your Control.
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-3 text-white/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pilot Program / Contact Form ─── */

function PilotProgram() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="pilot" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">Be One of Our First Sites</h2>
        <p className="mt-4 text-gray-600 text-center leading-relaxed max-w-xl mx-auto">
          We&apos;re running a limited pilot with general contractors. Pilot sites get priority onboarding and direct
          access to our engineering team.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-1.5">
                First Name <span className="text-orange">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-1.5">
                Last Name <span className="text-orange">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
              Company <span className="text-orange">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
              Email <span className="text-orange">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
              Phone <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
              Message <span className="text-gray-400">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-navy focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-orange hover:bg-orange-hover disabled:opacity-50 text-white font-semibold py-3 rounded-lg text-base transition-colors"
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>

          {status === "sent" && (
            <p className="text-green-600 text-sm text-center font-medium">
              Thanks! We&apos;ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm text-center font-medium">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white font-bold text-lg">Sitinel</p>
        <p className="text-white/50 text-sm mt-1">AI Safety, On Your Site.</p>
        <div className="mt-4 flex items-center justify-center gap-4 text-white/40 text-xs">
          <span>&copy; 2026 Sitinel Technologies Inc.</span>
          <span>&middot;</span>
          <a href="https://sitinel.ca" className="hover:text-white/60 transition-colors">
            sitinel.ca
          </a>
          <span>&middot;</span>
          <a href="/privacy" className="hover:text-white/60 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HowItWorks />
      <WhatWeDetect />
      <WhyOnPremise />
      <PilotProgram />
      <Footer />
    </main>
  );
}
