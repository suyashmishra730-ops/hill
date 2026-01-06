import React, { useRef, useEffect, useState } from 'react';

const TransformationSection: React.FC = () => {
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
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-20">
        
        {/* Left Content */}
        <div className={`flex-1 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-10 leading-tight">
                We're not gonna change You. <br />
                <span className="text-gray-500 italic">We Act as Your Catalyst.</span>
            </h2>

            <div className="pl-6 border-l-2 border-brand-green/50 mb-10">
                <h3 className="text-2xl text-white font-medium mb-6">You Stay You</h3>
                <ul className="space-y-4">
                    {[
                        { text: "Your voice", icon: "solar:microphone-linear" },
                        { text: "Your vision", icon: "solar:eye-linear" },
                        { text: "Your authentic self", icon: "solar:user-heart-linear" }
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-gray-300 font-light text-lg group">
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                                <iconify-icon icon={item.icon} className="text-brand-green text-lg"></iconify-icon>
                            </div>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>

            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                We simply help you show up better, more consistently, and with greater strategic clarity. 
                Think of us as the <span className="text-white font-medium border-b border-brand-green/30">infrastructure</span> that supports your creativity.
            </p>
        </div>

        {/* Right Image */}
        <div className={`flex-1 w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                {/* Image - Authentic Team / Safe Space Vibe */}
                <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop" 
                    alt="Authentic Team Collaboration" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Badge Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                     <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-start gap-4">
                             <div className="p-3 bg-brand-green/10 rounded-full border border-brand-green/20">
                                <iconify-icon icon="solar:shield-check-linear" className="text-brand-green text-2xl"></iconify-icon>
                             </div>
                             <div>
                                <h4 className="text-white font-medium text-lg">Your Safe Space</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mt-1">
                                    We protect your authenticity while scaling your impact. No scripts, just strategy.
                                </p>
                             </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={`relative border-t border-white/10 pt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex items-start gap-4 max-w-2xl">
                <iconify-icon icon="solar:quote-up-linear" className="text-brand-green text-3xl opacity-50 flex-shrink-0"></iconify-icon>
                <p className="text-gray-400 font-serif italic text-lg lg:text-xl">
                    The content is yours. The success is yours. We just help you get there faster.
                </p>
            </div>

            {/* UPDATED BUTTON: Green + Beam Animation */}
            <a 
                href="https://calendly.com/suyashmishra730/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-[#050505] border border-brand-green/30 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,255,163,0.15)] inline-flex"
            >
                 <div className="absolute top-0 bottom-0 w-[40px] bg-gradient-to-r from-transparent via-brand-green/40 to-transparent skew-x-[-20deg] animate-[border-beam_3s_infinite_linear]"></div>
                 <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 
                 <span className="relative flex items-center gap-3 z-10 transition-colors group-hover:text-brand-green">
                    Start Your Transformation
                    <iconify-icon icon="solar:arrow-right-linear" width="20" className="transition-transform group-hover:translate-x-1"></iconify-icon>
                </span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;