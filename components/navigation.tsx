"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"


export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
    className={`fixed top-0 md:top-4 left-1/2 z-50 transform -translate-x-1/2 
      w-full md:w-2/6 bg-background/30 backdrop-blur-lg border rounded-full
    `}
  >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-14">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex justify-center items-center text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            <Image src="/owlixir-logo.png" alt="Owlixir Logo" width={50} height={60} className="ml-2 shrink-0" />
            
          </button>

          {/* Desktop Navigation */}
           {/* Mobile Menu Button */}
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="hidden md:flex p-2 text-foreground">
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isNavOpen && (
          <div className="py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </button>
              <div className="px-4 pt-2">
                <Button onClick={() => scrollToSection("contact")} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </button>
              <div className="px-4 pt-2">
                <Button onClick={() => scrollToSection("contact")} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
