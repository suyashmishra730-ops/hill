import React, { useEffect, useRef } from 'react';

const CountUp = ({ to, suffix = '', decimals = 0, duration = 2500 }: { to: number, suffix?: string, decimals?: number, duration?: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const animated = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !animated.current) {
                animated.current = true;
                let start = 0;
                
                const animate = (timestamp: number) => {
                    if (!start) start = timestamp;
                    const progress = Math.min((timestamp - start) / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 4);
                    
                    const current = to * ease;
                    element.textContent = current.toFixed(decimals) + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };
                requestAnimationFrame(animate);
            }
        }, { threshold: 0.5 });

        observer.observe(element);
        return () => observer.disconnect();
    }, [to, suffix, decimals, duration]);

    return <span ref={ref}>0{suffix}</span>;
};

const Performers: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      if (rect.top < viewportHeight + 200 && rect.bottom > -200) {
        const yPos = rect.top * 0.15; 
        sectionRef.current.style.setProperty('--parallax-y', `${yPos}px`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
        ref={sectionRef} 
        className="relative w-full py-24 md:py-32 container mx-auto px-4 md:px-8 z-20"
    >
      
      {/* Decorative Vertical Lines */}
      <div className="absolute inset-y-0 left-4 md:left-8 border-l border-white/5 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-4 md:right-8 border-r border-white/5 pointer-events-none"></div>

      {/* Text Content - Simplified */}
      <div className="max-w-4xl mb-16 opacity-0 animate-[fade-in-up-blur_0.8s_cubic-bezier(0.2,0.8,0.2,1)_both]" style={{ animationDelay: '0.1s' }}>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
          The Proof Is In The Playback. <br />
          <span className="text-gray-500 italic">Real Reels. Real Reach.</span>
        </h2>
        <p className="text-lg text-gray-400 font-light max-w-2xl">
           We don't just talk about viral growth. We engineer it. Here is what consistent execution looks like.
        </p>
      </div>

      {/* Holographic Reel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        
        {/* REEL 01: Happy New Year */}
        <a 
            href="https://www.instagram.com/p/DS7meLMDkCe/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[9/16] overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 opacity-0 animate-[fade-in-up-blur_0.8s_cubic-bezier(0.2,0.8,0.2,1)_both] hover:border-brand-green/50 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(0,255,163,0.2)] transition-all duration-500 ease-out cursor-pointer"
            style={{ animationDelay: '0.3s' }}
        >
            <div className="absolute top-4 left-4 z-20 font-mono text-xs text-white/60 group-hover:text-brand-green transition-colors font-bold tracking-widest drop-shadow-md">01</div>
            
            {/* Open Indicator */}
            <div className="absolute top-4 right-4 z-20">
                 <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full group-hover:bg-brand-green group-hover:text-black group-hover:border-brand-green transition-all duration-300">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase">OPEN</span>
                    <iconify-icon icon="solar:arrow-right-up-linear" width="10"></iconify-icon>
                 </div>
            </div>

            <img 
              src="https://image2url.com/r2/bucket3/images/1767660230193-6b8b8df9-98f4-4323-ac71-5ace1614769a.png" 
              alt="Celebration Fireworks"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out z-0"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black z-10 group-hover:scale-105 transition-transform duration-700 ease-out">
                <div 
                    className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-transparent will-change-transform mix-blend-overlay"
                    style={{ transform: 'translateY(var(--parallax-y, 0px)) scale(1.4)' }}
                ></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                <div className="absolute inset-0 backdrop-blur-xl mask-image-gradient-to-t"></div>
                <div className="relative flex flex-col gap-1">
                    <div className="flex items-center gap-2 mb-1">
                        <iconify-icon icon="solar:fire-bold" className="text-orange-500 text-sm animate-pulse"></iconify-icon>
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Viral Hit</span>
                    </div>
                    <div className="font-serif text-3xl text-white drop-shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all">
                        <CountUp to={16.2} suffix="M" decimals={1} />
                        <span className="text-lg text-gray-500 font-sans ml-2">Views</span>
                    </div>
                </div>
            </div>
        </a>

        {/* REEL 02: Christmas */}
        <a 
            href="https://www.instagram.com/p/DSLNQrcDyd8/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[9/16] overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 opacity-0 animate-[fade-in-up-blur_0.8s_cubic-bezier(0.2,0.8,0.2,1)_both] hover:border-brand-green/50 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(0,255,163,0.2)] transition-all duration-500 ease-out cursor-pointer"
            style={{ animationDelay: '0.4s' }}
        >
            <div className="absolute top-4 left-4 z-20 font-mono text-xs text-white/60 group-hover:text-brand-green transition-colors font-bold tracking-widest drop-shadow-md">02</div>

             {/* Open Indicator */}
             <div className="absolute top-4 right-4 z-20">
                 <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full group-hover:bg-brand-green group-hover:text-black group-hover:border-brand-green transition-all duration-300">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase">OPEN</span>
                    <iconify-icon icon="solar:arrow-right-up-linear" width="10"></iconify-icon>
                 </div>
            </div>

            <img 
              src="https://image2url.com/r2/bucket1/images/1767659956159-14b25f9d-b00e-4aa1-b4ae-0d63c6938d78.png" 
              alt="Christmas Atmosphere"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out z-0"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black z-10 group-hover:scale-105 transition-transform duration-700 ease-out">
                 <div 
                    className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-transparent to-gold-500/10 will-change-transform mix-blend-overlay"
                    style={{ transform: 'translateY(var(--parallax-y, 0px)) scale(1.4)' }}
                 ></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                <div className="absolute inset-0 backdrop-blur-xl mask-image-gradient-to-t"></div>
                <div className="relative flex flex-col gap-1">
                     <div className="flex items-center gap-2 mb-1">
                        <iconify-icon icon="solar:star-bold" className="text-yellow-500 text-sm"></iconify-icon>
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Seasonal Trend</span>
                    </div>
                    <div className="font-serif text-3xl text-white drop-shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all">
                        <CountUp to={10.1} suffix="M" decimals={1} />
                        <span className="text-lg text-gray-500 font-sans ml-2">Views</span>
                    </div>
                </div>
            </div>
        </a>

        {/* REEL 03: Saint Yachting Collab */}
        <a 
            href="https://www.instagram.com/reel/DNmwDWzsXXL/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[9/16] overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 opacity-0 animate-[fade-in-up-blur_0.8s_cubic-bezier(0.2,0.8,0.2,1)_both] hover:border-brand-green/50 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(0,255,163,0.2)] transition-all duration-500 ease-out cursor-pointer"
            style={{ animationDelay: '0.5s' }}
        >
            <div className="absolute top-4 left-4 z-20 font-mono text-xs text-white/60 group-hover:text-brand-green transition-colors font-bold tracking-widest drop-shadow-md">03</div>

             {/* Open Indicator */}
             <div className="absolute top-4 right-4 z-20">
                 <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full group-hover:bg-brand-green group-hover:text-black group-hover:border-brand-green transition-all duration-300">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase">OPEN</span>
                    <iconify-icon icon="solar:arrow-right-up-linear" width="10"></iconify-icon>
                 </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1000&auto=format&fit=crop" 
              alt="Saint Yachting Greece"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out z-0"
            />

             <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black z-10 group-hover:scale-105 transition-transform duration-700 ease-out">
                 <div 
                    className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-transparent to-transparent will-change-transform mix-blend-overlay"
                    style={{ transform: 'translateY(var(--parallax-y, 0px)) scale(1.4)' }}
                 ></div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 group-hover:opacity-20 transition-opacity duration-500">
                <h3 className="text-3xl text-white font-serif tracking-[0.3em] font-light drop-shadow-lg">SAĬNT</h3>
                <p className="text-[10px] text-gray-300 tracking-[0.6em] uppercase mt-2 ml-1 drop-shadow-md">YACHTING</p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                <div className="absolute inset-0 backdrop-blur-xl mask-image-gradient-to-t"></div>
                <div className="relative flex flex-col gap-1">
                     <div className="flex items-center gap-2 mb-1">
                        <iconify-icon icon="solar:crown-star-bold" className="text-amber-400 text-sm animate-pulse"></iconify-icon>
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Paid Partnership</span>
                    </div>
                    <div className="font-serif text-3xl text-white drop-shadow-lg">
                        <CountUp to={5.8} suffix="M" decimals={1} />
                        <span className="text-lg text-gray-500 font-sans ml-2">Views</span>
                    </div>
                </div>
            </div>
        </a>

        {/* REEL 04: Clear Sky Resorts */}
        <a 
            href="https://www.instagram.com/clearskyresorts/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[9/16] overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 opacity-0 animate-[fade-in-up-blur_0.8s_cubic-bezier(0.2,0.8,0.2,1)_both] hover:border-brand-green/50 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(0,255,163,0.2)] transition-all duration-500 ease-out cursor-pointer"
            style={{ animationDelay: '0.6s' }}
        >
            <div className="absolute top-4 left-4 z-20 font-mono text-xs text-white/60 group-hover:text-brand-green transition-colors font-bold tracking-widest drop-shadow-md">04</div>

             {/* Open Indicator */}
             <div className="absolute top-4 right-4 z-20">
                 <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full group-hover:bg-brand-green group-hover:text-black group-hover:border-brand-green transition-all duration-300">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase">OPEN</span>
                    <iconify-icon icon="solar:arrow-right-up-linear" width="10"></iconify-icon>
                 </div>
            </div>

            <img 
              src="https://image2url.com/r2/bucket2/images/1767660405482-5ecb0f24-5d41-48ca-b084-9911aa196395.png" 
              alt="Clear Sky Resorts Domes"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out z-0"
            />

             <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black z-10 group-hover:scale-105 transition-transform duration-700 ease-out">
                 <div 
                    className="absolute inset-0 bg-gradient-to-tr from-sky-950 via-transparent to-transparent will-change-transform mix-blend-overlay"
                    style={{ transform: 'translateY(var(--parallax-y, 0px)) scale(1.4)' }}
                 ></div>
            </div>

             <div className="absolute inset-0 flex flex-col items-center justify-center z-20 group-hover:opacity-20 transition-opacity duration-500">
                <h3 className="text-2xl text-white font-serif tracking-[0.2em] font-light drop-shadow-lg text-center leading-tight">
                    CLEAR SKY<br/><span className="text-sm font-sans font-normal tracking-[0.4em] text-gray-300">RESORTS</span>
                </h3>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                <div className="absolute inset-0 backdrop-blur-xl mask-image-gradient-to-t"></div>
                <div className="relative flex flex-col gap-1">
                     <div className="flex items-center gap-2 mb-1">
                        <iconify-icon icon="solar:globe-bold" className="text-cyan-400 text-sm animate-pulse"></iconify-icon>
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Viral Destination</span>
                    </div>
                    <div className="font-serif text-3xl text-white drop-shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all">
                        <CountUp to={342} suffix="k" decimals={0} />
                        <span className="text-lg text-gray-500 font-sans ml-2">Followers</span>
                    </div>
                </div>
            </div>
        </a>

      </div>
    </section>
  );
};

export default Performers;