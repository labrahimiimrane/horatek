import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function AntiVolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Systèmes Anti-Vol</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Protection Maximale Contre le Vol</h1>
              <p className="text-xl text-red-100 mb-8">
                Solutions complètes de surveillance, détection d'intrusion et systèmes d'alarme pour protéger vos biens
                et installations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Évaluation Risques Gratuite
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-800 bg-transparent"
                >
                  Voir les Technologies
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/access-control.png"
                alt="Système anti-vol HORA TEK"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12"> 
            {/* Main Content Column */}  
            <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8 border">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Anti vol</h2>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Nous vous proposons des systèmes totalement autonomes grâce à leurs technologies DSP de pointe alliant le meilleur de l’électro- magnétique (EM) et de la Radio Fréquence (RF), optimisant la cohabitation de deux technologies pour offrir aux derniers utilisateurs une solution répondant à l’ensemble de leurs besoins technologiques, financiers et pratiques
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Avec ce genre de matériel, notre équipe vous orientera sur les possibilités de choisir soit la technologie EM, soit la technologie RFID (Radio Frequence IDentifier), soit de bénéficier des avantages des deux réunies.
                    </p>
                </div>
            </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 static md:sticky md:top-[100px]  h-[max-content]">
            <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Nos Services</h3>
                <div className="space-y-4">
                    <Link
                    href="/gestion-temps"
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Gestion des Temps</span>
                    </Link>
                    <Link
                    href="/controle-acces"
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Controle d'acces securitaire</span>
                    </Link>
                    <Link
                    href="/anti-vol"
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Anti Vol</span>
                    </Link>
                    <Link
                    href="/domotique"
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Domotique</span>
                    </Link>
                </div>

                <div className="mt-8">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-white">
                    <h4 className="font-bold text-lg mb-2">Contactez-nous</h4>
                    <p className="text-blue-100 text-sm mb-4">Découvrez nos solutions personnalisées</p>
                    <Link href="/contact">
                        <Button variant="secondary" className="w-full">
                        Demander un devis
                        </Button>
                    </Link>
                    </div>
                </div>
                </CardContent>
            </Card>
            </div>  
        </div>   
      </main>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Protégez Vos Biens Dès Maintenant</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Nos experts analysent vos risques et conçoivent une solution anti-vol sur mesure pour votre entreprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition-colors inline-flex items-center justify-center"
            >
              Demander un Devis Gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
