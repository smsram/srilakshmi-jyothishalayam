"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { CONTACT_INFO } from "../utils/constants";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Global Fix for Refresh Scroll Glitch
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Consult Now", href: "/contact" },
  ];

  return (
    <>
      {/* Sticky Header Layer */}
      <header className="sticky top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 shadow-sm animate-[fadeIn_0.5s_ease-out]">
        <div className="max-w-6xl mx-auto px-gutter h-20 flex justify-between items-center">
          
          {/* English Styled Brand Logo Header */}
          <Link href="/" className="flex items-center gap-2 group">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" className="text-primary group-hover:rotate-12 transition-transform duration-300 pointer-events-none">
              <path d="M12 2 4 7v2h16V7l-8-5zm-1 9h2v6h-2v-6zm-4 0h2v6H7v-6zm8 0h2v6h-2v-6zM3 20h18v2H3v-2z"/>
            </svg>
            <h1 className="font-serif text-lg md:text-xl lg:text-2xl text-primary font-bold tracking-tight group-hover:text-primary/80 transition-colors uppercase">
              Sri Lakshmi Devi
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
            
            {/* Desktop Action: Direct Call Button replaced WhatsApp */}
            <a 
              href={`tel:${CONTACT_INFO?.phoneRaw || "+919876543210"}`} 
              className="ml-4 flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-lg font-bold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group shadow-sm"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="group-hover:rotate-12 transition-transform duration-300">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              Call Now
            </a>
          </nav>

          {/* Hamburger Menu Icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-primary p-2 hover:bg-primary/5 rounded-full transition-colors cursor-pointer"
            aria-label="Open Menu"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="pointer-events-none">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>
        </div>
      </header>

      {/* --- Mobile Slide-Out Drawer Panel --- */}
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
          <span className="font-serif font-bold text-primary text-xl tracking-wide uppercase">Navigation</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-primary hover:rotate-90 transition-transform duration-300 p-1 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="pointer-events-none">
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

        {/* Sidebar Actions Area using unified English options */}
        <div className="mt-auto pb-4 pt-6 border-t border-outline-variant/30">
          <a href={`tel:${CONTACT_INFO?.phoneRaw || "+919876543210"}`} className="flex items-center justify-center gap-2 w-full bg-primary text-on-primary px-5 py-3.5 rounded-xl font-bold shadow-md hover:bg-primary/90 transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="pointer-events-none">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            Call for Consultation
          </a>
        </div>
      </nav>
    </>
  );
}