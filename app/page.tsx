import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HoratekHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Solutions de
                <span className="text-blue-300 block">Sécurité Intégrées</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                HORA TEK propose des solutions complètes de gestion de la sécurité et du personnel pour entreprises et
                institutions au Maroc et en Europe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/references"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                >
                  Voir nos références
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/solutions.png"
                alt="Solutions de sécurité HORA TEK"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
