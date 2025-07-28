"use client"

import { useEffect, useRef, useState } from "react"

interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean // Si la animación debe dispararse solo una vez
}

export function useInView({ threshold = 0.1, triggerOnce = true, ...options }: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false) // Para asegurar que la animación solo se dispare una vez

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (triggerOnce) {
            setHasBeenInView(true)
            observer.unobserve(entry.target) // Deja de observar una vez que ha estado en vista
          }
        } else {
          // Si no está en vista y no se ha disparado ya (o si triggerOnce es false)
          if (!triggerOnce || !hasBeenInView) {
            setInView(false)
          }
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, triggerOnce, hasBeenInView])

  // Retorna true si está actualmente en vista o si ya ha estado en vista (para triggerOnce)
  return [ref, inView || hasBeenInView] as const
}
