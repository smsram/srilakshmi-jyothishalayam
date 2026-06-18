"use client";

import { useState, useEffect, useRef } from "react";
import { CONTACT_INFO } from "../../utils/constants";

// Native Chevron Down SVG
const ChevronDownSVG = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export default function ServicesPage() {
  const [openSections, setOpenSections] = useState({
    jathakam: true,
    marriage: false,
    vastu: false,
    muhurtham: false,
    career: false,
    remedies: false,
  });

  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const serviceCategories = [
    {
      id: "jathakam",
      title: "Jathakam Analysis",
      englishTag: "Astrology",
      summary: "Comprehensive natal chart mappings calculated to illuminate life paths, planetary dasha blocks, and future transitions.",
      items: [
        { name: "Life Predictions", desc: "Detailed breakdown of health, wealth, family longevity, and key milestones based on classical planetary positions." },
        { name: "Graha Dosha Diagnosis", desc: "Identification of heavy planetary afflictions such as Shani Dhaiya, Rahu Mahadasha, or Sade Sati." },
        { name: "Yearly Varshaphala", desc: "A tailored annual horoscope breakdown mapping the cosmic transits affecting you month-by-month." },
        { name: "Janma Kundali Drafting", desc: "Precise mathematical calculations of planetary degrees based on your exact time and place of birth." },
        { name: "Kujava & Rahu-Ketu Timelines", desc: "Specialized analysis of shadow planets and their direct evolutionary impacts on your current lifecycle." },
        { name: "Astro-Diagnostics for Education", desc: "Evaluating the strength of the 4th and 5th house nodes to uncover optimized academic study fields." }
      ]
    },
    {
      id: "marriage",
      title: "Marriage & Relationships",
      englishTag: "Compatibility",
      summary: "Traditional compatibility analyses performed to smooth relationships and ensure marital longevity.",
      items: [
        { name: "Ashtakoota Milan Matching", desc: "Rigorous 36-point Guna check examining mental temperament, health, and mutual spiritual alignment." },
        { name: "Kuja Dosha Check", desc: "Specialized analysis of Mars placements to detect Manglik afflictions and suggest neutralization remedies." },
        { name: "Relationship Conflict Resolution", desc: "Planetary remediation pathways to restore peaceful dialogue and mutual understanding within marriages." },
        { name: "Delay in Marriage Analysis", desc: "Evaluating 7th house blockages or Saturn constraints to understand and bypass timing friction." },
        { name: "Nadi Dosha Neutralization", desc: "An advanced check targeting physiological and genetic compatibility points to safeguard future children." },
        { name: "Vivaha Bandham Protection", desc: "Auspicious planetary strengthening techniques designed to shield existing relationships from evil eyes." }
      ]
    },
    {
      id: "vastu",
      title: "Vastu Shastra",
      englishTag: "Vastu",
      summary: "Structural geometric evaluations mapping architectural matrices to natural elemental laws.",
      items: [
        { name: "Residential Vastu Evaluation", desc: "Room-by-room checking for individual apartments, villas, and kitchens to attract peaceful energy." },
        { name: "Commercial & Business Layouts", desc: "Optimizing factories, retail storefronts, and office orientations to remove growth blocks." },
        { name: "Astro-Vastu Integration", desc: "A premium sync matching your personal horoscope strengths directly to your home's entry vectors." },
        { name: "Plot Shape & Soil Selection", desc: "Pre-purchase evaluation of land geometries, slope dynamics, and magnetic axis frequencies." },
        { name: "Vastu Panchamahabhuta Balance", desc: "Advanced rectifications aligning the five core elements (Water, Fire, Earth, Air, Space) inside structural maps." },
        { name: "Remedial Vastu Without Demolition", desc: "Innovative use of energy color models, copper wires, and pyramid placement structures to bypass physical changes." }
      ]
    },
    {
      id: "muhurtham",
      title: "Muhurtham Fixing",
      englishTag: "Timings",
      summary: "Mathematical identification of auspicious planetary windows to guarantee success for key milestones.",
      items: [
        { name: "Vivah (Marriage) Muhurtham", desc: "Fixing cosmic windows free of structural doshas to protect the couple's bond." },
        { name: "Grihapravesham (House Warming)", desc: "Auspicious timing calculations for entry into new properties to unlock family prosperity." },
        { name: "Business & Vehicle Launches", desc: "Timing commercial setups or capital asset investments during high planetary strength windows." },
        { name: "Akshara Abhyasam Windows", desc: "Calculating ideal, high-merit lunar days for introducing infants to reading and writing matrices cleanly." },
        { name: "Namakarana & Upanayanam Time", desc: "Calculating traditional planetary alignments for naming ceremonies and sacred thread initiations." },
        { name: "Auspicious Travel & Signing", desc: "Selecting high-yield solar hours for signing legal contracts or initiating overseas journeys." }
      ]
    },
    {
      id: "career",
      title: "Career & Financial Stability",
      englishTag: "Prosperity",
      summary: "Stars mapping designed to maximize financial opportunities and identify peak professional paths.",
      items: [
        { name: "Job Promotion Alignments", desc: "Pinpointing transit periods highly favorable for career shifts or competitive promotions." },
        { name: "Business Venture Evaluation", desc: "Determining if individual configurations favor partnerships or standalone corporate operations." },
        { name: "Debt Remediation Strategy", desc: "Spiritual and cosmic guidance intended to liberate assets from continuous loans or trapped funds." },
        { name: "Stock Market & Trading Analysis", desc: "Analyzing the 5th and 11th house strengths to decipher individual risk profiles for financial instruments." },
        { name: "Foreign Placement Opportunities", desc: "Evaluating 12th house alignments to forecast immigration timelines and international career paths." },
        { name: "Ancestral Property Recovery", desc: "Planetary transit calculations focused on minimizing litigation and unblocking family inheritances." }
      ]
    },
    {
      id: "remedies",
      title: "Remedies & Energized Gems",
      englishTag: "Protection",
      summary: "Spiritual shields engineered to clear energetic hurdles and pacify malefic planetary transits.",
      items: [
        { name: "Gemstone Selection (Ratnalu)", desc: "Prescribing authentic, pure gemstones chosen exclusively to fortify weaker benefic planets." },
        { name: "Energized Rudraksha Mapping", desc: "Guidance on wearing natural, premium Mukhi Rudrakshas for mental clarity and health protection." },
        { name: "Parihara Poojas & Homams", desc: "Prescribing specific Vedic fire configurations to nullify deep ancestral or transit blockades." },
        { name: "Yantra Installation Layouts", desc: "Designing consecrated geometric metal plates to channel structural protection fields into home environments." },
        { name: "Mantra Japa Recommendations", desc: "Custom auditory sound frequency paths tailored to steady mental wavelengths against daily anxiety." },
        { name: "Navagraha Shanti Balancing", desc: "Custom behavioral and offering frameworks designed to stabilize conflicting dual planetary fields." }
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-background">
      
      {/* Page Title Section */}
      <section className="relative py-16 bg-surface-container-low border-b border-outline-variant/30 flex flex-col items-center justify-center text-center animate-[fadeIn_0.5s_ease-out]">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none sri-chakra-bg"></div>
        
        {/* FIX: Integrated the auto_awesome spiritual icon layout badge cleanly into header viewports */}
        <div className="relative z-10 px-gutter flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center border border-primary/20 shadow-sm mb-4">
            <span className="material-symbols-outlined text-2xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-3">Our Divine Services</h1>
          <div className="h-0.5 w-16 bg-secondary mx-auto mt-2 opacity-50"></div>
        </div>
      </section>

      {/* --- CRITICAL CRADLE WRAPPER --- */}
      <div className="relative flex-grow flex flex-col w-full">
        
        {/* Accordion List Container */}
        <section className="max-w-4xl mx-auto px-gutter w-full mt-12 space-y-6 pb-12">
          {serviceCategories.map((category) => {
            const isOpen = openSections[category.id];
            return (
              <div 
                key={category.id}
                ref={addToRefs}
                className="reveal-on-scroll bg-surface border border-outline-variant/40 rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:border-secondary/40"
              >
                {/* Dropdown Header Trigger */}
                <button 
                  onClick={() => toggleSection(category.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-surface hover:bg-primary/[0.01] transition-colors cursor-pointer group select-none"
                >
                  <div className="flex flex-col gap-1 pr-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-primary bg-primary/5 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                        {category.englishTag}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors mt-1">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className={`text-primary/70 group-hover:text-primary transition-transform duration-300 transform shrink-0 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}>
                    <ChevronDownSVG />
                  </div>
                </button>

                {/* Collapsible Content Area */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[1500px] border-t border-outline-variant/20" : "max-h-0"
                }`}>
                  <div className="p-6 md:p-8 bg-background/30 space-y-6">
                    <p className="text-on-surface-variant text-sm md:text-base font-medium italic border-l-2 border-secondary/60 pl-4 mb-4">
                      {category.summary}
                    </p>
                    
                    {/* Detailed inner bullet grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      {category.items.map((item, i) => (
                        <div key={i} className="bg-surface rounded-xl p-5 border border-outline-variant/20 hover:shadow-md transition-shadow duration-300">
                          <h4 className="font-serif font-bold text-lg text-primary mb-1">{item.name}</h4>
                          <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </section>

        {/* --- PERFECT STICKY-BOTTOM CONTAINER --- */}
        <div className="sticky bottom-0 w-full bg-surface/95 backdrop-blur-md border-t border-outline-variant/40 shadow-[0_-10px_30px_rgba(139,0,0,0.08)] z-40 animate-[fadeIn_0.5s_ease-out] mt-auto">
          <div className="max-w-4xl mx-auto px-gutter py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="text-center sm:text-left">
              <h4 className="font-serif font-bold text-lg md:text-xl text-primary leading-tight">
                Ready for a Detailed Personal Consultation?
              </h4>
              <p className="text-xs md:text-sm text-on-surface-variant mt-1">
                Connect directly via phone call for your specialized charts reading.
              </p>
            </div>
            
            <div className="w-full sm:w-auto">
              <a 
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-on-primary px-8 py-3.5 rounded-xl font-bold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md group"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="group-hover:rotate-12 transition-transform duration-300">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call for Consultation
              </a>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}