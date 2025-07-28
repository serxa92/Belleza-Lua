import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Belleza Lúa | Estética y Bienestar",
  description: "Belleza Lúa es una página web moderna y elegante diseñada para un centro de estética y belleza. Ofrece una experiencia visual limpia, responsive y centrada en destacar los servicios, tratamientos y filosofía del centro. Visítala aquí 👉 belleza-lua.vercel.app",
  icons: {
    icon: "/images/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
