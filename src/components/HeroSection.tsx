import React from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  MapPin, 
  MessageSquare, 
  Sparkles, 
  BarChart3, 
  CheckCircle2,
  Users
} from 'lucide-react';

interface HeroSectionProps {
  onOpenModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center py-12 lg:py-20 overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc]">
      {/* Background subtle light ambient effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-200/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-200/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LADO ESQUERDO — COPY (50% / 6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Top Seal / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-500/40 text-amber-800 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm shadow-slate-200">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>GESTÃO DE TRÁFEGO PAGO</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12] mb-6 [text-wrap:balance]">
              Sua empresa não precisa de mais curtidas.{' '}
              <span className="block mt-2 text-gold-gradient font-black">
                Precisa de mais clientes.
              </span>
            </h1>

            {/* Subheadline Copy */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-6 max-w-xl">
              A <strong className="text-slate-900 font-semibold">Sants Millions</strong> cria e gerencia estratégias de tráfego pago para colocar sua empresa diante das pessoas certas e transformar atenção em novas oportunidades de negócio.
            </p>

            {/* Connection Phrase */}
            <div className="p-4 rounded-xl bg-white/90 border border-slate-200/90 mb-8 max-w-xl shadow-xs backdrop-blur-sm">
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed italic border-l-3 border-amber-500 pl-3.5">
                “Você cuida do seu negócio. Nós cuidamos da estratégia para fazer sua empresa ser encontrada.”
              </p>
            </div>

            {/* CTA & Microcopy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenModal}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold tracking-wide text-slate-950 bg-gold-gradient hover:bg-gold-gradient-hover rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>QUERO ATRAIR MAIS CLIENTES</span>
                <ArrowRight className="w-5 h-5 text-slate-950 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Microcopy below CTA */}
            <p className="mt-3 text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Descubra como podemos estruturar o tráfego da sua empresa.</span>
            </p>

          </div>

          {/* LADO DIREITO — IMAGEM & COMPOSIÇÃO VISUAL (50% / 6 cols) */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            
            {/* Subtle light glow behind the visual composition */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-sky-400/20 via-amber-300/25 to-slate-200/50 rounded-3xl blur-2xl opacity-80" />

            {/* Main Image Wrapper Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 group">
              
              {/* Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/hero_clinic_businesswoman_1790127565416.jpg"
                  alt="Empresária e gestora de clínica acompanhando resultados de tráfego pago da Sants Millions"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Vignette / Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              {/* OVERLAID VISUAL ELEMENT: Performance Dashboard Panel */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass-panel-light rounded-xl p-4 sm:p-5 shadow-2xl border border-white/90">
                
                {/* Panel Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                    </span>
                    <span className="text-xs font-extrabold tracking-wider text-slate-900 uppercase">
                      CAMPANHA ATIVA
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-400/40">
                    Otimização Contínua
                  </span>
                </div>

                {/* Dashboard Checklist Status */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                    <span className="font-semibold truncate">Tráfego pago</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-sky-600 shrink-0" />
                    <span className="font-semibold truncate">Público segmentado</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                    <span className="font-semibold truncate">Novos contatos</span>
                  </div>
                </div>

                {/* Visual Indicators Strip */}
                <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="flex items-center gap-1 text-slate-700 font-medium">
                    <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
                    <span>Presença Estratégica Regional</span>
                  </span>
                  <span className="font-mono text-emerald-700 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Atração Diária
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Graphic Element 1: WhatsApp notification card (Top-Right) */}
            <div className="hidden sm:flex absolute -top-4 -right-4 glass-panel-light rounded-xl p-3 shadow-xl border border-white items-center gap-3 animate-bounce [animation-duration:5s]">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-slate-900">Novo Contato Qualificado</div>
                <div className="text-[10px] font-medium text-slate-500">Interesse em Agendamento</div>
              </div>
            </div>

            {/* Floating Graphic Element 2: Geo Targeting (Top-Left) */}
            <div className="hidden sm:flex absolute top-6 -left-4 glass-panel-light rounded-xl px-3 py-2 shadow-xl border border-white items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <div className="text-left">
                <div className="text-[11px] font-semibold text-slate-800">Público da sua Região</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
