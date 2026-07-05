/**
 * COPPER TRAIL PLUMBING — Repiping Service Page
 * Desert Craftsman Theme | Target: "repiping Mesa AZ"
 */

import { Phone, CheckCircle, Wrench } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PHONE = "(520) 348-0490";
const PHONE_HREF = "tel:5203480490";

export default function Repiping() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-40 pb-20 text-white" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <p className="font-['Inter'] text-sm font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
              Mesa, AZ Repiping Services
            </p>
            <h1 className="font-['Oswald'] font-700 text-5xl md:text-6xl text-white mb-5">
              Whole-Home Repiping in Mesa, AZ
            </h1>
            <p className="font-['Source_Serif_4'] text-xl text-white/80 mb-8">
              Old galvanized pipes rust from the inside out. We replace failing pipe systems with durable copper or PEX, 
              restoring full water pressure and giving your home decades of reliable service.
            </p>
            <a href={PHONE_HREF} className="btn-copper rounded inline-flex items-center gap-2 text-lg">
              <Phone size={20} /> Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "oklch(0.99 0.008 75)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-['Oswald'] font-700 text-3xl mb-4" style={{ color: "oklch(0.22 0.07 255)" }}>
                  When Repiping Is the Right Answer
                </h2>
                <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
                <p className="font-['Source_Serif_4'] text-lg leading-relaxed mb-4" style={{ color: "oklch(0.35 0.005 0)" }}>
                  Homes built in Mesa before the 1990s often have galvanized steel pipes. Galvanized pipe corrodes from the inside, 
                  gradually narrowing the pipe diameter and releasing rust into your water supply. 
                  When you see brown or orange-tinged water, especially from the hot side, that's rust from your pipes.
                </p>
                <p className="font-['Source_Serif_4'] text-lg leading-relaxed" style={{ color: "oklch(0.35 0.005 0)" }}>
                  At a certain point, patching individual leaks becomes more expensive than replacing the entire system. 
                  We'll give you an honest assessment of whether your pipes can be repaired or whether repiping is the smarter long-term investment.
                </p>
              </div>

              <div>
                <h2 className="font-['Oswald'] font-700 text-3xl mb-4" style={{ color: "oklch(0.22 0.07 255)" }}>
                  Signs You May Need Repiping
                </h2>
                <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
                <ul className="space-y-3">
                  {[
                    "Low water pressure throughout the house",
                    "Rusty or discolored water from taps",
                    "Frequent pipe leaks or pinhole leaks",
                    "Pipes that are 40+ years old",
                    "Visible corrosion on exposed pipes",
                    "Metallic taste in your water",
                    "Pipes that make banging or rattling sounds",
                    "Multiple slab leaks in the same system",
                  ].map((sign) => (
                    <li key={sign} className="flex items-start gap-3">
                      <CheckCircle size={16} className="mt-1 shrink-0" style={{ color: "oklch(0.62 0.12 55)" }} />
                      <span className="font-['Source_Serif_4'] text-base" style={{ color: "oklch(0.35 0.005 0)" }}>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-['Oswald'] font-700 text-3xl mb-4" style={{ color: "oklch(0.22 0.07 255)" }}>
                  Copper vs. PEX: Which Pipe Is Right for Your Home?
                </h2>
                <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    {
                      title: "Copper Pipe",
                      points: [
                        "Industry standard for 60+ years",
                        "Naturally antimicrobial",
                        "Withstands high temperatures",
                        "Longer lifespan (50+ years)",
                        "Higher material cost",
                        "Requires soldering",
                      ],
                    },
                    {
                      title: "PEX Pipe",
                      points: [
                        "Flexible — fewer fittings needed",
                        "Resistant to freezing",
                        "Lower material cost",
                        "Faster installation",
                        "Less invasive installation",
                        "20–50 year lifespan",
                      ],
                    },
                  ].map((option) => (
                    <div key={option.title} className="p-5 rounded-xl border" style={{ borderColor: "oklch(0.88 0.01 75)" }}>
                      <div className="flex items-center gap-2 mb-3">
                        <Wrench size={16} style={{ color: "oklch(0.62 0.12 55)" }} />
                        <h3 className="font-['Oswald'] font-600 text-xl" style={{ color: "oklch(0.22 0.07 255)" }}>{option.title}</h3>
                      </div>
                      <ul className="space-y-1">
                        {option.points.map((p) => (
                          <li key={p} className="flex items-center gap-2 font-['Inter'] text-sm" style={{ color: "oklch(0.35 0.005 0)" }}>
                            <CheckCircle size={12} style={{ color: "oklch(0.62 0.12 55)" }} /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="font-['Source_Serif_4'] text-base mt-5" style={{ color: "oklch(0.45 0.005 0)" }}>
                  We work with both materials and will recommend the best option for your home's age, layout, and budget. 
                  Many Mesa homeowners choose PEX for its lower cost and easier installation, while others prefer copper for its longevity.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl text-white" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
                <h3 className="font-['Oswald'] font-700 text-2xl mb-4">Get a Repiping Estimate</h3>
                <p className="font-['Source_Serif_4'] text-white/80 text-sm mb-5">
                  We provide free repiping estimates. Most Mesa homes can be repiped in 2–3 days.
                </p>
                <a href={PHONE_HREF} className="btn-copper rounded flex items-center justify-center gap-2 w-full">
                  <Phone size={18} /> {PHONE}
                </a>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: "oklch(0.96 0.015 75)" }}>
                <h3 className="font-['Oswald'] font-600 text-xl mb-4" style={{ color: "oklch(0.22 0.07 255)" }}>
                  Our Repiping Process
                </h3>
                <ul className="space-y-2">
                  {["Free home assessment", "Written estimate", "Permit pulled (if required)", "Minimal drywall access", "Copper or PEX installation", "Pressure testing", "Drywall patching", "Final inspection"].map((s) => (
                    <li key={s} className="flex items-center gap-2 font-['Inter'] text-sm" style={{ color: "oklch(0.35 0.005 0)" }}>
                      <CheckCircle size={14} style={{ color: "oklch(0.62 0.12 55)" }} /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
