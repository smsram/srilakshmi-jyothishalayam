"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CONTACT_INFO } from "../utils/constants";

const CustomWhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg fill="currentColor" version="1.1" viewBox="0 0 30.667 30.667" className={className}>
    <g><path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"></path></g>
  </svg>
);

const ArrowRightSVG = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function Home() {
  const [showScrollContacts, setShowScrollContacts] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollContacts(window.scrollY > 500);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px" } 
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const comprehensiveServices = [
    { title: "Love Problems", desc: "Expert guidance to resolve misunderstandings, heal heartbreaks, and strengthen bonds.", path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" },
    { title: "Health Problems", desc: "Vedic astrological diagnosis and remedies to clear energy imbalances and restore health.", path: "M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" },
    { title: "Marriage Problems", desc: "Overcome marital conflicts, family disputes, and delays in fixing marriage dates.", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" },
    { title: "Children Concerns", desc: "Solutions for children's focus in education, behavioral growth, and futures.", path: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" },
    { title: "Financial Hurdles", desc: "Remedies to resolve debts, recover trapped funds, and ensure steady wealth influx.", path: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" },
    { title: "Job & Career Growth", desc: "Secure stable employment, remove promotional blocks, and handle workplace shifts.", path: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" },
    { title: "Negative Energy Removal", desc: "Clear unseen evil eyes, home hexes, and psychological blocks through protection shielding.", path: "M13 3 4 14h7v8l9-11h-7z" },
    { title: "Relationship Friction", desc: "Improve family harmony, partner bonding, and relative understanding smoothly.", path: "M16 11V5h6v6h-6zm-2 2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h10v6H4v2h10c1.1 0 2-.9 2-2v-6z" }
  ];

  return (
    <div className="w-full flex flex-col bg-background">
      
      {/* 1. Hero Dynamic Banner Layer */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden border-b border-outline-variant/20">
        <div className="absolute inset-0 bg-[url('/home-section.jpg')] bg-cover bg-center md:bg-[center_top_-2rem] scale-105 animate-[pulse_16s_infinite_alternate]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/65 to-background"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center px-gutter pt-12 animate-[fadeIn_0.8s_ease-out]">
          <div className="w-16 h-16 rounded-full bg-surface/10 flex items-center justify-center border border-secondary/40 shadow-2xl backdrop-blur-sm mb-6">
            <span className="material-symbols-outlined text-3xl text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
          </div>

          <span className="font-serif text-sm md:text-base text-secondary font-bold tracking-[0.25em] uppercase mb-3 drop-shadow-sm">
            Sri Lakshmi Devi Jyothishalayam
          </span>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.15] tracking-tight max-w-3xl">
            Guiding Your Life with Ancient Vedic Wisdom & Divine Grace
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-surface-variant/90 max-w-2xl mt-6 font-medium leading-relaxed">
            Accurate Jathakam, Marriage Matching, and Vastu Consultations by Expert South Indian Astrologers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-10">
            <a href={CONTACT_INFO.whatsappUrl} className="flex-1 bg-[#25D366] text-white font-bold py-4 px-6 rounded-xl flex justify-center items-center gap-3 hover:bg-[#1DA851] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group shadow-md">
              <CustomWhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              WhatsApp Chat
            </a>
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex-1 bg-primary text-on-primary font-bold py-4 px-6 rounded-xl flex justify-center items-center gap-2.5 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-outline/20 shadow-md">
              <span className="material-symbols-outlined text-xl">call</span>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* 2. Trust Counters Section */}
      <section className="px-gutter py-16 bg-surface-container-low border-b border-outline-variant/20">
        <div ref={addToRefs} className="reveal-on-scroll grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-surface rounded-2xl p-8 border border-secondary/20 shadow-sm flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-secondary mb-3">workspace_premium</span>
            <h3 className="font-serif text-3xl text-primary font-bold">20+ Years</h3>
            <p className="text-sm text-on-surface-variant uppercase tracking-widest mt-2 font-bold">Experience</p>
          </div>
          <div className="bg-surface rounded-2xl p-8 border border-secondary/20 shadow-sm flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-secondary mb-3">menu_book</span>
            <h3 className="font-serif text-3xl text-primary font-bold">5000+</h3>
            <p className="text-sm text-on-surface-variant uppercase tracking-widest mt-2 font-bold">Horoscopes</p>
          </div>
          <div className="bg-surface rounded-2xl p-8 border border-secondary/20 shadow-sm flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-secondary mb-3">verified_user</span>
            <h3 className="font-serif text-3xl text-primary font-bold">100%</h3>
            <p className="text-sm text-on-surface-variant uppercase tracking-widest mt-2 font-bold">Confidential</p>
          </div>
        </div>
      </section>

      <div className="px-gutter max-w-6xl mx-auto w-full">
        <div className="mandala-divider"></div>
      </div>

      {/* 3. Comprehensive Services Grid */}
      <section className="px-gutter py-12">
        <div ref={addToRefs} className="reveal-on-scroll max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-primary text-center font-bold mb-4 tracking-tight">Vedic Astrology Solutions</h2>
          <p className="text-center text-on-surface-variant mb-12 max-w-xl mx-auto text-sm md:text-base">Click on any card area below to view full details on our structured consultation page.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {comprehensiveServices.map((service, idx) => (
              <Link 
                key={idx} 
                href="/services" 
                className="bg-surface border border-outline-variant/30 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col group hover:border-secondary/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <span className="absolute top-4 right-6 font-serif text-3xl font-bold text-outline-variant/20 select-none pointer-events-none group-hover:text-secondary/20 transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4 transition-colors duration-500 group-hover:bg-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary transition-colors duration-500 group-hover:text-white"><path d={service.path}/></svg>
                </div>

                <h4 className="font-serif font-bold text-2xl text-on-surface mb-2 leading-tight">{service.title}</h4>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed flex-grow">{service.desc}</p>
                
                <span className="text-secondary text-xs flex items-center gap-1.5 font-bold mt-auto group/btn">
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  <span className="relative text-on-surface group-hover/btn:text-secondary transition-colors">
                    Check in Services
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary group-hover/btn:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRightSVG className="w-3 h-3 text-secondary transform translate-x-0 opacity-0 group-hover/btn:translate-x-1 group-hover/btn:opacity-100 transition-all duration-300" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Vastu Section */}
      <section className="px-gutter py-16 bg-surface-container-low border-t border-outline-variant/20 mt-8">
        <div ref={addToRefs} className="reveal-on-scroll max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Vastu Shastra</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Realign structural blueprints to match universal element vectors. We conduct structural evaluations for plots, flats, and operational corporate entities.
            </p>
            <Link href="/services" className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-300">
              Explore Vastu Layouts
            </Link>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <Link href="/services" className="bg-surface rounded-2xl p-8 shadow-md border border-secondary/20 group hover:border-primary transition-all duration-300 flex flex-col">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 group-hover:text-primary transition-colors">home</span>
              <h4 className="font-serif font-bold text-2xl text-on-surface mb-2">Residential Vastu</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Ensure dynamic structural equilibrium for apartments and custom-built individual houses.</p>
            </Link>
            <Link href="/services" className="bg-surface rounded-2xl p-8 shadow-md border border-secondary/20 group hover:border-primary transition-all duration-300 flex flex-col">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 group-hover:text-primary transition-colors">storefront</span>
              <h4 className="font-serif font-bold text-2xl text-on-surface mb-2">Commercial Vastu</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Balance complex production floors and commercial showrooms to maximize financial flow.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Glimpses Image Gallery Layer */}
      <section className="px-gutter py-16 bg-primary/[0.01] border-t border-outline-variant/25">
        <div ref={addToRefs} className="reveal-on-scroll max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4 tracking-tight">Glimpses of Our Ashram</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-12 text-sm md:text-base">A serene location built to host continuous Vedic study blocks, fire altars, and individual readings.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm group bg-surface-variant/30">
              <img src="/image1.jpg" alt="Vedic Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <p className="absolute bottom-6 left-6 text-white font-serif font-bold text-xl">Vedic Architecture</p>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm group bg-surface-variant/30">
              <img src="/image2.jpg" alt="Parihara Poojas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <p className="absolute bottom-6 left-6 text-white font-serif font-bold text-xl">Parihara Poojas</p>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm group bg-surface-variant/30">
              {/* FIX: Updated the source extension to .png and localized the tag to match your Rasi Phalalu image chart */}
              <img src="/image3.jpg" alt="Rasi Phalalu Transits" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <p className="absolute bottom-6 left-6 text-white font-serif font-bold text-xl">Rasi Phalalu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Elements Container */}
      <div className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col gap-4 transition-all duration-500 ease-in-out ${
        showScrollContacts ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90 pointer-events-none"
      }`}>
        <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="w-14 h-14 md:w-16 md:h-16 bg-surface text-primary border-2 border-primary rounded-full flex items-center justify-center shadow-2xl hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
          <span className="material-symbols-outlined text-2xl md:text-3xl">call</span>
        </a>
        <a href={CONTACT_INFO.whatsappUrl} className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#1DA851] hover:scale-110 transition-all duration-300">
          <CustomWhatsAppIcon className="w-7 h-7" />
        </a>
      </div>

    </div>
  );
}