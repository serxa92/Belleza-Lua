// Configuración para envío de emails
// Puedes usar servicios como Resend, SendGrid, Nodemailer, etc.

interface EmailData {
  nombre: string
  telefono: string
  servicio: string
  mensaje: string
}

export async function sendContactEmail(data: EmailData) {
  // Aquí puedes integrar tu servicio de email preferido
  // Ejemplo con fetch a un servicio de email:

  try {
    // Simular envío de email (reemplaza con tu servicio real)
    const emailContent = `
      Nueva solicitud de cita - Belleza Lúa
      
      Nombre: ${data.nombre}
      Teléfono: ${data.telefono}
      Servicio: ${data.servicio}
      Mensaje: ${data.mensaje}
      
      Fecha: ${new Date().toLocaleString("es-ES")}
    `

    // Ejemplo con Resend (descomenta y configura si usas Resend):
    /*
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'contacto@bellezalua.com',
        to: ['info@bellezalua.com'], // Tu email de destino
        subject: 'Nueva solicitud de cita - Belleza Lúa',
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #d4a85c;">Nueva solicitud de cita - Belleza Lúa</h2>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
              <p><strong>Nombre:</strong> ${data.nombre}</p>
              <p><strong>Teléfono:</strong> ${data.telefono}</p>
              <p><strong>Servicio:</strong> ${data.servicio}</p>
              <p><strong>Mensaje:</strong> ${data.mensaje}</p>
              <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
            </div>
          </div>
        `
      }),
    })

    if (!response.ok) {
      throw new Error('Error al enviar email')
    }
    */

    // Simulación exitosa (elimina esto cuando uses un servicio real)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Email enviado correctamente" }
  } catch (error) {
    console.error("Error enviando email:", error)
    return { success: false, message: "Error al enviar el email" }
  }
}
