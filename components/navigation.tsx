"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
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
      setIsNavOpen(false)
    }
  }

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#process", label: "Process" },
    { href: "#why-choose-us", label: "Why Owlixir" },
    { href: "#contact", label: "Get Started" },
  ]

  return (
    <nav
      className={`${
        isNavOpen
          ? "fixed inset-0 z-40 bg-background/50 backdrop-blur-lg flex flex-col items-center gap-6 p-8"
          : "fixed top-2 md:top-4 left-1/2 z-50 w-11/12 md:w-2/6 transform -translate-x-1/2 bg-background/30 backdrop-blur-lg border rounded-full"
      }`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <Link
            href={"/"}
            onClick={() => scrollToSection("hero")}
            className="flex justify-center items-center text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            <Image
              src="/Owlixir-logo.png"
              alt="Owlixir Logo"
              width={30}
              height={40}
              className="ml-2 shrink-0 w-7 h-9 sm:w-7 sm:h-9 md:w-8 md:h-10 lg:w-10 lg:h-12"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isNavOpen}
            className="flex p-2 text-foreground"
          >
            {isNavOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="menu"
        className={`flex flex-col items-center gap-4 mt-8 w-full ${
          isNavOpen ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link) =>
          link.label === "Get Started" ? (
            <div key={link.href} className="flex justify-center px-4 pt-2 w-full">
              <Link
                href={link.href}
                onClick={() => scrollToSection("contact")}
                role="menuitem"
                className=" text-center bg-primary px-6 py-2 rounded-md text-md font-medium text-background hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              className="text-center px-4 py-2 text-md font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => scrollToSection(link.href.slice(1))}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </nav>
  )
}
