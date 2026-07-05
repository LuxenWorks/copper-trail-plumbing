/**
 * COPPER TRAIL PLUMBING — Slab Leak Detection Page
 * Desert Craftsman Theme | Target: "slab leak detection Mesa AZ"
 */

import { Phone, CheckCircle, Shield, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PHONE = "(520) 348-0490";
const PHONE_HREF = "tel:5203480490";

export default function SlabLeak() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-40 pb-20 text-white" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <p className="font-['Inter'] text-sm font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
              Mesa, AZ Slab Leak Services
            </p>
            <h1 className="font-['Oswald'] font-700 text-5xl md:text-6xl text-white mb-5">
              Slab Leak Detection & Repair in Mesa
            </h1>
            <p className="font-['Source_Serif_4'] text-xl text-white/80 mb-8">
              Mesa's shifting clay soils crack copper pipes under your foundation. 
              We use electronic detection equipment to find the leak without tearing up your floor — then fix it right.
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
                  Why Mesa Has So Many Slab Leaks
                </h2>
                <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
                <p className="font-['Source_Serif_4'] text-lg leading-relaxed mb-4" style={{ color: "oklch(0.35 0.005 0)" }}>
                  Most Mesa homes built before the 1990s have copper water supply lines running through or under the concrete slab foundation. 
                  The clay soils under Mesa expand when wet (monsoon season) and contract when dry (the rest of the year). 
                  This constant movement puts stress on the pipes, eventually causing cracks and pinhole leaks.
                </p>
                <p className="font-['Source_Serif_4'] text-lg leading-relaxed" style={{ color: "oklch(0.35 0.005 0)" }}>
                  Mesa's hard water accelerates the problem. Mineral deposits inside copper pipes create weak spots, 
                  and the exterior of pipes embedded in concrete corrodes from the alkaline soil. 
                  Slab leaks are one of the most common and costly plumbing problems in the East Valley.
                </p>
              </div>

              <div
                className="p-6 rounded-xl border-l-4"
                style={{ backgroundColor: "oklch(0.96 0.015 75)", borderLeftColor: "oklch(0.7 0.18 50)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={18} style={{ color: "oklch(0.7 0.18 50)" }} />
                  <h3 className="font-['Oswald'] font-600 text-lg" style={{ color: "oklch(0.22 0.07 255)" }}>
                    Don't Wait on a Slab Leak
                  </h3>
                </div>
                <p className="font-['Source_Serif_4'] text-base" style={{ color: "oklch(0.35 0.005 0)" }}>
                  A slab leak that goes undetected can saturate the soil under your foundation, causing settling and structural damage. 
                  It can also promote mold growth under flooring. Early detection and repair costs a fraction of what structural repairs cost.
                </p>
              </div>

              <div>
                <h2 className="font-['Oswald'] font-700 text-3xl mb-4" style={{ color: "oklch(0.22 0.07 255)" }}>
                  Warning Signs of a Slab Leak
                </h2>
                <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
                <ul className="space-y-3">
                  {[
                    "Warm or hot spots on your floor (hot water line leak)",
                    "Sound of running water when all fixtures are off",
                    "Unexplained spike in your water bill",
                    "Cracks appearing in walls, floors, or baseboards",
                    "Damp or wet carpet or flooring with no obvious source",
                    "Mold or mildew smell near the floor",
                    "Low water pressure throughout the house",
                    "Water meter spinning when all water is turned off",
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
                  Our Slab Leak Detection & Repair Process
                </h2>
                <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
                <div className="space-y-5">
                  {[
                    { step: "1", title: "Electronic Detection", desc: "We use acoustic listening equipment and electronic amplification to pinpoint the leak location without any demolition. Most leaks are located within a 6-inch radius." },
                    { step: "2", title: "Pressure Testing", desc: "We isolate sections of your plumbing to confirm the leak location and determine whether it's a hot or cold water line." },
                    { step: "3", title: "Repair Options", desc: "Depending on the pipe condition and location, we recommend spot repair (direct access), pipe rerouting (running new pipe through walls or attic), or epoxy pipe lining." },
                    { step: "4", title: "Restoration", desc: "We patch any concrete or flooring access points and restore your home to pre-repair condition." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-['Oswald'] font-700 text-white"
                        style={{ backgroundColor: "oklch(0.62 0.12 55)" }}
                      >
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-['Oswald'] font-600 text-lg mb-1" style={{ color: "oklch(0.22 0.07 255)" }}>{item.title}</h3>
                        <p className="font-['Source_Serif_4'] text-base" style={{ color: "oklch(0.45 0.005 0)" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl text-white" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
                <h3 className="font-['Oswald'] font-700 text-2xl mb-4">Suspect a Slab Leak?</h3>
                <p className="font-['Source_Serif_4'] text-white/80 text-sm mb-5">
                  Call us immediately. Early detection prevents thousands in structural damage.
                </p>
                <a href={PHONE_HREF} className="btn-copper rounded flex items-center justify-center gap-2 w-full">
                  <Phone size={18} /> {PHONE}
                </a>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: "oklch(0.96 0.015 75)" }}>
                <h3 className="font-['Oswald'] font-600 text-xl mb-4" style={{ color: "oklch(0.22 0.07 255)" }}>
                  Slab Leak Services
                </h3>
                <ul className="space-y-2">
                  {["Electronic leak detection", "Acoustic listening equipment", "Pressure testing", "Spot repair", "Pipe rerouting", "Epoxy lining", "Insurance documentation", "Emergency service"].map((s) => (
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
