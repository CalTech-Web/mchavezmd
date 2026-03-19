import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "M. Chavez MD, SC | Family Medicine in Wicker Park, Chicago",
    template: "%s | M. Chavez MD, SC",
  },
  description:
    "Board-certified family medicine practice in Wicker Park, Chicago specializing in procedural medicine, preventive health, regenerative medicine, and more. Call (773) 227-3303.",
  keywords: [
    "family medicine",
    "Wicker Park doctor",
    "Chicago physician",
    "procedural medicine",
    "preventive health",
    "Dr. Milton Chavez",
    "regenerative medicine",
    "knee pain treatment",
    "medical botox",
  ],
  openGraph: {
    title: "M. Chavez MD, SC | Family Medicine in Wicker Park, Chicago",
    description:
      "Board-certified family medicine practice specializing in procedural medicine and preventive health in Wicker Park, Chicago.",
    url: "https://mchavezmd.com",
    siteName: "M. Chavez MD, SC",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "M. Chavez MD, SC",
  description:
    "Board-certified family medicine practice in Wicker Park, Chicago specializing in procedural medicine and preventive health.",
  url: "https://mchavezmd.com",
  telephone: "+1-773-227-3303",
  email: "staff@mchavezmd.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1509 N Western Ave, Unit A",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60622",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.9088,
    longitude: -87.6876,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "08:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "08:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
  ],
  medicalSpecialty: "Family Medicine",
  sameAs: [
    "https://www.facebook.com/mchavezmdsc",
    "https://www.linkedin.com/pub/milton-c-chavez-md/7/44b/89b",
  ],
  founder: {
    "@type": "Physician",
    name: "Dr. Milton Chavez",
    medicalSpecialty: "Family Medicine",
    qualifications: "MD, FAAFP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
