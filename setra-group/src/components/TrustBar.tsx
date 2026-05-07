export default function TrustBar() {
  return (
    <div className="bg-[#f8f9ff] border-y border-[#C0C0C0]/30 py-8">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Trusted by healthcare providers across the UK</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="text-2xl font-black text-[#002147]">ISO 13485</div>
          <div className="text-2xl font-black text-[#002147]">CE MARK</div>
          <div className="text-2xl font-black text-[#002147]">NHS SCOTLAND</div>
          <div className="text-2xl font-black text-[#002147]">UKAS</div>
        </div>
      </div>
    </div>
  );
}
