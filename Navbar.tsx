import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      <nav className="flex items-center justify-between gap-12 px-6 py-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all hover:border-white/20 hover:shadow-[0_0_40px_rgba(0,255,163,0.1)]">
        
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shadow-[0_0_15px_rgba(0,255,163,0.4)] group-hover:scale-110 transition-transform duration-300">
             <div className="w-2 h-2 bg-black rounded-full" />
          </div>
          <span className="font-serif italic font-semibold text-white tracking-tight text-lg group-hover:text-brand-green transition-colors">Hillman Media</span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-1 md:gap-2">
            <a 
              href="https://calendly.com/suyashmishra730/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-white text-black hover:bg-brand-green border border-transparent px-5 py-2 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,255,163,0.4)]"
            >
              Apply
              <iconify-icon icon="solar:calendar-add-bold" width="16" className="group-hover:translate-x-0.5 transition-transform"></iconify-icon>
            </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;