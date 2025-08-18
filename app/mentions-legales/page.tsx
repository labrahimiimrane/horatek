import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Building, User, Phone } from "lucide-react"

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-700 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4">Informations Légales</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Mentions Légales</h1>
            <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
              Informations légales et réglementaires concernant HORA TEK et l'utilisation de notre site web.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Company Information */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Building className="w-8 h-8 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Informations sur l'Entreprise</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Siège Social - Maroc</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Raison sociale :</strong> HORA TEK SARL
                      </p>
                      <p>
                        <strong>Forme juridique :</strong> Société à Responsabilité Limitée
                      </p>
                      <p>
                        <strong>Capital social :</strong> 100.000,00 MAD
                      </p>
                      <p>
                        <strong>RC :</strong> 123456 Casablanca
                      </p>
                      <p>
                        <strong>IF :</strong> 12345678
                      </p>
                      <p>
                        <strong>ICE :</strong> 001234567890123
                      </p>
                      <p>
                        <strong>Adresse :</strong>
                        <br />
                        Bd Ali Yaata Résidence Basma II
                        <br />
                        Imm: 3 N°1, 20250 - Ain Sebâa
                        <br />
                        Casablanca-MAROC
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Bureau - Italie</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Adresse :</strong>
                        <br />
                        Via B. Zendrini 5<br />
                        25047 Darfo Boario
                        <br />
                        Brescia-ITALY
                      </p>
                      <p>
                        <strong>Téléphone Maroc :</strong> +(212) 522 67 39 49
                      </p>
                      <p>
                        <strong>Téléphone Italie :</strong>
                        <br />
                        +39 (0)328-145-8284
                        <br />
                        +39 (0)329-181-3890
                      </p>
                      <p>
                        <strong>Email :</strong> info@horatek.ma
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Director Information */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <User className="w-8 h-8 text-green-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Direction de la Publication</h2>
                </div>
                <div className="text-gray-700 space-y-2">
                  <p>
                    <strong>Directeur de la publication :</strong> [Nom du Directeur]
                  </p>
                  <p>
                    <strong>Responsable éditorial :</strong> [Nom du Responsable]
                  </p>
                  <p>
                    <strong>Contact :</strong> info@horatek.ma
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Hosting Information */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Phone className="w-8 h-8 text-purple-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Hébergement</h2>
                </div>
                <div className="text-gray-700 space-y-2">
                  <p>
                    <strong>Hébergeur :</strong> [Nom de l'hébergeur]
                  </p>
                  <p>
                    <strong>Adresse :</strong> [Adresse de l'hébergeur]
                  </p>
                  <p>
                    <strong>Téléphone :</strong> [Téléphone de l'hébergeur]
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Legal Terms */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Scale className="w-8 h-8 text-red-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Conditions d'Utilisation</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Propriété Intellectuelle</h3>
                  <p className="mb-4">
                    L'ensemble de ce site relève de la législation marocaine et internationale sur le droit d'auteur et
                    la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les
                    documents téléchargeables et les représentations iconographiques et photographiques.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Responsabilité</h3>
                  <p className="mb-4">
                    Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à
                    différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions. Si
                    vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir
                    le signaler par email, à l'adresse info@horatek.ma, en décrivant le problème de la façon la plus
                    précise possible.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Liens Hypertextes</h3>
                  <p className="mb-4">
                    Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres
                    ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de HORA TEK.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Collecte d'Informations</h3>
                  <p className="mb-4">
                    Aucune information personnelle n'est collectée à votre insu. Aucune information personnelle n'est
                    cédée à des tiers. Les informations que vous nous communiquez lors d'une demande de devis ou de
                    contact par email sont uniquement destinées au traitement administratif et commercial de votre
                    demande par la société HORA TEK.
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Droit Applicable</h3>
                  <p>
                    Tout litige en relation avec l'utilisation du site www.horatek.ma est soumis au droit marocain. Il
                    est fait attribution exclusive de juridiction aux tribunaux compétents de Casablanca.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Legal Issues */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions Légales</h3>
                <p className="text-gray-700 mb-6">
                  Pour toute question concernant ces mentions légales, contactez-nous :
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-blue-600" />
                    <span className="text-gray-700">+(212) 522 67 39 49</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-blue-600" />
                    <span className="text-gray-700">info@horatek.ma</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
