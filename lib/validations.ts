export interface ContactFormData {
  nombre: string
  telefono: string
  servicio: string
  mensaje: string
}

export function validateContactForm(data: ContactFormData) {
  const errors: Partial<ContactFormData> = {}

  if (!data.nombre || data.nombre.trim().length < 2) {
    errors.nombre = "El nombre debe tener al menos 2 caracteres"
  }

  if (!data.telefono || data.telefono.trim().length < 9) {
    errors.telefono = "El teléfono debe tener al menos 9 dígitos"
  }

  if (!data.servicio || data.servicio === "Selecciona un servicio") {
    errors.servicio = "Por favor selecciona un servicio"
  }

  if (!data.mensaje || data.mensaje.trim().length < 10) {
    errors.mensaje = "El mensaje debe tener al menos 10 caracteres"
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
