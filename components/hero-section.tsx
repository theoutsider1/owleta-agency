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
  
    let animationFrameId: number | null = null
  
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
  
      // Draw orbs
      orbs.forEach((orb) => {
        orb.x += orb.speedX
        orb.y += orb.speedY
  
        if (orb.x < 0 || orb.x > 1) orb.speedX *= -1
        if (orb.y < 0 || orb.y > 1) orb.speedY *= -1
  
        const gradient = ctx.createRadialGradient(
          orb.x * canvas.width,
          orb.y * canvas.height,
          0,
          orb.x * canvas.width,
          orb.y * canvas.height,
          orb.radius
        )
  
        gradient.addColorStop(0, orb.color)
        gradient.addColorStop(1, "rgba(255,107,0,0)")
  
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x * canvas.width, orb.y * canvas.height, orb.radius, 0, Math.PI * 2)
        ctx.fill()
      })
  
      const fadeHeight = 350
      const mask = ctx.createLinearGradient(0, canvas.height - fadeHeight, 0, canvas.height)
      mask.addColorStop(0, "rgba(0,0,0,1)")
      mask.addColorStop(1, "rgba(0,0,0,0)")
  
      ctx.globalCompositeOperation = "destination-in"
      ctx.fillStyle = mask
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "source-over"
  
      animationFrameId = requestAnimationFrame(animate)
    }
  
    animate()
  
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])
  


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-around overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full h-[calc(100vh)]" />
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-40" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center">         
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance animate-fade-in-up">
            <span
              className="
                pointer-events-none
                bg-gradient-to-b 
                from-black to-gray-300/80 
                dark:from-white dark:to-slate-900/10
                bg-clip-text text-transparent
                leading-none
              "
            >
              Build Your Digital Future with{" "}
            </span>
              <span className="text-primary aurora-text">Owlixir</span>
            </h1>

            <p className="text-xl sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed animate-fade-in-up animation-delay-200">
              Web solutions for businesses that want results.
            </p>

          <div className="w-1/2 md:w-full flex items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group w-full sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>
         {/* Stats */}
      <div className="relative max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
        {/* Centered gradient line */}
        <div className="flex justify-center mb-6">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 z-40 gap-8 text-center">
          <div>
            <div className="text-xl md:text-2xl font-normal text-accent mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Commitment</div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-semibold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-semibold text-accent mb-2">Fast</div>
            <div className="text-sm text-muted-foreground">Delivery</div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

    </section>
  )
}
