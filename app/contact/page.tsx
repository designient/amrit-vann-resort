"use client"

import type React from "react"
import { useState } from "react"
import { EnhancedButton } from "@/components/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  MapPin, Phone, Mail, Clock, Car, Plane, Train, CheckCircle, AlertCircle,
} from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY",
          subject: `Contact Inquiry: ${formData.subject || "General"}`,
          from_name: formData.name,
          ...formData,
          botcheck: "",
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Scenic landscape near Pench Tiger Reserve"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
        <div className="relative z-10 container mx-auto text-center max-w-4xl text-white py-12">
          <p className="text-emerald-300 font-medium mb-3 tracking-wide uppercase text-sm">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to hear from you. Reach out for reservations, inquiries, or to plan your perfect Pench getaway.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-8" data-animate>
              <div>
                <h2 className="text-2xl font-bold text-stone-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800">Address</h3>
                      <p className="text-stone-600">
                        Pench National Park, Turia<br />
                        Awarghani–Turia Road, Khawasa<br />
                        Madhya Pradesh 480881, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800">Phone</h3>
                      <div className="space-y-1">
                        <a href="tel:+919545464788" className="block text-stone-600 hover:text-emerald-600 transition-colors">
                          +91 95454 64788
                        </a>
                        <a href="tel:+918668442423" className="block text-stone-600 hover:text-emerald-600 transition-colors">
                          +91 86684 42423
                        </a>
                        <a href="tel:+918055886688" className="block text-stone-600 hover:text-emerald-600 transition-colors">
                          +91 80558 86688
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800">Email</h3>
                      <a href="mailto:bookings@amritvannresort.com" className="text-stone-600 hover:text-emerald-600 transition-colors">
                        bookings@amritvannresort.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800">Reception Hours</h3>
                      <p className="text-stone-600">24/7 (check-in from 2 PM)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Getting Here */}
              <Card className="p-6 border-stone-200">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-stone-800 mb-4">Getting Here</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Plane className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-stone-800">By Air</p>
                        <p className="text-stone-600 text-sm">
                          Nagpur Airport (Dr. Babasaheb Ambedkar International) is ~100 km away (~2.5 hrs drive). We arrange airport transfers.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Train className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-stone-800">By Rail</p>
                        <p className="text-stone-600 text-sm">
                          Seoni Railway Station is the nearest (~30 km). Nagpur Junction is well-connected to all major cities.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Car className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-stone-800">By Road</p>
                        <p className="text-stone-600 text-sm">
                          NH44 connects Nagpur to Seoni. The resort is accessible via a scenic drive through the Pench buffer zone.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-stone-100 rounded-2xl p-4">
                <p className="text-sm text-stone-500 text-center">
                  GPS: 21.7353° N, 79.3499° E
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3" data-animate>
              <Card className="p-8 border-stone-200 shadow-sm">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold text-stone-800 mb-6">Send Us a Message</h2>

                  {status === "success" ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-stone-800 mb-2">Message Sent!</h3>
                      <p className="text-stone-600 mb-6">
                        Thank you for reaching out. Our team will respond within 24 hours.
                      </p>
                      <EnhancedButton onClick={() => setStatus("idle")}>
                        Send Another Message
                      </EnhancedButton>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <input type="checkbox" name="botcheck" className="hidden" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your name"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 ..."
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="e.g. Room inquiry"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we help you?"
                          className="mt-1"
                        />
                      </div>

                      {status === "error" && (
                        <div className="flex items-center gap-2 text-red-600 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>Something went wrong. Please try again or email us directly.</span>
                        </div>
                      )}

                      <EnhancedButton
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={status === "submitting"}
                      >
                        {status === "submitting" ? "Sending..." : "Send Message"}
                      </EnhancedButton>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
