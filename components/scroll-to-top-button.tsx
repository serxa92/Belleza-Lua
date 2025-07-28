"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpCircle } from "lucide-react"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // Show after scrolling 300px
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="bg-belleza-champagne-600 hover:bg-belleza-champagne-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 scale-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-belleza-champagne-500 focus:ring-offset-2"
          size="icon"
          aria-label="Volver arriba"
        >
          <ArrowUpCircle className="w-6 h-6" />
        </Button>
      )}
    </div>
  )
}
