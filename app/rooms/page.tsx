import type { Metadata } from "next"
import { StylishButton } from "@/components/stylish-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Coffee, Bath, Users, Mountain, TreePine, Star, Tv, Car } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Rooms & Suites | Luxury Jungle Accommodation near Pench",
  description:
    "Explore luxury rooms and suites at Amrit Vann Resort near Pench Tiger Reserve. Forest suites, canopy rooms, woodland cabins and more — all with jungle views. Starting from ₹6,999/night.",
  openGraph: {
    title: "Rooms & Suites | Amrit Vann Resort",
    description: "Luxury jungle accommodations near Pench Tiger Reserve. Forest views, modern amenities, and wildlife at your doorstep.",
    images: [{ url: "/images/forest-suite.jpg", width: 800, height: 600 }],
  },
  alternates: { canonical: "/rooms" },
}

const rooms = [
  {
    id: "forest-suite",
    name: "Forest Suite",
    price: "₹12,999",
    image: "/images/forest-suite.jpg",
    description:
      "Our flagship suite with panoramic views of the Pench jungle canopy. Wake up to bird calls and spot wildlife from your private balcony.",
    features: ["King Size Bed", "Private Balcony", "Jungle View", "Luxury Bath", "Mini Bar", "WiFi"],
    size: "65 sqm",
    occupancy: "2 Adults",
    popular: true,
  },
  {
    id: "canopy-room",
    name: "Canopy Room",
    price: "₹8,999",
    image: "/images/canopy-room.jpg",
    description:
      "Elevated amidst the treetops, offering an intimate connection with the forest. Ideal for couples seeking a nature immersion.",
    features: ["Queen Size Bed", "Canopy View", "Eco-Friendly", "Rain Shower", "Coffee Maker", "WiFi"],
    size: "45 sqm",
    occupancy: "2 Adults",
  },
  {
    id: "woodland-cabin",
    name: "Woodland Cabin",
    price: "₹10,999",
    image: "/images/woodland-cabin.jpg",
    description:
      "A rustic-luxe cabin surrounded by sal and teak trees. Features a traditional sit-out and modern interiors.",
    features: ["King Size Bed", "Sit-out Area", "Private Deck", "Luxury Bath", "Kitchenette", "WiFi"],
    size: "55 sqm",
    occupancy: "2 Adults + 1 Child",
  },
  {
    id: "valley-view",
    name: "Valley View Room",
    price: "₹6,999",
    image: "/images/valley-view-room.jpg",
    description:
      "Comfortable accommodation with sweeping views of the Pench river valley and distant hills.",
    features: ["Queen Size Bed", "Valley View", "Modern Bath", "Work Desk", "Mini Fridge", "WiFi"],
    size: "35 sqm",
    occupancy: "2 Adults",
  },
  {
    id: "family-lodge",
    name: "Family Lodge",
    price: "₹15,999",
    image: "/images/family-lodge.jpg",
    description:
      "Spacious two-bedroom lodge perfect for families. Includes a private garden where kids can play while you watch deer pass by.",
    features: ["2 Bedrooms", "Living Area", "Kitchen", "Private Garden", "Family Bath", "WiFi"],
    size: "85 sqm",
    occupancy: "4 Adults + 2 Children",
  },
  {
    id: "meditation-retreat",
    name: "Meditation Retreat",
    price: "₹9,999",
    image: "/images/meditation-retreat.jpg",
    description:
      "A serene space designed for contemplation and spiritual renewal, surrounded by the sounds of the forest.",
    features: ["Meditation Space", "Garden View", "Minimalist Design", "Yoga Mat", "Herbal Tea", "WiFi"],
    size: "40 sqm",
    occupancy: "1-2 Adults",
  },
]

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-emerald-600 font-medium mb-3 tracking-wide uppercase text-sm">Accommodations</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
            Rooms &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Suites
            </span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Each room at Amrit Vann is thoughtfully designed to bring the outside in — jungle views,
            natural materials, and the sounds of Pench as your constant companion.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {rooms.map((room) => (
              <Card
                key={room.id}
                className="overflow-hidden border-stone-200 hover:shadow-2xl transition-all duration-500 group"
                data-animate
              >
                <div className="relative h-72 lg:h-80">
                  <Image
                    src={room.image}
                    alt={`${room.name} at Amrit Vann Resort near Pench Tiger Reserve`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {room.popular && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-amber-600">
                      Most Popular
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-xl font-bold text-stone-800">{room.price}</span>
                    <span className="text-sm text-stone-600">/night</span>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-stone-800">{room.name}</h2>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-stone-600 mb-6 leading-relaxed">{room.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Mountain className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm text-stone-600">{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm text-stone-600">{room.occupancy}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        <span className="text-sm text-stone-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <StylishButton className="w-full" href={`/booking?room=${room.id}`}>
                    Inquire About This Room
                  </StylishButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room Amenities */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Standard Amenities</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Every room comes equipped with these essentials for a comfortable jungle stay
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" data-animate>
            {[
              { icon: Wifi, label: "High-Speed WiFi" },
              { icon: Coffee, label: "Tea & Coffee" },
              { icon: Bath, label: "Luxury Bath" },
              { icon: Tv, label: "Smart TV" },
              { icon: Car, label: "Parking" },
              { icon: TreePine, label: "Jungle Views" },
            ].map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <amenity.icon className="w-7 h-7 text-emerald-700" />
                </div>
                <h3 className="font-medium text-stone-800 text-sm">{amenity.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto text-center max-w-3xl" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Find Your Perfect Room</h2>
          <p className="text-lg text-stone-600 mb-8">
            Not sure which room is right for you? Send us an inquiry and our team will help you choose
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <StylishButton size="lg" href="/booking">
              Book Now
            </StylishButton>
            <StylishButton variant="outline" size="lg" href="/contact">
              Need Help Choosing?
            </StylishButton>
          </div>
        </div>
      </section>
    </div>
  )
}
