import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollAnimator } from "@/components/scroll-animator"
import { StructuredData } from "@/components/structured-data"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://amritvannresort.com"),
  title: {
    default: "Amrit Vann Resort | Luxury Jungle Resort near Pench Tiger Reserve, Madhya Pradesh",
    template: "%s | Amrit Vann Resort",
  },
  description:
    "Experience luxury amidst the wilderness at Amrit Vann Resort, a premium jungle retreat near Pench Tiger Reserve in Khawasa, Madhya Pradesh. Wildlife safaris, world-class dining & serene accommodations.",
  keywords: [
    "Amrit Vann Resort",
    "Pench Tiger Reserve resort",
    "luxury jungle resort India",
    "Pench National Park hotel",
    "wildlife resort Madhya Pradesh",
    "Khawasa resort",
    "Turia gate Pench",
    "jungle lodge Pench",
    "tiger safari resort",
  ],
  authors: [{ name: "Amrit Vann Resort" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://amritvannresort.com",
    siteName: "Amrit Vann Resort",
    title: "Amrit Vann Resort | Luxury Jungle Resort near Pench Tiger Reserve",
    description:
      "Experience luxury amidst the wilderness at Amrit Vann Resort, a premium jungle retreat near Pench Tiger Reserve in Khawasa, Madhya Pradesh.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amrit Vann Resort - Luxury Jungle Retreat near Pench Tiger Reserve",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amrit Vann Resort | Luxury Jungle Resort near Pench Tiger Reserve",
    description:
      "Premium jungle retreat near Pench Tiger Reserve. Wildlife safaris, luxury rooms & forest-to-table dining in Khawasa, Madhya Pradesh.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://amritvannresort.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-outfit antialiased`}>
        <StructuredData />
        <ScrollAnimator />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
