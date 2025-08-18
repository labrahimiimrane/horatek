"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-600 text-white">
            <div className="container mx-auto px-4 py-20">
            <div className="text-center">
                <Badge className="bg-white/20 text-white mb-4">Contactez-nous</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Parlons de Votre Projet</h1>
                <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
                Nos experts sont à votre disposition pour analyser vos besoins et vous proposer la solution la plus
                adaptée.
                </p>
            </div>
            </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-3 gap-12"> 
                {/* Main Content Column */}  
                <div className="lg:col-span-2">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 mb-8">
                        <Card className="shadow-xl border-0">
                            <CardContent className="p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Demande de Devis Gratuit</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                                    <Input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    placeholder="Votre nom complet"
                                    required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                    <Input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    placeholder="votre@email.com"
                                    required
                                    />
                                </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                                    <Input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                    placeholder="+212 6XX-XXXXXX"
                                    required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                                    <Input
                                    type="text"
                                    value={formData.company}
                                    onChange={(e) => handleChange("company", e.target.value)}
                                    placeholder="Nom de votre entreprise"
                                    />
                                </div>
                                </div>

                                <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Service souhaité *</label>
                                <Select onValueChange={(value) => handleChange("service", value)}>
                                    <SelectTrigger>
                                    <SelectValue placeholder="Sélectionnez un service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                    <SelectItem value="gestion-temps">Gestion des Temps</SelectItem>
                                    <SelectItem value="controle-acces">Contrôle d'Accès</SelectItem>
                                    <SelectItem value="anti-vol">Systèmes Anti-Vol</SelectItem>
                                    <SelectItem value="domotique">Solutions Domotiques</SelectItem>
                                    <SelectItem value="integration">Intégration Complète</SelectItem>
                                    <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                                    </SelectContent>
                                </Select>
                                </div>

                                <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Décrivez votre projet *</label>
                                <Textarea
                                    value={formData.message}
                                    onChange={(e) => handleChange("message", e.target.value)}
                                    placeholder="Décrivez vos besoins, le nombre d'employés, la taille de vos locaux, vos contraintes spécifiques..."
                                    rows={5}
                                    required
                                />
                                </div>

                                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-800">
                                <Send className="w-5 h-5 mr-2" />
                                Envoyer ma Demande
                                </Button>
                            </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Details */}
                    <Card className="shadow-lg border-0">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Informations de Contact</h3>
                            <div className="flex flex-wrap gap-8 justify-between">
                                <div className="flex items-start ">
                                    <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                                    <div>
                                        <p className="font-medium text-gray-800">Téléphone</p>
                                        <p className="text-gray-600">Maroc: +(212) 522 67 39 49</p>
                                        <p className="text-gray-600">Italie: +39 (0)328-145-8284</p>
                                        <p className="text-gray-600">Italie: +39 (0)329-181-3890</p>
                                    </div>
                                </div>
                                <div className="flex items-start ">
                                    <Mail className="w-6 h-6 text-green-600 mt-1 mr-4" />
                                    <div>
                                        <p className="font-medium text-gray-800">Email</p>
                                        <p className="text-gray-600">info@horatek.ma</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-red-600 mt-1 mr-4" />
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <p className="font-medium text-gray-800">Adresse Maroc</p>
                                            <p className="text-gray-600">
                                            Bd Ali Yaata Résidence Basma II
                                            <br />
                                            Imm: 3 N°1
                                            <br />
                                            20250 - Ain Sebâa
                                            <br />
                                            Casablanca-MAROC
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-800">Adresse Italie</p>
                                            <p className="text-gray-600">
                                            Via B. Zendrini 5<br />
                                            25047 Darfo Boario
                                            <br />
                                            Brescia-ITALY
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 static md:sticky md:top-[100px]  h-[max-content]">
                    {/* Quick Response */}
                    <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
                        <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Réponse Rapide Garantie</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Réponse sous 2h en jours ouvrables</span>
                            </div>
                            <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Devis gratuit sous 24h</span>
                            </div>
                            <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Visite technique gratuite</span>
                            </div>
                            <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Support technique 24/7</span>
                            </div>
                        </div>
                        </CardContent>
                    </Card>

                    {/* Emergency Contact */}
                    <Card className="shadow-lg border-0 bg-gradient-to-br from-red-50 to-orange-50 mb-8">
                        <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Urgence Technique</h3>
                        <p className="text-gray-600 text-sm mb-4">Pour les urgences techniques et pannes système</p>
                        <Button className="w-full bg-red-600 hover:bg-red-700">
                            <Phone className="w-4 h-4 mr-2" />
                            Urgence: +(212) 522 67 39 49
                        </Button>
                        </CardContent>
                    </Card>
                </div>  
            </div>   
        </main>
    </div>
  )
}
