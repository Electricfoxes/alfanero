import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alfaneroyacht.com"),
  title: {
    default: "ALFA NERO | 82m Oceanco Superyacht",
    template: "%s | ALFA NERO",
  },
  description:
    "82m Oceanco superyacht for sale. Award-winning design by Nuvolari Lenard, Alberto Pinto interiors. Built 2007, refitted 2024.",
  keywords: [
    "ALFA NERO yacht",
    "Oceanco superyacht for sale",
    "82m yacht",
    "Nuvolari Lenard",
    "Alberto Pinto",
    "luxury superyacht",
  ],
  authors: [{ name: "ALFA NERO" }],
  openGraph: {
    type: "website",
    siteName: "ALFA NERO Superyacht",
    locale: "en_US",
    url: "https://alfaneroyacht.com",
    title: "ALFA NERO | 82m Oceanco Superyacht For Sale",
    description:
      "82m Oceanco superyacht for sale. Award-winning design by Nuvolari Lenard, Alberto Pinto interiors. Built 2007, refitted 2024.",
    images: [
      {
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.jpg",
        width: 1200,
        height: 630,
        alt: "ALFA NERO 82m Oceanco Superyacht",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALFA NERO | 82m Oceanco Superyacht For Sale",
    description:
      "82m Oceanco superyacht for sale. Award-winning design by Nuvolari Lenard, Alberto Pinto interiors. Built 2007, refitted 2024.",
    images: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://alfaneroyacht.com",
  },
  other: {
    "theme-color": "#0a0a0a",
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
        <link rel="preconnect" href="https://files.manuscdn.com" />
        <link rel="dns-prefetch" href="https://files.manuscdn.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Vehicle",
              name: "ALFA NERO",
              description:
                "ALFA NERO is an 82-metre Oceanco superyacht, winner of multiple international awards including Best Interior Design and Best Exterior Styling at the World Superyacht Awards 2008. Featuring interiors by Alberto Pinto, exterior design by Nuvolari Lenard, and the world's first superyacht infinity pool. Built 2007, comprehensively refitted 2024.",
              brand: { "@type": "Brand", name: "Oceanco" },
              manufacturer: {
                "@type": "Organization",
                name: "Oceanco",
                url: "https://www.oceancoyacht.com",
              },
              vehicleType: "Motor Yacht",
              url: "https://alfaneroyacht.com/",
              image: [
                "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.jpg",
              ],
              modelDate: "2007",
              additionalProperty: [
                { "@type": "PropertyValue", name: "Length Overall", value: "82 metres" },
                { "@type": "PropertyValue", name: "Year Built", value: "2007" },
                { "@type": "PropertyValue", name: "Year Refitted", value: "2024" },
                { "@type": "PropertyValue", name: "Guest Capacity", value: "12" },
                { "@type": "PropertyValue", name: "Staterooms", value: "6" },
                { "@type": "PropertyValue", name: "Crew", value: "28" },
                { "@type": "PropertyValue", name: "Top Speed", value: "20 knots" },
                { "@type": "PropertyValue", name: "Range", value: "5,500 nautical miles" },
                { "@type": "PropertyValue", name: "Interior Designer", value: "Alberto Pinto" },
                { "@type": "PropertyValue", name: "Exterior Designer", value: "Nuvolari Lenard" },
                { "@type": "PropertyValue", name: "Builder", value: "Oceanco" },
                { "@type": "PropertyValue", name: "Hull Number", value: "Y702" },
              ],
              award: [
                "World Superyacht Awards 2008 - Best Interior Design, Motor Yacht",
                "World Superyacht Awards 2008 - Best Exterior Styling",
                "ShowBoats International Awards 2008 - Best Motor Yacht Over 75m",
                "World Yachts Trophies 2008 - Most Innovative Custom Motoryacht Over 40m",
              ],
            }),
          }}
        />
      </head>
      <body className={`${jost.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
