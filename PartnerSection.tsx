import React, { useRef } from 'react';

const PartnerSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    // Apply flashlight effect to the image card
    const card = containerRef.current.querySelector('.flashlight-card') as HTMLElement;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    }
  };

  const partners = [
    { label: "Creators", desc: "building their personal brand" },
    { label: "Vloggers", desc: "documenting their journey" },
    { label: "Businesses", desc: "expanding their digital presence" },
    { label: "Aspiring creators", desc: "ready to start their journey" },
  ];

  return (
    <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full py-24 md:py-32 container mx-auto px-4 md:px-8 z-20"
    >
      <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Image/Illustration */}
        <div className="flex-1 w-full">
            <div className="flashlight-card relative aspect-square w-full max-w-lg mx-auto rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-2xl group">
                {/* Flashlight Overlay */}
                <div className="flashlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"></div>
                <div className="flashlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none absolute inset-0 rounded-3xl p-[1px] z-20"></div>

                {/* Image Placeholder - Using a creator-vibe image instead of vector to match site aesthetic */}
                <img 
                    src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=1000&auto=format&fit=crop" 
                    alt="Creators Collaborating" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out z-0"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80 z-10"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-3">
                    <div className="flex -space-x-3">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] text-white overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="user" className="w-full h-full object-cover opacity-80" />
                            </div>
                        ))}
                    </div>
                    <span className="text-xs font-mono text-brand-green tracking-wider uppercase">Community</span>
                </div>
            </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex-1 w-full text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-12">
                Who We Work With
            </h2>

            <h3 className="text-xl text-brand-green font-medium mb-6 flex items-center gap-2">
                We Partner With:
            </h3>

            <ul className="space-y-4 mb-10">
                {partners.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-green transition-colors duration-300 flex-shrink-0"></div>
                        <span className="text-lg text-gray-300 font-light">
                            <strong className="font-semibold text-white group-hover:text-brand-green transition-colors">{item.label}</strong>
                            <span className="text-gray-500 mx-1">/</span> 
                            {item.desc}
                        </span>
                    </li>
                ))}
            </ul>

            <div className="space-y-6 border-l-2 border-white/10 pl-6 relative">
                <div className="absolute top-0 left-[-2px] h-8 w-[2px] bg-brand-green"></div>
                
                <p className="text-gray-400 font-light leading-relaxed">
                    Whether you're already posting consistently or still figuring out where to begin—you're welcome here.
                </p>
                
                <p className="text-xl text-white font-serif italic">
                    "Every expert was once a beginner. <br />
                    We meet you wherever you are."
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default PartnerSection;