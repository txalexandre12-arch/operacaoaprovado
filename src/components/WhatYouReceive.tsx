import { Layers, Calendar, CheckSquare, BrainCircuit, BookOpen, RefreshCcw, Landmark } from "lucide-react";
import { motion } from "motion/react";

interface DeliveryItem {
  title: string;
  desc: string;
  badge?: string;
  icon: any;
}

const ITEMS: DeliveryItem[] = [
  {
    title: "+2.000 Flashcards Estratégicos",
    desc: "Deck cirúrgico com os pontos recorrentemente mais cobrados nas provas policiais pelas bancas organizadoras, desenhados para memorização ativada.",
    badge: "MAIS QUERIDO",
    icon: Layers
  },
  {
    title: "Cronograma Estratégico",
    desc: "O roteiro tático semanal que elimina as dúvidas sobre qual assunto focar hoje, distribuído perfeitamente até o dia do seu concurso.",
    badge: "BÔNUS",
    icon: Calendar
  },
  {
    title: "Simulado Completo",
    desc: "Um caderno de testes práticos com o exato perfil de questões e pegadinhas da banca policial, preparando você para as condições reais da prova.",
    badge: "BÔNUS",
    icon: CheckSquare
  },
  {
    title: "Método de Revisão Inteligente",
    desc: "Instruções objetivas acopladas para acelerar a transição das memórias de curto prazo para a retenção vitalícia no cérebro.",
    badge: "SEGREDO DE ELITE",
    icon: BrainCircuit
  },
  {
    title: "Apostila Estratégica",
    desc: "O conteúdo teórico sintetizado sem rodeios, focando na legislação e doutrina que realmente caem na prova objetiva.",
    badge: "BÔNUS",
    icon: BookOpen
  },
  {
    title: "Atualizações Futuras",
    desc: "Se qualquer lei ou edital mudar, as atualizações serão inseridas na sua plataforma sem nenhum custo adicional.",
    badge: "BÔNUS 100% GRÁTIS",
    icon: RefreshCcw
  },
  {
    title: "Acesso Imediato",
    desc: "Receba o login e senha no seu e-mail logo após a aprovação do seu pagamento, sem precisar esperar nem um minuto sequer.",
    icon: Landmark
  }
];

export function WhatYouReceive() {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a] border-b border-white/5 relative">
      <div className="absolute top-0 left-0 w-full h-[5px] bg-[#d4af37]/10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#d5ad36] text-[10px] md:text-xs font-black uppercase tracking-[0.25em] px-3.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full inline-block mb-4 shadow">
            📦 Conteúdo Completo e Sem Segredos
          </span>
          <h2 className="text-3px md:text-5xl font-display font-black uppercase tracking-tighter leading-none mb-4 text-white">
            TUDO O QUE VOCÊ RECEBE AO ENTRAR
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto uppercase tracking-wide leading-relaxed">
            Tenha tudo o que você precisa reunido sob uma única estrutura profissional de preparação policial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`p-6 md:p-8 bg-[#0d0d0d] rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between group ${
                  item.badge
                    ? "border-primary/30 hover:border-primary/60 shadow-[0_4px_25px_-5px_rgba(79,102,60,0.15)]"
                    : "border-white/5 hover:border-zinc-800"
                }`}
              >
                <div>
                  {item.badge && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-[#d4af37] text-black text-[8px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </div>
                  )}

                  <div className="w-10 h-10 bg-gradient-to-tr from-zinc-900 to-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-primary group-hover:text-amber-400 transition-colors duration-300 mb-6">
                    <IconComp size={20} className="stroke-[2.5]" />
                  </div>

                  <h3 className="text-sm md:text-lg font-display font-black text-white uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors text-xs leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
