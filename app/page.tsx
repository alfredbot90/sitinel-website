"use client";

import { useState } from "react";

/* ─── SVG Icon Components ─── */

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

/* ─── Nav ─── */

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <img src="/sitinel-icon-white.svg" alt="Sitinel" className="h-14 w-14 object-contain" />
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
              Request a Site Demo
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
            Request a Site Demo
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
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block bg-orange/15 text-orange text-sm font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-8">
          AI-Powered Site Intelligence
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          Know What&apos;s Happening On Your Job Site&thinsp;&mdash;&thinsp;Without Being There.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Sitinel deploys rugged edge AI devices on your existing site infrastructure. Real-time safety monitoring, zero cloud dependency, zero video egress.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pilot"
            className="bg-orange hover:bg-orange-hover text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors w-full sm:w-auto"
          >
            Request a Site Demo
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors w-full sm:w-auto"
          >
            See How It Works&ensp;&darr;
          </a>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 max-w-3xl mx-auto">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-orange">48</p>
            <p className="text-sm text-white/50 mt-1">PPE violations detected in first week</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-orange">0</p>
            <p className="text-sm text-white/50 mt-1">video data leaves the site</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-orange">&lt; 2 hrs</p>
            <p className="text-sm text-white/50 mt-1">to deploy on any job site</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Hardware Section ─── */

function Hardware() {
  const specs = [
    {
      title: "Fanless Design",
      desc: "-20\u00B0C to 60\u00B0C operating range. No moving parts. Built for dust, heat, and cold.",
    },
    {
      title: "PoE Camera Ready",
      desc: "Connects to your existing IP cameras via standard RTSP. No new hardware required.",
    },
    {
      title: "On-Premise Only",
      desc: "No video is ever transmitted off-site. Not a frame. Not a byte.",
    },
    {
      title: "2-Hour Deploy",
      desc: "Mounts to DIN rail, wall, or desk. Power on, connect cameras, done.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
          Built for the Job Site. Not the Office.
        </h2>

        {/* Device Mockup */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-[300px] h-[200px] bg-[#1a1a1a] rounded-lg shadow-2xl border border-white/10 overflow-hidden">
            {/* Ventilation slots */}
            <div className="absolute top-4 left-4 right-4 flex flex-col gap-[6px]">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-[2px] bg-white/10 rounded-full" />
              ))}
            </div>
            {/* Orange LED indicator */}
            <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-orange shadow-[0_0_8px_2px_rgba(255,107,0,0.6)]" />
            {/* Sitinel label */}
            <div className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
              Sitinel
            </div>
            {/* Side accent line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-orange/80" />
          </div>
        </div>

        {/* Specs Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((s) => (
            <div key={s.title} className="text-center">
              <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */

function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "We Connect to Your Cameras",
      desc: "Plugs into your existing IP camera infrastructure via standard RTSP. No new cameras required.",
    },
    {
      num: "2",
      title: "AI Runs On Your Site",
      desc: "All inference happens on the Sitinel device. Nothing leaves. Not a frame. Not a byte.",
    },
    {
      num: "3",
      title: "You Get Instant Alerts",
      desc: "SMS or email the moment a violation is detected. No dashboards to babysit.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">How It Works</h2>
        <div className="mt-16 grid md:grid-cols-3 gap-12">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <span className="inline-block text-6xl font-black text-orange/20 leading-none mb-4">
                {s.num}
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

/* ─── What We Catch ─── */

function WhatWeCatch() {
  const detections = [
    {
      icon: <HelmetIcon />,
      title: "Hard Hat Violations",
      desc: "Detected in real time across all active camera feeds.",
    },
    {
      icon: <VestIcon />,
      title: "Missing Hi-Vis Vest",
      desc: "Flagged before a supervisor needs to intervene.",
    },
    {
      icon: <BarrierIcon />,
      title: "Unauthorized Zone Entry",
      desc: "Perimeter breach alerts, instant.",
    },
    {
      icon: <WarningIcon />,
      title: "Slip & Fall Risk",
      desc: "Posture and movement pattern detection.",
    },
    {
      icon: <PeopleIcon />,
      title: "Multi-Worker Monitoring",
      desc: "Coverage across entire site simultaneously.",
    },
    {
      icon: <MicIcon />,
      title: "Audio Events",
      desc: "Distress signals, alarms, unusual sounds.",
      comingSoon: true,
    },
  ];

  return (
    <section id="detect" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">What Sitinel Catches</h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {detections.map((d) => (
            <div
              key={d.title}
              className={`relative rounded-xl border p-6 transition-all ${
                d.comingSoon
                  ? "border-white/10 opacity-40"
                  : "border-white/10 hover:border-orange/40 bg-white/5"
              }`}
            >
              {d.comingSoon && (
                <span className="absolute top-4 right-4 bg-white/10 text-white/40 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  d.comingSoon ? "bg-white/5 text-white/30" : "bg-orange/15 text-orange"
                }`}
              >
                {d.icon}
              </div>
              <h3 className={`text-lg font-semibold ${d.comingSoon ? "text-white/30" : "text-white"}`}>
                {d.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${d.comingSoon ? "text-white/20" : "text-white/50"}`}>
                {d.desc}
              </p>
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
      title: "Zero Egress",
      desc: "No footage, no frames, no metadata leaves your network. Ever.",
    },
    {
      title: "Works Offline",
      desc: "Full functionality with no internet. Your site runs on your terms.",
    },
    {
      title: "Privacy Compliant",
      desc: "Meets the strictest GC security and insurance requirements.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
          Your Site. Your Data. Full Stop.
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <h3 className="text-xl font-semibold text-navy">{f.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{f.desc}</p>
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

  const inputClasses =
    "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors";

  return (
    <section id="pilot" className="py-24 bg-navy">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <span className="block text-center text-orange text-sm font-semibold tracking-wide uppercase mb-4">
          Limited Availability
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Be One of Our First Sites</h2>
        <p className="mt-4 text-white/50 text-center leading-relaxed max-w-xl mx-auto">
          We&apos;re deploying with a small number of general contractors this quarter. Pilot sites get white-glove onboarding, direct engineering access, and locked-in founder pricing.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-white/70 mb-1.5">
                First Name <span className="text-orange">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-white/70 mb-1.5">
                Last Name <span className="text-orange">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-1.5">
              Company <span className="text-orange">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1.5">
              Email <span className="text-orange">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-1.5">
              Phone <span className="text-white/30">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1.5">
              Message <span className="text-white/30">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`${inputClasses} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-orange hover:bg-orange-hover disabled:opacity-50 text-white font-semibold py-3 rounded-lg text-base transition-colors"
          >
            {status === "sending" ? "Sending..." : "Request a Site Demo"}
          </button>

          <p className="text-white/30 text-xs text-center">We respond within 24 hours.</p>

          {status === "sent" && (
            <p className="text-green-400 text-sm text-center font-medium">
              Thanks! We&apos;ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center font-medium">
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
        <div className="flex items-center justify-center gap-3 mb-3">
          <img src="/sitinel-icon-white.svg" alt="Sitinel" className="h-8 w-8 object-contain" />
          <span className="text-white font-bold text-lg tracking-tight">SITINEL</span>
        </div>
        <p className="text-white/40 text-sm">Field Intelligence. On Your Site.</p>
        <div className="mt-4 flex items-center justify-center gap-4 text-white/30 text-xs">
          <span>&copy; 2026 Sitinel Technologies Inc.</span>
          <span>&middot;</span>
          <a href="https://sitinel.ca" className="hover:text-white/50 transition-colors">
            sitinel.ca
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
      <Hardware />
      <HowItWorks />
      <WhatWeCatch />
      <WhyOnPremise />
      <PilotProgram />
      <Footer />
    </main>
  );
}
