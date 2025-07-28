"use server"

import { sendContactEmail } from "@/lib/email"
import { validateContactForm, type ContactFormData } from "@/lib/validations"

export async function submitContactForm(prevState: any, formData: FormData) {
  const data: ContactFormData = {
    nombre: formData.get("nombre") as string,
    telefono: formData.get("telefono") as string,
    servicio: formData.get("servicio") as string,
    mensaje: formData.get("mensaje") as string,
  }

  // Validar datos
  const validation = validateContactForm(data)

  if (!validation.isValid) {
    return {
      success: false,
      message: "Por favor corrige los errores en el formulario",
      errors: validation.errors,
      data,
    }
  }

  try {
    // Enviar email
    const emailResult = await sendContactEmail(data)

    if (emailResult.success) {
      return {
        success: true,
        message: "¡Solicitud enviada correctamente! Te contactaremos pronto.",
        errors: {},
        data: null,
      }
    } else {
      return {
        success: false,
        message: "Error al enviar la solicitud. Por favor intenta de nuevo.",
        errors: {},
        data,
      }
    }
  } catch (error) {
    console.error("Error en submitContactForm:", error)
    return {
      success: false,
      message: "Error interno del servidor. Por favor intenta más tarde.",
      errors: {},
      data,
    }
  }
}
