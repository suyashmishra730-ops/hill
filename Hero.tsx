import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 relative pt-32 pb-24 md:pb-32 h-full flex flex-col justify-center min-h-[90vh] overflow-x-hidden">
      
      {/* Top Section */}
      <div className="flex flex-col relative z-20">
        {/* Status Indicator */}
        <div className="flex items-center gap-2 mb-8 ml-1">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </div>
          <span className="font-mono text-xs tracking-[0.2em] text-gray-400 uppercase">System Operational</span>
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl relative z-10">
          <h1 className="font-serif italic text-6xl md:text-7xl lg:text-[6rem] leading-[1.1] md:leading-[1.1] text-white mb-6">
            Overpromise Is a Myth. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-green to-emerald-800">Results Are the Proof.</span>
          </h1>
          
          {/* Bullet Points & Subtext */}
          <div className="mt-6 space-y-4 font-sans text-lg text-gray-400 max-w-xl font-light border-l-2 border-brand-green/30 pl-6">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-brand-green font-bold">-</span> No loud claims
              </li>
              <li className="flex items-start gap-2">
                 <span className="text-brand-green font-bold">-</span> Just real growth, done the right way.
              </li>
              <li className="flex items-start gap-2">
                 <span className="text-brand-green font-bold">-</span> Focus on sustainable strategies that actually work, not empty hype.
              </li>
            </ul>
            <p className="pt-4 text-white font-medium text-xl">Ready to see what's possible...</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-start gap-6 mt-10">
          
          {/* Main Button Container */}
          <div className="flex flex-col items-center md:items-start">
            {/* Main Button: Animated Generate Style */}
            <a 
              href="https://calendly.com/suyashmishra730/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-14 min-w-[200px] overflow-hidden rounded-full bg-brand-green p-[2px] focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 focus:ring-offset-neutral-950 transition-all active:scale-95 shadow-[0_0_20px_rgba(0,255,163,0.2)] hover:shadow-[0_0_30px_rgba(0,255,163,0.4)] block"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-brand-green to-teal-400 animate-gradient-xy" />
              
              {/* Inner Content Container */}
              <div className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-black/90 px-8 transition-all duration-300 group-hover:bg-transparent">
                <span className="font-bold tracking-wide text-brand-green transition-colors duration-300 group-hover:text-black">
                  Apply to Work With Us
                </span>
                <iconify-icon 
                  icon="solar:calendar-add-linear" 
                  width="22" 
                  className="text-brand-green transition-colors duration-300 group-hover:text-black animate-pulse"
                ></iconify-icon>
              </div>
            </a>
            {/* Subtext */}
            <span className="text-xs text-gray-500 mt-3 font-mono tracking-wide text-center w-full">
              Applications reviewed weekly. Limited availability.
            </span>
          </div>

          {/* Secondary Button: Spinning Border Glow */}
          <button className="group relative h-14 min-w-[200px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 focus:ring-offset-neutral-950 active:scale-95 transition-transform">
            {/* Spinning Conic Gradient */}
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#00ffa3_50%,#000000_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            {/* Static Border (Visible when not hovering/spinning) */}
            <span className="absolute inset-0 rounded-full border border-white/10 group-hover:border-transparent transition-colors" />

            {/* Inner Content */}
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#050505] px-8 text-sm font-medium text-gray-400 backdrop-blur-3xl transition-colors duration-200 group-hover:text-white">
              See the Proof
              <iconify-icon icon="solar:chart-2-linear" width="18" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></iconify-icon>
            </span>
          </button>

        </div>
      </div>

      {/* NEW: Energetic Quantum Core Animation (Right Side) */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none z-10 perspective-[1000px]">
        
        {/* Container for the Core */}
        <div className="relative w-[800px] h-[800px] flex items-center justify-center scale-[0.8] xl:scale-100">
          
          {/* BEAM NOODLES (SVG CONNECTIONS) */}
          <svg className="absolute inset-0 w-full h-full z-0 overflow-visible" viewBox="0 0 800 800">
              <defs>
                  <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="#00ffa3" />
                      <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
              </defs>
              
              {/* Noodle Paths (Static faint lines) */}
              <path d="M400,400 C250,350 150,200 100,100" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
              <path d="M400,400 C280,500 200,650 150,750" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
              <path d="M400,400 C550,300 650,150 750,50" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
              <path d="M400,400 C500,400 700,450 800,420" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1" />

              {/* Animated Beams (Green gradient traveling) */}
              <path d="M400,400 C250,350 150,200 100,100" fill="none" stroke="url(#beamGradient)" strokeWidth="2" strokeDasharray="100 300" className="animate-beam" />
              <path d="M400,400 C280,500 200,650 150,750" fill="none" stroke="url(#beamGradient)" strokeWidth="2" strokeDasharray="150 400" className="animate-beam-delayed" />
              <path d="M400,400 C550,300 650,150 750,50" fill="none" stroke="url(#beamGradient)" strokeWidth="2" strokeDasharray="80 350" className="animate-beam-slow" />
              <path d="M400,400 C500,400 700,450 800,420" fill="none" stroke="url(#beamGradient)" strokeWidth="2" strokeDasharray="120 500" className="animate-beam" />
          </svg>

          {/* Central Energy Orb (Glow) */}
          <div className="absolute inset-0 bg-brand-green opacity-10 blur-[80px] rounded-full animate-pulse z-10"></div>
          <div className="absolute w-32 h-32 bg-brand-green opacity-20 blur-2xl rounded-full animate-pulse z-10"></div>

          {/* Core Shells - Fast Spinners */}
          <div className="absolute w-40 h-40 border border-brand-green/40 rounded-full animate-[spin_3s_linear_infinite] z-20"></div>
          <div className="absolute w-36 h-36 border-t-2 border-b-2 border-brand-green rounded-full animate-[spin_4s_linear_infinite_reverse] shadow-[0_0_20px_rgba(0,255,163,0.4)] z-20 bg-black/40 backdrop-blur-sm"></div>
          <div className="absolute w-28 h-28 border border-dashed border-brand-green/60 rounded-full animate-[spin_8s_linear_infinite] z-20"></div>

          {/* 3D Gyro Rings */}
          <div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full animate-[spin-3d_20s_linear_infinite] z-10">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-green rounded-full shadow-[0_0_15px_#00ffa3]"></div>
          </div>
          <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full animate-[spin-3d-rev_25s_linear_infinite] z-10">
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white]"></div>
          </div>
          <div className="absolute w-[550px] h-[550px] border border-dashed border-white/5 rounded-full animate-[spin_60s_linear_infinite] z-0"></div>

          {/* Floating Data Particles */}
          <div className="absolute w-full h-full animate-[pulse_4s_ease-in-out_infinite] z-30">
             <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-white rounded-full animate-ping"></div>
             <div className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-brand-green rounded-full animate-ping delay-700"></div>
             <div className="absolute top-[15%] left-[50%] w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-1000"></div>
          </div>

        </div>

        {/* Dynamic Data Readout (Visual Decoration) */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 flex flex-col gap-2 items-end opacity-70">
           <div className="flex items-center gap-2">
             <div className="w-1.5 h-8 bg-brand-green rounded-full animate-[height-pulse_1s_ease-in-out_infinite]"></div>
             <div className="w-1.5 h-12 bg-white/20 rounded-full animate-[height-pulse_1.5s_ease-in-out_infinite]"></div>
             <div className="w-1.5 h-6 bg-brand-green/50 rounded-full animate-[height-pulse_0.8s_ease-in-out_infinite]"></div>
           </div>
           <span className="font-mono text-[10px] text-brand-green tracking-widest mt-2 font-bold shadow-green-500/50 drop-shadow-lg">CORE_ACTIVE</span>
        </div>

      </div>

      <style>{`
        @keyframes spin-3d {
          0% { transform: rotate3d(1, 1, 1, 0deg); }
          100% { transform: rotate3d(1, 1, 1, 360deg); }
        }
        @keyframes spin-3d-rev {
          0% { transform: rotate3d(1, -1, 0, 0deg); }
          100% { transform: rotate3d(1, -1, 0, -360deg); }
        }
        @keyframes height-pulse {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.5); }
        }
        @keyframes beam-travel {
            0% { stroke-dashoffset: 400; opacity: 0; }
            10% { opacity: 1; }
            100% { stroke-dashoffset: -400; opacity: 0; }
        }
        @keyframes gradient-xy {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .animate-beam {
            animation: beam-travel 2s linear infinite;
        }
        .animate-beam-delayed {
            animation: beam-travel 3s linear infinite;
            animation-delay: 0.5s;
        }
        .animate-beam-slow {
             animation: beam-travel 4s linear infinite;
             animation-delay: 1s;
        }
        .animate-gradient-xy {
            background-size: 200% 200%;
            animation: gradient-xy 6s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;