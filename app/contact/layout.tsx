import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Kohka, Pench, Madhya Pradesh",
  description:
    "Get in touch with Amrit Vann Resort near Pench Tiger Reserve. Address, phone, email, directions from Nagpur, and inquiry form. Village Kohka, Seoni, Madhya Pradesh.",
  openGraph: {
    title: "Contact Us | Amrit Vann Resort",
    description: "Reach Amrit Vann Resort near Pench Tiger Reserve. Directions from Nagpur, contact details & inquiry form.",
    images: [{ url: "/images/contact-hero.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
