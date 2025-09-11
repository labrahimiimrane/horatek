import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import Navigation  from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function ReferencesPage() {

  const stats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "100%", label: "Clients satisfaits" },
    { number: "24/7", label: "Support technique" },
    { number: "2", label: "Pays d'intervention" },
  ]

    const references = {
        public: [
            {
            logo: "/images/eacce-logo.png",
            alt: "Ministère de tourisme",
            title: "Ministère de tourisme",
            city: "Rabat",
            description:
                "Système de gestion des temps et contrôle d'accès pour l'administration centrale du tourisme.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "ONMT",
            title: "Office National Marocain de Tourisme",
            city: "Rabat",
            description:
                "Solutions de sécurité et gestion du personnel pour l'office national du tourisme.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E",
            city: "Casablanca",
            description:
                "Etablissement Autonome de Contrôle et de Coordination des Exportations - Siège principal.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Kenitra",
            description:
                "Solutions de contrôle d'accès et gestion des temps pour la délégation de Kenitra.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Taourirt",
            description:
                "Système intégré de sécurité et gestion du personnel pour la délégation de Taourirt.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Sidi Slimane",
            description:
                "Solutions de contrôle d'accès et gestion des temps pour la délégation de Sidi Slimane.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Fès",
            description:
                "Système de sécurité et gestion du personnel pour la délégation de Fès.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "El Jadida",
            description:
                "Solutions de contrôle d'accès et gestion des temps pour la délégation d'El Jadida.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Dakhla",
            description:
                "Système intégré de sécurité et gestion du personnel pour la délégation de Dakhla.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Tan-Tan",
            description:
                "Solutions de contrôle d'accès et gestion des temps pour la délégation de Tan-Tan.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Nouasser",
            description:
                "Système de sécurité et gestion du personnel pour la délégation de Nouasser.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Tanger",
            description:
                "Solutions de contrôle d'accès et gestion des temps pour la délégation de Tanger.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Nador",
            description:
                "Système intégré de sécurité et gestion du personnel pour la délégation de Nador.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Safi",
            description:
                "Solutions de contrôle d'accès et gestion des temps pour la délégation de Safi.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Lâayoune",
            description:
                "Système de sécurité et gestion du personnel pour la délégation de Lâayoune.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Agadir",
            description:
                "Solutions de contrôle d'accès et gestion des temps pour la délégation d'Agadir.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Larache",
            description:
                "Système intégré de sécurité et gestion du personnel pour la délégation de Larache.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Marrakech",
            description:
                "Solutions de contrôle d'accès et gestion des temps pour la délégation de Marrakech.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "E.A.C.C.E",
            title: "E.A.C.C.E Délégation",
            city: "Berkane",
            description:
                "Système de sécurité et gestion du personnel pour la délégation de Berkane.",
            },
        ],
        private: [
            {
            logo: "/images/eacce-logo.png",
            alt: "SPIE ELECAM",
            title: "SPIE ELECAM",
            city: "Casablanca",
            description:
                "Solutions de contrôle d'accès et gestion des temps pour entreprise d'électricité.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "Hôtel RAMADA",
            title: "Hôtel RAMADA",
            city: "Fès",
            description:
                "Système de sécurité hôtelière avec contrôle d'accès et vidéosurveillance.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "ATHENA Surveillance",
            title: "ATHENA Surveillance",
            city: "Casablanca",
            description:
                "Solutions de surveillance et systèmes de sécurité avancés.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "VENETA SYSTEM",
            title: "VENETA SYSTEM",
            city: "Casablanca",
            description:
                "Intégration de systèmes de sécurité et contrôle d'accès industriel.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "CAPITAL SOFT",
            title: "CAPITAL SOFT",
            city: "Casablanca",
            description:
                "Solutions logicielles avec intégration de systèmes de gestion des temps.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "TECHCITY",
            title: "TECHCITY",
            city: "Casablanca",
            description: "Solutions technologiques avec systèmes de sécurité intégrés.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "PC PLUS",
            title: "PC PLUS",
            city: "Fès",
            description:
                "Solutions informatiques avec systèmes de gestion des temps intégrés.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "MIKAFRIC",
            title: "MIKAFRIC",
            city: "Casablanca",
            description:
                "Système de contrôle d'accès et gestion du personnel pour entreprise industrielle.",
            },
            {
            logo: "/images/eacce-logo.png",
            alt: "MARA-PRINT",
            title: "MARA-PRINT",
            city: "Casablanca",
            description:
                "Solutions de sécurité et gestion des temps pour entreprise d'imprimerie.",
            },
        ],
    };

    const allReferences = [
        ...references.public.map(ref => ({ ...ref, type: "public" })),
        ...references.private.map(ref => ({ ...ref, type: "private" })),
    ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
            <div className="container mx-auto px-4 py-20">
            <div className="text-center">
                <Badge className="bg-white/20 text-white mb-4">Nos Références</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Plus de 150 Clients Nous Font Confiance
                </h1>
                <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Découvrez nos réalisations dans différents secteurs d'activité au Maroc et en Afrique.
                </p>
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

        {/* References by Sector */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        Nos Références par Secteur
                    </h2>
                </div>

                {/* Public */}
                <div className="mb-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allReferences.map((ref, index) => (
                            <Card key={index} className="shadow-lg border-0">
                            <CardContent className="px-6">
                                <Badge
                                className={`mb-4 flex ml-auto ${
                                    ref.type === "public" ? "bg-blue-600 text-white" : "bg-green-600 text-white"
                                }`}
                                >
                                {ref.type === "public" ? "Secteur Public" : "Secteur Privé"}
                                </Badge>

                                <div className="flex items-center mb-4">
                                {/* <Image
                                    src={ref.logo}
                                    alt={ref.alt}
                                    width={150}
                                    height={40}
                                    className="mr-4"
                                /> */}
                                <div>
                                    <h4 className="font-bold text-gray-800">{ref.title}</h4>
                                    <p className="text-sm text-gray-600">{ref.city}</p>
                                </div>
                                </div>
                                <p className="text-gray-600 text-sm">{ref.description}</p>
                            </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
            <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Rejoignez Nos Clients Satisfaits</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Découvrez comment nos solutions peuvent transformer votre entreprise comme elles l'ont fait pour nos
                clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-800 transition-colors inline-flex items-center justify-center"
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