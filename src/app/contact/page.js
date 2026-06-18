"use client";

import { CONTACT_INFO } from "@/utils/constants";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-gutter py-12 md:py-24 animate-[fadeIn_0.5s_ease-out]">
      
      {/* Header Section */}
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <span className="material-symbols-outlined text-4xl text-primary/30 mb-2" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-4">Connect With Us</h1>
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
          Reach out directly to arrange your private consultation. We look forward to analyzing your charts and guiding your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-12">
        
        {/* Left Interactive Panel: Direct Connect Action Buttons */}
        <div className="bg-surface-container-low rounded-2xl p-8 md:p-10 border border-secondary/20 shadow-sm relative overflow-hidden flex flex-col justify-center">
          
          {/* Background Structural Graphic */}
          <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none select-none">
            <span className="material-symbols-outlined text-[180px] text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
          </div>
          
          <h3 className="text-2xl font-serif text-primary font-bold mb-2 relative z-10">Direct Contact</h3>
          <p className="text-sm text-on-surface-variant mb-8 relative z-10">Choose your preferred channel for an instant connection.</p>
          
          <div className="space-y-4 relative z-10 w-full">
            {/* Phone Option */}
            <a 
              href={`tel:${CONTACT_INFO?.phoneRaw || "+919876543210"}`} 
              className="flex items-center justify-between w-full bg-primary text-on-primary px-6 py-4 rounded-xl hover:bg-primary/90 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-3.5">
                <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">call</span>
                <span className="font-bold text-lg">Call Directly</span>
              </div>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            
            {/* WhatsApp Option */}
            <a 
              href={CONTACT_INFO?.whatsappUrl || "https://wa.me/919876543210"} 
              className="flex items-center justify-between w-full bg-[#25D366] text-white px-6 py-4 rounded-xl hover:bg-[#1DA851] hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-3.5">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">chat</span>
                <span className="font-bold text-lg">WhatsApp Message</span>
              </div>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">open_in_new</span>
            </a>
          </div>
        </div>

        {/* Right Guidance Information Panel */}
        <div className="bg-surface rounded-2xl p-8 md:p-10 border border-outline-variant/30 shadow-md flex flex-col justify-center">
          <h3 className="text-2xl font-serif text-primary font-bold mb-6">Consultation Guide</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px] text-primary">history_edu</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-on-surface mb-1">Prepare Birth Details</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  For precise Jathakam analyses, please keep your exact date, location, and accurate time of birth ready before initiating the conversation.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px] text-primary">gavel</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-on-surface mb-1">Complete Privacy</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Every shared life detail, relationship matrix, and cosmic natal blueprint analysis remains completely confidential across all secure communication routes.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}