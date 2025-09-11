import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"

export default function ControleAccesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Contrôle d'Accès Sécuritaire</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Sécurisez Vos Accès avec Intelligence
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Solutions avancées de contrôle d'accès biométrique, badges RFID et gestion intelligente des zones
                sécurisées pour une protection optimale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Évaluation Sécurité Gratuite
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent"
                >
                  Voir les Solutions
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/access-control.png"
                alt="Système de contrôle d'accès HORA TEK"
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
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Contrôle d'accès</h2>

                <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-8">
                    Nous proposons un système d'information, consistant à associer des droits et/ou des ressources à une
                    entité (personne, machine …), permettant ainsi à l'entité d'accéder à la ressource souhaitée, si elle en
                    a les droits. Nos solutions de contrôle d'accès peuvent être logique et/ou physique (mot de passe,
                    carte, clé, biométrie, …), et offre la possibilité d'accéder à des ressources physiques (comme un
                    bâtiment ou un local) ou logiques (un système informatique par exemple : un système d'exploitation ou
                    une application spécifique).
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-12">Vidéo surveillances</h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                    De nos jours il est de plus en plus important de pouvoir surveiller un site, un lieu sensible, contrôler
                    visuellement vos biens. La vidéo surveillance et la "levée de doute local" ou à distance est souvent
                    devenu un élément de confort mais surtout une partie intégrante de la sécurité actuelle.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                    De nombreuses affaires de crimes, de délits ou de vandalismes sont et pourront être résolues au moyen
                    d'enregistrements fournis par les caméras de surveillance.
                </p>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                    A l'heure actuelle, nous sommes tous favorables à la vidéosurveillance, à condition que les caméras
                    soient clairement signalées, et c'est dans cette optique que nous intégrerons les solutions
                    possibles...
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Avec un simple PC connecté et autorisé (solution numérique réseau IP), vous pouvez accéder aux images
                    vidéo en temps réel, à tout moment et depuis n'importe quel endroit. Votre système peut évoluer du
                    jour au lendemain sans aucune contrainte. Les images sont stockées sur des disques durs, solution
                    moins onéreuse et plus pratique que des bandes et cassettes vidéo.
                    </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8">
                    Le traitement numérique des images et l'évolution des éléments d'enregistrement permettent un large
                    éventail de possibilités. Par ailleurs, les potentialités d'interconnexion avec votre système de
                    sécurité et votre centrale d'alarme sont un plus certain.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-12">Télésurveillance</h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                    A chaque instant notre monde s'alarme. Signe des temps... Symbole d'une société toujours plus
                    sophistiquée... Peu importe. Lorsque ça passe au rouge mieux vaut cesser de discuter et réagir
                    immédiatement avec ordre et méthode. Autrement dit, avoir une stratégie d'action. Facile à dire... Mais
                    comment faire alors que, chaque jour, la technologie automatise toujours plus les différentes fonctions
                    utiles à la gestion et à la sécurité des bâtiments, du chauffage, des ascenseurs, de l'éclairage, du
                    contrôle d'accès, de la climatisation, etc...
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                    Des lieux et systèmes protégés par des alarmes, qui nécessitent des interventions rapides... Mais dont
                    hélas chacune joue sur son propre mode de représentation, alourdissant ainsi la tâche des opérateurs.
                    Nous avons répondu à cette légitime angoisse, grâce à nos solutions de gestion et de visualisation des
                    alarmes.
                </p>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 mb-8">
                    <p className="text-gray-700 leading-relaxed">
                    L'évoquer suffit pour comprendre sa philosophie. Ainsi nos solutions traitent toutes les informations
                    reçues des différents systèmes d'alarme au moyen d'un seul outil informatique! Difficile de faire
                    mieux.
                    </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-12">Contrôle de ronde</h3>

                <p className="text-gray-700 leading-relaxed mb-8">
                    Nous vous proposons un lecteur portable RFID développé pour certifier les services de ronde. Il permet
                    et garantie la vérification des contrôles, effectués soit par des gardiens soit par des employés de la
                    société, par la lecture des points (TAGS RFID) qui se trouvent le long du parcours, appelé « ronde ». Le
                    transfert des données vers l'ordinateur se fait par l'unité Base (qui permet aussi la recharge de la
                    batterie du lecteur) tandis que la vérification de la qualité du service se fera par un logiciel.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-12">Alarme anti intrusion</h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                    Une bonne installation de sécurité est une installation qui protège intelligemment votre maison ou vos
                    locaux, le jour comme la nuit, que vous soyez présents ou absents.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                    A partir du moment où vous nous contacterez, nous définirons les risques et les besoins, en fonction de
                    votre type d'habitat, de la zone d'habitation, des facteurs de risques et des utilisateurs... et vous
                    proposerons les meilleurs solutions et produits !
                </p>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                    Une fois les risques définis et le concept accepté et validé, nous apportons une attention
                    particulière, lors de l'installation de votre système de sécurité, à la mise en place des différents
                    éléments aux endroits stratégiques. C'est un des éléments déterminants car l'efficacité de votre
                    installation de protection en dépend.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    En définitif, après avoir procédé aux programmations et réglages nécessaires de tous les éléments qui
                    composent votre installation, nous effectuerons des tests. Par la même occasion, nous vous fournirons
                    un support utilisateur pour les accès aux fonctionnalités de votre centrale, et pour finaliser nous
                    vous apporterons la formation nécessaire à l'exploitation de l'installation.
                    </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                    Nos services et prestations continus, suite la mise en service de l'installation et des équipements...
                    après avoir effectué la configuration et la programmation de départ, nous suivons les utilisateurs afin
                    qu'ils soient réellement autonomes.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                    Notre société prend aussi en charge la coordination avec la société d'intervention et les autres
                    prestataires de services nécessaires. Notre souhait est donc clairement, d'être votre principal
                    interlocuteur et partenaire, qui peut selon vos besoins prendre en charge l'ensemble des éléments liés à
                    la sécurité de vos locaux et biens.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8">
                    <p className="text-gray-700 leading-relaxed font-medium">
                    Sur tous ces points, nous nous engageons, car c'est notre travail !
                    </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-12">Protection périmétrique</h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                    <span className="font-bold text-blue-800">HORA TEK</span> vous offre la gamme la plus complète de
                    solutions pour la protection périmétrique des sites à hauts risques, industriels et tertiaires :
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Barrières Infrarouge</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Barrière Hyperfréquence</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Détection de Choc sur Clôture</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Détection Enterrée</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Détecteur et Barrières double technologie</span>
                    </li>
                    </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-12">Clôture et Portail</h3>

                <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-blue-800">HORA TEK</span> vous propose des systèmes de Clôture pour
                    sécuriser les personnes, les biens et les infrastructures. Nous répondons à toutes les problématiques de
                    sécurisation de périmètre individuels, administratifs, industriels, infrastructure, sportifs, sites,
                    sensibles, de haute sécurité et frontières.
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sécurisez Votre Entreprise Dès Aujourd'hui</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Nos experts en sécurité vous accompagnent dans l'analyse de vos besoins et la mise en place d'une solution
            sur mesure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors inline-flex items-center justify-center"
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
