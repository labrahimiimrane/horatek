import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight} from "lucide-react"

import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"

export default function DomotiquePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Solutions Domotiques</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Bâtiments Intelligents et Connectés</h1>
              <p className="text-xl text-purple-100 mb-8">
                Automatisation complète de vos bâtiments avec contrôle intelligent de l'éclairage, climatisation,
                sécurité et gestion énergétique.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Découvrir les Solutions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-800 bg-transparent"
                >
                  Simulation Économies
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/access-control.png"
                alt="Solutions domotiques HORA TEK"
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Domotique</h2>

                    <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Nous vous proposons des outils qui gèrent l'ensemble des équipements électriques d'une habitation. En
                        combinant et en automatisant des fonctions d'éclairage, de chauffage, de volets roulants, d'alarme… elle
                        contribue à simplifier la vie de ses habitants et apporte un certain niveau de confort et de sécurité.
                    </p>

                    <div className="bg-purple-50 rounded-lg p-6 mb-6">
                        <p className="text-gray-700 leading-relaxed">
                        Pour votre projet de construction, de rénovation ou d'amélioration, avec la domotique, vous êtes sûr
                        de trouver des solutions à vos besoins. En construction neuve, c'est la garantie d'une installation
                        électrique qui s'adaptera en permanence à vos besoins et à l'évolution de votre mode de vie.
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        En rénovation, c'est la possibilité de faire évoluer votre installation électrique sans gros travaux et
                        de valoriser votre patrimoine. La domotique vous permet de créer des ambiances familières et d'éviter
                        des actes répétitifs ou des déplacements inutiles.
                    </p>

                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-6">
                        <p className="text-gray-700 leading-relaxed">
                        Elle répond à vos attentes de confort et de communication en fonction de vos envies et votre mode de
                        vie.
                        </p>
                    </div>
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Transformez Votre Bâtiment en Smart Building</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans la conception et l'installation de solutions domotiques sur mesure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-800 transition-colors inline-flex items-center justify-center"
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