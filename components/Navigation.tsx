"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigationItems = [
  { href: "/", label: "À PROPOS" },
  { href: "/gestion-temps", label: "GESTION DES TEMPS" },
  { href: "/controle-acces", label: "CONTROLE D'ACCES SECURITAIRE" },
  { href: "/anti-vol", label: "ANTI VOL" },
  { href: "/domotique", label: "DOMOTIQUE" },
  { href: "/references", label: "REFERENCES" },
  { href: "/contact", label: "CONTACT" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full font-bold text-xl tracking-wide">
              HORA TEK
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
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

          {/* Mobile menu button */}
          <Button variant="outline" className="lg:hidden bg-transparent">
            Menu
          </Button>
        </div>
      </div>
    </header>
  )
}
