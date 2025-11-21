import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Rocket, Smartphone, Search, Zap } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that engage users and drive conversions. We blend aesthetics with functionality.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect experiences across all devices. Your site will look stunning on desktop, tablet, and mobile.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Lightning-fast load times and smooth interactions. We optimize every aspect for maximum speed and efficiency.",
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    description: "Get found online with SEO best practices and comprehensive analytics to track your success.",
  },
  {
    icon: Zap,
    title: "Maintenance & Support",
    description: "Ongoing support and updates to keep your site secure, current, and performing at its best.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Services That Drive Success</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We offer comprehensive web development services tailored to your unique needs. From initial concept to
            ongoing support, we're with you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="scroll-reveal group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
