import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Jungle Views, Wildlife & Luxury",
  description:
    "Browse photos of Amrit Vann Resort near Pench Tiger Reserve — luxury rooms, wildlife safaris, jungle landscapes, dining, and wellness experiences in Madhya Pradesh.",
  openGraph: {
    title: "Gallery | Amrit Vann Resort",
    description: "Explore stunning photos of our jungle resort, wildlife safaris, and luxury amenities at Pench.",
    images: [{ url: "/images/hero-jungle.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/gallery" },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
