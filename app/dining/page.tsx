import type { Metadata } from "next"
import { StylishButton } from "@/components/stylish-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Phone, Utensils, Coffee, Wine, Leaf, Star } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Dining | Forest-to-Table Cuisine at Pench",
  description:
    "Savor Central Indian and international cuisine at Amrit Vann Resort. Farm-to-table dining, riverside meals, and authentic Madhya Pradesh flavors near Pench Tiger Reserve.",
  openGraph: {
    title: "Dining | Amrit Vann Resort, Pench",
    description: "Forest-to-table cuisine, riverside dining, and authentic Central Indian flavors.",
    images: [{ url: "/images/dining-restaurant.jpg", width: 800, height: 600 }],
  },
  alternates: { canonical: "/dining" },
}

const restaurants = [
  {
    name: "The Pench Kitchen",
    cuisine: "Central Indian & International",
    hours: "7:00 AM - 10:30 PM",
    description:
      "Our signature restaurant serves a curated menu that celebrates the flavours of Madhya Pradesh — dal bafla, seekh kebabs, and jungle-inspired dishes — alongside international favourites. Open-air seating under a canopy of sal trees.",
    image: "/images/dining-restaurant.jpg",
    features: ["Open-air seating", "Live kitchen", "Locally sourced", "Vegetarian options"],
  },
  {
    name: "Canopy Café",
    cuisine: "Continental & Light Bites",
    hours: "8:00 AM - 6:00 PM",
    description:
      "A relaxed café perfect for post-safari brunch or afternoon tea. Freshly baked breads, artisan coffee, and light meals overlooking the garden.",
    image: "/images/canopy-cafe.jpg",
    features: ["Artisan coffee", "Freshly baked", "Garden view", "Gluten-free options"],
  },
  {
    name: "Valley Bar",
    cuisine: "Cocktails & Small Plates",
    hours: "5:00 PM - 11:00 PM",
    description:
      "Unwind with handcrafted cocktails using local ingredients — think mahua flower infusions and kokum coolers — paired with small plates as the sun sets over the jungle.",
    image: "/images/valley-bar.jpg",
    features: ["Craft cocktails", "Local spirits", "Sunset views", "Live acoustic nights"],
  },
]

const specialExperiences = [
  { name: "Riverside Dinner", desc: "Private dinner by the Pench River under starlight.", price: "₹4,500 per couple" },
  { name: "Bush Breakfast", desc: "Gourmet breakfast in the forest clearing after morning safari.", price: "₹2,200 per person" },
  { name: "Cooking Class", desc: "Learn authentic MP recipes from our head chef.", price: "₹1,800 per person" },
]

export default function DiningPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-emerald-600 font-medium mb-3 tracking-wide uppercase text-sm">Dining at Amrit Vann</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
            Forest-to-Table{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Cuisine
            </span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            From the rich flavours of Madhya Pradesh to international favourites, every meal at Amrit Vann
            is a celebration of fresh ingredients and the jungle setting.
          </p>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {restaurants.map((r, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
                data-animate
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <Image
                      src={r.image}
                      alt={`${r.name} restaurant at Amrit Vann Resort`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Badge className="bg-emerald-100 text-emerald-800 mb-4">{r.cuisine}</Badge>
                  <h2 className="text-3xl font-bold text-stone-800 mb-4">{r.name}</h2>
                  <p className="text-stone-600 mb-6 leading-relaxed">{r.description}</p>

                  <div className="flex items-center gap-2 mb-6 text-sm text-stone-500">
                    <Clock className="w-4 h-4" />
                    <span>{r.hours}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {r.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        <span className="text-sm text-stone-600">{f}</span>
                      </div>
                    ))}
                  </div>

                  <StylishButton href="/booking">Reserve a Table</StylishButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Dining Experiences */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Special Dining Experiences</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Unique culinary moments designed to make your stay unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-animate>
            {specialExperiences.map((exp, index) => (
              <Card key={index} className="p-8 border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0 text-center">
                  <h3 className="text-xl font-bold text-stone-800 mb-3">{exp.name}</h3>
                  <p className="text-stone-600 mb-4">{exp.desc}</p>
                  <p className="text-xl font-bold text-emerald-600 mb-6">{exp.price}</p>
                  <StylishButton size="sm" href="/booking">
                    Book Experience
                  </StylishButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center max-w-3xl" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Reserve Your Table</h2>
          <p className="text-lg text-stone-600 mb-8">
            For special dietary requirements or private dining arrangements, contact us directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <StylishButton size="lg" href="/booking">
              Make a Reservation
            </StylishButton>
            <StylishButton variant="outline" size="lg" href="/contact">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </StylishButton>
          </div>
        </div>
      </section>
    </div>
  )
}
