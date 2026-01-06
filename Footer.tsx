import React, { useRef, useEffect, useState } from 'react';

const Footer: React.FC = () => {
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll('.flashlight-card');
    cards.forEach((card) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty('--x', `${x}px`);
      (card as HTMLElement).style.setProperty('--y', `${y}px`);
    });
  };

  const contactMethods = [
    {
      icon: "solar:letter-linear",
      title: "Email Us",
      value: "hello@hillmanmedia.com",
      desc: "For detailed inquiries and thoughtful conversations.",
      link: "mailto:hello@hillmanmedia.com",
      delay: "0ms"
    },
    {
      icon: "solar:chat-round-dots-linear",
      title: "WhatsApp",
      value: "Chat Now",
      desc: "Instant connection for quick questions.",
      link: "https://wa.me/15551234567",
      delay: "150ms"
    },
    {
      icon: "solar:camera-linear",
      title: "Instagram",
      value: "@hillmanmedia",
      desc: "See our latest work and behind-the-scenes.",
      link: "https://instagram.com/hillmanmedia",
      delay: "300ms"
    }
  ];

  return (
    <footer 
        id="contact" 
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative w-full py-24 container mx-auto px-4 md:px-8 z-20 border-t border-white/5 bg-[#050505] overflow-hidden"
    >
      {/* Background Ambience - Green Shift */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-brand-green/5 to-transparent pointer-events-none"></div>

      {/* Heading */}
      <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-10 blur-sm'}`}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-6">
          Ready to Start? <span className="font-serif italic text-brand-green">Let's Connect.</span>
        </h2>
        <p className="text-gray-400 text-lg font-light max-w-2xl">
          Choose the method that works best for you. We're ready when you are.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {contactMethods.map((method, idx) => (
          <a 
            key={idx}
            href={method.link}
            className={`flashlight-card group relative bg-[#0A0A0A] border border-white/10 p-8 flex flex-col h-full rounded-xl overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-brand-green/30`}
            style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: method.delay
            }}
          >
            {/* Flashlight Overlay */}
            <div className="flashlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
            <div className="flashlight-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none absolute inset-0 rounded-xl p-[1px] z-10"></div>

            {/* Beam Effect on Hover */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] opacity-50"></div>

            {/* Green Accent Bar (Static) */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-green group-hover:w-1.5 transition-all duration-300 z-20"></div>

            {/* Content */}
            <div className="relative z-20">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-green/20 group-hover:border-brand-green/50 transition-colors duration-300">
                        <iconify-icon icon={method.icon} width="24" className="text-gray-300 group-hover:text-brand-green transition-colors"></iconify-icon>
                    </div>
                    <h3 className="text-xl text-white font-medium group-hover:text-brand-green transition-colors">{method.title}</h3>
                </div>

                {/* Highlighted Value */}
                <div className="mb-6 self-start">
                    <span className="bg-brand-green/10 border border-brand-green/20 text-brand-green px-3 py-1 rounded text-sm font-mono font-medium group-hover:bg-brand-green group-hover:text-black transition-colors duration-300">
                        {method.value}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                    {method.desc}
                </p>

                {/* Hover Pop-up / Arrow */}
                <div className="absolute top-0 right-0 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-green">
                     <iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
                </div>
            </div>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className={`w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

      {/* Bottom Section */}
      <div className={`max-w-5xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-gray-300 text-xl font-light mb-10 leading-relaxed max-w-3xl">
          The landscape is moving fast. We're here to help you move faster.
        </p>

        <div className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap items-center gap-6">
                
                {/* Primary Button (Green) */}
                <a 
                    href="https://calendly.com/suyashmishra730/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-10 py-5 bg-brand-green text-black font-bold text-lg rounded-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,255,163,0.3)] hover:shadow-[0_0_50px_rgba(0,255,163,0.5)] block"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative flex items-center gap-3">
                        Apply to Work With Us
                        <iconify-icon icon="solar:calendar-add-linear" width="24"></iconify-icon>
                    </span>
                </a>

                {/* Secondary Button (Outline) */}
                <a href="https://instagram.com/hillmanmedia" target="_blank" rel="noreferrer" className="group relative px-10 py-5 bg-transparent border border-white/20 text-white font-medium text-lg rounded-xl overflow-hidden hover:border-brand-green/50 transition-colors">
                    <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative flex items-center gap-3 group-hover:text-brand-green transition-colors">
                        <iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
                        Follow on Instagram
                    </span>
                </a>
            </div>
            <p className="text-xs text-gray-500 font-mono tracking-wide">
                Applications reviewed weekly. Limited availability.
            </p>
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;