import React, { useRef } from 'react';

const stats = [
  {
    value: "175K",
    label: "Followers Gained",
    desc: "In just 5 months for our top client",
    icon: "solar:user-plus-linear"
  },
  {
    value: "2.5M",
    label: "Total Reach",
    desc: "Across multiple viral content pieces",
    icon: "solar:globe-linear"
  },
  {
    value: "89%",
    label: "Retention Rate",
    desc: "Audience stays engaged and comes back",
    icon: "solar:history-linear"
  },
  {
    value: "340%",
    label: "Engagement Boost",
    desc: "Increased saves, shares, and meaningful interactions",
    icon: "solar:graph-up-linear"
  }
];

const ProofSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const cards = containerRef.current.querySelectorAll('.flashlight-card');
    cards.forEach((card) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty('--x', `${x}px`);
      (card as HTMLElement).style.setProperty('--y', `${y}px`);
    });
  };

  return (
    <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full py-24 md:py-32 container mx-auto px-4 md:px-8 z-20"
    >
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left Side: Image (Client Image Placeholder) */}
            <div className="flex-1 w-full lg:order-1 order-2">
                 <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                        alt="Analytics Dashboard" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                    
                    {/* Floating Badge on Image */}
                    <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
                         <span className="text-xs font-mono text-white tracking-widest uppercase">Verified Data</span>
                    </div>

                    {/* Bottom Stats on Image */}
                     <div className="absolute bottom-8 left-8 right-8">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-gray-400 text-sm font-mono">Total Growth</span>
                                <span className="text-brand-green text-xs font-bold">+124%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-green w-[75%] animate-[width-grow_2s_ease-out]"></div>
                            </div>
                        </div>
                     </div>
                 </div>
            </div>

            {/* Right Side: Content & Cards */}
            <div className="flex-1 w-full lg:order-2 order-1">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-3">Some More Proof</h2>
                    <p className="text-xl text-gray-500 font-light italic">(Because Numbers Don't Lie)</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flashlight-card relative group p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-brand-green/30 transition-all duration-300 overflow-hidden">
                             {/* Flashlight Overlay */}
                            <div className="flashlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            <div className="flashlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none absolute inset-0 rounded-2xl p-[1px]"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <h3 className="text-4xl md:text-5xl font-sans font-light text-white tracking-tight group-hover:text-brand-green transition-colors">{stat.value}</h3>
                                    <iconify-icon icon={stat.icon} width="24" className="text-gray-600 group-hover:text-brand-green transition-colors"></iconify-icon>
                                </div>
                                <h4 className="text-lg font-medium text-white mb-2">{stat.label}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{stat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pl-4 border-l-2 border-white/10">
                    <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
                        <span>Growth</span>
                        <span className="text-brand-green">•</span>
                        <span>Retention</span>
                        <span className="text-brand-green">•</span>
                        <span>Engagement</span>
                        <span className="text-brand-green">•</span>
                        <span>Consistency</span>
                    </div>
                    <p className="text-white/60 font-serif italic text-lg">All moving in the right direction...</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ProofSection;