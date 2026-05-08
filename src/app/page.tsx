"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Stethoscope,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Activity,
  Microscope,
  CheckCircle2,
  Send,
  Building2,
  Users,
  Package,
  Star,
  Plus,
  Minus,
  Globe,
  Settings,
  Clock
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

const TESTIMONIALS = [
  {
    name: "Dr. Alistair MacKenzie",
    role: "Consultant Orthopaedic Surgeon",
    hospital: "Glasgow Royal Infirmary",
    quote: "The ergonomic balance of Setra's precision saws is unmatched. It's rare to find a local supplier that meets these international benchmarks.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&fit=crop"
  },
  {
    name: "Dr. Sarah Henderson",
    role: "Chief of Surgery",
    hospital: "Queen Elizabeth University Hospital",
    quote: "Switching to Setra Group reduced our procurement lead times by 60% without compromising on the clinical grade we require.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&fit=crop"
  }
];

const FAQS = [
  {
    question: "Do you supply directly to NHS trusts?",
    answer: "Yes, we are a registered supplier for NHS National Procurement and support individual Trust-level contracts across Scotland and the UK."
  },
  {
    question: "What is your typical lead time for bulk orders?",
    answer: "Stock items are dispatched within 24 hours. Custom instruments or high-volume contracts typically follow a 2-4 week manufacturing cycle."
  },
  {
    question: "Are all instruments ISO certified?",
    answer: "Every instrument we distribute is ISO 13485:2016 certified and carries the CE/UKCA mark for medical device compliance."
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen selection:bg-surgical-teal/30 selection:text-surgical-teal overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-medical-dark/95 backdrop-blur-2xl border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-surgical-teal rounded-lg flex items-center justify-center text-medical-dark font-bold text-xl group-hover:rotate-12 transition-transform">S</div>
            <span className="text-2xl font-jakarta font-bold tracking-tight">SETRA<span className="text-surgical-teal">GROUP</span></span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide text-white/70"
          >
            <a href="#products" className="hover:text-surgical-teal transition-colors">Products</a>
            <a href="#process" className="hover:text-surgical-teal transition-colors">Scientific Process</a>
            <a href="#testimonials" className="hover:text-surgical-teal transition-colors">Trust</a>
            <a href="#contact" className="px-6 py-3 bg-surgical-teal text-medical-dark rounded-full hover:bg-white transition-all shadow-lg shadow-surgical-teal/10">Request Catalog</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[5%] w-[600px] h-[600px] bg-surgical-teal/10 blur-[140px] rounded-full animate-pulse" />
          <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-surgical-teal text-xs font-bold uppercase tracking-widest mb-10"
            >
              <div className="w-2 h-2 rounded-full bg-surgical-teal animate-ping" />
              Serving the NHS & Private Healthcare Since 2012
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-7xl md:text-9xl font-jakarta font-extrabold leading-[0.85] tracking-tighter mb-10"
            >
              The New Era of <br />
              <span className="text-white/30 italic font-medium">Surgical Logistics.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white/50 mb-12 max-w-2xl leading-relaxed"
            >
              Setra Group bridges the gap between precision manufacturing and urgent clinical demand. 24-hour dispatch from our Glasgow hub.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
            >
              <a href="#contact" className="px-10 py-5 bg-surgical-teal text-medical-dark rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 glow-teal">
                Get B2B Pricing <ArrowRight className="w-6 h-6" />
              </a>
              <a href="#process" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                Watch Quality Control <Activity className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Trust Bar */}
      <section className="py-16 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white/30 text-xs font-bold uppercase tracking-[0.3em] mb-12">Authorized Supply Chain Partner</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:opacity-100 transition-opacity duration-700">
             <div className="flex items-center gap-2"><Globe className="w-6 h-6" /> <span className="text-2xl font-bold font-jakarta tracking-tighter">NHS NATIONAL</span></div>
             <div className="flex items-center gap-2"><ShieldCheck className="w-6 h-6" /> <span className="text-2xl font-bold font-jakarta tracking-tighter">ISO 13485:2016</span></div>
             <div className="flex items-center gap-2"><Settings className="w-6 h-6" /> <span className="text-2xl font-bold font-jakarta tracking-tighter">CE REGISTERED</span></div>
             <div className="flex items-center gap-2"><CheckCircle2 className="w-6 h-6" /> <span className="text-2xl font-bold font-jakarta tracking-tighter">UKAS ACCREDITED</span></div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="products" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div>
              <h2 className="text-5xl font-jakarta font-bold mb-6">Clinical Portfolio</h2>
              <p className="text-white/40 text-xl max-w-xl">From trauma to micro-surgery, we provide the instruments that define modern theater excellence.</p>
            </div>
            <a href="#" className="flex items-center gap-3 text-surgical-teal font-bold group">
              View Full Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card group cursor-pointer overflow-hidden border-white/5 hover:border-surgical-teal/20 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-dark to-transparent opacity-60" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-surgical-teal/10 border border-surgical-teal/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-surgical-teal transition-colors">
                    <cat.icon className="w-6 h-6 text-surgical-teal group-hover:text-medical-dark transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{cat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Process / Authority */}
      <section id="process" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[40px] overflow-hidden glass-card p-6 border-surgical-teal/20">
                <Image
                  src="https://images.unsplash.com/photo-1576086213369-97a306dca664?q=80&w=800&h=800&fit=crop"
                  alt="Quality Control"
                  fill
                  className="object-cover rounded-[24px] opacity-80 p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-12 left-12 right-12 pointer-events-none">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-surgical-teal rounded-full flex items-center justify-center text-medical-dark"><Microscope className="w-6 h-6" /></div>
                      <span className="text-xl font-bold">10-Point Inspection</span>
                   </div>
                   <p className="text-white/60">Every batch undergoes rigorous metallurgic testing and ergonomic validation before entering our Glasgow hub.</p>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 glass-card p-8 glow-teal">
                <Clock className="w-10 h-10 text-surgical-teal mb-4" />
                <div className="text-3xl font-bold">99.8%</div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Order Accuracy</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-jakarta font-bold mb-10 leading-tight">Beyond Off-the-Shelf. <br /><span className="text-surgical-teal">Clinical Excellence.</span></h2>
              <div className="space-y-10">
                {[
                  { title: "Direct Metallurgy Control", desc: "We own the chemical blueprint of our steel, ensuring zero variance in tensile strength.", icon: Microscope },
                  { title: "Theater-Ready Packaging", desc: "Validated sterile barrier systems designed for immediate scrub-in compatibility.", icon: Package },
                  { title: "Real-time Inventory Link", desc: "Our API integrates directly with hospital ERPs for automated replenishment.", icon: Settings }
                ].map((item) => (
                  <div key={item.title} className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-surgical-teal/40 transition-all">
                      <item.icon className="w-8 h-8 text-surgical-teal" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                      <p className="text-white/40 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials / Trust Stack */}
      <section id="testimonials" className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-jakarta font-bold mb-6 italic text-white/40">"The standard we've been waiting for."</h2>
            <p className="text-white/40 font-bold uppercase tracking-widest text-sm">Trusted by 2,400+ Healthcare Institutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-card p-10 md:p-12 border-white/10 hover:border-surgical-teal/30 transition-all group"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-surgical-teal text-surgical-teal" />)}
                </div>
                <p className="text-2xl text-white/80 font-medium mb-10 leading-relaxed italic">"{t.quote}"</p>
                <div className="flex items-center gap-5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-surgical-teal/20 group-hover:border-surgical-teal transition-all">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold">{t.name}</h5>
                    <p className="text-white/40 text-sm">{t.role} • {t.hospital}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-jakarta font-bold mb-16 text-center">Procurement Support</motion.h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card overflow-hidden border-white/5"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                >
                  <span className="text-xl font-bold">{faq.question}</span>
                  {openFaq === idx ? <Minus className="w-6 h-6 text-surgical-teal" /> : <Plus className="w-6 h-6 text-white/40" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6 text-white/50 text-lg leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Conversion Form */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-jakarta font-bold mb-8 leading-[0.9]">Secure Your <br /><span className="text-white/30 italic">2026 Allocation.</span></h2>
              <p className="text-white/50 text-xl mb-12 leading-relaxed">Due to high demand, we are currently prioritizing NHS Trust contracts and registered private clinics. Request a prioritized clinical audit today.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-surgical-teal">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg font-bold">Guaranteed 24h Scotland Dispatch</span>
                </div>
                <div className="flex items-center gap-4 text-surgical-teal">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg font-bold">Dedicated Clinical Account Manager</span>
                </div>
                <div className="flex items-center gap-4 text-surgical-teal">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg font-bold">Trial Batch Evaluation Program</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 md:p-12 relative overflow-hidden border-surgical-teal/20 shadow-2xl shadow-surgical-teal/5"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-surgical-teal rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-surgical-teal/40">
                      <CheckCircle2 className="w-10 h-10 text-medical-dark" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tighter">Inquiry Logged</h3>
                    <p className="text-white/50 text-lg">Your ID: #ST-{Math.floor(Math.random()*10000)}<br />Consultant will call within 4 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center justify-between mb-8">
                       <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">Step {formStep} of 2</span>
                       <div className="flex gap-2">
                          <div className={`w-12 h-1 rounded-full transition-all ${formStep === 1 ? 'bg-surgical-teal' : 'bg-white/10'}`} />
                          <div className={`w-12 h-1 rounded-full transition-all ${formStep === 2 ? 'bg-surgical-teal' : 'bg-white/10'}`} />
                       </div>
                    </div>

                    {formStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
                            <Users className="w-3 h-3" /> Full Name
                          </label>
                          <input required name="name" onChange={handleInputChange} placeholder="Dr. John Smith" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-5 focus:border-surgical-teal outline-none transition-all placeholder:text-white/10 text-lg" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
                            <Building2 className="w-3 h-3" /> Business Email
                          </label>
                          <input required type="email" name="email" onChange={handleInputChange} placeholder="jsmith@nhsscotland.uk" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-5 focus:border-surgical-teal outline-none transition-all placeholder:text-white/10 text-lg" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
                            <Building2 className="w-3 h-3" /> Hospital / Clinic
                          </label>
                          <input required name="hospital" onChange={handleInputChange} placeholder="Queen Elizabeth University Hospital" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-5 focus:border-surgical-teal outline-none transition-all placeholder:text-white/10 text-lg" />
                        </div>
                        <button type="button" onClick={nextStep} className="w-full py-6 bg-surgical-teal text-medical-dark rounded-2xl font-bold text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-surgical-teal/20">
                          Confirm & Continue
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
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Specialty</label>
                            <select name="specialty" onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-5 focus:border-surgical-teal outline-none transition-all appearance-none text-lg">
                              <option value="">Select</option>
                              <option value="ortho">Ortho</option>
                              <option value="cardio">Cardio</option>
                              <option value="general">General</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Annual Volume</label>
                            <select name="volume" onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-5 focus:border-surgical-teal outline-none transition-all appearance-none text-lg">
                              <option value="">Select</option>
                              <option value="small">£10k-50k</option>
                              <option value="mid">£50k-250k</option>
                              <option value="large">£250k+</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Procurement Notes</label>
                          <textarea name="message" onChange={handleInputChange} rows={4} placeholder="Specific instrument requirements..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-5 focus:border-surgical-teal outline-none transition-all resize-none text-lg placeholder:text-white/10"></textarea>
                        </div>
                        <div className="flex gap-4">
                          <button type="button" onClick={prevStep} className="w-1/3 py-6 bg-white/5 border border-white/10 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
                            Back
                          </button>
                          <button type="submit" disabled={isSubmitting} className="w-2/3 py-6 bg-surgical-teal text-medical-dark rounded-2xl font-bold text-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-surgical-teal/20">
                            {isSubmitting ? "Syncing..." : "Submit Inquiry"} <Send className="w-6 h-6" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Hub */}
      <footer className="py-24 px-6 border-t border-white/5 bg-medical-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-surgical-teal/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-10">
                <div className="w-12 h-12 bg-surgical-teal rounded-xl flex items-center justify-center text-medical-dark font-black text-2xl">S</div>
                <span className="text-3xl font-jakarta font-bold tracking-tighter">SETRA<span className="text-surgical-teal">GROUP</span></span>
              </div>
              <p className="text-white/30 max-w-sm mb-10 text-xl leading-relaxed">The clinical standard for surgical logistics. Managed from Glasgow, delivered to theater units nationwide.</p>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-surgical-teal hover:text-medical-dark transition-all"><Globe className="w-6 h-6" /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-surgical-teal hover:text-medical-dark transition-all"><Send className="w-6 h-6" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white/20 mb-8">Clinical Services</h4>
              <ul className="space-y-5 text-lg font-bold text-white/50">
                <li><a href="#" className="hover:text-surgical-teal transition-colors flex items-center gap-2">Instrument Catalog <ChevronRight className="w-4 h-4 opacity-30" /></a></li>
                <li><a href="#" className="hover:text-surgical-teal transition-colors flex items-center gap-2">Sterilization Validation <ChevronRight className="w-4 h-4 opacity-30" /></a></li>
                <li><a href="#" className="hover:text-surgical-teal transition-colors flex items-center gap-2">NHS Procurement <ChevronRight className="w-4 h-4 opacity-30" /></a></li>
                <li><a href="#" className="hover:text-surgical-teal transition-colors flex items-center gap-2">Clinical Training <ChevronRight className="w-4 h-4 opacity-30" /></a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white/20 mb-8">Contact Hub</h4>
              <ul className="space-y-6 text-lg font-bold text-white/50">
                <li className="flex gap-4 items-start">
                   <div className="w-6 h-6 shrink-0 mt-1"><Globe className="w-6 h-6 text-surgical-teal" /></div>
                   <span>123 Innovation Way<br /><span className="text-white/30 text-base">Glasgow, G1 1XQ, UK</span></span>
                </li>
                <li className="flex gap-4 items-center">
                   <div className="w-6 h-6 shrink-0"><Activity className="w-6 h-6 text-surgical-teal" /></div>
                   <span>+44 (0) 141 555 0123</span>
                </li>
                <li className="flex gap-4 items-center underline decoration-surgical-teal/30 underline-offset-8">
                   <div className="w-6 h-6 shrink-0"><Send className="w-6 h-6 text-surgical-teal" /></div>
                   <span>clinical@setragroup.scot</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-xs font-black uppercase tracking-widest">
            <div>© 2026 Setra Group Scotland • Quality First</div>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="md:hidden fixed bottom-6 left-6 right-6 z-[60]"
          >
            <a href="#contact" className="w-full py-5 bg-surgical-teal text-medical-dark rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-2xl shadow-surgical-teal/40 border border-white/20 active:scale-95 transition-all">
              Request B2B Quote <Send className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
