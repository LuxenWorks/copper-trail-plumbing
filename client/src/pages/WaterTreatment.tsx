/**
 * COPPER TRAIL PLUMBING — Water Treatment Service Page
 * Desert Craftsman Theme | Target: "water softener installation Mesa AZ"
 */

import { Phone, CheckCircle, Droplets } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PHONE = "(520) 348-0490";
const PHONE_HREF = "tel:5203480490";

export default function WaterTreatment() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-40 pb-20 text-white" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <p className="font-['Inter'] text-sm font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
              Mesa, AZ Water Treatment
            </p>
            <h1 className="font-['Oswald'] font-700 text-5xl md:text-6xl text-white mb-5">
              Water Softeners & Filtration in Mesa, AZ
            </h1>
            <p className="font-['Source_Serif_4'] text-xl text-white/80 mb-8">
              Mesa water runs 12–22 grains per gallon of hardness. A whole-house water softener protects your pipes, 
              water heater, and appliances — and pays for itself in extended equipment life.
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
                  The Hard Truth About Mesa Water
                </h2>
                <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
                <p className="font-['Source_Serif_4'] text-lg leading-relaxed mb-4" style={{ color: "oklch(0.35 0.005 0)" }}>
                  Mesa's water supply comes primarily from the Salt River Project and the Central Arizona Project canal system. 
                  By the time it reaches your tap, it carries 12–22 grains per gallon (GPG) of dissolved calcium and magnesium — 
                  the minerals that cause "hardness." The U.S. Geological Survey classifies anything above 10.5 GPG as "very hard."
                </p>
                <p className="font-['Source_Serif_4'] text-lg leading-relaxed" style={{ color: "oklch(0.35 0.005 0)" }}>
                  That hardness leaves scale deposits inside every pipe, water heater, dishwasher, washing machine, 
                  and coffee maker in your home. It's why your water heater fails early, why your shower doors fog up, 
                  and why your skin and hair feel dry. A water softener removes those minerals before they enter your home's plumbing.
                </p>
              </div>

              <div>
                <h2 className="font-['Oswald'] font-700 text-3xl mb-4" style={{ color: "oklch(0.22 0.07 255)" }}>
                  What Hard Water Costs You
                </h2>
                <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Water Heater", desc: "Scale buildup reduces efficiency by up to 30% and cuts lifespan from 12 years to 6–8 years." },
                    { title: "Dishwasher & Washer", desc: "Hard water leaves spots, requires more detergent, and shortens appliance life by 30–50%." },
                    { title: "Pipes & Fixtures", desc: "Scale narrows pipe diameter over decades, reducing pressure and eventually requiring repiping." },
                    { title: "Skin & Hair", desc: "Hard water strips natural oils, leaving skin dry and hair brittle. Soft water noticeably improves both." },
                  ].map((item) => (
                    <div key={item.title} className="p-4 rounded-xl border" style={{ borderColor: "oklch(0.88 0.01 75)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <Droplets size={14} style={{ color: "oklch(0.62 0.12 55)" }} />
                        <h3 className="font-['Oswald'] font-600 text-base" style={{ color: "oklch(0.22 0.07 255)" }}>{item.title}</h3>
                      </div>
                      <p className="font-['Source_Serif_4'] text-sm" style={{ color: "oklch(0.45 0.005 0)" }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-['Oswald'] font-700 text-3xl mb-4" style={{ color: "oklch(0.22 0.07 255)" }}>
                  Our Water Treatment Solutions
                </h2>
                <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
                <div className="space-y-4">
                  {[
                    {
                      title: "Whole-House Water Softeners",
                      desc: "Salt-based ion exchange softeners remove calcium and magnesium from all water entering your home. The most effective solution for Mesa's hard water. We size the system based on your household water usage and hardness level.",
                    },
                    {
                      title: "Salt-Free Conditioners",
                      desc: "Template-assisted crystallization (TAC) systems change the structure of minerals so they don't stick to pipes and surfaces. No salt, no wastewater discharge. Good for environmentally conscious homeowners.",
                    },
                    {
                      title: "Reverse Osmosis Drinking Water",
                      desc: "A point-of-use RO system under your kitchen sink provides purified drinking water, removing not just hardness but also chlorine, sediment, and other contaminants.",
                    },
                    {
                      title: "Whole-House Filtration",
                      desc: "Carbon filtration removes chlorine, chloramines, and other taste and odor compounds from all water in your home. Often combined with a water softener for comprehensive treatment.",
                    },
                  ].map((solution) => (
                    <div key={solution.title} className="p-5 rounded-xl border" style={{ borderColor: "oklch(0.88 0.01 75)" }}>
                      <h3 className="font-['Oswald'] font-600 text-lg mb-2" style={{ color: "oklch(0.22 0.07 255)" }}>{solution.title}</h3>
                      <p className="font-['Source_Serif_4'] text-base leading-relaxed" style={{ color: "oklch(0.45 0.005 0)" }}>{solution.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl text-white" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
                <h3 className="font-['Oswald'] font-700 text-2xl mb-4">Get a Free Water Test</h3>
                <p className="font-['Source_Serif_4'] text-white/80 text-sm mb-5">
                  We test your water hardness and recommend the right system for your home and budget.
                </p>
                <a href={PHONE_HREF} className="btn-copper rounded flex items-center justify-center gap-2 w-full">
                  <Phone size={18} /> {PHONE}
                </a>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: "oklch(0.96 0.015 75)" }}>
                <h3 className="font-['Oswald'] font-600 text-xl mb-4" style={{ color: "oklch(0.22 0.07 255)" }}>
                  Water Treatment Services
                </h3>
                <ul className="space-y-2">
                  {["Free water hardness test", "Water softener installation", "Salt-free conditioners", "Reverse osmosis systems", "Whole-house filtration", "System maintenance", "Salt delivery & refill", "System repair & service"].map((s) => (
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
