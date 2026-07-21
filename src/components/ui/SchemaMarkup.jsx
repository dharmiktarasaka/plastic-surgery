import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SchemaMarkup() {
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "PlasticSurgery",
    "name": "TARASAKA Plastic & Cosmetic Surgery Centre",
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    "@id": "https://tarasaka-plasticsurgery.com",
    "url": "https://tarasaka-plasticsurgery.com",
    "telephone": "+91-9876543210",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "TARASAKA Aesthetic Tower, SG Highway",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380054",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0225,
      "longitude": 72.5714
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "medicalSpecialty": [
      "PlasticSurgery",
      "CosmeticSurgery",
      "ReconstructiveSurgery",
      "Dermatology"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(clinicSchema)}
      </script>
    </Helmet>
  );
}
