/**
 * COPPER TRAIL PLUMBING — Shared Service Page Template
 * Desert Craftsman Theme: photography-forward, copper motifs, problem→solution→CTA rhythm
 */

import { Link } from "wouter";
import { Phone, CheckCircle, LucideIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PHONE = "(520) 348-0490";
const PHONE_HREF = "tel:5203480490";

export function CopperPipeDivider() {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="h-0.5 w-8 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="4" stroke="oklch(0.62 0.12 55)" strokeWidth="2" fill="none"/>
        <line x1="0" y1="10" x2="6" y2="10" stroke="oklch(0.62 0.12 55)" strokeWidth="2"/>
        <line x1="14" y1="10" x2="20" y2="10" stroke="oklch(0.62 0.12 55)" strokeWidth="2"/>
      </svg>
      <div className="h-0.5 flex-1 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55 / 0.3)" }} />
    </div>
  );
}

interface ServicePageProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  trustBadges: string[];
  children: React.ReactNode;
  ctaTitle: string;
  ctaSubtitle: string;
}

export default function ServicePageTemplate({
  badge,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  trustBadges,
  children,
  ctaTitle,
  ctaSubtitle,
}: ServicePageProps) {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section
        className="relative pt-40 pb-0 text-white overflow-hidden"
        style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
      >
        <div className="container pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <p className="font-['Inter'] text-sm font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
                {badge}
              </p>
              <h1 className="font-['Oswald'] font-700 text-5xl md:text-6xl text-white leading-tight mb-4">
                {title}
              </h1>
              <CopperPipeDivider />
              <p className="font-['Source_Serif_4'] text-xl text-white/80 mt-4 mb-8">
                {subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="btn-copper rounded flex items-center justify-center gap-2 text-lg">
                  <Phone size={20} /> Call {PHONE}
                </a>
                <Link href="/contact" className="flex items-center justify-center gap-2 px-6 py-3.5 rounded font-['Oswald'] font-600 text-base uppercase tracking-wide text-white border-2 border-white/30 hover:border-white/70 transition-colors">
                  Free Estimate
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                {trustBadges.map((t) => (
                  <div key={t} className="flex items-center gap-2 text-white/70 font-['Inter'] text-sm">
                    <CheckCircle size={13} style={{ color: "oklch(0.62 0.12 55)" }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative self-end">
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="w-full rounded-t-xl shadow-2xl object-cover object-top"
                style={{ maxHeight: "420px" }}
              />
              <div className="absolute inset-0 rounded-t-xl" style={{ background: "linear-gradient(to top, oklch(0.22 0.07 255 / 0.3) 0%, transparent 60%)" }} />
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block" style={{ marginBottom: "-1px" }}>
          <path d="M0,60 L1440,0 L1440,60 Z" fill="oklch(0.99 0.008 75)" />
        </svg>
      </section>

      {/* Page content */}
      {children}

      {/* Final CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: "oklch(0.62 0.12 55)" }}>
        <div className="container">
          <h2 className="font-['Oswald'] font-700 text-3xl md:text-4xl mb-3">
            {ctaTitle}
          </h2>
          <p className="font-['Source_Serif_4'] text-xl text-white/90 mb-7 max-w-xl mx-auto">
            {ctaSubtitle}
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-white font-['Oswald'] font-700 text-xl px-8 py-4 rounded transition-all duration-150 hover:scale-[1.02] active:scale-[0.97] shadow-lg"
            style={{ color: "oklch(0.22 0.07 255)" }}
          >
            <Phone size={22} />
            {PHONE}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
