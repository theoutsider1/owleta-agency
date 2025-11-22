import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, Lightbulb, Target, Rocket, Users } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Development",
    description:
      "We use cutting-edge tools and methodologies to deliver your project quickly without compromising on quality. Get to market faster with our agile approach.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description:
      "Every line of code is written with scalability and maintainability in mind. We build solutions that grow with your business and stand the test of time.",
  },
  {
    icon: Lightbulb,
    title: "Fresh Perspective",
    description:
      "As a new agency, we bring innovative ideas and modern approaches. We're not stuck in old patterns—we leverage the latest technologies and design trends.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We focus on what matters: conversions, performance, and user experience. Every decision is made with your business goals in mind.",
  },
  {
    icon: Rocket,
    title: "Modern Tech Stack",
    description:
      "We specialize in the latest frameworks and tools—Next.js, React, TypeScript, and more. Your project will be built with technology that's future-proof.",
  },
  {
    icon: Users,
    title: "Personalized Attention",
    description:
      "You're not just another client. We provide dedicated, hands-on service and treat your project with the care and attention it deserves.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Why Choose Owlixir?</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We're a fresh, ambitious web development agency bringing modern solutions and dedicated service to every
            project. Here's what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card
                key={index}
                className="scroll-reveal group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-accent/20 bg-accent/5">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Let's discuss how we can bring your vision to life. We're excited to work with you and deliver
                exceptional results.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2"
              >
                Get in Touch
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
