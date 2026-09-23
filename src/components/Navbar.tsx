import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Zone */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#B88E28] to-[#604407] p-[1.5px] shadow-md shadow-amber-500/20">
            <div className="w-full h-full bg-[#0a1128] rounded-[9.5px] flex items-center justify-center">
              <span className="font-cinzel text-lg font-bold text-amber-300 group-hover:scale-105 transition-transform">
                SM
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-wider text-slate-900 font-cinzel">
              SANTS <span className="text-gold-gradient font-black">MILLIONS</span>
            </span>
          </div>
        </a>

        {/* Action Zone */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenModal}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide text-slate-950 bg-gold-gradient hover:bg-gold-gradient-hover rounded-xl shadow-md shadow-amber-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            <span>Falar com Especialista</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};

