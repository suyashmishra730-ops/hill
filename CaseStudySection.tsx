import React, { useRef, useEffect, useState } from 'react';

// Internal CountUp Component
const CountUp = ({ start = 0, to, duration = 2500, suffix = '', decimals = 0 }: { start?: number, to: number, duration?: number, suffix?: string, decimals?: number }) => {
  const [count, setCount] = useState(start);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let startTime: number | null = null;
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            setCount(start + (to - start) * ease);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      }, { threshold: 0.5 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [to, start, duration]);

  return <span ref={elementRef}>{count.toLocaleString(undefined, { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}{suffix}</span>;
};

const PhoneFrame: React.FC<{ 
  image: string; 
  label: string; 
  subLabel: string;
  isAfter?: boolean;
}> = ({ image, label, subLabel, isAfter = false }) => (
  <div className={`relative w-[280px] md:w-[320px] aspect-[9/19] rounded-[3rem] border-8 ${isAfter ? 'border-brand-green/30 shadow-[0_0_50px_rgba(0,255,163,0.15)]' : 'border-[#222]'} bg-black overflow-hidden z-10 transition-transform duration-700 hover:scale-[1.02]`}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-20"></div>
    <div className="absolute top-2 left-6 right-6 flex justify-between text-[10px] font-medium text-white z-20 opacity-80">
      <span>9:41</span>
      <div className="flex gap-1">
        <iconify-icon icon="solar:signal-bold"></iconify-icon>
        <iconify-icon icon="solar:wifi-bold"></iconify-icon>
        <iconify-icon icon="solar:battery-full-bold"></iconify-icon>
      </div>
    </div>
    <img src={image} alt={label} className={`absolute inset-0 w-full h-full object-cover z-0 ${!isAfter && 'grayscale opacity-70'} transition-all duration-700`} />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none z-10"></div>
    <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-max max-w-[90%] bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-center z-20 ${isAfter ? 'border-brand-green/50' : ''}`}>
        <div className={`text-xs font-mono uppercase tracking-widest ${isAfter ? 'text-brand-green' : 'text-gray-400'}`}>{label}</div>
        <div className="text-white font-serif italic text-lg">{subLabel}</div>
    </div>
  </div>
);

const CaseStudySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      }, { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-32 container mx-auto px-4 md:px-8 z-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
            <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">Case Study: Sondra Gorham</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            The Quantum Leap
        </h2>
        
        {/* Highlighted Key Metric */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-2xl md:text-3xl font-light text-gray-300">
            <span>16k</span>
            <iconify-icon icon="solar:arrow-right-linear" className="text-brand-green"></iconify-icon>
            <span className="text-white font-semibold">185k Followers</span>
            <span className="text-sm px-3 py-1 bg-white/10 rounded-full border border-white/10 text-brand-green ml-2 font-mono">IN 4 MONTHS</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-32 min-h-[600px]">
        
        {/* --- LEFT: BEFORE STATE --- */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <PhoneFrame 
                image="https://image2url.com/r2/bucket3/images/1767649025713-9869917f-7f07-400c-ba5d-d6047b630809.jpeg"
                label="Month 0"
                subLabel="16.3k Followers"
            />
        </div>

        {/* --- CENTER: DATA STORY --- */}
        <div className="relative z-20 flex flex-col items-center">
            
            {/* Massive Growth Percentage */}
            <div className="text-center mb-8">
                 <div className={`text-[6rem] md:text-[9rem] font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-brand-green to-emerald-900 leading-none tracking-tighter transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    1055%
                </div>
                <div className="text-white font-serif italic text-2xl md:text-3xl -mt-4 opacity-80">Insane Growth</div>
            </div>

            {/* Dark Beam Button */}
            <button className="group relative px-10 py-5 bg-[#050505] text-white font-bold rounded-full overflow-hidden border border-white/10 hover:border-brand-green/50 transition-all shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(0,255,163,0.1)]">
                {/* Beam Animation */}
                <div className="absolute top-0 bottom-0 w-[40px] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-[border-beam_3s_infinite_linear]"></div>
                
                {/* Gradient Border Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                <span className="relative flex items-center gap-3 z-10">
                    Read Full Case Study
                    <iconify-icon icon="solar:arrow-right-up-linear" width="20" className="text-brand-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></iconify-icon>
                </span>
            </button>

        </div>

        {/* --- RIGHT: AFTER STATE --- */}
        <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <PhoneFrame 
                image="https://image2url.com/r2/bucket3/images/1767649098703-773d9f9b-2707-4e56-9042-8ed7a09c3c2b.png"
                label="Month 4"
                subLabel="185k Followers"
                isAfter={true}
            />
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-brand-green text-black px-4 py-2 rounded-lg font-bold shadow-[0_0_20px_rgba(0,255,163,0.4)] transform rotate-6 animate-pulse z-30">
                VIRAL STATUS
            </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudySection;