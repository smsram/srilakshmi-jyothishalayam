"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { CONTACT_INFO } from "../utils/constants";

// Custom Configured WhatsApp SVG provided by you (Safely adjusted without xmlSpace parsing blocks)
const CustomWhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg fill="currentColor" version="1.1" viewBox="0 0 30.667 30.667" className={className}>
    <g>
      <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"></path></g>
  </svg>
);

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Guruji", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Consult Now", href: "/contact" },
  ];

  return (
    <>
      {/* Sticky Header Layer */}
      <header className="sticky top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 shadow-sm animate-[fadeIn_0.5s_ease-out]">
        <div className="max-w-6xl mx-auto px-gutter h-20 flex justify-between items-center">
          
          {/* Logo Brand Layout */}
          <Link href="/" className="flex items-center gap-2 group">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="text-primary group-hover:rotate-12 transition-transform duration-300 select-none pointer-events-none">
              <path d="M12 2 4 7v2h16V7l-8-5zm-1 9h2v6h-2v-6zm-4 0h2v6H7v-6zm8 0h2v6h-2v-6zM3 20h18v2H3v-2z"/>
            </svg>
            <h1 className="font-serif text-xl md:text-2xl text-primary font-bold tracking-tight group-hover:text-primary/80 transition-colors">
              శ్రీ లక్ష్మీదేవి జ్యోతిషాలయం
            </h1>
          </Link>

          {/* Desktop Links Panel */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`font-semibold transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                    isActive 
                      ? "text-primary after:w-full after:bg-primary" 
                      : "text-on-surface-variant hover:text-primary after:w-0 hover:after:w-full after:bg-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Desktop WhatsApp Action using your updated vector asset data */}
            <a href={CONTACT_INFO?.whatsappUrl || "https://wa.me/919876543210"} className="ml-4 flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#1DA851] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <CustomWhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              WhatsApp
            </a>
          </nav>

          {/* Hamburger Action Trigger */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-primary p-2 hover:bg-primary/5 rounded-full transition-colors cursor-pointer"
            aria-label="Open Menu"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="select-none pointer-events-none">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>
        </div>
      </header>

      {/* --- Mobile Viewport Layout Controls --- */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <nav 
        className={`fixed top-0 right-0 h-[100dvh] w-[280px] bg-surface shadow-2xl z-50 flex flex-col p-6 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8 border-b border-outline-variant/30 pb-4">
          <span className="font-serif font-bold text-primary text-xl">Menu</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-primary hover:rotate-90 transition-transform duration-300 p-1 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="select-none pointer-events-none">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`text-lg font-semibold px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-primary/10 text-primary border-l-4 border-primary" 
                    : "text-on-surface-variant hover:bg-surface-variant/50 hover:text-primary border-l-4 border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Sidebar Actions Area using your updated vector asset data */}
        <div className="mt-auto pb-4 pt-6 border-t border-outline-variant/30 space-y-4">
          <a href={`tel:${CONTACT_INFO?.phoneRaw || "+919876543210"}`} className="flex items-center justify-center gap-2 w-full bg-surface text-primary border-2 border-primary px-5 py-3 rounded-xl font-bold shadow-sm hover:bg-primary hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="select-none pointer-events-none">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            Call Now
          </a>
          <a href={CONTACT_INFO?.whatsappUrl || "https://wa.me/919876543210"} className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold shadow-md hover:bg-[#1DA851] transition-colors group">
            <CustomWhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Chat on WhatsApp
          </a>
        </div>
      </nav>
    </>
  );
}