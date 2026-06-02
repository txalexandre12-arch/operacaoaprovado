import { Check, Star, Shield, Zap, Sparkles, X } from "lucide-react";
import { motion } from "motion/react";
import { getCheckoutUrl } from "../lib/checkout";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  oldPrice?: string;
  type: string;
  features: PlanFeature[];
  bonuses?: string[];
  recommended: boolean;
  cta: string;
  link: string;
  iconName?: string;
}

const PLANS: Plan[] = [
  {
    name: "🧠 +2.000 FLASHCARDS ESTRATÉGICOS",
    price: "17",
    type: "",
    iconName: "star",
    features: [
      { text: "+2.150 Flashcards Estratégicos", included: true },
      { text: "Todas as Matérias Disponíveis", included: true },
      { text: "Português", included: true },
      { text: "Matemática e RLM", included: true },
      { text: "Informática", included: true },
      { text: "Direitos Humanos", included: true },
      { text: "Direito Constitucional", included: true },
      { text: "Direito Administrativo", included: true },
      { text: "História e Geografia", included: true },
      { text: "Atualizações Futuras", included: true },
    ],
    bonuses: [
      "Cronograma Estratégico de Estudos",
      "Método de Revisão Inteligente",
      "Simulado Completo",
      "Apostila Estratégica",
      "Atualizações Futuras Gratuitas",
    ],
    recommended: true,
    cta: "GARANTIR ACESSO",
    link: "https://pay.wiapy.com/vYE5Z9MWuX",
  },
];

const getIcon = (name?: string, isRecommended?: boolean) => {
  switch (name) {
    case "zap": return <Zap className={isRecommended ? "text-amber-400" : "text-primary"} size={20} />;
    case "star": return <Star className={isRecommended ? "text-amber-400 fill-amber-400 animate-pulse" : "text-primary"} size={20} />;
    default: return null;
  }
};

export function Pricing() {
  return (
    <section id="acesso" className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-dark/10 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4 font-sans">
             Oferta Exclusiva 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter leading-none mb-4">
            GARANTA SEU <span className="text-primary italic">ACESSO AGORA</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-lg font-medium italic">
            "A oportunidade bate à porta, mas o treinamento é o que te faz entrar."
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-8 transition-all duration-300 rounded-2xl border ${
                plan.recommended 
                  ? "bg-gradient-to-b from-[#0e120a] to-[#161c10] border-amber-500/80 scale-105 z-10 shadow-[0_0_45px_rgba(79,102,60,0.35)] ring-2 ring-amber-500/20 md:scale-[1.07]" 
                  : "bg-[#111] border-white/5 hover:border-white/20"
              }`}
            >
              {plan.recommended ? (
                <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[10px] font-black px-4 py-1.5 uppercase tracking-[0.25em] whitespace-nowrap border border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)] rounded-full flex items-center gap-1">
                  ⭐ ACESSO IMEDIATO
                </div>
              ) : (
                <div className="absolute -top-3 left-6 bg-zinc-950 text-zinc-400 text-[10px] font-black px-4 py-1 uppercase tracking-[0.3em] whitespace-nowrap border border-white/5 shadow-2xl">
                  VERSÃO DE ENTRADA
                </div>
              )}

              <div className="mb-6">
                {plan.type && (
                  <div className={`text-[10px] font-bold mb-1 tracking-[0.2em] uppercase ${plan.recommended ? 'text-amber-400' : 'text-gray-500'}`}>
                     {plan.type}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-black uppercase tracking-tight leading-none text-white">{plan.name}</h3>
                  {getIcon(plan.iconName, plan.recommended)}
                </div>
              </div>

              <div className="mb-8 block">
                {plan.oldPrice && (
                  <div className={`text-[12px] font-bold mb-1 ${plan.recommended ? 'text-white/60' : 'text-gray-500'}`}>
                    De <span className="line-through decoration-white/40 decoration-2">R$ {plan.oldPrice}</span> por:
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  <span className={`text-sm font-bold ${plan.recommended ? 'text-white/60' : 'text-gray-500'}`}>R$</span>
                  <span className="text-7xl font-black font-display tracking-tighter text-white">{plan.price}</span>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${plan.recommended ? 'text-white/60' : 'text-gray-500'}`}>Vitalício</span>
                </div>
              </div>

              <ul className="space-y-4 mb-6">
                {plan.features.map((feature, j) => {
                  if (feature.included) {
                    return (
                      <li key={j} className="flex items-start gap-3 md:text-sm text-[12px] font-black uppercase tracking-tight text-white">
                        {plan.recommended ? (
                          <Check size={14} className="text-emerald-400 mt-0.5 shrink-0 drop-shadow-[0_0_4px_rgba(52,211,153,0.6)]" />
                        ) : (
                          <Check size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        )}
                        <span>{feature.text}</span>
                      </li>
                    );
                  } else {
                    return (
                      <li key={j} className="flex items-start gap-3 md:text-sm text-[12px] font-black uppercase tracking-tight text-zinc-600 line-through decoration-red-950/40">
                        <X size={14} className="text-red-500 mt-0.5 shrink-0" />
                        <span>{feature.text}</span>
                      </li>
                    );
                  }
                })}
              </ul>

              {/* Seção de bônus separada e exclusiva */}
              {plan.bonuses && plan.bonuses.length > 0 && (
                <div className="mt-2 mb-8 p-5 bg-gradient-to-br from-amber-500/10 to-amber-600/[0.03] border border-dashed border-amber-500/35 rounded-xl space-y-3 relative overflow-hidden shadow-[inset_0_1px_20px_rgba(245,158,11,0.02)]">
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-black text-[9px] font-black px-2.5 py-0.5 uppercase tracking-[0.1em] rounded-bl-lg font-sans">
                    BÔNUS EXCLUSIVOS
                  </div>
                  
                  <div className="text-amber-400 text-[11px] font-black uppercase tracking-[0.15em] flex items-center gap-2 mb-1">
                    <Sparkles size={12} className="animate-pulse shrink-0" />
                    <span>🎁 100% GRATUITO</span>
                  </div>
                  
                  <ul className="space-y-2.5">
                    {plan.bonuses.map((bonus, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-[11px] md:text-[13px] font-bold text-white uppercase tracking-tight leading-snug">
                        <span className="text-lg shrink-0 -mt-0.5 select-none filter drop-shadow-[0_2px_4px_rgba(245,158,11,0.25)]">🎁</span>
                        <span className="font-sans font-black text-amber-50/95">{bonus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a 
                href={getCheckoutUrl(plan.link)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-6 font-sans font-black rounded-lg uppercase tracking-wide transition-all text-base text-center block ${
                plan.recommended 
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black hover:scale-[1.02] shadow-[0_4px_25px_rgba(245,158,11,0.3)]" 
                  : "bg-primary text-white hover:bg-neutral-900 transition-colors"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
