import React from 'react';
import { 
  ArrowRight, 
  Compass, 
  Target, 
  LineChart, 
  Sparkles,
  Megaphone,
  UserCheck,
  PhoneCall,
  CalendarCheck,
  CheckCircle
} from 'lucide-react';

interface StrategySectionProps {
  onOpenModal: () => void;
}

export const StrategySection: React.FC<StrategySectionProps> = ({ onOpenModal }) => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f0f4f8] to-[#f8fafc] border-t border-slate-200/80">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[550px] h-[550px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber-100/70 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* LADO ESQUERDO — IMAGEM + COMPOSIÇÃO DE MARKETING (50% / 6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            
            {/* Ambient halo behind card */}
            <div className="absolute -inset-3 bg-gradient-to-br from-amber-300/20 via-sky-300/20 to-slate-200/60 rounded-3xl blur-2xl opacity-70" />

            {/* Main Visual Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 group">
              
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/clinic_doctor_patient_consultation_1790127658385.jpg"
                  alt="Profissional de clínica atendendo paciente atraído por estratégia de tráfego pago da Sants Millions"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              {/* OVERLAID MARKETING PIPELINE FLOW: ANÚNCIO -> PESSOA CERTA -> CONTATO -> OPORTUNIDADE */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 glass-panel-light rounded-xl p-4 sm:p-5 border border-white shadow-2xl">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Jornada de Aquisição Contínua
                </div>

                {/* 4 Pipeline Steps Connected */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 relative">
                  
                  {/* Step 1: ANÚNCIO */}
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 flex flex-col items-center text-center shadow-2xs">
                    <div className="w-7 h-7 rounded-md bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 mb-1.5">
                      <Megaphone className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-900 tracking-wide">ANÚNCIO</span>
                    <span className="text-[9px] text-slate-500 font-medium mt-0.5">Atenção</span>
                  </div>

                  {/* Step 2: PESSOA CERTA */}
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 flex flex-col items-center text-center shadow-2xs">
                    <div className="w-7 h-7 rounded-md bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700 mb-1.5">
                      <UserCheck className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-900 tracking-wide">PESSOA CERTA</span>
                    <span className="text-[9px] text-slate-500 font-medium mt-0.5">Segmentação</span>
                  </div>

                  {/* Step 3: CONTATO */}
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 flex flex-col items-center text-center shadow-2xs">
                    <div className="w-7 h-7 rounded-md bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mb-1.5">
                      <PhoneCall className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-900 tracking-wide">CONTATO</span>
                    <span className="text-[9px] text-slate-500 font-medium mt-0.5">WhatsApp</span>
                  </div>

                  {/* Step 4: OPORTUNIDADE */}
                  <div className="bg-amber-50/80 border border-amber-300 rounded-lg p-2.5 flex flex-col items-center text-center shadow-2xs">
                    <div className="w-7 h-7 rounded-md bg-amber-200 border border-amber-400 flex items-center justify-center text-amber-800 mb-1.5">
                      <CalendarCheck className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-900 tracking-wide">OPORTUNIDADE</span>
                    <span className="text-[9px] text-amber-700 font-semibold mt-0.5">Agendamento</span>
                  </div>

                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Atração previsível & mensurável
                  </span>
                  <span className="text-amber-800 font-bold">Sants Millions</span>
                </div>
              </div>
            </div>

          </div>

          {/* LADO DIREITO — COPY + 3 BLOCOS + CTA (50% / 6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start text-left">
            
            {/* Seal / Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-500/40 text-amber-800 text-xs font-bold tracking-wider uppercase mb-5 shadow-sm shadow-slate-200">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>TRÁFEGO COM ESTRATÉGIA</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.18] mb-4 [text-wrap:balance]">
              Ter um excelente serviço não basta se as pessoas certas não encontram sua empresa.
            </h2>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl font-bold text-gold-gradient mb-4">
              É aí que entra a Sants Millions.
            </p>

            {/* Text description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Nós planejamos, criamos, acompanhamos e otimizamos campanhas de tráfego pago para empresas que querem construir uma presença digital capaz de gerar novas oportunidades.
            </p>

            {/* 3 Blocos Horizontais / Cards */}
            <div className="w-full space-y-3.5 mb-8">
              
              {/* Bloco 1: ESTRATÉGIA */}
              <div className="glass-card-light glass-card-light-hover rounded-xl p-4 sm:p-4.5 border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-1">
                    ESTRATÉGIA
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Entendemos seu negócio, público e objetivo antes de colocar sua campanha para rodar.
                  </p>
                </div>
              </div>

              {/* Bloco 2: SEGMENTAÇÃO */}
              <div className="glass-card-light glass-card-light-hover rounded-xl p-4 sm:p-4.5 border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-1">
                    SEGMENTAÇÃO
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sua comunicação chega às pessoas que têm maior potencial de interesse no que sua empresa oferece.
                  </p>
                </div>
              </div>

              {/* Bloco 3: OTIMIZAÇÃO */}
              <div className="glass-card-light glass-card-light-hover rounded-xl p-4 sm:p-4.5 border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                  <LineChart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-1">
                    OTIMIZAÇÃO
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Acompanhamos os dados das campanhas e buscamos melhorar continuamente a performance da operação.
                  </p>
                </div>
              </div>

            </div>

            {/* Frase de Impacto */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-amber-400/40 shadow-sm mb-8 w-full">
              <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed [text-wrap:balance]">
                Não se trata apenas de colocar um anúncio no ar.{' '}
                <span className="text-gold-gradient font-bold block sm:inline mt-1 sm:mt-0">
                  Trata-se de construir uma estratégia para transformar atenção em oportunidade.
                </span>
              </p>
            </div>

            {/* CTA Final */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenModal}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold tracking-wide text-slate-950 bg-gold-gradient hover:bg-gold-gradient-hover rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>QUERO CONHECER A SANTS MILLIONS</span>
                <ArrowRight className="w-5 h-5 text-slate-950 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Microcopy below CTA */}
            <p className="mt-3 text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Agende um diagnóstico e descubra o que podemos fazer pelo seu negócio.</span>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
