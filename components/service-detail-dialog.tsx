"use client"

import type React from "react"

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Phone, Calendar } from "lucide-react"

interface ServiceDetailDialogProps {
  service: {
    icon: React.ElementType
    title: string
    description: string
    imageSrc: string
    fullDescription: string[]
    benefits: string[]
  }
}

export function ServiceDetailDialog({ service }: ServiceDetailDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full border-belleza-champagne-200 text-belleza-champagne-700 hover:bg-belleza-champagne-50 bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-md"
        >
          Más Información
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden rounded-lg">
        <div className="relative h-64 w-full">
          <Image src={service.imageSrc || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-belleza-champagne-900/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <DialogTitle className="text-white text-3xl font-bold">{service.title}</DialogTitle>
            <DialogDescription className="text-belleza-champagne-100 text-lg">{service.description}</DialogDescription>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Descripción Completa</h3>
            {service.fullDescription.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Beneficios Clave</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-belleza-champagne-600">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="flex-1 bg-gradient-to-r from-belleza-champagne-600 to-belleza-champagne-700 hover:from-belleza-champagne-700 hover:to-belleza-champagne-800 text-white py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <Calendar className="w-4 h-4 mr-2" />
              Reservar Cita
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-belleza-champagne-200 text-belleza-champagne-700 hover:bg-belleza-champagne-50 bg-transparent transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
