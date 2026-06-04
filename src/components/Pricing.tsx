import { Check, Shield, Zap, Lock } from "lucide-react";
import { motion } from "motion/react";
import { getCheckoutUrl } from "../lib/checkout";

export function Pricing() {
  const planName = "OPERAÇÃO APROVADO";
  const checkoutLink = "https://pay.wiapy.com/vYE5Z9MWuX";

  // Low scroll, highly relevant core features shown ABOVE the CTA inside the card
  const mainFeatures = [
    "+2.000 Flashcards Estratégicos",
    "Cronograma Estratégico de Aprovação",
    "Simulado Completo",
    "Acesso Vitalício"
  ];

  // Rest of features displayed elegantly below the main card under "Tudo o que você recebe"
  const extraFeatures = [
    "Sistema Completo de Revisão",
    "Método de Memorização Acelerada",
    "Apostila Estratégica",
    "Atualizações Gratuitas",
    "Todas as Matérias",
    "Suporte via WhatsApp"
  ];

  return (
    <section id="acesso" className="py-20 px-4 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Visual Ambient Glows - Sleek Dark Palette with Premium Gold Ambient Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-gradient-to-b from-[#d4af37]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#d4af37]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* PROBLEM 1: PROMINENT, PREMIUM HERO HEADER FOR THE OFFER */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-10">
          <span className="text-amber-500 text-[10px] md:text-sm font-montserrat font-bold tracking-[0.25em] uppercase px-3.5 py-1.5 bg-amber-500/5 border border-amber-500/20 rounded-full inline-block mb-4 shadow-[0_0_15px_rgba(212,175,55,0.06)]">
            ⚡ CONDIÇÃO DE LANÇAMENTO
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-black uppercase tracking-tighter leading-none text-white whitespace-nowrap">
            <span className="text-[#d4af37]">OPERAÇÃO APROVADO</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-sans leading-relaxed">
            Um sistema completo para memorizar mais, revisar melhor e acelerar sua preparação.
          </p>
        </div>

        {/* COMPACT HIGH-CONVERSION CARD (PROBLEM 2 & 3: Low height, everything visible on Mobile without excess scroll) */}
        <div className="max-w-sm mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col p-5 sm:p-6 transition-all duration-300 rounded-2xl border bg-[#0a0a0a] border-zinc-800 shadow-[0_15px_50px_rgba(0,0,0,0.8)] ring-1 ring-white/5"
          >
            {/* PROBLEM 3: Complete simplification of price block */}
            <div className="text-center mb-5 py-4 bg-[#0d0d0d] rounded-xl border border-zinc-900 relative overflow-hidden">
              <span className="text-amber-500 text-xs font-montserrat font-bold tracking-wider uppercase block mb-1">
                🔥 Oferta de Lançamento
              </span>
              <div className="flex items-baseline justify-center gap-1 my-1">
                <span className="text-sm font-bold text-zinc-400">R$</span>
                <span className="text-4xl sm:text-5xl font-black font-montserrat tracking-tight text-white leading-none">17</span>
              </div>
              <span className="text-zinc-500 text-[11px] font-medium block mt-1">
                Pagamento Único
              </span>
              <span className="text-emerald-400 text-xs font-bold tracking-wide block mt-1.5 uppercase">
                ✓ Acesso Vitalício
              </span>
            </div>

            {/* PROBLEM 6 & BENEFÍCIOS ACIMA DO BOTÃO (Exactly specified 4 items) */}
            <p className="text-[9px] font-montserrat font-bold text-zinc-500 uppercase tracking-widest mb-3">CONTEÚDO INCLUSO:</p>
            <ul className="space-y-2.5 mb-5">
              {mainFeatures.map((feature, j) => (
                <li key={j} className="flex items-center gap-3 text-zinc-100">
                  <div className="w-5 h-5 bg-amber-500/10 border border-amber-500/20 rounded-md flex items-center justify-center text-amber-500 shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-sans font-bold text-zinc-200">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* PROBLEM 4 & 5: Dourado Premium CTA with elegant size and spacing */}
            <div className="space-y-4">
              <a 
                href={getCheckoutUrl(checkoutLink)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 font-montserrat font-bold rounded-xl uppercase tracking-wider transition-all text-xs sm:text-sm text-center block bg-gradient-to-r from-amber-500 via-[#d4af37] to-amber-300 text-black hover:brightness-110 active:scale-[0.98] shadow-[0_4px_20px_rgba(212,175,55,0.25)] cursor-pointer font-extrabold"
              >
                GARANTIR ACESSO IMEDIATO →
              </a>
              
              {/* Trust badges below button (COMPACT / LIGHT / DISCRETE) */}
              <div className="flex items-center justify-center gap-x-4 gap-y-1 flex-wrap text-[9px] text-zinc-500 font-montserrat font-semibold tracking-wider uppercase">
                <span className="flex items-center gap-1">🔒 Compra Segura</span>
                <span className="flex items-center gap-1">⚡ Acesso Imediato</span>
                <span className="flex items-center gap-1">🛡️ Garantia de 7 Dias</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TUDO O QUE VOCÊ DEVE RECEBER (AFTER THE BUTTON - Elegant/Minimal Section) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 border-t border-white/5 pt-10 max-w-2xl mx-auto"
        >
          <h3 className="text-center font-montserrat font-bold text-zinc-400 text-[11px] tracking-[0.2em] uppercase mb-6">
            📦 Tudo o que você também recebe:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {extraFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="p-3.5 rounded-xl bg-[#090909] border border-white/[0.03] flex items-center gap-3 hover:border-zinc-800 transition-all duration-300"
              >
                <div className="w-5 h-5 rounded-md bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Check size={11} className="stroke-[3]" />
                </div>
                <span className="text-xs font-montserrat font-bold text-zinc-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
