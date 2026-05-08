"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope,
  ShieldCheck,
  Truck,
  ChevronRight,
  ArrowRight,
  Activity,
  Microscope,
  CheckCircle2,
  Send,
  Building2,
  Users,
  Package
} from 'lucide-react';

const CATEGORIES = [
  {
    title: "General Surgery",
    description: "Premium grade stainless steel scalpel handles, forceps, and retractors.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=400&h=400&fit=crop"
  },
  {
    title: "Orthopaedics",
    description: "High-precision bone saws, chisels, and implant assistance tools.",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1583912267550-d44d7a12997e?q=80&w=400&h=400&fit=crop"
  },
  {
    title: "Cardiovascular",
    description: "Delicate micro-instruments for advanced vascular and cardiac procedures.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1579154235602-3c2c244fb89a?q=80&w=400&h=400&fit=crop"
  },
  {
    title: "PPE & Sterile",
    description: "Full range of high-barrier protective gear and sterile surgical drapes.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&h=400&fit=crop"
  }
];

export default function LandingPage() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hospital: '',
    specialty: '',
    volume: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setFormStep(prev => prev + 1);
  const prevStep = () => setFormStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-surgical-teal/30 selection:text-surgical-teal">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-medical-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-surgical-teal rounded-lg flex items-center justify-center text-medical-dark font-bold text-xl">S</div>
            <span className="text-2xl font-jakarta font-bold tracking-tight">SETRA<span className="text-surgical-teal">GROUP</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#products" className="hover:text-surgical-teal transition-colors">Products</a>
            <a href="#about" className="hover:text-surgical-teal transition-colors">Quality Assurance</a>
            <a href="#contact" className="px-5 py-2.5 bg-surgical-teal text-medical-dark rounded-full hover:bg-white transition-all font-semibold">Request Catalog</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-surgical-teal/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-surgical-teal text-xs font-bold uppercase tracking-widest mb-8"
            >
              <CheckCircle2 className="w-4 h-4" /> Based in Glasgow, Serving the UK
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-jakarta font-bold leading-[0.9] tracking-tight mb-8"
            >
              Surgical Precision. <br />
              <span className="text-white/40 italic">Scottish Heart.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/60 mb-10 max-w-xl leading-relaxed"
            >
              Empowering surgeons with world-class instruments. Designed for the NHS, engineered for clinical excellence, and delivered with 24-hour reliability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="px-8 py-4 bg-surgical-teal text-medical-dark rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 glow-teal">
                Request Private Catalog <ArrowRight className="w-5 h-5" />
              </a>
              <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                The Quality Standard
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale">
             <span className="text-2xl font-bold font-jakarta tracking-widest uppercase">NHS SCOTLAND</span>
             <span className="text-2xl font-bold font-jakarta tracking-widest uppercase">ISO 13485</span>
             <span className="text-2xl font-bold font-jakarta tracking-widest uppercase">CE MARKED</span>
             <span className="text-2xl font-bold font-jakarta tracking-widest uppercase">UKAS CERTIFIED</span>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="products" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-jakarta font-bold mb-6">High-Performance Solutions</h2>
              <p className="text-white/50 text-lg">Every instrument is hand-finished and batch-tested to ensure it exceeds international surgical standards.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-surgical-teal font-bold hover:gap-4 transition-all">
              View Full Inventory <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card group cursor-pointer overflow-hidden p-6 hover:border-surgical-teal/50 transition-all"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-6 bg-white/5">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" />
                </div>
                <cat.icon className="w-8 h-8 text-surgical-teal mb-4" />
                <h3 className="text-xl font-bold font-jakarta mb-2">{cat.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{cat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scottish Advantage */}
      <section className="py-32 bg-surgical-teal/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-jakarta font-bold mb-8 leading-tight">Scottish Excellence. <br />Global Standards.</h2>
            <div className="space-y-8">
              {[
                { title: "Next-Day NHS Delivery", desc: "Our Glasgow hub ensures critical supplies reach UK theater units within 24 hours.", icon: Truck },
                { title: "Hand-Finished Precision", desc: "Every instrument is inspected by experts in our Scottish quality lab.", icon: Microscope },
                { title: "Direct Manufacturer Pricing", desc: "Removing the middleman to provide premium quality at B2B scale.", icon: ShieldCheck }
              ].map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-surgical-teal/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7 text-surgical-teal" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden glass-card p-4">
              <div className="w-full h-full rounded-[20px] bg-medical-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-surgical-teal/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-white/5 mb-4">100%</div>
                    <div className="text-2xl font-bold tracking-widest text-surgical-teal">CERTIFIED STERILE</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-8 glow-teal">
               <p className="text-surgical-teal font-bold text-4xl mb-1">2,400+</p>
               <p className="text-white/40 text-xs font-bold tracking-widest uppercase">Hospitals Supplied</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-jakarta font-bold mb-6">Upgrade Your Theater Inventory</h2>
            <p className="text-white/50 text-xl">Join the network of premium healthcare providers choosing Setra Group.</p>
          </div>

          <div className="glass-card p-10 md:p-16 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-surgical-teal rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-medical-dark" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Request Received</h3>
                  <p className="text-white/50">One of our Scottish clinical consultants will contact you within 4 business hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {formStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                            <Users className="w-3 h-3" /> Full Name
                          </label>
                          <input required name="name" onChange={handleInputChange} placeholder="Dr. John Smith" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-surgical-teal outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                            <Building2 className="w-3 h-3" /> Business Email
                          </label>
                          <input required type="email" name="email" onChange={handleInputChange} placeholder="jsmith@nhsscotland.uk" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-surgical-teal outline-none transition-all" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                          <Building2 className="w-3 h-3" /> Hospital / Clinic
                        </label>
                        <input required name="hospital" onChange={handleInputChange} placeholder="Queen Elizabeth University Hospital" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-surgical-teal outline-none transition-all" />
                      </div>
                      <button type="button" onClick={nextStep} className="w-full py-5 bg-surgical-teal text-medical-dark rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all">
                        Continue to Requirements
                      </button>
                    </motion.div>
                  )}

                  {formStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                            <Package className="w-3 h-3" /> Primary Specialty
                          </label>
                          <select name="specialty" onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-surgical-teal outline-none transition-all appearance-none">
                            <option value="">Select Specialty</option>
                            <option value="ortho">Orthopaedic</option>
                            <option value="cardio">Cardiovascular</option>
                            <option value="general">General Surgery</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                            <ArrowRight className="w-3 h-3" /> Estimated Volume
                          </label>
                          <select name="volume" onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-surgical-teal outline-none transition-all appearance-none">
                            <option value="">Select Volume</option>
                            <option value="trial">Trial Batch</option>
                            <option value="monthly">Monthly Supply</option>
                            <option value="contract">Annual Contract</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Additional Requirements</label>
                        <textarea name="message" onChange={handleInputChange} rows={4} placeholder="Describe specific instruments or delivery needs..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-surgical-teal outline-none transition-all resize-none"></textarea>
                      </div>
                      <div className="flex gap-4">
                        <button type="button" onClick={prevStep} className="w-1/3 py-5 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                          Back
                        </button>
                        <button type="submit" disabled={isSubmitting} className="w-2/3 py-5 bg-surgical-teal text-medical-dark rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                          {isSubmitting ? "Processing..." : "Submit Inquiry"} <Send className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-medical-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-surgical-teal rounded-lg flex items-center justify-center text-medical-dark font-bold text-xl">S</div>
              <span className="text-2xl font-jakarta font-bold tracking-tight">SETRA<span className="text-surgical-teal">GROUP</span></span>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">Leading the way in surgical instrument innovation and distribution from Glasgow, Scotland. Supporting healthcare heroes with precision tools.</p>
            <div className="text-xs font-bold tracking-widest text-white/20 uppercase">© 2026 Setra Group Scotland. All rights reserved.</div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/40">
              <li><a href="#" className="hover:text-surgical-teal transition-colors">Product Catalog</a></li>
              <li><a href="#" className="hover:text-surgical-teal transition-colors">ISO Certifications</a></li>
              <li><a href="#" className="hover:text-surgical-teal transition-colors">B2B Portal</a></li>
              <li><a href="#" className="hover:text-surgical-teal transition-colors">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Hub</h4>
            <ul className="space-y-4 text-white/40">
              <li>123 Innovation Way<br />Glasgow, G1 1XQ<br />Scotland, UK</li>
              <li>+44 (0) 141 555 0123</li>
              <li>inquiries@setragroup.co.uk</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
