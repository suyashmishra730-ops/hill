import React from 'react';

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* 1. Base Background Color - Dark */}
      <div className="absolute inset-0 bg-[#050505]"></div>

      {/* NEW: Animated Wave Effect - Layer 1 (Green) */}
      <div className="absolute top-[40%] left-[-50%] right-[-50%] h-[500px] opacity-[0.03] pointer-events-none mix-blend-screen">
         <div className="w-full h-full bg-repeat-x animate-wave" style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2300ffa3' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
             backgroundSize: '50% 100%'
         }}></div>
      </div>
      
      {/* NEW: Animated Wave Effect - Layer 2 (Slower, Reverse) */}
      <div className="absolute top-[50%] left-[-50%] right-[-50%] h-[500px] opacity-[0.02] pointer-events-none mix-blend-screen">
          <div className="w-full h-full bg-repeat-x animate-wave-reverse" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2300ffa3' fill-opacity='1' d='M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,197.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundSize: '50% 100%'
          }}></div>
      </div>

      {/* 2. The Green "Nebula" Glow */}
      <div className="absolute -top-[30%] -right-[10%] w-[1200px] h-[1200px] rounded-full bg-brand-green opacity-[0.05] blur-[150px] mix-blend-screen animate-pulse duration-[10s]"></div>
       <div className="absolute top-[20%] -left-[20%] w-[800px] h-[800px] rounded-full bg-emerald-900 opacity-[0.05] blur-[120px] mix-blend-screen"></div>

      {/* 3. Noise Overlay for Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] contrast-150 brightness-50"></div>
      
      {/* 4. Subtle Radial Grid (Dark Mode) */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#00ffa3 0.5px, transparent 0.5px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      ></div>

      {/* 5. Scanline (Subtle) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent h-[2px] w-full animate-[scan_8s_linear_infinite] pointer-events-none"></div>
      
       <style>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes wave {
            0% { background-position-x: 0; }
            100% { background-position-x: 50%; }
        }
        @keyframes wave-reverse {
            0% { background-position-x: 50%; }
            100% { background-position-x: 0; }
        }
        .animate-wave {
            animation: wave 30s linear infinite;
        }
        .animate-wave-reverse {
            animation: wave-reverse 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GridBackground;