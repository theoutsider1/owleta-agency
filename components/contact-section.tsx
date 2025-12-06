"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle, X, AlertCircle } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import emailjs from '@emailjs/browser';


export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true);
    setSuccessMessage("")
    setErrorMessage("")

    // Handle form submission

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID !;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID !;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY !;

    try {

      const res = await emailjs.send(serviceID , templateID ,formData, userID)

      if (res.status === 200) {
        setSuccessMessage("Message sent successfully! We'll get back to you soon.")
        // Reset form
        setFormData({ name: "", email: "", company: "", message: "" });

      }else {
        setErrorMessage("Form submission failed. Please try again.")
      }
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again later.")
    } finally {
      setIsLoading(false);

    }
   
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const autoClear = (value: string, setter: Function) => {
    if (!value) return
    const timer = setTimeout(() => setter(""), 5000)
    return () => clearTimeout(timer)
  }
  
  useEffect(() => autoClear(successMessage, setSuccessMessage), [successMessage])
  useEffect(() => autoClear(errorMessage, setErrorMessage), [errorMessage])
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Ready to start your project? Get in touch with us today and let's discuss how we can help bring your vision
            to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button disabled={isLoading} type="submit" size="lg" className="w-full group cursor-pointer">
                  {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )} </Button>
                {successMessage && (
                  <div className="mb-6 flex items-start gap-3 p-4 ">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-green-400">{successMessage}</p>
                    </div>
                    <button
                      onClick={() => setSuccessMessage("")}
                      className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                      aria-label="Close message"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
                {errorMessage && (
                  <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-800 dark:text-red-200">{errorMessage}</p>
                    </div>
                    <button
                      onClick={() => setErrorMessage("")}
                      className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                      aria-label="Close message"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">hatimtagmi@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">+212 (06) 1413-9881</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">Rabat </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-accent/5">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
