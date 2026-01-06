import React, { useState, useEffect, useRef } from 'react';

const stats = [
  {
    id: 1,
    value: "+400%",
    label: "Reach Lift",
    description: "Organic visibility explosion utilizing our proprietary content frameworks.",
    icon: "solar:graph-up-new-linear",
    color: "text-brand-green"
  },
  {
    id: 2,
    value: "12.5k",
    label: "Leads Generated",
    description: "Direct conversion from viral view-throughs to qualified pipeline.",
    icon: "solar:users-group-rounded-linear",
    color: "text-blue-400"
  },
  {
    id: 3,
    value: "10x",
    label: "Production Speed",
    description: "From concept to published viral asset. We handle the heavy lifting.",
    icon: "solar:bolt-linear",
    color: "text-amber-400"
  }
];

const NeuralEngine: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for Section Entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Rotate Cards Loop
  useEffect(() => {
    if (isHovering) return; // Pause rotation on hover

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovering]);

  // Flashlight Effect Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <section 
        ref={sectionRef} 
        className="relative w-full py-24 md:py-32 container mx-auto px-4 md:px-8 z-20 overflow-hidden"
    >
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Column: Typography */}
            <div className={`flex-1 max-w-2xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 -translate-x-12 blur-sm'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                    </span>
                    <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Agency V.2.0</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-sans font-light text-white leading-[1.1] mb-8">
                    STOP GUESSING. <br />
                    START <span className="font-serif italic text-brand-green">SCALING.</span>
                </h2>
                
                <p className="text-xl text-gray-400 font-light leading-relaxed mb-10 border-l border-white/10 pl-6">
                    Leverage our <span className="text-white font-medium">Growth Engine</span> to turn unpredictable content into a 
                    predictable revenue machine. 
                    <br/><br/>
                    We combine high-end production with data-backed distribution strategies. No fluff. Just performance.
                </p>

                {/* Updated Classy/Energetic Buttons */}
                <div className="flex flex-wrap items-center gap-6">
                    
                    {/* Primary Button: Beam + Glow */}
                    <button className="group relative px-8 py-4 bg-[#0A0A0A] text-white font-bold rounded-full overflow-hidden border border-white/10 transition-all duration-500 hover:scale-105 hover:border-brand-green/50 hover:shadow-[0_0_50px_rgba(0,255,163,0.25)]">
                        
                        {/* Continuous Beam Animation */}
                        <div className="absolute top-0 bottom-0 w-[60px] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-shimmer-beam"></div>
                        
                        {/* Hover Fill */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <span className="relative flex items-center gap-3 z-10 group-hover:text-brand-green transition-colors duration-300">
                            START SCALING
                            <iconify-icon icon="solar:rocket-2-bold" width="20" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></iconify-icon>
                        </span>
                    </button>

                    {/* Secondary Button: Classy Mono Link */}
                    <a href="#case-studies" className="group relative px-8 py-4 text-gray-400 border border-white/10 rounded-full overflow-hidden hover:text-white hover:border-white/30 transition-all duration-300">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative font-mono text-sm tracking-widest flex items-center gap-2">
                            / OUR_PROCESS
                             <div className="h-[1px] w-0 bg-brand-green group-hover:w-8 transition-all duration-300"></div>
                        </span>
                    </a>
                </div>
            </div>

            {/* Right Column: The Big Rotating Card */}
            <div className={`flex-1 w-full max-w-xl perspective-[1000px] transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-12 blur-sm'}`}>
                <div 
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="flashlight-card group relative aspect-[4/3] md:aspect-square lg:aspect-[5/4] bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,255,163,0.15)] hover:border-brand-green/30"
                >
                    {/* Flashlight Layers */}
                    <div className="flashlight-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flashlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

                    {/* Background Grid/Noise */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none"></div>

                    {/* Card Content - Rotates */}
                    <div className="relative h-full w-full p-8 md:p-12 flex flex-col justify-between">
                        
                        {/* Header of Card */}
                        <div className="flex justify-between items-start z-10">
                            <iconify-icon icon="solar:chart-2-bold" width="32" className="text-white/20"></iconify-icon>
                            <div className="flex gap-1">
                                {stats.map((_, idx) => (
                                    <div 
                                        key={idx} 
                                        className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeIndex ? 'w-8 bg-brand-green' : 'w-1.5 bg-white/10'}`}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* Main Stats Rotation */}
                        <div className="relative flex-grow flex items-center justify-center my-8">
                            {stats.map((stat, index) => (
                                <div 
                                    key={stat.id}
                                    className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                                        index === activeIndex 
                                        ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                                        : 'opacity-0 translate-y-8 scale-95 blur-sm'
                                    }`}
                                >
                                    <div className={`mb-6 p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md ${stat.color}`}>
                                        <iconify-icon icon={stat.icon} width="48"></iconify-icon>
                                    </div>
                                    <h3 className="text-6xl md:text-8xl font-sans font-light text-white tracking-tighter mb-2">
                                        {stat.value}
                                    </h3>
                                    <p className="font-mono text-brand-green tracking-[0.2em] uppercase text-sm md:text-base mb-6">
                                        {stat.label}
                                    </p>
                                    <p className="text-gray-400 max-w-xs mx-auto leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Footer of Card */}
                        <div className="z-10 flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase tracking-wider border-t border-white/5 pt-6">
                            <span>Growth Engine</span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                                Active
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
        <style>{`
            @keyframes shimmer-beam {
                0% { left: -100%; opacity: 0; }
                50% { opacity: 0.5; }
                100% { left: 200%; opacity: 0; }
            }
            .animate-shimmer-beam {
                animation: shimmer-beam 4s infinite linear;
            }
        `}</style>
    </section>
  );
};

export default NeuralEngine;