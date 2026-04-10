"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { EnhancedButton } from "@/components/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, Calendar, Users, Phone, Mail } from "lucide-react"

const rooms = [
  { id: "forest-suite", name: "Forest Suite — ₹12,999/night" },
  { id: "canopy-room", name: "Canopy Room — ₹8,999/night" },
  { id: "woodland-cabin", name: "Woodland Cabin — ₹10,999/night" },
  { id: "valley-view", name: "Valley View Room — ₹6,999/night" },
  { id: "family-lodge", name: "Family Lodge — ₹15,999/night" },
  { id: "meditation-retreat", name: "Meditation Retreat — ₹9,999/night" },
]

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-stone-50 pt-20" />}>
      <BookingContent />
    </Suspense>
  )
}

function BookingContent() {
  const searchParams = useSearchParams()
  const preselectedRoom = searchParams.get("room") || ""

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    room: preselectedRoom,
    checkIn: "",
    checkOut: "",
    adults: "",
    children: "0",
    specialRequests: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  useEffect(() => {
    if (preselectedRoom) {
      setFormData((prev) => ({ ...prev, room: preselectedRoom }))
    }
  }, [preselectedRoom])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    const roomLabel = rooms.find((r) => r.id === formData.room)?.name || formData.room

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY",
          subject: `Booking Inquiry: ${roomLabel}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          room: roomLabel,
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          adults: formData.adults,
          children: formData.children,
          special_requests: formData.specialRequests,
          botcheck: "",
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-stone-50 pt-20 flex items-center justify-center px-4">
        <Card className="max-w-lg w-full p-10 text-center border-stone-200">
          <CardContent className="p-0">
            <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-stone-800 mb-4">Inquiry Sent!</h1>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Thank you for your interest in Amrit Vann Resort. Our reservations team will respond
              within 24 hours with availability and pricing details.
            </p>
            <h2 className="text-lg font-semibold text-stone-800 mb-3">What Happens Next?</h2>
            <ul className="text-stone-600 text-left space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />
                Our team reviews your dates and room preference
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />
                You&apos;ll receive a personalised quote by email
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />
                We&apos;ll help you plan safaris and experiences
              </li>
            </ul>
            <EnhancedButton size="lg" href="/">
              Return to Homepage
            </EnhancedButton>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-emerald-600 font-medium mb-3 tracking-wide uppercase text-sm">Reservations</p>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 leading-tight">
            Book Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Jungle Escape
            </span>
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Fill in your details and our reservations team will get back to you within 24 hours with a personalised quote
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-10 border-stone-200 shadow-sm">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-8">
                <input type="checkbox" name="botcheck" className="hidden" />

                {/* Guest Details */}
                <div>
                  <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-600" />
                    Guest Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
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
                    <div className="md:col-span-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 ..."
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Stay Details */}
                <div>
                  <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    Stay Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="checkIn">Check-in Date *</Label>
                      <Input
                        id="checkIn"
                        type="date"
                        required
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkOut">Check-out Date *</Label>
                      <Input
                        id="checkOut"
                        type="date"
                        required
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="adults">Adults *</Label>
                      <Select
                        value={formData.adults}
                        onValueChange={(v) => setFormData({ ...formData, adults: v })}
                      >
                        <SelectTrigger className="mt-1" id="adults">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <SelectItem key={n} value={String(n)}>{n} Adult{n > 1 ? "s" : ""}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="children">Children</Label>
                      <Select
                        value={formData.children}
                        onValueChange={(v) => setFormData({ ...formData, children: v })}
                      >
                        <SelectTrigger className="mt-1" id="children">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {[0, 1, 2, 3, 4].map((n) => (
                            <SelectItem key={n} value={String(n)}>{n} {n === 1 ? "Child" : "Children"}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="room">Preferred Room</Label>
                      <Select
                        value={formData.room}
                        onValueChange={(v) => setFormData({ ...formData, room: v })}
                      >
                        <SelectTrigger className="mt-1" id="room">
                          <SelectValue placeholder="Select a room type" />
                        </SelectTrigger>
                        <SelectContent>
                          {rooms.map((r) => (
                            <SelectItem key={r.id} value={r.id}>{r.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    rows={4}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="Safari preferences, dietary needs, airport transfer, anniversary celebration..."
                    className="mt-1"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Something went wrong. Please try again or email us at bookings@amritvannresort.com</span>
                  </div>
                )}

                <EnhancedButton
                  type="submit"
                  size="xl"
                  className="w-full"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending Inquiry..." : "Send Booking Inquiry"}
                </EnhancedButton>

                <p className="text-stone-500 text-sm text-center">
                  We&apos;ll respond within 24 hours with availability and pricing
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4" data-animate>
            <Card className="p-6 border-stone-200 flex items-center gap-4">
              <Phone className="w-8 h-8 text-emerald-600" />
              <div>
                <p className="text-sm text-stone-500">Prefer to call?</p>
                <a href="tel:+919876543210" className="font-semibold text-stone-800 hover:text-emerald-600 transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </Card>
            <Card className="p-6 border-stone-200 flex items-center gap-4">
              <Mail className="w-8 h-8 text-emerald-600" />
              <div>
                <p className="text-sm text-stone-500">Email us directly</p>
                <a href="mailto:bookings@amritvannresort.com" className="font-semibold text-stone-800 hover:text-emerald-600 transition-colors">
                  bookings@amritvannresort.com
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
