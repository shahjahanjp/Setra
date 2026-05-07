import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#002147] text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#008080] via-[#002147] to-[#002147]"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#008080]/20 text-teal-300 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Based in Glasgow, Serving the UK
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Precision Surgical Supplies. <br />
            <span className="text-[#C0C0C0]">Delivered from the Heart of Scotland.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Empowering B2B healthcare partners with premium surgical instruments,
            operating theater essentials, and ISO-certified medical equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="bg-white text-[#002147] px-8 py-4 rounded font-bold hover:bg-[#C0C0C0] transition-colors flex items-center justify-center gap-2">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </a>
            <button className="border border-[#C0C0C0] text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              View Catalog <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
