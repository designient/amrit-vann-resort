export function StructuredData() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Amrit Vann Resort",
    description:
      "A luxury jungle retreat near Pench Tiger Reserve in Kohka, Madhya Pradesh. Wildlife safaris, world-class dining, spa, and serene jungle accommodations.",
    url: "https://amritvannresort.com",
    image: "https://amritvannresort.com/images/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Village Kohka, Near Pench Tiger Reserve",
      addressLocality: "Seoni",
      addressRegion: "Madhya Pradesh",
      postalCode: "480661",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.72,
      longitude: 79.3,
    },
    telephone: "+919876543210",
    email: "bookings@amritvannresort.com",
    priceRange: "₹6,999 - ₹15,999 per night",
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wildlife Safari" },
      { "@type": "LocationFeatureSpecification", name: "Spa & Wellness" },
      { "@type": "LocationFeatureSpecification", name: "Restaurant" },
      { "@type": "LocationFeatureSpecification", name: "Swimming Pool" },
      { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
      { "@type": "LocationFeatureSpecification", name: "Free Parking" },
      { "@type": "LocationFeatureSpecification", name: "Yoga Classes" },
    ],
    checkinTime: "14:00",
    checkoutTime: "11:00",
    numberOfRooms: 24,
    petsAllowed: false,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
    />
  )
}
