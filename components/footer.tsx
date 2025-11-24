import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  

  return (
    <footer className="bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold cursor-pointer">
                <Image src="/Owlixir-logo.png" alt="Owlixir Logo" width={100} height={100} className="-mx-2"/>
                <span className="text-primary">Owlixir</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Transforming ideas into exceptional digital experiences. We're passionate about creating websites that
              make an impact.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/hatim-tagmi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/owlixir.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hatimtagmi@gmail.com"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#work" className="hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-foreground transition-colors">
                  Why Owlixir
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-foreground transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Owlixir. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
