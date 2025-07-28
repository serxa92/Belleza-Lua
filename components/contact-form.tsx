"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { submitContactForm } from "@/actions/contact"
import { useActionState } from "react"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

const initialState = {
  success: false,
  message: "",
  errors: {},
  data: null,
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <Card className="border-belleza-champagne-100 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-right">
      <CardContent className="p-8">
        <h4 className="text-2xl font-semibold text-gray-900 mb-6">Reserva tu Cita</h4>

        {/* Mensaje de estado */}
        {state.message && (
          <div
            className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
              state.success
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            {state.success ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <p className="text-sm font-medium">{state.message}</p>
          </div>
        )}

        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
            <input
              type="text"
              name="nombre"
              defaultValue={state.data?.nombre || ""}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-belleza-champagne-600 focus:border-transparent transition-all duration-300 hover:border-belleza-champagne-300 ${
                state.errors?.nombre ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Tu nombre completo"
              disabled={isPending}
            />
            {state.errors?.nombre && <p className="mt-1 text-sm text-red-600">{state.errors.nombre}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
            <input
              type="tel"
              name="telefono"
              defaultValue={state.data?.telefono || ""}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-belleza-champagne-600 focus:border-transparent transition-all duration-300 hover:border-belleza-champagne-300 ${
                state.errors?.telefono ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Tu número de teléfono"
              disabled={isPending}
            />
            {state.errors?.telefono && <p className="mt-1 text-sm text-red-600">{state.errors.telefono}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Servicio *</label>
            <select
              name="servicio"
              defaultValue={state.data?.servicio || ""}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-belleza-champagne-600 focus:border-transparent transition-all duration-300 hover:border-belleza-champagne-300 ${
                state.errors?.servicio ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              disabled={isPending}
            >
              <option>Selecciona un servicio</option>
              <option>Tratamiento Facial</option>
              <option>Cuidado Corporal</option>
              <option>Estética Avanzada</option>
              <option>Consulta Personalizada</option>
            </select>
            {state.errors?.servicio && <p className="mt-1 text-sm text-red-600">{state.errors.servicio}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
            <textarea
              name="mensaje"
              rows={4}
              defaultValue={state.data?.mensaje || ""}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-belleza-champagne-600 focus:border-transparent transition-all duration-300 hover:border-belleza-champagne-300 ${
                state.errors?.mensaje ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Cuéntanos sobre tus necesidades..."
              disabled={isPending}
            />
            {state.errors?.mensaje && <p className="mt-1 text-sm text-red-600">{state.errors.mensaje}</p>}
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-gradient-to-r from-belleza-champagne-600 to-belleza-champagne-700 hover:from-belleza-champagne-700 hover:to-belleza-champagne-800 text-white py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar Solicitud"
            )}
          </Button>
        </form>

        <p className="mt-4 text-xs text-gray-500 text-center">
          * Campos obligatorios. Te contactaremos en menos de 24 horas.
        </p>
      </CardContent>
    </Card>
  )
}
