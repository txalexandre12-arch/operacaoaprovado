import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const FAQS = [
  {
    q: "Preciso ter experiência?",
    a: "De forma alguma. O nosso sistema foi desenhado metodologicamente para guiar tanto quem já está na jornada de estudos há tempos quanto quem está começando hoje do absoluto zero. A linguagem é simples e direta."
  },
  {
    q: "Serve para qualquer concurso policial?",
    a: "Sim! Os tópicos abordados (como Português, Criminologia, Direito Constitucional, Administrativo, Humanos, RLM e Informática) são denominadores comuns de altíssima cobrança em praticamente todas as corporações de segurança, como PM, PC, PF, PRF e Guardas Municipais."
  },
  {
    q: "Como recebo o acesso?",
    a: "Imediatamente de forma digital. Assim que sua inscrição for confirmada pelo gateway seguro de pagamentos, um e-mail automático será disparado contendo seu link permanente de acesso e credenciais exclusivas."
  },
  {
    q: "Funciona no celular?",
    a: "Totalmente. O sistema é 100% responsivo e otimizado para celulares, tablets e notebooks. Você pode revisar e fixar a matéria na hora do almoço, na condução ou em qualquer brecha do seu dia com total comodidade."
  },
  {
    q: "Tenho acesso vitalício?",
    a: "Sim. O pagamento é único e dá direito a acesso vitalício ao portal de estudos, incluindo quaisquer revisões de conteúdo ou atualizações que fizermos para acompanhar novos editais sem nenhuma cobrança extra futura."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-[#050505] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-full mb-4">
            <HelpCircle size={12} className="stroke-[2.5]" />
            <span>Dúvidas Frequentes</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter leading-none mb-4 text-white">
            PERGUNTAS RELEVANTES
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base uppercase tracking-wide">
            Tire suas dúvidas e inicie sua jornada com total clareza e tranquilidade.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`border transition-all duration-300 rounded-2xl overflow-hidden ${
                  isOpen 
                    ? "border-primary/40 bg-gradient-to-b from-[#111] to-[#0a0a0a] shadow-[0_4px_25px_-5px_rgba(79,102,60,0.2)]" 
                    : "border-white/5 bg-[#0d0d0d] hover:bg-[#121212]"
                }`}
              >
                <button 
                  onClick={() => toggle(i)}
                  className="w-full p-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary/45 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[13px] sm:text-base font-black uppercase tracking-tight transition-colors ${
                    isOpen ? "text-[#d4af37]" : "text-white"
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all shrink-0 ml-4 ${
                    isOpen ? "border-primary/40 bg-primary/15 text-primary" : "border-white/5 bg-black/40 text-zinc-500 group-hover:text-zinc-300"
                  }`}>
                    {isOpen ? (
                      <Minus size={16} className="stroke-[3]" />
                    ) : (
                      <Plus size={16} className="stroke-[3]" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: { duration: 0.3 } }}
                      exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
                    >
                      <div className="px-6 pb-6 pt-0 text-zinc-400 font-medium text-xs sm:text-sm leading-relaxed border-t border-white/5 mt-4 pt-4 uppercase tracking-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
