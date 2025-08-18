import { Mail, Clock, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t-4 border-blue-600">
      {/* Bottom Section */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Mail className="w-4 h-4 mr-2" />
              <span className="font-medium">info@horatek.ma</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Lun-Ven: 8h-18h | Support 24/7</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                <span className="text-sm">Maroc & Italie</span>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-500 mt-4 pt-4 text-center">
            <p className="text-blue-100 text-sm">Copyright © 2025 HORA TEK. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}