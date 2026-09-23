import React from 'react';

export const MinimalFooter: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-200/80 bg-[#f1f5f9] text-center text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-cinzel font-bold text-slate-900 tracking-wider">
            SANTS <span className="text-gold-gradient font-black">MILLIONS</span>
          </span>
          <span className="text-slate-400">·</span>
          <span>Gestão de Tráfego & Aquisição de Clientes</span>
        </div>
        <p className="text-[11px] text-slate-500 font-medium">
          © {new Date().getFullYear()} Sants Millions. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
