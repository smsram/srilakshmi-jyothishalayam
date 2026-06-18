import "./globals.css";
import Navigation from "../components/Navigation"; 
import Footer from "../components/Footer"; 

export const metadata = {
  title: "Sri Lakshmi Devi Jyothishalayam",
  description: "Expert Astrology, Vastu, and Horoscope Consultations",
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
        
        {/* Global Structural Client Header */}
        <Navigation />

        {/* Dynamic Inner Page Wrapper Viewport */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Modular Shared Global Footer Layer */}
        <Footer />

      </body>
    </html>
  );
}