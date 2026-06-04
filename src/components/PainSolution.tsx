import { X, Check, Brain, CalendarRange, Clock, FolderGit2 } from "lucide-react";
import { motion } from "motion/react";

const PAINS = [
  "Estuda muito, mas não consegue lembrar",
  "Acumula matérias sem revisar",
  "Não sabe exatamente o que estudar",
  "Sua nota não evolui"
];

const PILLARS = [
  {
    num: "1",
    title: "Recuperação Ativa",
    description: "Força o cérebro a lembrar.",
    details: "Método científico comprovado que exige esforço mental consciente, gerando conexões neurais muito mais densas e duradouras do que a mera leitura passiva.",
    icon: Brain
  },
  {
    num: "2",
    title: "Repetição Estratégica",
    description: "Revisa no momento certo.",
    details: "O cronograma recalcula as revisões baseando-se na Curva do Esquecimento de Ebbinghaus, evitando que as matérias se percam e resetando sua retenção.",
    icon: CalendarRange
  },
  {
    num: "3",
    title: "Revisão em Minutos",
    description: "Mais conteúdo em menos tempo.",
    details: "Esqueça PDFs gigantescos e resumos longos. Você revisa dezenas de tópicos em cartões dinâmicos e focados de forma extremamente veloz.",
    icon: Clock
  },
  {
    num: "4",
    title: "Organização Total",
    description: "Tudo centralizado e pronto para usar.",
    details: "Todos os assuntos fundamentais de carreiras policiais rigorosamente divididos, rotulados e interconectados para você começar em 1 clique.",
    icon: FolderGit2
  }
];

export function PainSolution() {
  return (
    <>
      {/* SEÇÃO 2 - PROBLEMA O VERDADEIRO PROBLEMA */}
      <section className="py-24 px-4 bg-[#050505] border-b border-white/5 relative overflow-hidden">
        {/* Subtle decorative dot grid */}
        <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
          <span className="text-red-500 text-xs font-montserrat font-semibold tracking-[0.25em] uppercase px-4 py-2 bg-red-950/20 border border-red-500/30 rounded-full inline-block mb-6 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            ⚠️ O VERDADEIRO PROBLEMA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold uppercase tracking-tight leading-[1.15] md:leading-[1.1] text-white">
            Por que tantos candidatos falham?
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Não é falta de esforço. Na maioria das vezes, é falta de estratégia.
          </p>
        </div>

        {/* Improved Cards Layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 relative z-10 mb-16">
          {PAINS.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#0b0b0b] py-5 px-6 border border-white/5 rounded-2xl flex items-center gap-4 hover:border-red-500/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.12)] hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 bg-red-950/30 border border-red-500/20 rounded-xl flex items-center justify-center text-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.1)]">
                <X size={18} className="stroke-[3]" />
              </div>
              <h4 className="text-[18px] md:text-[20px] font-montserrat font-semibold text-zinc-100 leading-[1.4] tracking-tight">
                {pain}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Premium Diagnostics block */}
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#0b0b0b] to-[#070707] border border-zinc-800/60 shadow-[inset_0_1px_20px_rgba(255,255,255,0.01),0_15px_50px_rgba(0,0,0,0.8)] relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-1 bg-zinc-900 border border-zinc-800 text-[10px] tracking-[0.2em] font-montserrat font-bold text-red-500 uppercase rounded-full shadow-lg">
              DIAGNÓSTICO ESTRATÉGICO
            </div>
            
            <div className="space-y-6 font-montserrat">
              <p className="text-zinc-200 text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                "Esses problemas não acontecem porque você não é capaz.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
                Eles acontecem porque a maioria dos candidatos utiliza métodos de estudo que geram <span className="text-red-500 font-semibold">muito esforço e pouca retenção</span>.
              </p>
              <p className="text-white text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
                E é exatamente isso que impede a evolução."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 3 - APRESENTAÇÃO DA SOLUÇÃO */}
      <section className="py-24 px-4 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
        {/* Background visual glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <span className="text-primary text-[10px] md:text-xs font-black tracking-[0.25em] uppercase px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block mb-4 text-glow">
            🛡️ A Metodologia de Elite
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter leading-tight text-white">
            CONHEÇA O SISTEMA DE REVISÃO INTELIGENTE
          </h2>
          <p className="mt-4 text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto uppercase tracking-wide leading-relaxed">
            Uma metodologia criada para combater o esquecimento e acelerar sua retenção de conteúdo.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {PILLARS.map((pillar, i) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0f0f0f] p-6 lg:p-8 border border-white/5 hover:border-primary/40 transition-all duration-300 relative rounded-2xl flex flex-col justify-between group shadow-lg shadow-black/80 hover:shadow-[0_10px_30px_-15px_rgba(79,102,60,0.15)]"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white border border-primary/20 transition-all duration-300">
                      <IconComp size={22} className="stroke-[2.5]" />
                    </div>
                    <span className="text-xs font-black text-zinc-700 group-hover:text-primary transition-colors font-mono">
                      PILAR #0{pillar.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-black text-white uppercase tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[#d4af37] text-xs font-bold uppercase tracking-tight mb-4">
                    {pillar.description}
                  </p>
                  <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors text-xs leading-relaxed font-medium">
                    {pillar.details}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
