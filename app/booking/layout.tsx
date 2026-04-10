import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Your Stay | Luxury Resort near Pench Tiger Reserve",
  description:
    "Book your stay at Amrit Vann Resort near Pench Tiger Reserve. Choose from luxury suites, jungle cabins, and family lodges. Send an inquiry and our team will respond within 24 hours.",
  openGraph: {
    title: "Book Your Stay | Amrit Vann Resort",
    description: "Reserve luxury jungle accommodation near Pench Tiger Reserve. Suites from ₹6,999/night.",
    images: [{ url: "/images/forest-suite.jpg", width: 800, height: 600 }],
  },
  alternates: { canonical: "/booking" },
}

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children
}
