import { CheckCircle2, Truck, Headphones, Tag } from "lucide-react";

const reasons = [
  {
    title: "Uncompromising Quality",
    description: "Strict adherence to ISO 13485 standards ensuring every instrument meets peak performance.",
    icon: CheckCircle2,
  },
  {
    title: "Reliable UK Shipping",
    description: "Fast, tracked distribution from our Glasgow hub to any facility across the United Kingdom.",
    icon: Truck,
  },
  {
    title: "Expert Technical Support",
    description: "Our team of clinical specialists is available for consultation and technical guidance.",
    icon: Headphones,
  },
  {
    title: "Competitive B2B Pricing",
    description: "Tailored procurement plans and volume discounts for hospitals and private clinics.",
    icon: Tag,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#f8f9ff]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-6">Scottish Excellence in Every Detail</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Based in the heart of Scotland, Setra Group is dedicated to advancing surgical outcomes through
              the provision of high-precision instruments. We understand that in the operating theater,
              there is no room for compromise.
            </p>
            <div className="space-y-6">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 text-[#008080]">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002147]">{r.title}</h4>
                    <p className="text-sm text-gray-600">{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-[#002147] rounded-2xl flex items-center justify-center p-12 text-white overflow-hidden">
               <div className="text-center">
                  <div className="text-6xl font-black mb-4 tracking-tighter">100%</div>
                  <div className="text-xl font-bold uppercase tracking-widest text-[#C0C0C0]">Clinical Reliability</div>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#008080]/10 rounded-full -mr-32 -mt-32"></div>
               <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#008080]/10 rounded-full -ml-24 -mb-24"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
