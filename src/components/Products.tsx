import { Stethoscope, ShieldCheck, Microscope, ArrowRight } from "lucide-react";

const products = [
  {
    title: "Surgical Instruments",
    description: "Premium grade stainless steel instruments for general and specialized surgery.",
    icon: Stethoscope,
  },
  {
    title: "OR Equipment",
    description: "State-of-the-art operating room lighting, tables, and monitoring systems.",
    icon: Microscope,
  },
  {
    title: "PPE & Sterile Wear",
    description: "Full range of high-barrier protective gear and sterile surgical drapes.",
    icon: ShieldCheck,
  },
];

export default function Products() {
  return (
    <section className="py-20 bg-white" id="products">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">Specialized Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Providing high-precision equipment designed for the demanding environment of modern surgery.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="p-8 rounded-lg border border-[#C0C0C0]/50 hover:border-[#008080] transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-[#f8f9ff] rounded-md flex items-center justify-center mb-6 group-hover:bg-[#008080] group-hover:text-white transition-colors">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#002147] mb-3">{p.title}</h3>
              <p className="text-gray-600 mb-6">{p.description}</p>
              <span className="text-[#002147] font-bold flex items-center gap-2 group-hover:text-[#008080]">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
