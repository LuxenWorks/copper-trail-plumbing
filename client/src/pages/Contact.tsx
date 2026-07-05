/**
 * COPPER TRAIL PLUMBING — Contact Page
 * Desert Craftsman Theme | Target: "plumber Mesa AZ contact"
 */

import { useState } from "react";
import { Phone, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const PHONE = "(520) 348-0490";
const PHONE_HREF = "tel:5203480490";

const serviceAreas = [
  "Mesa 85201", "Mesa 85202", "Mesa 85203", "Mesa 85204", "Mesa 85205",
  "Mesa 85206", "Mesa 85207", "Mesa 85208", "Mesa 85209", "Mesa 85210",
  "Mesa 85212", "Mesa 85213", "Mesa 85215", "Gilbert", "Chandler", "Tempe",
  "Dobson Ranch", "Red Mountain", "Eastmark", "Superstition Springs",
  "Las Sendas", "Falcon Field Area",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setSubmitted(true);
    toast.success("Request received! We'll call you within 30 minutes.");
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 text-white" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
        <div className="container">
          <div className="max-w-2xl">
            <p className="font-['Inter'] text-sm font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
              Get in Touch
            </p>
            <h1 className="font-['Oswald'] font-700 text-5xl md:text-6xl text-white mb-5">
              Contact Copper Trail Plumbing
            </h1>
            <p className="font-['Source_Serif_4'] text-xl text-white/80">
              Call us now for the fastest response. For non-emergency requests, fill out the form below and we'll call you back within 30 minutes during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.99 0.008 75)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-['Oswald'] font-700 text-3xl mb-2" style={{ color: "oklch(0.22 0.07 255)" }}>
                Request a Callback
              </h2>
              <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />

              {submitted ? (
                <div className="p-8 rounded-xl text-center" style={{ backgroundColor: "oklch(0.96 0.015 75)" }}>
                  <CheckCircle size={48} className="mx-auto mb-4" style={{ color: "oklch(0.62 0.12 55)" }} />
                  <h3 className="font-['Oswald'] font-700 text-2xl mb-2" style={{ color: "oklch(0.22 0.07 255)" }}>
                    We Got Your Request!
                  </h3>
                  <p className="font-['Source_Serif_4'] text-lg" style={{ color: "oklch(0.45 0.005 0)" }}>
                    We'll call you back within 30 minutes during business hours. For immediate help, call us directly at{" "}
                    <a href={PHONE_HREF} className="font-bold" style={{ color: "oklch(0.62 0.12 55)" }}>{PHONE}</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-['Inter'] text-sm font-500 mb-1.5" style={{ color: "oklch(0.35 0.005 0)" }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border font-['Source_Serif_4'] text-base focus:outline-none focus:ring-2 transition-all"
                        style={{
                          borderColor: "oklch(0.88 0.01 75)",
                          backgroundColor: "white",
                          color: "oklch(0.22 0.005 0)",
                        }}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block font-['Inter'] text-sm font-500 mb-1.5" style={{ color: "oklch(0.35 0.005 0)" }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border font-['Source_Serif_4'] text-base focus:outline-none focus:ring-2 transition-all"
                        style={{ borderColor: "oklch(0.88 0.01 75)", backgroundColor: "white", color: "oklch(0.22 0.005 0)" }}
                        placeholder="(480) 555-0100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-['Inter'] text-sm font-500 mb-1.5" style={{ color: "oklch(0.35 0.005 0)" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border font-['Source_Serif_4'] text-base focus:outline-none focus:ring-2 transition-all"
                      style={{ borderColor: "oklch(0.88 0.01 75)", backgroundColor: "white", color: "oklch(0.22 0.005 0)" }}
                      placeholder="john@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-['Inter'] text-sm font-500 mb-1.5" style={{ color: "oklch(0.35 0.005 0)" }}>
                      Service Needed
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border font-['Source_Serif_4'] text-base focus:outline-none focus:ring-2 transition-all"
                      style={{ borderColor: "oklch(0.88 0.01 75)", backgroundColor: "white", color: "oklch(0.22 0.005 0)" }}
                    >
                      <option value="">Select a service...</option>
                      <option value="water-heater">Water Heater Repair / Replacement</option>
                      <option value="drain-cleaning">Drain Cleaning</option>
                      <option value="slab-leak">Slab Leak Detection</option>
                      <option value="repiping">Repiping</option>
                      <option value="water-treatment">Water Softener / Treatment</option>
                      <option value="toilet-fixture">Toilet / Fixture Repair</option>
                      <option value="emergency">Emergency Plumbing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-['Inter'] text-sm font-500 mb-1.5" style={{ color: "oklch(0.35 0.005 0)" }}>
                      Describe the Problem
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border font-['Source_Serif_4'] text-base focus:outline-none focus:ring-2 transition-all resize-none"
                      style={{ borderColor: "oklch(0.88 0.01 75)", backgroundColor: "white", color: "oklch(0.22 0.005 0)" }}
                      placeholder="Tell us what's going on..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-copper rounded flex items-center justify-center gap-2 w-full text-lg"
                  >
                    <Send size={18} />
                    Send Request — We'll Call You Back
                  </button>

                  <p className="font-['Inter'] text-xs text-center" style={{ color: "oklch(0.55 0.005 0)" }}>
                    For emergencies, call us directly at{" "}
                    <a href={PHONE_HREF} className="font-600" style={{ color: "oklch(0.62 0.12 55)" }}>{PHONE}</a>
                  </p>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-['Oswald'] font-700 text-3xl mb-2" style={{ color: "oklch(0.22 0.07 255)" }}>
                  Contact Information
                </h2>
                <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />

                <div className="space-y-5">
                  <div className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: "oklch(0.96 0.015 75)" }}>
                    <Phone size={22} className="shrink-0 mt-0.5" style={{ color: "oklch(0.62 0.12 55)" }} />
                    <div>
                      <p className="font-['Oswald'] font-600 text-lg" style={{ color: "oklch(0.22 0.07 255)" }}>Phone</p>
                      <a href={PHONE_HREF} className="font-['Oswald'] font-700 text-2xl" style={{ color: "oklch(0.62 0.12 55)" }}>
                        {PHONE}
                      </a>
                      <p className="font-['Inter'] text-xs mt-1" style={{ color: "oklch(0.55 0.005 0)" }}>
                        24/7 for emergencies
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: "oklch(0.96 0.015 75)" }}>
                    <MapPin size={22} className="shrink-0 mt-0.5" style={{ color: "oklch(0.62 0.12 55)" }} />
                    <div>
                      <p className="font-['Oswald'] font-600 text-lg" style={{ color: "oklch(0.22 0.07 255)" }}>Address</p>
                      <p className="font-['Source_Serif_4'] text-base" style={{ color: "oklch(0.35 0.005 0)" }}>
                        506 E Juanita Ave<br />Mesa, AZ 85204
                      </p>
                      <a
                        href="https://maps.google.com/?q=506+E+Juanita+Ave+Mesa+AZ+85204"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Inter'] text-xs mt-1 inline-block"
                        style={{ color: "oklch(0.62 0.12 55)" }}
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: "oklch(0.96 0.015 75)" }}>
                    <Clock size={22} className="shrink-0 mt-0.5" style={{ color: "oklch(0.62 0.12 55)" }} />
                    <div>
                      <p className="font-['Oswald'] font-600 text-lg" style={{ color: "oklch(0.22 0.07 255)" }}>Hours</p>
                      <div className="font-['Source_Serif_4'] text-base space-y-0.5" style={{ color: "oklch(0.35 0.005 0)" }}>
                        <p>Monday – Friday: 7:00am – 7:00pm</p>
                        <p>Saturday: 8:00am – 5:00pm</p>
                        <p>Sunday: Emergency calls only</p>
                        <p className="font-600" style={{ color: "oklch(0.62 0.12 55)" }}>24/7 Emergency Service Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service areas */}
              <div id="service-areas">
                <h3 className="font-['Oswald'] font-700 text-2xl mb-4" style={{ color: "oklch(0.22 0.07 255)" }}>
                  Service Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-full font-['Inter'] text-xs font-500"
                      style={{ backgroundColor: "oklch(0.96 0.015 75)", color: "oklch(0.22 0.07 255)", border: "1px solid oklch(0.88 0.01 75)" }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
