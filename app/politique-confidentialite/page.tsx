import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from "lucide-react"

import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4">Protection des Données</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Politique de Confidentialité</h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              HORA TEK s'engage à protéger votre vie privée et vos données personnelles conformément aux réglementations
              en vigueur.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-green-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Notre Engagement</h2>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>
                    La présente Politique de Confidentialité décrit la façon dont HORA TEK collecte, utilise, stocke et
                    protège vos informations personnelles lorsque vous utilisez notre site web ou nos services.
                  </p>
                  <p>
                    Nous nous engageons à respecter votre vie privée et à protéger vos données personnelles conformément
                    à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l'égard du traitement
                    des données à caractère personnel et au Règlement Général sur la Protection des Données (RGPD)
                    européen.
                  </p>
                  <p className="font-semibold">Dernière mise à jour : [Date de mise à jour]</p>
                </div>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Database className="w-8 h-8 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Collecte des Données</h2>
                </div>
                <div className="text-gray-700 space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">Données que nous collectons :</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Informations d'identification :</strong> nom, prénom, adresse email, numéro de téléphone
                    </li>
                    <li>
                      <strong>Informations professionnelles :</strong> nom de l'entreprise, fonction, secteur d'activité
                    </li>
                    <li>
                      <strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de
                      visite
                    </li>
                    <li>
                      <strong>Informations de contact :</strong> messages envoyés via nos formulaires de contact
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 mt-6">Comment nous collectons ces données :</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Formulaires de contact et demandes de devis</li>
                    <li>Inscription à notre newsletter</li>
                    <li>Cookies et technologies similaires</li>
                    <li>Communications téléphoniques et emails</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-purple-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Utilisation des Données</h2>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>Nous utilisons vos données personnelles pour :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Répondre à vos demandes d'information et de devis</li>
                    <li>Vous fournir nos services de sécurité et gestion du personnel</li>
                    <li>Améliorer notre site web et nos services</li>
                    <li>Vous envoyer des informations sur nos produits et services (avec votre consentement)</li>
                    <li>Respecter nos obligations légales et réglementaires</li>
                    <li>Analyser l'utilisation de notre site web pour l'optimiser</li>
                  </ul>

                  <div className="bg-purple-50 p-4 rounded-lg mt-6">
                    <p className="font-semibold text-purple-800">
                      Base légale du traitement : Votre consentement, l'exécution d'un contrat, nos intérêts légitimes
                      ou le respect d'une obligation légale.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lock className="w-8 h-8 text-red-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Protection des Données</h2>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
                    données personnelles contre :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>L'accès non autorisé</li>
                    <li>La divulgation non autorisée</li>
                    <li>La modification non autorisée</li>
                    <li>La destruction non autorisée</li>
                    <li>La perte accidentelle</li>
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 mt-6">Mesures de sécurité :</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Chiffrement des données sensibles</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Formation du personnel sur la protection des données</li>
                    <li>Sauvegardes régulières et sécurisées</li>
                    <li>Mise à jour régulière des systèmes de sécurité</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <UserCheck className="w-8 h-8 text-indigo-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Partage des Données</h2>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers, sauf dans les
                    cas suivants :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Avec votre consentement explicite</li>
                    <li>Avec nos partenaires techniques pour la fourniture de nos services</li>
                    <li>Pour respecter une obligation légale</li>
                    <li>Pour protéger nos droits, notre propriété ou notre sécurité</li>
                  </ul>

                  <div className="bg-indigo-50 p-4 rounded-lg mt-6">
                    <p className="font-semibold text-indigo-800">
                      Tous nos partenaires sont tenus de respecter la confidentialité de vos données et de les utiliser
                      uniquement aux fins spécifiées.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-orange-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Vos Droits</h2>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>Conformément à la réglementation, vous disposez des droits suivants :</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-bold text-orange-800 mb-2">Droit d'accès</h4>
                      <p className="text-sm">Obtenir une copie de vos données personnelles</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">Droit de rectification</h4>
                      <p className="text-sm">Corriger vos données inexactes ou incomplètes</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-red-800 mb-2">Droit d'effacement</h4>
                      <p className="text-sm">Demander la suppression de vos données</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2">Droit d'opposition</h4>
                      <p className="text-sm">Vous opposer au traitement de vos données</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-2">Droit à la portabilité</h4>
                      <p className="text-sm">Récupérer vos données dans un format structuré</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">Droit de limitation</h4>
                      <p className="text-sm">Limiter le traitement de vos données</p>
                    </div>
                  </div>

                  <p className="mt-6">
                    Pour exercer ces droits, contactez-nous à : <strong>info@horatek.ma</strong>
                    ou par courrier à notre adresse.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Cookies et Technologies Similaires</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de
                    petits fichiers texte stockés sur votre appareil.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800">Types de cookies utilisés :</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site
                    </li>
                    <li>
                      <strong>Cookies analytiques :</strong> Pour analyser l'utilisation du site
                    </li>
                    <li>
                      <strong>Cookies de performance :</strong> Pour améliorer les performances
                    </li>
                  </ul>

                  <p>Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-green-50 to-blue-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions sur la Confidentialité</h3>
                <p className="text-gray-700 mb-6">
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données :
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-800">Délégué à la Protection des Données</p>
                    <p className="text-gray-700">Email : dpo@horatek.ma</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Contact Principal</p>
                    <p className="text-gray-700">Email : info@horatek.ma</p>
                    <p className="text-gray-700">Téléphone : +(212) 522 67 39 49</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
