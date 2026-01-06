import React, { useRef, useEffect, useState } from 'react';

const cards = [
  {
    icon: "solar:calendar-mark-linear",
    title: "Maintain Consistency",
    text: "Show up regularly without burning out. We help you build sustainable systems.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "group-hover:border-rose-500/50"
  },
  {
    icon: "solar:graph-new-up-linear",
    title: "Understand Trends",
    text: "Leverage what's working without chasing everything. Strategic trend adoption.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/50"
  },
  {
    icon: "solar:gem-linear",
    title: "Improve Presentation",
    text: "Clean, premium, natural aesthetics that elevate your brand instantly.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/50"
  },
  {
    icon: "solar:lightbulb-minimalistic-linear",
    title: "Know Your True Self",
    text: "This part matters most. Authentic content starts with self-understanding.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50"
  }
];

const CatalystSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const cards = containerRef.current.querySelectorAll('.catalyst-card');
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
        ref={sectionRef}
        className="relative w-full py-24 md:py-32 container mx-auto px-4 md:px-8 z-20"
    >
        <div ref={containerRef} onMouseMove={handleMouseMove} className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: Typography */}
            <div className="flex-1 lg:sticky lg:top-32 h-fit">
                <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white leading-[1.2] mb-8">
                        If You're Here, <br />
                        <span className="text-gray-500">We Don't Need to Explain Why Content Matters,</span> <br />
                        <span className="font-serif italic text-brand-green">you're already...</span>
                    </h2>

                    <div className="space-y-4 mb-10 pl-6 border-l border-white/10">
                        {["Smart enough", "Skilled enough", "Self-aware enough"].map((item, i) => (
                            <div 
                                key={i} 
                                className={`flex items-center gap-3 transition-all duration-700 delay-[${i * 200}ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_10px_#00ffa3]"></div>
                                <span className="text-xl text-white font-light tracking-wide">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            You understand the landscape. You see the opportunity...
                        </p>
                        <p className="text-white text-xl font-medium border-l-2 border-brand-green pl-4 py-2 bg-gradient-to-r from-white/5 to-transparent rounded-r-lg">
                            What you might need is the right catalyst to transform potential into results—
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Column: Cards with "Drop Down" Effect */}
            <div className="flex-1 w-full">
                {/* Horizontal Divider Line that triggers the drop */}
                <div className={`w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green to-transparent mb-8 transition-all duration-1000 ${isVisible ? 'scale-x-100 opacity-50' : 'scale-x-0 opacity-0'}`}></div>

                <div className="grid gap-4">
                    {cards.map((card, idx) => (
                        <div 
                            key={idx}
                            className={`catalyst-card group relative p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 transition-all duration-700 ease-out hover:border-brand-green/30 hover:bg-white/[0.02] overflow-hidden ${
                                isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 -translate-y-8'
                            }`}
                            style={{ transitionDelay: `${idx * 150 + 500}ms` }}
                        >
                            {/* Flashlight/Glow Effects */}
                            <div className="flashlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                                {/* Icon Container */}
                                <div className={`flex-shrink-0 w-16 h-16 rounded-full ${card.bg} border border-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    <iconify-icon icon={card.icon} width="32" className={card.color}></iconify-icon>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-green transition-colors">{card.title}</h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {card.text}
                                    </p>
                                </div>

                                {/* Arrow (Hidden initially, reveals on hover) */}
                                <div className="absolute right-6 top-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    <iconify-icon icon="solar:arrow-right-linear" width="24" className="text-white/20 group-hover:text-brand-green"></iconify-icon>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  );
};

export default CatalystSection;