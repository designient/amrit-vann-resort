import { EnhancedButton } from "@/components/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Binoculars, UtensilsCrossed, Sparkles, TreePine, Star, Leaf, Mountain, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-jungle.jpg"
            alt="Dense jungle canopy surrounding Amrit Vann Resort near Pench Tiger Reserve"
            fill
            className="object-cover animate-ken-burns"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl px-4 pt-16">
          <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-1.5 mb-6 text-sm">
            <Leaf className="w-4 h-4 mr-2" />
            Near Pench Tiger Reserve, Madhya Pradesh
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Amrit Vann Resort
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-stone-200 max-w-3xl mx-auto leading-relaxed">
            A luxury jungle retreat where wildlife encounters meet world-class hospitality,
            nestled at the edge of Pench Tiger Reserve
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <EnhancedButton size="lg" href="/booking">
              Book Your Stay
            </EnhancedButton>
            <EnhancedButton
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white hover:text-stone-800"
              href="/rooms"
            >
              Explore Rooms
            </EnhancedButton>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/20 px-3 py-1">
              <TreePine className="w-4 h-4 mr-2" />
              Jungle Retreat
            </Badge>
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/20 px-3 py-1">
              <Mountain className="w-4 h-4 mr-2" />
              Wildlife Safari
            </Badge>
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/20 px-3 py-1">
              <Leaf className="w-4 h-4 mr-2" />
              Eco-Luxury
            </Badge>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 lg:py-28 px-4 bg-stone-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-animate>
            <div>
              <p className="text-emerald-600 font-medium mb-3 tracking-wide uppercase text-sm">Welcome to Amrit Vann</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-6 leading-tight">
                Where the Jungle
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Meets Luxury
                </span>
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Situated on the fringes of Pench Tiger Reserve in Kohka, Madhya Pradesh, Amrit Vann Resort offers an
                immersive jungle experience without compromising on comfort. Wake up to the calls of over 250 bird
                species, spot tigers on morning safaris, and return to the embrace of world-class hospitality.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Every detail at Amrit Vann is designed to bring you closer to the wild heart of Central India
                while ensuring your stay is restful, rejuvenating, and unforgettable.
              </p>
              <EnhancedButton size="md" href="/about">
                Discover Our Story
              </EnhancedButton>
            </div>
            <div className="relative">
              <Image
                src="/images/welcome-resort.jpg"
                alt="Amrit Vann Resort exterior blending with the Pench jungle"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16" data-animate>
            <p className="text-emerald-600 font-medium mb-3 tracking-wide uppercase text-sm">Why Amrit Vann</p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">The Amrit Vann Experience</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Three pillars that define every moment of your stay at Pench
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-animate>
            {[
              {
                icon: Binoculars,
                title: "Wildlife & Safari",
                desc: "Morning and evening jeep safaris into Pench Tiger Reserve with expert naturalists. Spot tigers, leopards, wild dogs, and over 250 bird species.",
              },
              {
                icon: UtensilsCrossed,
                title: "Forest-to-Table Dining",
                desc: "Central Indian cuisine crafted from locally sourced ingredients, served in open-air settings with the jungle as your backdrop.",
              },
              {
                icon: Sparkles,
                title: "Wellness & Serenity",
                desc: "Ayurvedic spa treatments, sunrise yoga by the Pench River, and meditative nature walks through the sal and teak forests.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-8 border-stone-200 hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-3">{feature.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16" data-animate>
            <p className="text-emerald-600 font-medium mb-3 tracking-wide uppercase text-sm">Accommodations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Luxury{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Jungle Rooms
              </span>
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Each room is designed to immerse you in nature while offering every modern comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" data-animate>
            {[
              {
                name: "Forest Suite",
                price: "₹12,999",
                image: "/images/forest-suite.jpg",
                tag: "Most Popular",
              },
              {
                name: "Canopy Room",
                price: "₹8,999",
                image: "/images/canopy-room.jpg",
                tag: null,
              },
              {
                name: "Woodland Cabin",
                price: "₹10,999",
                image: "/images/woodland-cabin.jpg",
                tag: null,
              },
            ].map((room, index) => (
              <Card
                key={index}
                className="overflow-hidden group border-stone-200 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64">
                  <Image
                    src={room.image}
                    alt={`${room.name} at Amrit Vann Resort`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {room.tag && (
                    <Badge className="absolute top-4 left-4 bg-amber-500">{room.tag}</Badge>
                  )}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{room.name}</h3>
                    <span className="text-lg font-semibold">{room.price}<span className="text-sm font-normal">/night</span></span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <EnhancedButton size="md" href="/rooms">
              View All Rooms
            </EnhancedButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16" data-animate>
            <p className="text-emerald-600 font-medium mb-3 tracking-wide uppercase text-sm">Guest Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-animate>
            {[
              {
                name: "Priya Menon",
                location: "Bengaluru",
                text: "We spotted a tigress with cubs on our very first safari. The resort itself is stunning — the forest suite felt like sleeping inside a treehouse. Absolutely magical.",
              },
              {
                name: "Rajesh & Anita Gupta",
                location: "Mumbai",
                text: "The perfect weekend getaway. The staff arranged a private sunset dinner by the river. The food, the jungle sounds at night, everything exceeded our expectations.",
              },
              {
                name: "David Thornton",
                location: "London, UK",
                text: "Having stayed at many wildlife lodges across India, Amrit Vann stands out for its attention to detail. The naturalist guides are incredibly knowledgeable about Pench.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 border-stone-200 hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-6 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800">{testimonial.name}</h4>
                      <p className="text-stone-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-stone-800 to-emerald-900 text-white">
        <div className="container mx-auto max-w-4xl text-center" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Jungle Escape?</h2>
          <p className="text-lg mb-10 text-stone-300 max-w-2xl mx-auto">
            Plan your stay at Pench Tiger Reserve and experience the wild side of luxury
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton size="lg" href="/booking">
              Book Your Stay
            </EnhancedButton>
            <EnhancedButton
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white hover:text-stone-800"
              href="/contact"
            >
              Get in Touch
            </EnhancedButton>
          </div>
        </div>
      </section>
    </div>
  )
}
