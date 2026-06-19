"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CONTACT_INFO } from "../../utils/constants";

const ChevronDownSVG = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

function ServicesContent() {
  const searchParams = useSearchParams();
  const targetId = searchParams.get('open');
  
  const [openSections, setOpenSections] = useState({
    love: false,
    health: false,
    marriage: false,
    children: false,
    finance: false,
    career: false,
    remedies: false,
    vastu: false,
  });

  const sectionsRef = useRef([]);
  const accordionRefs = useRef({}); 

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

  useEffect(() => {
    if (targetId && openSections[targetId] !== undefined) {
      setOpenSections(prev => ({
        ...prev,
        [targetId]: true
      }));

      setTimeout(() => {
        if (accordionRefs.current[targetId]) {
          const elementPosition = accordionRefs.current[targetId].getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 120;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 150);
    } else if (!targetId) {
       setOpenSections(prev => ({ ...prev, love: true }));
    }
  }, [targetId]);

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

  // Expanded into 8 1:1 separate modules mapping directly to the cards
  const serviceCategories = [
    {
      id: "love",
      title: "Love Problems",
      englishTag: "Relationships",
      summary: "Expert guidance to resolve deep-seated misunderstandings, heal lingering emotional heartbreaks, and fortify partner commitments.",
      image: "/Love Problems.jpg",
      issues: ["Breakups and emotional detachments", "Partner communication breakdowns", "Unreciprocated feelings or affection shifts"],
      items: [
        { name: "Venus Node Strengthening", desc: "Evaluating and boosting your 5th and 7th houses to clear planetary alignment blocks affecting love fields." },
        { name: "Emotional Compatibility Mappings", desc: "Analyzing planetary placements to locate underlying personality friction points between partners." }
      ]
    },
    {
      id: "health",
      title: "Health Problems",
      englishTag: "Wellness",
      summary: "Vedic astrological tracking and remediation designed to isolate underlying energy imbalances and support physical wellness.",
      image: "/Health Problems.jpg",
      issues: ["Chronic elements lacking a medical cause", "Mental anxiety and emotional restlessness", "Periods of low energy and heavy physical exhaustion"],
      items: [
        { name: "6th House Node Diagnosis", desc: "Detailed breakdown of the primary health sector houses to trace planetary transition windows." },
        { name: "Mantra Energy Sound Therapy", desc: "Tailored sonic vibrations used exclusively to stabilize erratic mental or physical fields cleanly." }
      ]
    },
    {
      id: "marriage",
      title: "Marriage Problems",
      englishTag: "Matrimony",
      summary: "Overcome long-term marital conflicts, constant family circle disputes, and timing block delays in fixing wedding dates.",
      image: "/Marriage Problems.jpg",
      issues: ["Continuous disagreements and friction at home", "Unreasonable delays in finalize wedding contracts", "Inter-familial integration blockages"],
      items: [
        { name: "7th House Blockage Clearances", desc: "Isolating constraints from heavy transit nodes like Saturn or Rahu over the primary union grid." },
        { name: "Manglik/Kuja Dosha Balancing", desc: "Dynamic behavioral updates and ritual offsets designed to neutralize heavy Mars orientations safely." }
      ]
    },
    {
      id: "children",
      title: "Children Concerns",
      englishTag: "Family",
      summary: "Strategic solutions for improving children's learning focus, academic retention, behavioral paths, and future prosperity blueprints.",
      image: "/Children Concerns.jpg",
      issues: ["Sudden lack of concentration in education", "Behavioral fluctuations and stubborn shifts", "Anxiety regarding career field selection layouts"],
      items: [
        { name: "5th House Intelligence Check", desc: "Evaluating children's primary chart houses to locate ideal, high-merit educational fields." },
        { name: "Focus Optimization Remedies", desc: "Simple environmental alignments and color modulations to stabilize study habits." }
      ]
    },
    {
      id: "finance",
      title: "Financial Hurdles",
      englishTag: "Wealth",
      summary: "Targeted remedial tracking to break free from heavy debts, unlock unrecoverable capital resources, and maintain consistent cash flows.",
      image: "/Financial Hurdles.jpg",
      issues: ["Capital trapped in failed operations or bad investments", "Inability to break free from loan patterns", "Sudden drops in commercial influxes"],
      items: [
        { name: "Dhanya/2nd House Accumulation Mappings", desc: "Analyzing asset storage houses to repair systemic block leaks in revenue generation charts." },
        { name: "Lakshmi Node Consecrations", desc: "Strategic configurations meant to anchor positive prosperity forces cleanly in your life path." }
      ]
    },
    {
      id: "career",
      title: "Job & Career Growth",
      englishTag: "Profession",
      summary: "Secure stable long-term employment, resolve workplace friction blocks, and handle critical corporate transitions smoothly.",
      image: "/Job & Career Growth.jpg",
      issues: ["Repeatedly bypassed for expected promotions", "Workplace political friction or unstable employment", "Anxiety regarding structural shifting blocks"],
      items: [
        { name: "10th House Authority Activation", desc: "Strengthening your professional and social impact nodes to trigger high visibility across leadership." },
        { name: "Immigration & Foreign Placement Timelines", desc: "Tracking 12th house transits to trace highly favorable international movement opportunities." }
      ]
    },
    {
      id: "remedies",
      title: "Negative Energy Removal",
      englishTag: "Purification",
      summary: "Clear heavy unseen evil eyes, domestic property hexes, and psychological roadblocks through protective Vedic shielding structures.",
      image: "/Negative Energy Removal.jpg",
      issues: ["Sudden, unexplained structural domestic jank", "Feeling heavy atmospheres or unseen friction at home", "Continuous bad luck across business paths"],
      items: [
        { name: "Karpura Ritual Clearing Models", desc: "Using high-frequency burning materials to break up heavy energetic patterns inside spaces." },
        { name: "Protective Kavach Formations", desc: "Setting up custom protection fields to guard paths against hostile external intentions." }
      ]
    },
    {
      id: "relationship",
      title: "Relationship Friction",
      englishTag: "Harmony",
      summary: "Re-establish deep domestic balance, refine partner dialogues, and resolve long-standing extended relative misunderstandings peacefully.",
      image: "/Relationship Friction.jpg",
      issues: ["Persistent arguments between close family members", "Misunderstandings with relatives affecting business", "Lack of peace and mutual trust at home"],
      items: [
        { name: "4th House Peace Mappings", desc: "Evaluating the core structural grid of domestic happiness to clear transit afflictions." },
        { name: "Srinivasa Harmony Alignments", desc: "Behavioral adjustments and chart offerings built exclusively to return gentle energy back to interactions." }
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-background">
      
      {/* Page Title Section */}
      <section className="relative py-16 bg-surface-container-low border-b border-outline-variant/30 flex flex-col items-center justify-center text-center animate-[fadeIn_0.5s_ease-out]">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none sri-chakra-bg"></div>
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
                ref={(el) => {
                  addToRefs(el);
                  accordionRefs.current[category.id] = el;
                }}
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
                  isOpen ? "max-h-[2500px] border-t border-outline-variant/20" : "max-h-0"
                }`}>
                  <div className="p-6 md:p-8 bg-background/30 flex flex-col gap-6">
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left Visual Support Image */}
                      <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden shadow-sm shrink-0 border border-outline-variant/30 relative max-h-48">
                        <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                      
                      {/* Right Text / Issues Map */}
                      <div className="w-full md:w-2/3 flex flex-col justify-center">
                        <p className="text-on-surface-variant text-sm md:text-base font-medium italic border-l-2 border-secondary/60 pl-4 mb-4">
                          {category.summary}
                        </p>
                        
                        <h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Common Issues Addressed:</h5>
                        <ul className="space-y-1.5">
                          {category.issues.map((issue, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-on-surface-variant">
                              <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">check_circle</span>
                              <span className="leading-relaxed">{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="w-full h-px bg-outline-variant/30"></div>
                    
                    {/* Detailed inner parameters grid */}
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Detailed Consultation Parameters:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

export default function ServicesPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-primary font-serif">Loading services...</div>}>
      <ServicesContent />
    </Suspense>
  );
}