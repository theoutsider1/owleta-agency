"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2} from "lucide-react"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const orbs = [
      { x: 0.2, y: 0.3, radius: 300, speedX: 0.0003, speedY: 0.0002, color: "rgba(255, 107, 0, 0.15)" },
      { x: 0.8, y: 0.6, radius: 250, speedX: -0.0002, speedY: 0.0003, color: "rgba(255, 107, 0, 0.1)" },
      { x: 0.5, y: 0.5, radius: 200, speedX: 0.0002, speedY: -0.0002, color: "rgba(255, 107, 0, 0.08)" },
    ]

    let animationFrameId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 1

      orbs.forEach((orb) => {
        // Update position
        orb.x += orb.speedX
        orb.y += orb.speedY

        // Bounce off edges
        if (orb.x < 0 || orb.x > 1) orb.speedX *= -1
        if (orb.y < 0 || orb.y > 1) orb.speedY *= -1

        // Draw orb with gradient
        const gradient = ctx.createRadialGradient(
          orb.x * canvas.width,
          orb.y * canvas.height,
          0,
          orb.x * canvas.width,
          orb.y * canvas.height,
          orb.radius,
        )
        gradient.addColorStop(0, orb.color)
        gradient.addColorStop(1, "rgba(255, 107, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x * canvas.width, orb.y * canvas.height, orb.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-40" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">         
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance animate-fade-in-up">
            Build Your Digital Future with{" "}
            <span className="text-primary">Owlixir</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed animate-fade-in-up animation-delay-200">
             Your digital elixir for modern web solutions.
           </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group w-full sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Commitment</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Fast</div>
              <div className="text-sm text-muted-foreground">Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
