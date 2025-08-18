"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"


const navItems = [
  { href: "/", label: "À PROPOS" },
  { href: "/gestion-temps", label: "GESTION DES TEMPS" },
  { href: "/controle-acces", label: "CONTROLE D'ACCES SECURITAIRE" },
  { href: "/anti-vol", label: "ANTI VOL" },
  { href: "/domotique", label: "DOMOTIQUE" },
  { href: "/references", label: "REFERENCES" },
  { href: "/contact", label: "CONTACT" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full font-bold text-xl tracking-wide">
              HORA TEK
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg transition-colors text-sm font-medium",
                  pathname === item.href ? "text-blue-800 font-semibold bg-blue-50" : "text-gray-700 hover:bg-gray-50",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50 bg-blue-600/50 backdrop-blur-[5px]" onClick={() => setIsOpen(false)} />
            <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full font-bold text-xl tracking-wide">
                    HORA TEK
                  </div>
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="py-6">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-4 border-transparent hover:border-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t bg-gray-50">
                <div className="space-y-4">
                  <div className="text-sm text-gray-600">
                    <div className="font-semibold mb-2">Contactez-nous</div>
                    <div className="flex items-center mb-2">
                      <Phone className="w-4 h-4 mr-2 text-blue-600" />
                      <span>+(212) 522 67 39 49</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-blue-600" />
                      <span>info@horatek.ma</span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}        
      </div>
    </header>
  )
}
