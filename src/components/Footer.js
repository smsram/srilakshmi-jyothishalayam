"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container py-12 border-t border-outline-variant/30 relative overflow-hidden mt-auto">
      {/* Sacred Background Vector Layout Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none sri-chakra-bg"></div>
      
      <div className="max-w-6xl mx-auto px-gutter flex flex-col items-center text-center gap-4 relative z-10">
        {/* Clean English Brand Conversion */}
        <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold tracking-wide uppercase">
          Sri Lakshmi Devi Jyothishalayam
        </h2>
        
        <div className="w-16 h-[1px] bg-secondary my-2"></div>
        
        {/* Updated Calendar Year Alignment */}
        <p className="text-sm text-on-surface-variant tracking-wide">
          © 2026 Sri Lakshmi Devi Jyothishalayam. All Sacred Rights Reserved.
        </p>
      </div>
    </footer>
  );
}