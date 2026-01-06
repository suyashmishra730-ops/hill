import React, { useRef, useEffect, useState } from 'react';

interface LeaderProps {
  name: string;
  role: string;
  stat: string;
  statLabel: string;
  image: string;
  size: 'tall' | 'wide' | 'square';
  delay: string;
  badge?: string;
  imagePosition?: string;
  link?: string;
}

const LeaderCard: React.FC<LeaderProps> = ({ name, role, stat, statLabel, image, size, delay, badge, imagePosition = "object-center", link = "#" }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size Classes
  const sizeClasses = {
    tall: "md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto", // Tall on desktop
    wide: "md:col-span-2 aspect-[16/9]",                             // Wide - Adjusted to 16/9 for better framing
    square: "md:col-span-1 aspect-square"                           // Square
  };

  return (
    <a 
      href={link}
      className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] ${sizeClasses[size]} transition-all duration-500 hover:border-brand-green/50 hover:shadow-[0_0_30px_rgba(0,255,163,0.15)] block cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <img 
        src={image} 
        alt={name} 
        className={`absolute inset-0 w-full h-full object-cover ${imagePosition} opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out`}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>

      {/* --- SCANNER EFFECT --- */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-brand-green shadow-[0_0_20px_#00ffa3] z-20 transition-all duration-[1.5s] ease-in-out ${isHovered ? 'translate-y-[500px] opacity-100' : 'translate-y-[-10px] opacity-0'}`}></div>
      <div className={`absolute inset-0 bg-brand-green/10 z-10 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>


      {/* Content Container */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-30">
        
        {/* Top Badges */}
        <div className="flex justify-between items-start">
            {badge && (
                <div className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-white flex items-center gap-2">
                    <iconify-icon icon="solar:verified-check-bold" className="text-brand-green"></iconify-icon>
                    {badge}
                </div>
            )}
            
            {/* View Profile Button (Hidden until hover) */}
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
            </div>
        </div>

        {/* Bottom Info */}
        <div>
            <div className="overflow-hidden mb-2">
                <h3 className="text-3xl md:text-4xl font-serif text-white translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                    {name}
                </h3>
            </div>
            <p className="text-gray-400 text-sm font-mono uppercase tracking-widest mb-6 border-l-2 border-brand-green pl-3">
                {role}
            </p>

            {/* Stats Reveal */}
            <div className="flex items-end gap-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md translate-y-0 group-hover:bg-brand-green/10 group-hover:border-brand-green/30 transition-colors duration-300">
                <span className="text-4xl font-sans font-light text-white group-hover:text-brand-green transition-colors">
                    {stat}
                </span>
                <span className="text-xs text-gray-400 mb-1.5 font-mono uppercase">
                    {statLabel}
                </span>
            </div>
        </div>
      </div>
    </a>
  );
};

const EcosystemLeaders: React.FC = () => {
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
      {/* Section Header */}
      <div className={`mb-16 flex flex-col md:flex-row justify-between items-end gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                <iconify-icon icon="solar:users-group-rounded-bold" className="text-brand-green"></iconify-icon>
                <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">The Ecosystem</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-sans font-light text-white leading-tight">
                Join The <span className="font-serif italic text-brand-green">1% Club.</span>
            </h2>
        </div>
        <div className="max-w-md text-right md:text-left">
            <p className="text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6">
                You're in good company. From viral sensations to 7-figure agency owners, 
                our ecosystem powers the best in the game.
            </p>
        </div>
      </div>

      {/* THE BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
        
        {/* 1. THE TITAN (Left Column, Tall) - Sondra Gorham */}
        <LeaderCard 
            name="Sondra Gorham"
            role="Creator & Influencer"
            stat="200M+"
            statLabel="Total Views"
            image="https://image2url.com/r2/bucket2/images/1767650829313-d1f64734-f69e-4148-9421-eff47617e23d.png"
            size="tall"
            delay="0ms"
            badge="Top 0.1% Creator"
            imagePosition="object-top"
            link="#" // Add actual link here
        />

        {/* 2. THE MOGUL (Top Right, Wide) - Braden Blacker */}
        <LeaderCard 
            name="Braden Blacker"
            role="Agency Owner"
            stat="$250k+"
            statLabel="Monthly Rev"
            image="https://image2url.com/r2/bucket3/images/1767651777350-117da3c6-bb4b-41ed-81e7-e6739adbfd55.png"
            size="wide"
            delay="0ms"
            badge="Ecosystem Partner"
            imagePosition="object-top"
            link="#" // Add actual link here
        />

        {/* 3. THE VIRAL KING (Bottom Right, Wide) - Jason Ellinger */}
        <LeaderCard 
            name="Jason Ellinger"
            role="Cofounder"
            stat="Productions"
            statLabel="B&B"
            image="https://image2url.com/r2/bucket3/images/1767651926483-624494b6-9582-4e6f-9f25-c33cae3d1102.png"
            size="wide"
            delay="0ms"
            imagePosition="object-top"
            link="#" // Add actual link here
        />

      </div>

    </section>
  );
};

export default EcosystemLeaders;