import type { Metadata } from "next"
import { StylishButton } from "@/components/stylish-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TreePine, Heart, Award, Users, Leaf, Mountain, Star, Shield } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | Our Story of Sustainable Luxury at Pench",
  description:
    "Learn about Amrit Vann Resort's commitment to sustainable luxury and wildlife conservation near Pench Tiger Reserve. Our story, team, and eco-tourism initiatives in Kohka, Madhya Pradesh.",
  openGraph: {
    title: "About Us | Amrit Vann Resort",
    description: "Sustainable luxury and wildlife conservation at the edge of Pench Tiger Reserve.",
    images: [{ url: "/images/resort-exterior.jpg", width: 800, height: 600 }],
  },
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-emerald-600 font-medium mb-3 tracking-wide uppercase text-sm">Our Story</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
                Born from a Love for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  the Wild
                </span>
              </h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Amrit Vann was founded with a vision: to create a sanctuary where guests can experience
                the raw beauty of Pench Tiger Reserve while supporting the communities and ecosystems
                that make this landscape extraordinary.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 px-4 py-2">
                  <TreePine className="w-4 h-4 mr-2" />
                  Est. 2018
                </Badge>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 px-4 py-2">
                  <Leaf className="w-4 h-4 mr-2" />
                  Eco-Certified
                </Badge>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/resort-exterior.jpg"
                alt="Amrit Vann Resort nestled in the Pench jungle"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-animate>
            <Card className="p-8 border-stone-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Our Mission</h3>
                <p className="text-stone-600 leading-relaxed">
                  To provide transformative wilderness experiences that reconnect guests with nature
                  while actively contributing to Pench Tiger Reserve&apos;s conservation and supporting
                  the livelihoods of local tribal communities in Kohka and surrounding villages.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-stone-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-6">
                  <Mountain className="w-7 h-7 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-4">Our Vision</h3>
                <p className="text-stone-600 leading-relaxed">
                  To be the benchmark for responsible wildlife tourism in Central India, proving that
                  luxury hospitality and deep environmental stewardship can thrive together at the
                  doorstep of one of India&apos;s finest tiger reserves.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Our Core Values</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              These principles guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-animate>
            {[
              {
                icon: Leaf,
                title: "Conservation",
                desc: "10% of our revenue goes to Pench Tiger Reserve conservation programmes and anti-poaching patrols.",
              },
              {
                icon: Users,
                title: "Community",
                desc: "We employ 80% of our staff from Kohka and surrounding villages, investing in local skill development.",
              },
              {
                icon: Star,
                title: "Excellence",
                desc: "Every detail — from thread count to naturalist training — is held to the highest standard.",
              },
              {
                icon: Shield,
                title: "Sustainability",
                desc: "Solar-powered heating, rainwater harvesting, zero single-use plastics, and a composting kitchen.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">{value.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-animate>
            {[
              { number: "2,500+", label: "Happy Guests" },
              { number: "150+", label: "Tiger Sightings" },
              { number: "285+", label: "Bird Species Logged" },
              { number: "6+", label: "Years of Hospitality" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">{stat.number}</p>
                <p className="text-stone-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="container mx-auto text-center max-w-3xl" data-animate>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Experience Our Story First-Hand</h2>
          <p className="text-lg text-stone-600 mb-8">
            Come and be part of our journey towards sustainable wildlife tourism at Pench
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <StylishButton size="lg" href="/booking">
              Book Your Stay
            </StylishButton>
            <StylishButton variant="outline" size="lg" href="/contact">
              Contact Us
            </StylishButton>
          </div>
        </div>
      </section>
    </div>
  )
}
