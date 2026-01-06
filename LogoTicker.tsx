import React from 'react';

const LogoTicker: React.FC = () => {
  // Added more brand-relevant icons. In a real scenario, you would swap 'icon' for 'img src' of specific brands you work with.
  const logos = [
    { icon: "simple-icons:instagram" },
    { icon: "simple-icons:tiktok" },
    { icon: "simple-icons:youtube" },
    { icon: "simple-icons:shopify" },
    { icon: "simple-icons:adobe" },
    { icon: "simple-icons:capcut" },
    { icon: "simple-icons:notion" },
    { icon: "simple-icons:discord" },
  ];

  return (
    <section className="relative w-full border-t border-b border-white/5 bg-black/40 backdrop-blur-sm py-10 overflow-hidden z-20">
      
      {/* Gradient Masks to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10"></div>

      <div className="flex animate-marquee whitespace-nowrap">
        {/* First Set of Logos */}
        <div className="flex gap-20 mx-10 items-center">
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="group transition-opacity duration-300 opacity-30 hover:opacity-100 grayscale hover:grayscale-0">
               <iconify-icon 
                  icon={logo.icon} 
                  width="32" 
                  className="text-gray-400 group-hover:text-white transition-all transform group-hover:scale-110 duration-300"
               ></iconify-icon>
            </div>
          ))}
        </div>

        {/* Duplicate Set for Loop */}
        <div className="flex gap-20 mx-10 items-center">
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="group transition-opacity duration-300 opacity-30 hover:opacity-100 grayscale hover:grayscale-0">
               <iconify-icon 
                  icon={logo.icon} 
                  width="32" 
                  className="text-gray-400 group-hover:text-white transition-all transform group-hover:scale-110 duration-300"
               ></iconify-icon>
            </div>
          ))}
        </div>
        
         {/* Triplicate Set for Large Screens to ensure seamlessness */}
         <div className="flex gap-20 mx-10 items-center">
          {logos.map((logo, index) => (
            <div key={`logo-3-${index}`} className="group transition-opacity duration-300 opacity-30 hover:opacity-100 grayscale hover:grayscale-0">
               <iconify-icon 
                  icon={logo.icon} 
                  width="32" 
                  className="text-gray-400 group-hover:text-white transition-all transform group-hover:scale-110 duration-300"
               ></iconify-icon>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;