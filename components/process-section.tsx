import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Pencil, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your goals, target audience, and project requirements. Together, we define the scope and create a strategic roadmap.",
  },
  {
    icon: Pencil,
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our designers create wireframes and high-fidelity mockups that bring your vision to life. We iterate based on your feedback until it's perfect.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development & Testing",
    description:
      "Our developers build your project using cutting-edge technologies. We conduct rigorous testing to ensure everything works flawlessly.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy your project and monitor its performance. Our ongoing support ensures your site stays secure, updated, and optimized.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Our Process</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            A proven methodology that delivers exceptional results. We combine creativity, technical expertise, and
            clear communication at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="scroll-reveal relative group hover:shadow-lg transition-all duration-300 border-border/50"
            >
              <CardContent className="p-6 md:p-8">
                <div className="text-6xl font-bold text-accent/10 mb-4">{step.number}</div>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
