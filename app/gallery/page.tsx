"use client"

import { useState } from "react"
import { EnhancedButton } from "@/components/enhanced-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const images = [
  { id: 1, src: "/images/hero-jungle.jpg", title: "Dense Jungle Canopy", category: "Nature", alt: "Dense sal and teak jungle surrounding the resort at Pench" },
  { id: 2, src: "/images/forest-suite.jpg", title: "Forest Suite Interior", category: "Rooms", alt: "Luxurious forest suite with jungle views at Amrit Vann" },
  { id: 3, src: "/images/resort-exterior.jpg", title: "Resort Exterior", category: "Property", alt: "Amrit Vann Resort building nestled in the Pench jungle" },
  { id: 4, src: "/images/tiger-safari.jpg", title: "Wildlife Safari", category: "Wildlife", alt: "Tiger spotted during morning safari at Pench Tiger Reserve" },
  { id: 5, src: "/images/canopy-room.jpg", title: "Canopy Room", category: "Rooms", alt: "Elegant canopy room elevated among the trees" },
  { id: 6, src: "/images/dining-restaurant.jpg", title: "The Pench Kitchen", category: "Dining", alt: "Open-air dining at The Pench Kitchen restaurant" },
  { id: 7, src: "/images/spa-wellness.jpg", title: "Wellness Spa", category: "Wellness", alt: "Ayurvedic spa treatment at Amrit Vann" },
  { id: 8, src: "/images/gallery-landscape.jpg", title: "Pench Valley", category: "Nature", alt: "Panoramic view of Pench valley and surrounding hills" },
  { id: 9, src: "/images/resort-pool.jpg", title: "Infinity Pool", category: "Property", alt: "Jungle-view infinity pool at the resort" },
  { id: 10, src: "/images/bird-watching.jpg", title: "Bird Watching", category: "Wildlife", alt: "Bird watching excursion in the Pench forest" },
  { id: 11, src: "/images/woodland-cabin.jpg", title: "Woodland Cabin", category: "Rooms", alt: "Rustic woodland cabin surrounded by trees" },
  { id: 12, src: "/images/gallery-sunset.jpg", title: "Jungle Sunset", category: "Nature", alt: "Sunset over the Pench jungle canopy" },
  { id: 13, src: "/images/yoga-pavilion.jpg", title: "Yoga at Sunrise", category: "Wellness", alt: "Sunrise yoga session at the riverside deck" },
  { id: 14, src: "/images/gallery-river.jpg", title: "Pench River", category: "Nature", alt: "Serene view of the Pench River flowing through the forest" },
  { id: 15, src: "/images/welcome-resort.jpg", title: "Garden View", category: "Property", alt: "Manicured garden with jungle backdrop at Amrit Vann" },
]

const categories = ["All", "Nature", "Rooms", "Wildlife", "Property", "Dining", "Wellness"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "All" ? images : images.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
    }
  }

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-emerald-600 font-medium mb-3 tracking-wide uppercase text-sm">Gallery</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
            A Visual{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Journey
            </span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Explore the beauty of Amrit Vann Resort and the magnificent Pench Tiger Reserve through our curated collection
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-white text-stone-600 hover:bg-emerald-50 hover:text-emerald-700 border border-stone-200"
                }`}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="overflow-hidden break-inside-avoid cursor-pointer group border-stone-200 hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
                tabIndex={0}
                role="button"
                aria-label={`View ${image.title}`}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold text-sm">{image.title}</p>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs mt-1">
                      {image.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-50 p-2"
            aria-label="Close gallery lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-4 text-white/80 hover:text-white z-50 p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-4 text-white/80 hover:text-white z-50 p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="relative w-full max-w-5xl max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[85vh] rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white font-semibold">{filteredImages[lightboxIndex].title}</p>
              <p className="text-white/60 text-sm mt-1">
                {lightboxIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-stone-800 to-emerald-900 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It All In Person</h2>
          <p className="text-lg mb-10 text-stone-300">
            These moments are waiting for you at Pench. Book your stay and create your own memories.
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
              Plan Your Visit
            </EnhancedButton>
          </div>
        </div>
      </section>
    </div>
  )
}
