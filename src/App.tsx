import { motion } from "motion/react";
import { Hero } from "./components/Hero";
import { PainSolution } from "./components/PainSolution";
import { WhatYouReceive } from "./components/WhatYouReceive";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Guarantee } from "./components/Guarantee";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Shield, Smartphone, CreditCard, Sparkles, ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      {/* Urgency Pre-header Bar */}
      <div className="bg-[#b91c1c] text-white py-1.5 px-3 text-center relative z-50">
        <div className="flex items-center justify-center gap-1.5 animate-pulse max-w-full mx-auto">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.08em] sm:tracking-[0.25em] flex items-center justify-center gap-1.5 text-center text-white leading-tight">
            <Sparkles size={11} className="shrink-0 text-red-200" />
            <span>OFERTA LIMITADA APENAS HOJE</span>
            <Sparkles size={11} className="shrink-0 text-red-200" />
          </span>
        </div>
      </div>

      <main>
        {/* SEÇÃO 1 - HERO */}
        <Hero />

        {/* SEÇÃO 2 - PROBLEMA & SEÇÃO 3 - APRESENTAÇÃO DA SOLUÇÃO */}
        <PainSolution />

        {/* SEÇÃO 5 - ENTREGA */}
        <WhatYouReceive />

        {/* SEÇÃO 7 - PROVA SOCIAL (TESTIMONIALS & RATING) */}
        <div id="depoimentos">
          <Testimonials />
        </div>

        {/* SEÇÃO 8 - OFERTA (MOVIDA PARA CIMA LOGO APÓS DEPOIMENTOS) */}
        <Pricing />

        {/* SEÇÃO 9 - GARANTIA (7 DIAS COM RISCO ZERO) */}
        <Guarantee />

        {/* SEÇÃO 10 - FAQ */}
        <div id="faq">
          <FAQ />
        </div>
        
        {/* SEÇÃO 11 - FLOATING SAFE SEALS BANNER */}
        <section className="py-12 bg-[#040404] border-t border-white/5">
           <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                 <Smartphone size={18} className="text-[#d4af37]" />
                 <span>Acesso Total Mobile</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                 <Shield size={18} className="text-[#d4af37]" />
                 <span>Gateway de Compra Orgânica e Segura</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                 <CreditCard size={18} className="text-[#d4af37]" />
                 <span>Liberação Digital Instantânea</span>
              </div>
           </div>
        </section>
      </main>

      {/* Scroll to Top floating shortcut */}
      <div 
        onClick={() => {
          const target = document.getElementById("hero-cta");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="hidden lg:flex fixed bottom-10 right-10 w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 items-center justify-center rounded-full transition-all z-40 cursor-pointer shadow-xl hover:shadow-[0_4px_20px_rgba(79,102,60,0.3)]"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        <ArrowRight size={20} className="-rotate-90 hover:scale-105 transition-all" />
      </div>

      {/* SEÇÃO 11 - RODAPÉ */}
      <Footer />
    </div>
  );
}
