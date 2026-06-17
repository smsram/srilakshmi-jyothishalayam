"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container py-12 border-t border-outline-variant/30 relative overflow-hidden mt-auto">
      {/* Sacred Background Vector Layout Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none sri-chakra-bg"></div>
      
      <div className="max-w-6xl mx-auto px-gutter flex flex-col items-center text-center gap-6 relative z-10">
        <h2 className="font-serif text-3xl text-primary font-bold">శ్రీ లక్ష్మీదేవి జ్యోతిషాలయం</h2>
        
        <div className="flex flex-wrap justify-center gap-8 mt-2">
          <Link href="/privacy" className="font-medium text-on-surface-variant hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="font-medium text-on-surface-variant hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="/faq" className="font-medium text-on-surface-variant hover:text-primary transition-colors">
            Consultation FAQ
          </Link>
        </div>
        
        <div className="w-16 h-[1px] bg-secondary my-2"></div>
        <p className="text-sm text-on-surface-variant tracking-wide">
          © 2024 Sri Lakshmi Devi Jyothishalayam. All Sacred Rights Reserved.
        </p>
      </div>
    </footer>
  );
}