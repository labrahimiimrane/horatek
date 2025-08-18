import Link from "next/link"
import { Mail, Clock, Globe } from "lucide-react"


export function Footer() {
  return (
    <footer className="bg-white border-t-4 border-blue-600">
      {/* Bottom Section */}
      <div className="bg-white text-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="mailto:info@horatek.ma" className="flex items-center mb-4 md:mb-0">
              <Mail className="w-4 h-4 mr-2 text-gray-800" />
              <span className="font-medium text-gray-800">info@horatek.ma</span>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-gray-800" />
                <span className="text-sm text-gray-800">Lun-Ven: 8h-18h | Support 24/7</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-gray-800" />
                <span className="text-sm text-gray-800">Maroc & Italie</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-4 pt-4 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0 gap-2">
                <Link
                  href="/mentions-legales"
                  className="text-gray-800 text-sm hover:text-gray-500 transition-colors duration-300"
                >
                  Mentions légales
                </Link>
                -
                <Link
                  href="/politique-confidentialite"
                  className="text-gray-800 text-sm hover:text-gray-500 transition-colors duration-300"
                >
                  Politique de confidentialité
                </Link>
              </div>
              <div className="flex items-center space-x-6">
                <p className="text-gray-800 text-sm">Copyright © 2025 HORA TEK. Tous droits réservés.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}