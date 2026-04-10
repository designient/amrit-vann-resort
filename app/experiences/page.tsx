import type { Metadata } from "next"
import { StylishButton } from "@/components/stylish-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Binoculars, TreePine, Bird, Heart, Users, Clock, Star, Waves, Mountain, Sun } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Wildlife Safari & Experiences | Pench Tiger Reserve",
  description:
    "Explore thrilling wildlife safaris, bird watching, nature trails, spa treatments and more at Amrit Vann Resort near Pench Tiger Reserve, Madhya Pradesh.",
  openGraph: {
    title: "Wildlife Safari & Experiences | Amrit Vann Resort",
    description: "Tiger safaris, bird watching, nature trails, wellness & more at Pench Tiger Reserve.",
    images: [{ url: "/images/tiger-safari.jpg", width: 800, height: 600 }],
  },
  alternates: { canonical: "/experiences" },
}

const experiences = [
  {
    name: "Jungle Safari",
    category: "Wildlife",
    duration: "3-4 hours",
    difficulty: "Easy",
    price: "₹3,500 per person",
    description:
      "Morning and evening jeep safaris into Pench Tiger Reserve via Turia and Karmajhiri gates. Track tigers, leopards, wild dogs, sloth bears, and more with our expert naturalist guides.",
    image: "/images/tiger-safari.jpg",
    highlights: ["Tiger tracking", "Expert naturalist guide", "Open-top jeep", "Photography opportunities"],
  },
  {
    name: "Bird Watching",
    category: "Nature",
    duration: "2-3 hours",
    difficulty: "Easy",
    price: "₹1,200 per person",
    description:
      "Pench is home to over 285 bird species including the Malabar Pied Hornbill, Indian Pitta, and White-eyed Buzzard. Early morning walks with our resident ornithologist.",
    image: "/images/bird-watching.jpg",
    highlights: ["285+ species", "Resident ornithologist", "Binoculars provided", "Bird checklist included"],
  },
  {
    name: "Wellness Spa",
    category: "Wellness",
    duration: "1-2 hours",
    difficulty: "Relaxing",
    price: "₹2,500 per session",
    description:
      "Rejuvenating Ayurvedic treatments and modern spa therapies. Unwind after a day in the jungle with therapeutic massages using local herbs and oils.",
    image: "/images/spa-wellness.jpg",
    highlights: ["Ayurvedic treatments", "Organic local products", "Forest-view spa", "Expert therapists"],
  },
  {
    name: "Yoga & Meditation",
    category: "Wellness",
    duration: "1 hour",
    difficulty: "All levels",
    price: "₹800 per session",
    description:
      "Begin your day with sunrise yoga on our riverside deck. Evening meditation sessions help you connect with the tranquil energy of the Pench jungle.",
    image: "/images/yoga-pavilion.jpg",
    highlights: ["Sunrise sessions", "Certified instructor", "Riverside deck", "All skill levels"],
  },
  {
    name: "Nature Trail Walk",
    category: "Nature",
    duration: "2 hours",
    difficulty: "Moderate",
    price: "₹800 per person",
    description:
      "Guided walks through the buffer zone exploring the sal and teak forests. Learn about medicinal plants, track animal footprints, and discover the ecosystem of Central India.",
    image: "/images/nature-trail.jpg",
    highlights: ["Buffer zone trek", "Flora identification", "Animal tracking", "Photography spots"],
  },
  {
    name: "Stargazing & Campfire",
    category: "Leisure",
    duration: "2 hours",
    difficulty: "Easy",
    price: "₹600 per person",
    description:
      "Away from city lights, Pench offers pristine dark skies. Join our stargazing sessions followed by a campfire with stories of the jungle.",
    image: "/images/camping.jpg",
    highlights: ["Telescope provided", "Dark sky viewing", "Campfire stories", "Hot beverages included"],
  },
]

const facilities = [
  { name: "Infinity Pool", description: "Jungle-view heated pool", icon: Waves, hours: "6 AM - 10 PM" },
  { name: "Fitness Centre", description: "Modern equipment", icon: Heart, hours: "24/7" },
  { name: "Nature Library", description: "Wildlife books & maps", icon: TreePine, hours: "8 AM - 11 PM" },
  { name: "Conference Room", description: "Corporate retreats", icon: Users, hours: "By reservation" },
]

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-emerald-600 font-medium mb-3 tracking-wide uppercase text-sm">Experiences at Pench</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
            Wildlife &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Experiences
            </span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            From thrilling tiger safaris to peaceful riverside yoga, every experience at Amrit Vann connects you
            with the magnificent wilderness of Pench Tiger Reserve.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 px-4 py-2">
              <Binoculars className="w-4 h-4 mr-2" />
              Wildlife Safari
            </Badge>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 px-4 py-2">
              <Bird className="w-4 h-4 mr-2" />
              Bird Watching
            </Badge>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Wellness
            </Badge>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="overflow-hidden border-stone-200 hover:shadow-2xl transition-all duration-500 group"
                data-animate
              >
                <div className="relative h-56">
                  <Image
                    src={exp.image}
                    alt={`${exp.name} at Amrit Vann Resort, Pench`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                      {exp.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-stone-800">{exp.difficulty}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-stone-800 mb-2">{exp.name}</h2>
                  <p className="text-stone-600 mb-4 leading-relaxed text-sm">{exp.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span className="text-stone-600">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-emerald-600" />
                      <span className="text-stone-600">{exp.price}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-1">
                      {exp.highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                          <span className="text-xs text-stone-600">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <StylishButton className="w-full" href="/booking">
                    Book This Experience
                  </StylishButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Resort Facilities</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              World-class amenities to complement your jungle adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-animate>
            {facilities.map((f, index) => (
              <Card key={index} className="text-center p-8 border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <f.icon className="w-8 h-8 text-emerald-700" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">{f.name}</h3>
                  <p className="text-stone-600 mb-3 text-sm">{f.description}</p>
                  <div className="flex items-center justify-center gap-2 text-xs text-emerald-600">
                    <Clock className="w-3 h-3" />
                    <span>{f.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Seasons */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Safari Seasons at Pench</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Pench National Park is open from October to June. Each season offers unique wildlife encounters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-animate>
            <Card className="p-8 border-stone-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="w-6 h-6 text-amber-500" />
                  <h3 className="text-2xl font-bold text-stone-800">Oct – Feb (Winter)</h3>
                </div>
                <p className="text-stone-600 mb-4">The best time for tiger sighting as animals gather near water holes. Pleasant weather (10-25°C) makes for comfortable safaris.</p>
                <ul className="space-y-2">
                  {["Peak tiger sighting season", "Migratory birds arrive", "Comfortable safari weather", "Evening campfire sessions"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span className="text-stone-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-stone-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <Mountain className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-stone-800">Mar – Jun (Summer)</h3>
                </div>
                <p className="text-stone-600 mb-4">Dry deciduous forests shed their leaves, making wildlife spotting easier. Watering holes become hotspots for all animals.</p>
                <ul className="space-y-2">
                  {["Best visibility through thin foliage", "Animals concentrate at water sources", "Extended daylight for longer safaris", "Pool & spa become extra inviting"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span className="text-stone-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center max-w-3xl" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Plan Your Pench Adventure</h2>
          <p className="text-lg text-stone-600 mb-8">
            Book your safari and experiences in advance to secure the best time slots
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <StylishButton size="lg" href="/booking">
              Book Experiences
            </StylishButton>
            <StylishButton variant="outline" size="lg" href="/contact">
              Plan a Custom Itinerary
            </StylishButton>
          </div>
        </div>
      </section>
    </div>
  )
}
