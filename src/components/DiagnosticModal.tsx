import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Building2, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  User, 
  MapPin, 
  CheckCircle2,
  Lock
} from 'lucide-react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [segment, setSegment] = useState<string>('Clínica Médica / Especialidades');
  const [budget, setBudget] = useState<string>('R$ 2.000 a R$ 5.000 / mês');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSegmentSelect = (seg: string) => {
    setSegment(seg);
    setStep(2);
  };

  const generateWhatsAppLink = () => {
    const message = encodeURIComponent(
      `*SOLICITAÇÃO DE DIAGNÓSTICO ESTRATÉGICO — SANTS MILLIONS*\n\n` +
      `Olá! Preenchi a solicitação no site e gostaria de agendar meu diagnóstico de tráfego pago:\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `🏢 *Segmento:* ${segment}\n` +
      `💰 *Previsão de Investimento:* ${budget}\n` +
      `📍 *Cidade/UF:* ${formData.city || 'Não informada'}\n` +
      `📱 *WhatsApp:* ${formData.phone}\n\n` +
      `_Aguardo o contato da equipe Sants Millions para estruturar nossa estratégia de aquisição._`
    );
    return `https://wa.me/5519988946958?text=${message}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitted(true);

    // Open WhatsApp directly
    setTimeout(() => {
      window.open(generateWhatsAppLink(), '_blank');
    }, 600);
  };

  const handleFinishAndRedirect = () => {
    window.open(generateWhatsAppLink(), '_blank');
    resetAndClose();
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData({ name: '', phone: '', city: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={resetAndClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-slate-950/20 z-10 overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-4 sm:py-6">
            <div className="w-14 h-14 bg-emerald-100 border border-emerald-300 rounded-full flex items-center justify-center mx-auto mb-3 text-emerald-600">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1.5">
              Diagnóstico Pronto para Envio!
            </h3>
            
            <p className="text-slate-600 text-xs sm:text-sm mb-4">
              Revise o resumo abaixo e clique em <strong className="text-slate-900">Concluir</strong> para enviar diretamente à nossa equipe estratégica no WhatsApp.
            </p>

            {/* Resumo Card */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 text-left text-xs text-slate-700 space-y-2 mb-5">
              <div className="font-bold text-[11px] text-amber-800 uppercase tracking-wider pb-1.5 border-b border-slate-200 flex items-center justify-between">
                <span>Resumo da Solicitação</span>
                <span className="font-mono text-slate-400 font-normal">(55 19 98894-6958)</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Nome:</span>
                <span className="font-semibold text-slate-900 text-right">{formData.name}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Segmento:</span>
                <span className="font-semibold text-slate-900 text-right">{segment}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Investimento Estimado:</span>
                <span className="font-semibold text-slate-900 text-right">{budget}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">WhatsApp:</span>
                <span className="font-semibold text-slate-900 text-right">{formData.phone}</span>
              </div>
              {formData.city && (
                <div className="flex justify-between gap-2">
                  <span className="text-slate-500">Cidade / UF:</span>
                  <span className="font-semibold text-slate-900 text-right">{formData.city}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleFinishAndRedirect}
                className="w-full py-3.5 px-4 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover font-bold text-slate-950 text-sm tracking-wide transition-all cursor-pointer shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>CONCLUIR & ENVIAR PARA O WHATSAPP</span>
              </button>

              <button
                type="button"
                onClick={resetAndClose}
                className="w-full py-2 text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Fechar janela
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-left mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300/80 text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Diagnóstico Estratégico de Tráfego</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {step === 1 ? 'Qual é o segmento do seu negócio?' : 'Informações para contato'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {step === 1
                  ? 'Personalizaremos o plano de aquisição de acordo com seu setor.'
                  : 'Nossa equipe entrará em contato para apresentar o diagnóstico personalizado.'}
              </p>
            </div>

            {step === 1 ? (
              <div className="space-y-2.5">
                {[
                  'Clínica Médica / Consultório Especializado',
                  'Clínica Odontológica / Implantes / Estética',
                  'Clínica de Estética & Harmonização',
                  'Fisioterapia / Pilates / Saúde Integrada',
                  'Outro Negócio Local / Prestador de Serviço',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleSegmentSelect(item)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between text-xs sm:text-sm font-semibold cursor-pointer ${
                      segment === item
                        ? 'bg-amber-50 border-amber-400 text-slate-900 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Segment Tag */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600">
                  <span className="truncate">Segmento: <strong className="text-amber-800 font-bold">{segment}</strong></span>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-amber-700 font-semibold underline hover:text-amber-800 text-[11px] shrink-0 ml-2 cursor-pointer"
                  >
                    Alterar
                  </button>
                </div>

                {/* Monthly budget selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                    Previsão de investimento mensal em anúncios:
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="R$ 1.500 a R$ 3.000 / mês">R$ 1.500 a R$ 3.000 / mês</option>
                    <option value="R$ 3.000 a R$ 7.000 / mês">R$ 3.000 a R$ 7.000 / mês</option>
                    <option value="R$ 7.000 a R$ 15.000 / mês">R$ 7.000 a R$ 15.000 / mês</option>
                    <option value="Acima de R$ 15.000 / mês">Acima de R$ 15.000 / mês</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Seu Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Dra. Ana Luiza"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    WhatsApp para Contato *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="(DDD) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Cidade / Estado
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Ex: São Paulo - SP"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SOLICITAR DIAGNÓSTICO AGORA</span>
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 mt-2">
                  <Lock className="w-3 h-3 text-amber-600" />
                  <span>Suas informações estão 100% seguras. Respeitamos sua privacidade.</span>
                </div>

              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};
