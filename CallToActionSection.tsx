import React, { useRef, useEffect, useState } from 'react';

const CallToActionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section 
        ref={sectionRef} 
        className="relative w-full py-24 md:py-32 container mx-auto px-4 md:px-8 z-20"
    >
      {/* Background Ambience - Enhanced */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-green/5 to-transparent pointer-events-none"></div>

      <div className="relative rounded-3xl bg-black border border-white/10 overflow-hidden shadow-2xl">
        {/* Internal Gradients */}
        <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] bg-brand-green/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen animate-pulse duration-[5s]"></div>
        
        <div className="flex flex-col lg:flex-row items-center relative z-10">
            
            {/* Left Content */}
            <div className="flex-1 p-8 md:p-16 lg:p-20 relative">
                {/* Decorative Line */}
                <div className="absolute left-0 top-16 w-1 h-24 bg-brand-green shadow-[0_0_20px_#00ffa3]"></div>

                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
                        Ready to Transform Your <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-green to-emerald-400">Content Game?</span>
                    </h2>

                    <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed mb-10 max-w-lg">
                        <p>
                            We believe in working with creators who are <span className="italic text-white">genuinely ready</span> to scale.
                        </p>
                        <p>
                             Let's talk about where you are, where you want to go, and whether we're the right team to help you get there.
                        </p>
                    </div>

                    <div className="flex flex-col items-start">
                        <a 
                            href="https://calendly.com/suyashmishra730/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-brand-green text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,255,163,0.4)] hover:shadow-[0_0_50px_rgba(0,255,163,0.6)] inline-flex items-center gap-3"
                        >
                            <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative flex items-center gap-3">
                                Apply for Access
                                <iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
                            </span>
                        </a>
                        <p className="text-sm text-gray-500 mt-4 font-light">
                            Limited partner slots available this quarter.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Visual - Video Call Simulation (Enhanced Blend) */}
            <div className="flex-1 w-full h-full min-h-[500px] relative overflow-hidden flex items-center justify-center p-8 lg:p-0">
                
                {/* Background Mask for blending */}
                <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black lg:to-transparent z-0"></div>

                {/* Abstract UI Representation of a Call */}
                <div 
                    className={`relative w-full max-w-md aspect-[4/5] bg-[#0A0A0A] rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-1000 delay-300 group cursor-pointer hover:border-brand-green/50 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                >
                    
                    {/* Window Header */}
                    <div className="absolute top-0 left-0 right-0 h-10 bg-black/60 backdrop-blur-md border-b border-white/5 flex items-center px-4 gap-2 z-20">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></div>
                             <span className="text-[10px] font-mono text-brand-green uppercase tracking-wider">Live_Connection</span>
                        </div>
                    </div>

                    {/* Main Video Feed (Advisor) */}
                    <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                        alt="Advisor" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-green/10 via-transparent to-black/80 mix-blend-overlay"></div>

                    {/* Incoming Call Overlay Animation */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[120%] h-[20%] bg-white/5 blur-xl rotate-12 translate-y-[-200%] group-hover:translate-y-[200%] transition-transform duration-1000 ease-in-out"></div>
                    </div>

                    {/* Active Speaker Indicator */}
                    <div className="absolute top-14 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 group-hover:border-brand-green/30 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_10px_#00ffa3]"></div>
                        <span className="text-xs text-white font-medium">Strategy Session</span>
                    </div>

                    {/* PiP (User) */}
                    <div className="absolute bottom-24 right-4 w-28 h-36 bg-neutral-900 rounded-xl border border-white/20 shadow-xl overflow-hidden group-hover:border-brand-green/50 transition-colors">
                        <img 
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80" 
                            alt="You" 
                            className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                    {/* Call Controls */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/80 backdrop-blur-xl border-t border-white/10 flex items-center justify-center gap-6 z-20">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-black hover:border-brand-green transition-all duration-300 cursor-pointer text-white">
                            <iconify-icon icon="solar:microphone-linear" width="20"></iconify-icon>
                        </div>
                         <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-black hover:border-brand-green transition-all duration-300 cursor-pointer text-white">
                            <iconify-icon icon="solar:videocamera-linear" width="20"></iconify-icon>
                        </div>
                        <a 
                            href="https://calendly.com/suyashmishra730/30min" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-[0_0_20px_rgba(0,255,163,0.4)] text-black"
                        >
                            <iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
                        </a>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;