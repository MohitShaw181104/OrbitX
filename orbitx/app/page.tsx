// app/page.tsx

import HeroSection from '@/components/HeroSection'
import TradingVideo from '@/components/TradingVideo'
import InflationMap from '@/components/InflationMap'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center">
      <HeroSection />

      <section className="w-full max-w-6xl px-4 py-12">
        <TradingVideo />
      </section>

      <section className="w-full max-w-6xl px-4 py-12">
        <InflationMap />
      </section>

      <Footer />
    </main>
  )
}
