"use client"; // Fixes the Server Runtime Event Handler error immediately

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-gutter py-12 md:py-20 animate-fade-in">
      
      {/* Header Section */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-4">Book an Appointment</h1>
        <p className="text-lg text-on-surface-variant">(సంప్రదించండి)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Contact Info */}
        <div className="md:col-span-5 space-y-8">
          <div className="bg-surface-container-low rounded-xl p-8 border border-secondary/30 shadow-sm relative overflow-hidden">
            
            {/* Background Graphic */}
            <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[150px] text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            </div>
            
            <h3 className="text-2xl font-serif text-primary font-bold mb-6 relative z-10">Direct Connect</h3>
            
            <div className="space-y-4 relative z-10">
              <a href="tel:+919876543210" className="flex items-center justify-between w-full bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90 transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">call</span>
                  <span className="font-semibold text-lg">+91 98765 43210</span>
                </div>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              
              <a href="https://wa.me/919876543210" className="flex items-center justify-between w-full bg-[#25D366] text-white px-6 py-4 rounded-lg hover:opacity-90 transition-opacity group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">chat</span>
                  <span className="font-semibold text-lg">WhatsApp Chat</span>
                </div>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">open_in_new</span>
              </a>
            </div>

            <div className="mt-10 space-y-6 relative z-10">
              <div>
                <h4 className="font-semibold text-on-surface-variant mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">schedule</span> Daily Timings
                </h4>
                <p className="text-on-surface font-medium">9:00 AM - 8:00 PM IST</p>
              </div>
              <div>
                <h4 className="font-semibold text-on-surface-variant mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">location_on</span> Ashram Address
                </h4>
                <p className="text-on-surface leading-relaxed">
                  12-34/5, Temple Road,<br/>
                  Near Old Shiva Temple,<br/>
                  Hyderabad, Telangana 500001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Form */}
        <div className="md:col-span-7">
          <div className="bg-surface rounded-xl p-8 md:p-10 border border-secondary/30 shadow-md">
            <h3 className="text-2xl font-serif text-primary font-bold mb-8">Consultation Request</h3>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Full Name */}
                <div className="relative">
                  <input type="text" id="name" placeholder=" " required
                    className="block w-full px-0 py-3 text-on-surface bg-transparent border-0 border-b-2 border-outline-variant appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors" />
                  <label htmlFor="name" 
                    className="absolute text-on-surface-variant duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Full Name *
                  </label>
                </div>

                {/* Mobile Number */}
                <div className="relative">
                  <input type="tel" id="mobile" placeholder=" " required
                    className="block w-full px-0 py-3 text-on-surface bg-transparent border-0 border-b-2 border-outline-variant appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors" />
                  <label htmlFor="mobile" 
                    className="absolute text-on-surface-variant duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Mobile Number *
                  </label>
                </div>

                {/* DOB */}
                <div className="relative">
                  <input type="date" id="dob" required
                    className="block w-full px-0 py-3 text-on-surface bg-transparent border-0 border-b-2 border-outline-variant appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors" />
                  <label htmlFor="dob" className="absolute text-xs text-primary -top-4 left-0">Date of Birth *</label>
                </div>

                {/* TOB */}
                <div className="relative">
                  <input type="time" id="tob" 
                    className="block w-full px-0 py-3 text-on-surface bg-transparent border-0 border-b-2 border-outline-variant appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors" />
                  <label htmlFor="tob" className="absolute text-xs text-on-surface-variant -top-4 left-0">Time of Birth (Optional)</label>
                </div>
              </div>

              {/* Service Select */}
            <div className="relative mt-8">
            <select 
                id="service" 
                required
                defaultValue="" // React handles the default placeholder value here
                className="block w-full px-0 py-3 text-on-surface bg-transparent border-0 border-b-2 border-outline-variant appearance-none focus:outline-none focus:ring-0 focus:border-primary transition-colors"
            >
                {/* Removed the 'selected' attribute from this option */}
                <option value="" disabled>Select Service Required *</option>
                <option value="horoscope">Horoscope Reading (జాతక పరిశీలన)</option>
                <option value="muhurtham">Muhurtham (ముహూర్తం)</option>
                <option value="matchmaking">Match Making (వివాహ పొంతన)</option>
                <option value="vastu">Vastu Consultation (వాస్తు)</option>
                <option value="other">Other Query</option>
            </select>
            <label htmlFor="service" 
                className="absolute text-on-surface-variant duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Select Service *
            </label>
            <span className="material-symbols-outlined absolute right-0 top-3 text-on-surface-variant pointer-events-none">expand_more</span>
            </div>

              <div className="pt-6">
                <button type="submit" 
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors shadow-md">
                  Submit Request
                </button>
                <p className="text-xs text-on-surface-variant mt-4 text-center">Guruji's assistant will contact you on WhatsApp to confirm your time slot.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}