"use client"

import Link from "next/link"
import { Home, ArrowLeft, Phone } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Page non trouvée</h2>
            <p className="text-xl text-gray-600 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Page précédente
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-gray-600">
            <p className="mb-4">Besoin d'aide ? Contactez notre équipe :</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+212522673949" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                +(212) 522 67 39 49
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a href="mailto:info@horatek.ma" className="text-blue-600 hover:text-blue-700">
                info@horatek.ma
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
