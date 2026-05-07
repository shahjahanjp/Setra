import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Products from '@/components/Products'
import WhyChooseUs from '@/components/WhyChooseUs'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Products />
      <WhyChooseUs />

      <section className="py-24 bg-white" id="quote">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#002147] mb-6">Partner with Setra Group</h2>
              <p className="text-gray-600 text-lg mb-8">
                Ready to optimize your surgical supply chain? Fill out the form to request a
                custom B2B quote or to discuss specialized procurement needs with our
                Scottish clinical team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#002147] font-bold">
                  <div className="w-10 h-10 bg-[#f8f9ff] rounded-full flex items-center justify-center text-[#008080]">✓</div>
                  Custom Pricing Packages
                </div>
                <div className="flex items-center gap-3 text-[#002147] font-bold">
                  <div className="w-10 h-10 bg-[#f8f9ff] rounded-full flex items-center justify-center text-[#008080]">✓</div>
                  Next-Day UK Delivery Available
                </div>
                <div className="flex items-center gap-3 text-[#002147] font-bold">
                  <div className="w-10 h-10 bg-[#f8f9ff] rounded-full flex items-center justify-center text-[#008080]">✓</div>
                  ISO 13485 Guaranteed Quality
                </div>
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
