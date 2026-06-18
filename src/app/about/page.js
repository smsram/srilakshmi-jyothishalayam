"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function AboutPage() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div className="w-full flex flex-col overflow-hidden bg-background">
      
      {/* Page Title Section - Immediate Animation */}
      <section className="relative py-20 bg-surface-container-low border-b border-outline-variant/30 flex items-center justify-center animate-[fadeIn_0.6s_ease-out]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-low/80 pointer-events-none"></div>
        <div className="relative z-10 text-center px-gutter">
          <span className="material-symbols-outlined text-5xl text-primary/20 mb-4" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
          <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-4">Our Lineage & Trust</h1>
          <div className="h-0.5 w-24 bg-secondary mx-auto mt-6 opacity-50"></div>
        </div>
      </section>

      {/* Main Profile Section - Scroll Reveal */}
      <section ref={addToRefs} className="reveal-on-scroll py-20 px-gutter max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Container with local /about-section.jpg */}
          <div className="lg:col-span-5 relative pr-4 pb-4">
            <div className="absolute inset-0 bg-secondary/20 translate-x-3 translate-y-3 rounded-xl"></div>
            <div className="relative rounded-xl border border-secondary/30 bg-surface shadow-lg overflow-hidden aspect-[3/4] flex items-center justify-center">
              <img 
                src="/about-section.jpg" 
                alt="Astrology Sanctuary Profile" 
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-on-surface font-bold leading-tight">
              Guiding souls with ancient wisdom for over two decades.
            </h2>
            
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Rooted in authentic South Indian astrological traditions, our lineage carries the sacred responsibility of interpreting cosmic patterns to bring clarity and auspiciousness into everyday life. With deep expertise in Parashara and Jaimini systems, we provide highly personalized consultations.
            </p>

            <div className="flex items-center gap-8 py-4">
              <div className="flex flex-col">
                <span className="text-4xl font-serif font-bold text-primary">20+</span>
                <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold mt-1">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-outline-variant/50"></div>
              <div className="flex flex-col">
                {/* FIX: Aligned to 5k+ since horoscopes and guided souls are identical metrics */}
                <span className="text-4xl font-serif font-bold text-primary">5k+</span>
                <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold mt-1">Guided Souls</span>
              </div>
            </div>

            <blockquote className="relative p-6 mt-4 bg-surface-container-low border-l-4 border-primary shadow-sm rounded-r-lg">
              <p className="text-lg italic text-on-surface font-medium">
                <strong className="text-primary mr-2">"Bringing peace through authentic astrology."</strong> 
                We believe that jyotish is not about inducing fear, but about illuminating the path with practical, spiritually grounded remedies.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Testimonials Grid - Scroll Reveal */}
      <section ref={addToRefs} className="reveal-on-scroll py-20 bg-primary/5 border-y border-outline-variant/30">
        <div className="max-w-6xl mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-primary font-bold mb-4">Voices of Devotion</h2>
            <p className="text-lg text-on-surface-variant">Trusted by families across generations.</p>
          </div>

          {/* Expanded Grid System tracking 6 premium user reviews layout panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Ramesh", location: "Hyderabad", initial: "R", review: "The predictions were incredibly accurate. The suggested pujas brought immense relief to our family during a difficult phase." },
              { name: "Lakshmi P.", location: "Vijayawada", initial: "L", review: "We consult for all major family decisions, from marriages to griha pravesham. The deep knowledge of panchangam is unmatched." },
              { name: "Srinivas K.", location: "Bangalore", initial: "S", review: "A truly enlightening experience. The way the birth chart was explained gave me a completely new perspective on my career path." },
              { name: "Anitha M.", location: "Secunderabad", initial: "A", review: "The Vastu advice given for our new apartment completely turned the energy around. Highly precise and easy-to-follow remedial corrections." },
              { name: "Venkatesh J.", location: "Guntur", initial: "V", review: "Finding an auspicious wedding date free of structural planetary blocks felt tough until we checked here. Extremely satisfied." },
              { name: "Kalyan C.", location: "Vizag", initial: "K", review: "Clear, logical answers about my business dasha block cycles. No unwanted panic choices, just authentic spiritual logic." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-surface rounded-xl p-8 border border-secondary/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-1 text-secondary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  ))}
                </div>
                <p className="text-on-surface-variant mb-8 flex-grow italic">"{testimonial.review}"</p>
                <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg select-none">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">{testimonial.name}</p>
                    <p className="text-xs text-on-surface-variant">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}