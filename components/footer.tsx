import { MapPin, Phone, Mail, Leaf } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-stone-800 via-stone-900 to-emerald-950 text-white">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Resort Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="w-7 h-7 text-emerald-400" />
              <h3 className="text-2xl font-bold text-emerald-400">Amrit Vann</h3>
            </div>
            <p className="text-stone-300 mb-6 leading-relaxed">
              A luxury jungle retreat near Pench Tiger Reserve, where wildlife encounters meet world-class hospitality
              in the heart of Madhya Pradesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">Explore</h4>
            <ul className="space-y-3">
              {[
                { href: "/rooms", label: "Rooms & Suites" },
                { href: "/experiences", label: "Experiences" },
                { href: "/dining", label: "Dining" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About Us" },
                { href: "/booking", label: "Book Now" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">Experiences</h4>
            <ul className="space-y-3">
              <li className="text-stone-300">Wildlife Safari</li>
              <li className="text-stone-300">Bird Watching</li>
              <li className="text-stone-300">Nature Trails</li>
              <li className="text-stone-300">Spa & Wellness</li>
              <li className="text-stone-300">Yoga Retreats</li>
              <li className="text-stone-300">Village Tours</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-stone-300">
                  Village Kohka, Near Pench Tiger Reserve
                  <br />
                  Seoni, Madhya Pradesh 480661
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <a href="tel:+919876543210" className="text-stone-300 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <a href="mailto:bookings@amritvannresort.com" className="text-stone-300 hover:text-white transition-colors">
                  bookings@amritvannresort.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700/50 mt-12 pt-8 text-center">
          <p className="text-stone-400 text-sm">
            &copy; {new Date().getFullYear()} Amrit Vann Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
