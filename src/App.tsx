import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StrategySection } from './components/StrategySection';
import { MinimalFooter } from './components/MinimalFooter';
import { DiagnosticModal } from './components/DiagnosticModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-amber-500/30 selection:text-amber-950">
      {/* Top Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Container with EXACTLY 2 SECTIONS */}
      <main className="flex-1">
        {/* SEÇÃO 1 — HERO (Copy à Esquerda + Imagem/Composição Visual à Direita) */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* SEÇÃO 2 — PROBLEMA + NOVA OPORTUNIDADE (Imagem/Composição à Esquerda + Copy à Direita) */}
        <StrategySection onOpenModal={handleOpenModal} />
      </main>

      {/* Minimal Footer */}
      <MinimalFooter />

      {/* Lead Diagnostic Modal */}
      <DiagnosticModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
