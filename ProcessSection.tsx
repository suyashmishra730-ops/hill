import React, { useRef, useEffect, useState } from 'react';

const steps = [
  {
    id: 1,
    icon: "solar:users-group-rounded-linear",
    title: "Discovery Call",
    desc: "We start with an honest conversation about your goals, challenges, and vision. No pressure, just clarity.",
  },
  {
    id: 2,
    icon: "solar:compass-linear",
    title: "Strategy Development",
    desc: "Custom content strategy only for your unique voice and audience. Data-informed, creativity-driven.",
  },
  {
    id: 3,
    icon: "solar:rocket-2-linear",
    title: "Consistent Execution",
    desc: "We help you implement and maintain momentum with systems designed for sustainable growth.",
  },
  {
    id: 4,
    icon: "solar:chart-2-linear",
    title: "Optimize & Scale",
    desc: "Continuously refine based on performance data. Double down on what works, adjust what doesn't.",
  }
];

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
        ref={sectionRef} 
        className="relative w-full py-24 md:py-32 container mx-auto px-4 md:px-8 z-20"
    >
      {/* Header */}
      <div className={`max-w-4xl mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-6">
          The Process: <span className="text-gray-500 font-serif italic">How We Work Together</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-y-24">
        {steps.map((step, idx) => (
          <div 
            key={step.id}
            className={`group relative flex flex-col gap-6 transition-all duration-1000`}
            style={{ 
                transitionDelay: `${idx * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) blur(0)' : 'translateY(20px) blur(10px)'
            }}
          >
            {/* Visual Bar Component with Beam */}
            <div className="relative h-14 flex items-center">
                {/* Background Track */}
                <div className="absolute left-8 right-0 h-3 bg-white/5 rounded-r-full overflow-hidden">
                    {/* The Traveling Beam */}
                    <div className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-brand-green/40 to-transparent -skew-x-12 blur-sm animate-process-beam opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Constant Pulse for visibility */}
                    <div className="absolute top-0 bottom-0 w-[100px] bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_3s_infinite] opacity-50"></div>
                </div>

                {/* Icon Container */}
                <div className="absolute left-0 w-16 h-16 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-brand-green/50 group-hover:shadow-[0_0_20px_rgba(0,255,163,0.2)] transition-all duration-500">
                     <div className="absolute inset-0 bg-brand-green/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                     <iconify-icon icon={step.icon} width="28" className="text-gray-400 group-hover:text-brand-green transition-colors duration-300 relative z-10"></iconify-icon>
                </div>
            </div>

            {/* Text Content */}
            <div className="pl-4 pr-8">
                <h3 className="text-2xl text-white font-medium mb-3 group-hover:text-brand-green transition-colors duration-300">
                    {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-lg">
                    {step.desc}
                </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes process-beam {
            0% { left: -40%; }
            100% { left: 140%; }
        }
        .animate-process-beam {
            animation: process-beam 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;