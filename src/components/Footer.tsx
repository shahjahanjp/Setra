export default function Footer() {
  return (
    <footer className="bg-[#002147] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded">
                <span className="text-[#002147] font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-black text-white tracking-tighter uppercase">Setra Group</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Leading the way in surgical instrument innovation and distribution from Glasgow, Scotland.
              Supporting healthcare heroes with precision tools.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#C0C0C0]">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Product Catalog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ISO Certifications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">B2B Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[#C0C0C0]">Contact Hub</h4>
            <address className="not-italic text-gray-400 text-sm space-y-4">
              <p>123 Innovation Way<br />Glasgow, G1 1XQ<br />Scotland, UK</p>
              <p>+44 (0) 141 555 0123</p>
              <p>inquiries@setragroup.co.uk</p>
            </address>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Setra Group Scotland. All rights reserved. Registered in Scotland.
        </div>
      </div>
    </footer>
  );
}
