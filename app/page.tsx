"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, Moon, Heart, Zap, Award, Users, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ContactForm } from "@/components/contact-form"
import { ServiceDetailDialog } from "@/components/service-detail-dialog"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export default function BellezaLuaLanding() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const servicesData = [
    {
      icon: Moon,
      title: "Tratamientos Faciales",
      description: "Limpieza profunda, hidratación y rejuvenecimiento facial con productos premium",
      imageSrc:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixid=M3w3Mjg3ODh8MHwxfHNlYXJjaHwzfHx0cmF0YW1pZW50byUyMGZhY2lhbHxlbnwwfHx8fDE3NTM3MDA0OTJ8MA&ixlib=rb-4.1.0",
      delay: "0s",
      fullDescription: [
        "Nuestros tratamientos faciales están diseñados para revitalizar y rejuvenecer tu piel. Utilizamos productos de alta gama y técnicas avanzadas para abordar diversas preocupaciones, desde la limpieza profunda hasta la reducción de arrugas.",
        "Cada sesión es personalizada para tu tipo de piel y necesidades específicas, asegurando resultados visibles y una experiencia relajante. Te ayudaremos a conseguir una piel radiante y saludable.",
      ],
      benefits: [
        "Piel más luminosa y uniforme",
        "Reducción de líneas de expresión y arrugas",
        "Hidratación profunda y nutrición",
        "Mejora de la elasticidad y firmeza",
        "Eliminación de impurezas y toxinas",
      ],
    },
    {
      icon: Heart,
      title: "Cuidado Corporal",
      description: "Masajes relajantes, exfoliación y tratamientos reafirmantes corporales",
      imageSrc:
        "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixid=M3w3Mjg3ODh8MHwxfHNlYXJjaHw2fHxtYXNhamV8ZW58MHx8fHwxNzUzNzAwNjYyfDA&ixlib=rb-4.1.0",
      delay: "0.2s",
      fullDescription: [
        "Sumérgete en una experiencia de bienestar total con nuestros tratamientos corporales. Desde masajes relajantes que alivian el estrés hasta tratamientos reafirmantes que mejoran la silueta, cada servicio está pensado para tu confort y resultados.",
        "Nuestros especialistas utilizan técnicas manuales y aparatología de última generación para ofrecerte una piel más suave, tonificada y un cuerpo revitalizado. Ideal para desconectar y cuidarte.",
      ],
      benefits: [
        "Relajación profunda y alivio del estrés",
        "Mejora de la circulación sanguínea",
        "Reducción de celulitis y flacidez",
        "Piel más suave y nutrida",
        "Drenaje linfático y eliminación de líquidos",
      ],
    },
    {
      icon: Zap,
      title: "Estética Avanzada",
      description: "Tecnología de vanguardia para resultados visibles y duraderos",
      imageSrc: "https://clinicareinamercedes.com/wp-content/uploads/2023/04/cabeceras-articulos-IML-24.png",
      delay: "0.4s",
      fullDescription: [
        "En Belleza Lúa, estamos a la vanguardia de la estética con tratamientos avanzados que ofrecen resultados espectaculares. Utilizamos tecnología innovadora para procedimientos no invasivos que transforman tu apariencia de forma segura y efectiva.",
        "Desde depilación láser hasta tratamientos de remodelación corporal y facial con aparatología, te ofrecemos soluciones personalizadas para alcanzar tus objetivos estéticos con la máxima profesionalidad y seguridad.",
      ],
      benefits: [
        "Resultados rápidos y duraderos",
        "Tratamientos no invasivos y seguros",
        "Mejora significativa de la textura de la piel",
        "Reducción de grasa localizada y celulitis",
        "Rejuvenecimiento facial sin cirugía",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-belleza-champagne-50 to-white animate-gradient-subtle overflow-x-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-belleza-champagne-200/30 to-belleza-champagne-300/20 rounded-full blur-xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-belleza-champagne-300/20 to-belleza-champagne-400/10 rounded-full blur-lg animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-belleza-champagne-100/40 to-belleza-champagne-200/20 rounded-full blur-2xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        {/* Nuevos elementos flotantes */}
        <div
          className="absolute top-1/3 left-1/2 w-20 h-20 bg-gradient-to-br from-belleza-champagne-100/20 to-belleza-champagne-200/10 rounded-full blur-md animate-pulse animation-delay-200"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <div
          className="absolute bottom-10 right-1/3 w-28 h-28 bg-gradient-to-br from-belleza-champagne-200/25 to-belleza-champagne-300/15 rounded-full blur-xl animate-pulse animation-delay-400"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        />
        <div
          className="absolute top-1/4 right-10 w-16 h-16 bg-gradient-to-br from-belleza-champagne-50/30 to-belleza-champagne-100/20 rounded-full blur-sm animate-pulse animation-delay-600"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-belleza-champagne-100 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo textual con icono de luna */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-belleza-champagne-600 to-belleza-champagne-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Moon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-belleza-champagne-700 to-belleza-champagne-800 bg-clip-text text-transparent">
                Belleza Lúa
              </h1>
              <p className="text-sm text-gray-600">Estética y Bienestar</p>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#servicios"
              className="text-gray-700 hover:text-belleza-champagne-700 transition-all duration-300 hover:scale-105 relative group"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-belleza-champagne-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#nosotros"
              className="text-gray-700 hover:text-belleza-champagne-700 transition-all duration-300 hover:scale-105 relative group"
            >
              Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-belleza-champagne-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contacto"
              className="text-gray-700 hover:text-belleza-champagne-700 transition-all duration-300 hover:scale-105 relative group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-belleza-champagne-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <Button
            asChild
            className="bg-gradient-to-r from-belleza-champagne-600 to-belleza-champagne-700 hover:from-belleza-champagne-700 hover:to-belleza-champagne-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <a href="tel:986228373">
              <Phone className="w-4 h-4 mr-2" />
              Llamar
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-belleza-champagne-50 to-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-belleza-champagne-100/20 to-transparent"
          style={{ transform: `translateX(${scrollY * 0.1}px)` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                  Tu belleza
                  <span className="block bg-gradient-to-r from-belleza-champagne-700 to-belleza-champagne-800 bg-clip-text text-transparent animate-gradient">
                    natural realzada
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-200">
                  En Belleza Lúa transformamos tu belleza con tratamientos personalizados de cosmética y cuidado
                  personal. Descubre el bienestar que mereces en nuestro centro de estética en Vigo.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-belleza-champagne-600 to-belleza-champagne-700 hover:from-belleza-champagne-700 hover:to-belleza-champagne-800 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  asChild
                >
                  <Link href="#contacto">Reservar Cita</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-belleza-champagne-200 text-belleza-champagne-700 hover:bg-belleza-champagne-50 px-8 py-4 text-lg bg-transparent hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="#servicios">Ver Servicios</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4 animate-fade-in-up animation-delay-600">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-belleza-champagne-600 text-belleza-champagne-600 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-gray-600">Más de 100 clientes satisfechas</p>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixid=M3w3Mjg3ODh8MHwxfHNlYXJjaHwxfHxjdWlkYWRvJTIwZmFjaWFsfGVufDB8fHx8MTc1MzcwMDQxMXww&ixlib=rb-4.1.0"
                  alt="Sala de tratamientos Belleza Lúa"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-belleza-champagne-900/30 to-transparent group-hover:from-belleza-champagne-900/20 transition-all duration-500" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-belleza-champagne-100 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-belleza-champagne-600 to-belleza-champagne-700 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Cuidado Personalizado</p>
                    <p className="text-sm text-gray-600">Tratamientos únicos para ti</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-belleza-champagne-600 to-belleza-champagne-700 rounded-full p-3 shadow-lg animate-bounce-slow">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, number: "100+", label: "Clientes Satisfechas", delay: "0s" },
              { icon: Award, number: "30+", label: "Años de Experiencia", delay: "0.2s" },
              { icon: Calendar, number: "1000+", label: "Tratamientos Realizados", delay: "0.4s" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-belleza-champagne-600 to-belleza-champagne-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h4>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra amplia gama de tratamientos de belleza y bienestar diseñados para realzar tu belleza
              natural
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-belleza-champagne-100 hover:border-belleza-champagne-200 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: service.delay }}
              >
                <CardContent className="p-6">
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={service.imageSrc || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-belleza-champagne-900/40 to-transparent group-hover:from-belleza-champagne-900/20 transition-all duration-500" />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-6 h-6 text-belleza-champagne-700" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-belleza-champagne-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-belleza-champagne-800 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ServiceDetailDialog service={service} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="nosotros"
        className="py-20 bg-gradient-to-br from-belleza-champagne-50 to-white relative overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-belleza-champagne-200/20 to-transparent rounded-full blur-3xl"
          style={{ transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.1}px)` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-left">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <Image
                  src="https://www.paxinasgalegas.es/imagenes/lua_img132194t0m0w1424h712.jpg"
                  alt="Interior Belleza Lúa"
                  width={500}
                  height={400}
                  className="rounded-2xl group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-belleza-champagne-900/20 to-transparent group-hover:from-transparent transition-all duration-500" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-belleza-champagne-600 to-belleza-champagne-700 rounded-xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-float">
                <p className="text-2xl font-bold">30+</p>
                <p className="text-sm">Años de experiencia</p>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-belleza-champagne-300/30 to-belleza-champagne-400/20 rounded-full blur-xl animate-pulse" />
            </div>
            <div className="space-y-6 animate-fade-in-right">
              <h3 className="text-4xl font-bold text-gray-900">Belleza, cosmética y cuidado personal</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                En Belleza Lúa nos especializamos en realzar tu belleza natural a través de tratamientos personalizados
                y productos de alta calidad. Nuestro equipo de profesionales está comprometido con tu bienestar y
                satisfacción.
              </p>
              <div className="space-y-4">
                {[
                  "Tratamientos personalizados para cada cliente",
                  "Productos premium y tecnología avanzada",
                  "Ambiente relajante y profesional",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-fade-in-up hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-belleza-champagne-600 to-belleza-champagne-700 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Contacta con Nosotros</h3>
            <p className="text-xl text-gray-600">Estamos aquí para ayudarte a lucir y sentirte mejor</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in-left">
              {[
                {
                  icon: MapPin,
                  title: "Dirección",
                  content: ["Doctor Cadaval 8, 1°A", "36202 Vigo, Spain"],
                },
                {
                  icon: Phone,
                  title: "Teléfono",
                  content: ["986 228 373"],
                },
                {
                  icon: Clock,
                  title: "Horarios",
                  content: ["Lunes a Jueves: 10:00 - 19:00", "Viernes: 10:00 - 13:00"],
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-belleza-champagne-600 to-belleza-champagne-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{contact.title}</h4>
                    {contact.content.map((line, i) => (
                      <p key={i} className="text-gray-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-belleza-champagne-600 to-belleza-champagne-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Moon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="text-xl font-bold">Belleza Lúa</h5>
                  <p className="text-sm text-gray-400">Estética y Bienestar</p>
                </div>
              </div>
              <p className="text-gray-400">
                Tu centro de belleza y bienestar en Vigo. Tratamientos personalizados para realzar tu belleza natural.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <h6 className="text-lg font-semibold mb-4">Servicios</h6>
              <ul className="space-y-2 text-gray-400">
                {["Tratamientos Faciales", "Cuidado Corporal", "Estética Avanzada", "Consulta Personalizada"].map(
                  (service, index) => (
                    <li key={index}>
                      <Link
                        href="#servicios"
                        className="hover:text-belleza-champagne-400 transition-colors duration-300"
                      >
                        {service}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <h6 className="text-lg font-semibold mb-4">Contacto</h6>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-belleza-champagne-400 transition-colors duration-300">Doctor Cadaval 8, 1°A</p>
                <p className="hover:text-belleza-champagne-400 transition-colors duration-300">36202 Vigo, Spain</p>
                <a href="tel:986228373" className="hover:text-belleza-champagne-400 transition-colors duration-300">
                  986 228 373
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Belleza Lúa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  )
}
