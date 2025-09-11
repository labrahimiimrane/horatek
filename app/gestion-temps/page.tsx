import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"


export default function GestionTempsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Gestion des Temps</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Optimisez la Gestion du Temps de Travail
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Solutions complètes de pointage, planification et suivi des temps de travail avec technologies
                biométriques et badges RFID.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Demander une Démo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
                >
                  Télécharger la Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/access-control.png"
                alt="Système de gestion des temps HORA TEK"
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
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Gestion des temps et la planification</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Les horaires de plus en plus variables, les multiples récupérations, les postes à temps partiel, la
                  gestion des chèques-repas, la programmation des absences, le travail en équipes, la planification des
                  équipes de travail, la communication avec le système de paie et de ressources humaines, sont quelques
                  exemples des difficultés quotidiennes rencontrées par les responsables de la gestion du personnel.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  C'est la raison pour laquelle nous avons développé des solutions novatrices par leur niveau
                  d'intégration et par la technologie utilisée, permettant le suivi et l'analyse des temps de présence et
                  d'absence du personnel d'une société ou d'une institution. Nos solutions ont été conçues pour permettre
                  une gestion centralisée par le département Ressources Humaines ou une décentralisation des tâches
                  administratives auprès des responsables de services.
                </p>

                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Le système recueille les pointages du réseau de lecteurs de badges, les opérateurs introduisent des
                    informations complémentaires comme les absences justifiées, les prestations exceptionnelles les
                    changements d'horaires, de services, les nouveaux membres du personnel, etc. Le calcul utilise ces
                    informations ainsi que les paramètres définis (horaires, motifs des absences, heures supplémentaires,
                    etc.) pour déterminer les prestations.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-12">Gestion de visiteurs</h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Notre solution de gestion des visiteurs vous permet d'accueillir et de gérer les entrées / sorties,
                  planifiées ou non, de vos visiteurs. Grâce à notre logiciel vous pourrez éditer rapidement un badge
                  autocollant, cartonné ou PVC pour vos visiteurs et attribuer une carte d'accès limitant les possibilités
                  de déplacement aux endroits réservés, sûrs et valables uniquement pour la durée de la visite.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Une carte d'identification destinée au véhicule peut aussi être imprimée, ce qui permet aux services
                  responsables de retrouver rapidement le propriétaire d'un véhicule. L'application est également un outil
                  performant qui mémorise l'historique des visites et des visiteurs. Plus besoin de réencoder les
                  visiteurs réguliers, ils sont automatiquement enregistrés dans la base de données et seront retrouvés
                  rapidement lors d'une nouvelle visite.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-12">Gestion de cantine</h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Pour répondre à l'ensemble des attentes d'aujourd'hui et de demain des acteurs de la restauration
                  collective, <span className="font-bold text-blue-800">HORA TEK</span> propose une approche partant du
                  principe que, quelle que soit la configuration du restaurant et la complexité de sa gestion, la solution
                  Gest Resto rester simple à utiliser.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  <span className="font-bold text-blue-800">HORA TEK</span> a donc, autour de cette constatation,
                  développé des fonctionnalités qui assurent des rendements et des capacités de traitement élevés en
                  caisse, mais aussi un temps d'utilisation totalement optimisé par le gestionnaire.
                </p>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    Cette approche globale repose sur quatre grandes notions :
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                        1
                      </div>
                      <p className="text-gray-700">
                        <strong>L'identification du convive</strong>, qui permet de définir des droits tarifaires propres
                        à chaque convive ou groupe de convives, droits automatiquement déclenchés lors de l'identification
                        en caisse.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                        2
                      </div>
                      <p className="text-gray-700">
                        <strong>La gestion de compte</strong>, gérée directement dans la base de données (l'argent n'est
                        pas sur le badge mais sur un compte) ou sur un porte-monnaie électronique (PME).
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                        3
                      </div>
                      <p className="text-gray-700">
                        <strong>L'historisation des opérations</strong>, qui permet de disposer d'une base de
                        connaissances indispensables à une gestion parfaitement maîtrisée.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                        4
                      </div>
                      <p className="text-gray-700">
                        <strong>L'analyse financière</strong>, qui permet de suivre les ventes des produits et le
                        financier (suivi des types de paiement).
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-12">Gestion fil d'attente</h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Nous vous proposons une gamme complète de solutions de gestion de file d'attente de personnes ou de
                  véhicules adaptées aux différents secteurs d'utilisations qui y sont associés. Exp : l'industrie, la
                  santé, les transports, les cinémas, le sport, les ports, ….
                </p>

                <p className="text-gray-700 leading-relaxed">
                  En complément de nos solutions standards, nous disposons des solutions sur mesure pour satisfaire toute
                  demande relative à des besoins spécifiques.
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Prêt à Optimiser Votre Gestion des Temps ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez nos experts pour une analyse gratuite de vos besoins et découvrez comment notre solution peut
            transformer votre entreprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors inline-flex items-center justify-center"
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
