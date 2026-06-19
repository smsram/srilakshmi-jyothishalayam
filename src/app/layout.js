import "./globals.css";
import Navigation from "../components/Navigation"; 
import Footer from "../components/Footer"; 

export const metadata = {
  metadataBase: new URL("https://srilakshmidevijyothishalayam.com"),
  title: {
    default: "Sri Lakshmi Devi Jyothishalayam | Authentic Vedic Astrology",
    template: "%s | Sri Lakshmi Devi Jyothishalayam"
  },
  description: "Accurate Jathakam analysis, Marriage matching compatibility, and Vastu consultations by expert South Indian astrologers.",
  keywords: [
    "Vedic Astrology", 
    "South Indian Astrologer", 
    "Jathakam Analysis", 
    "Marriage Matching", 
    "Vastu Shastra Consultant", 
    "Horoscope Readings", 
    "Sri Lakshmi Devi Jyothishalayam",
    "Telugu Jyothishyam",
    "Jathaka Pariseelana",
    "Vivaha Ponthana",
    "Subha Muhurthalu",
    "Vastu Sastram",
    "Telugu Panchangam",
    "Graha Dosha Pariharalu",
    "Rasi Phalalu"
  ],
  authors: [{ name: "Sri Lakshmi Devi Jyothishalayam" }],
  creator: "Sri Lakshmi Devi Jyothishalayam",
  publisher: "Sri Lakshmi Devi Jyothishalayam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sri Lakshmi Devi Jyothishalayam | Ancient Vedic Wisdom",
    description: "Accurate Jathakam, Marriage Matching, and Vastu Consultations by Expert South Indian Astrologers.",
    url: "https://srilakshmidevijyothishalayam.com",
    siteName: "Sri Lakshmi Devi Jyothishalayam",
    images: [
      {
        url: "/home-section.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Lakshmi Devi Jyothishalayam Vedic Astrology Sanctuary Banner",
      },
    ],
    locale: "en_US",
    type: "website",
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
};

export const viewport = {
  themeColor: "#8B0000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />
      </head>
      <body className="flex flex-col min-h-screen relative bg-background text-on-background">
        
        <Navigation />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}