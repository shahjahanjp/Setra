import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-[#C0C0C0]/30 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#002147] flex items-center justify-center rounded">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-black text-[#002147] tracking-tighter uppercase">Setra Group</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#002147]/70">
          <a href="#products" className="hover:text-[#002147] transition-colors">Products</a>
          <a href="#" className="hover:text-[#002147] transition-colors">Quality Assurance</a>
          <a href="#" className="hover:text-[#002147] transition-colors">About Us</a>
          <a href="#quote" className="bg-[#002147] text-white px-5 py-2 rounded hover:bg-opacity-90 transition-all">Get a Quote</a>
        </nav>
        <div className="flex items-center gap-2 text-[#002147] md:hidden">
          <Phone className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
}
