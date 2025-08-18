import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react" 
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HoratekHomePage() {


  const stats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "100%", label: "Clients satisfaits" },
    { number: "24/7", label: "Support technique" },
    { number: "2", label: "Pays d'intervention" },
  ]

  const testimonials = [
    {
      name: "Mohammed Alami",
      company: "Directeur, Société Industrielle",
      content:
        "HORA TEK a transformé notre gestion du personnel. Le système de pointage biométrique a éliminé tous les problèmes de fraude horaire.",
      rating: 5,
    },
    {
      name: "Sarah Benali",
      company: "Responsable RH, Groupe Commercial",
      content:
        "Installation rapide et formation complète. L'équipe HORA TEK est très professionnelle et le support technique excellent.",
      rating: 5,
    },
    {
      name: "Ahmed Tazi",
      company: "Gérant, Centre Logistique",
      content:
        "Le système de contrôle d'accès sécurise parfaitement nos entrepôts. Nous recommandons vivement HORA TEK.",
      rating: 5,
    },
  ]



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
                src="/images/access-control.png"
                alt="Solutions de sécurité HORA TEK"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-xl shadow-sm p-8 border">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <span className="font-bold text-blue-800">HORA TEK</span> propose aux entreprises et aux institutions
                  publiques, une solution complète et intégrée de gestion de la sécurité et du personnel. Elle propose
                  une gamme complète de produits qui allient matériels et logiciels de gestion pour optimiser la
                  sécurité de vos sites et la gestion du temps de votre personnel. Elle offre également une gamme de
                  services allant de l'analyse des besoins lors de l'élaboration du projet en passant par la formation
                  personnalisée, par l'aide à la para métrisation de la solution, pour aboutir au suivi de
                  l'installation. Notre rôle est d'unifier tous les besoins des entreprises dans la gestion de leurs
                  accès et de leurs ressources humaines autour d'un concept unique : l'identification individuelle par
                  badge et/ou par biométrie. Au moyen de cette identification individuelle, chaque membre du personnel
                  ou visiteur a accès à toute une gamme de services, de l'accès aux différents locaux, la liste
                  d'évacuation, à la gestion automatique de son temps
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  de travail, à la saisie de ses demandes de congé, à la planification du travail...
                </p>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-blue-800">HORA TEK</span>, en tant que développeurs, distributeurs
                    et installateurs, nous connaissons vos besoins en matière de sécurité et sommes à même d'anticiper
                    l'avenir afin de
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    vous offrir des solutions efficientes dans les domaines suivants: la gestion des temps et la
                    planification, le contrôle d'accès , l'anti vol et la domotique. Nos solutions ne se limitent pas à
                    la pose de matériel mais à l'analyse de risques, au suivi, au conseil, et à la mise à jour
                    permanente que nécessite le domaine de pointe dans lequel nous évoluons désormais ensemble.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Chez <span className="font-bold text-blue-800">HORA TEK</span>, nous nous sommes assurés de la
                    collaboration de partenaires spécialisés de la réglementation présents à vos côtés pour vous
                    conseiller; de techniciens pour vous garantir une parfaite maîtrise du risque, et enfin d'ingénieurs
                    pour fédérer
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    un maillage d'expertise inégalable, avec un seul objectif : votre sérénité. Par ailleurs, l'ensemble
                    de nos partenaires jouissent d'une expertise et de standards conformes aux normes européennes.
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages Clients</h2>
            <p className="text-xl text-gray-600">Ce que disent nos clients de nos services</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à sécuriser votre entreprise ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nos solutions peuvent
            transformer votre sécurité.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Contactez-nous maintenant
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
