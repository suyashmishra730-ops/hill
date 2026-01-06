import React, { useRef, useEffect, useState } from 'react';

const steps = [
  {
    id: 0,
    title: "THE PROOF",
    subtitle: "CASE STUDY: 8942",
    desc: "A breakdown of how we engineered 16.2 Million views.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
    stat: "START",
  },
  {
    id: 1,
    title: "THE HOOK",
    subtitle: "SECONDS 0-3",
    desc: "We deployed a high-contrast visual pattern interrupt combined with a controversial statement to arrest the scroll immediately.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    stat: "85% Retention",
  },
  {
    id: 2,
    title: "THE STORY",
    subtitle: "SECONDS 3-15",
    desc: "Using the 'Open Loop' narrative structure, we promised a payoff that kept users watching through the mid-roll dip.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    stat: "60% Completion",
  },
  {
    id: 3,
    title: "THE GROWTH",
    subtitle: "ALGORITHM TRIGGER",
    desc: "The share-to-save ratio hit 1:4, signaling the algorithm to push this content to non-followers globally.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    stat: "+120k Followers",
  },
  {
    id: 4,
    title: "THE RESULT",
    subtitle: "FINAL IMPACT",
    desc: "16.2 Million Views. One single reel. This isn't luck. It's a replicable science.",
    image: "https://images.unsplash.com/photo-1535378437323-9555f3e7f5bb?q=80&w=1000&auto=format&fit=crop",
    stat: "16.2M Views",
  },
];

const ViralAnatomy: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll Logic for Horizontal Movement
  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current || !stickyRef.current) return;
      
      const { top } = targetRef.current.getBoundingClientRect();
      const height = targetRef.current.getBoundingClientRect().height;
      const stickyHeight = stickyRef.current.getBoundingClientRect().height;
      
      const scrollableDistance = height - stickyHeight;
      let progress = -top / scrollableDistance;
      progress = Math.max(0, Math.min(progress, 1));
      
      setScrollProgress(progress);
      
      const totalSlides = steps.length;
      const currentIndex = Math.min(Math.floor(progress * totalSlides + 0.2), totalSlides - 1);
      setActiveIndex(currentIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const cards = document.querySelectorAll('.flashlight-card');
    cards.forEach((card) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty('--x', `${x}px`);
      (card as HTMLElement).style.setProperty('--y', `${y}px`);
    });
  };

  const translateX = -(scrollProgress * ((steps.length - 1) * 100));

  return (
    <section className="relative w-full bg-[#050505]">
        
        {/* --- PART 1: HEADER & STATS (Screenshot Replica) --- */}
        <div className="relative pt-24 pb-12 md:pt-32 md:pb-24 container mx-auto px-4 md:px-8 z-20">
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-white/10 relative">
                {/* Decoration: Top/Bottom faint lines */}
                <div className="absolute top-[-1px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Decoration: Golden/Amber Light Rings (Simulated) */}
                <div className="absolute bottom-[-100px] left-1/4 w-1/2 h-[200px] bg-amber-500/5 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>

                {/* Stat 1 */}
                <div className="py-8 md:py-12 px-6 flex flex-col items-start border-white/10 md:border-r relative group">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-3 tracking-tighter group-hover:text-brand-green transition-colors duration-500">+400%</span>
                    <span className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase flex items-center gap-2">
                        Reach Lift
                        <iconify-icon icon="solar:graph-up-linear" className="text-brand-green text-sm opacity-0 group-hover:opacity-100 transition-opacity"></iconify-icon>
                    </span>
                </div>

                {/* Stat 2 */}
                <div className="py-8 md:py-12 px-6 flex flex-col items-start border-white/10 md:border-r relative group">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-3 tracking-tighter group-hover:text-brand-green transition-colors duration-500">12.5k</span>
                    <span className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase flex items-center gap-2">
                        Leads Generated
                        <iconify-icon icon="solar:users-group-rounded-linear" className="text-brand-green text-sm opacity-0 group-hover:opacity-100 transition-opacity"></iconify-icon>
                    </span>
                </div>

                {/* Stat 3 */}
                <div className="py-8 md:py-12 px-6 flex flex-col items-start border-white/10 relative group">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-3 tracking-tighter group-hover:text-brand-green transition-colors duration-500">10x</span>
                    <span className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase flex items-center gap-2">
                        Execution Speed
                        <iconify-icon icon="solar:bolt-linear" className="text-brand-green text-sm opacity-0 group-hover:opacity-100 transition-opacity"></iconify-icon>
                    </span>
                </div>
            </div>

            {/* Main Headline */}
            <div className="mt-24 md:mt-32 max-w-6xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] text-white font-sans font-light leading-[1.2] md:leading-[1.1] tracking-tight">
                    STOP GUESSING. START{' '}
                    <span className="inline-flex align-middle items-center gap-2 border border-white/10 bg-white/5 px-4 py-1 rounded-full text-lg md:text-2xl font-mono tracking-wider backdrop-blur-sm">
                        <iconify-icon icon="solar:settings-linear" className="animate-[spin_4s_linear_infinite] text-brand-green"></iconify-icon>
                        <span className="text-gray-200">SCALING</span>
                    </span>{' '}
                    WITH OUR <br className="hidden md:block" />
                    <span className="relative inline-block my-4 mx-2">
                        <span className="absolute inset-0 bg-white transform -skew-x-3 rounded-sm shadow-[0_0_30px_rgba(255,255,255,0.2)]"></span>
                        <span className="relative z-10 text-black font-bold px-6 py-1 tracking-tighter flex items-center gap-3">
                             NEURAL ENGINE
                             <iconify-icon icon="solar:cpu-bolt-bold" className="text-black"></iconify-icon>
                        </span>
                    </span>
                    THAT TURNS CONTENT INTO <br className="hidden md:block" />
                    <span className="text-gray-500 font-serif italic flex flex-wrap items-center justify-center gap-3 mt-2">
                        PREDICTABLE REVENUE.
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                             <iconify-icon icon="solar:dollar-minimalistic-linear" className="text-2xl text-brand-green"></iconify-icon>
                        </div>
                    </span>
                </h2>
                
                {/* Down Arrow Hint */}
                <div className="mt-20 flex justify-center animate-bounce">
                    <iconify-icon icon="solar:arrow-down-linear" className="text-white/30 text-3xl"></iconify-icon>
                </div>
            </div>
        </div>

        {/* --- PART 2: THE ANATOMY (Sticky Scroll) --- */}
        <div 
            ref={targetRef} 
            className="relative w-full z-30"
            style={{ height: `${steps.length * 100}vh` }}
        >
            <div 
                ref={stickyRef}
                className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[#050505] border-t border-white/5"
                onMouseMove={handleMouseMove}
            >
                 {/* Progress Indicator */}
                 <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 z-50">
                    <div className="h-full bg-brand-green shadow-[0_0_10px_#00ffa3] transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>
                 </div>

                {/* Horizontal Track */}
                <div 
                className="flex h-full w-full will-change-transform"
                style={{ transform: `translateX(${translateX}vw)` }}
                >
                {steps.map((step, index) => {
                    const isActive = activeIndex === index;
                    
                    return (
                    <div 
                        key={step.id} 
                        className="w-screen h-full flex-shrink-0 flex items-center justify-center relative p-4 md:p-8"
                    >
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none border-r border-white/5"></div>

                        {/* Slide Content */}
                        <div className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-20 max-w-7xl mx-auto transition-all duration-700 ease-out ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-30 translate-y-10 scale-95'}`}>
                        
                        {/* Text Side */}
                        <div className="flex-1 text-center md:text-left order-2 md:order-1 max-w-lg">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <span className="h-[1px] w-12 bg-brand-green"></span>
                            <span className="font-mono text-xs text-brand-green tracking-[0.3em] uppercase">
                                {step.subtitle}
                            </span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-none">
                            {step.title}
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l border-white/10 pl-6">
                            {step.desc}
                            </p>

                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-brand-green/30 transition-colors">
                                <iconify-icon icon="solar:chart-square-bold" className="text-brand-green text-lg"></iconify-icon>
                                <span className="font-mono text-white tracking-widest text-sm uppercase">{step.stat}</span>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="order-1 md:order-2 flex-shrink-0">
                            <div className="relative w-[300px] md:w-[450px] aspect-[3/4] group perspective-[1000px]">
                            
                            {/* Card */}
                            <div className="flashlight-card relative w-full h-full rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl">
                                <div className="absolute inset-0 flashlight-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 p-[1px] flashlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                                <img 
                                src={step.image} 
                                alt={step.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700"
                                />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                
                                {/* UI Decor */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="h-[1px] w-full bg-white/20 mb-2">
                                        <div className="h-full bg-brand-green w-2/3"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                                        <span>Analysis</span>
                                        <span>Complete</span>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>

                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
        </div>
    </section>
  );
};

export default ViralAnatomy;