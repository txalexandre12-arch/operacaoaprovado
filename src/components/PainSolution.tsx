import { X, Check, Brain, Zap, FolderCheck, Target, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const PAINS = [
  {
    title: "Estudar hoje e esquecer amanhã.",
    description: "Você aprende o conteúdo, mas poucos dias depois parece que nunca estudou aquilo."
  },
  {
    title: "Perder tempo com conteúdos desnecessários",
    description: "Fica preso a teorias complexas e PDFs cansativos que sequer possuem histórico de cobrança real nas provas da banca."
  },
  {
    title: "Dificuldade absurda para revisar",
    description: "Quando tenta revisar o que estudou semanas atrás, sente que esqueceu tudo e precisa recomeçar do absoluto zero."
  },
  {
    title: "Falta de organização nos estudos",
    description: "A ausência de um plano claro gera um cansaço mental constante, fazendo com que você comece os estudos perdido todos os dias."
  },
  {
    title: "Sensação de estar estagnado",
    description: "Você resolve simulados e questões, mas percebe que sua nota final continua travada e sem sinal de evolução clara."
  }
];

const SOLUTIONS = [
  {
    title: "Estudo Ativo",
    description: "Pare de apenas ler. Force seu cérebro a recuperar informações.",
    icon: Brain
  },
  {
    title: "Revisão Rápida",
    description: "Revise dezenas de assuntos em poucos minutos.",
    icon: Zap
  },
  {
    title: "Material 100% Organizado",
    description: "Chega de perder tempo arrumando pastas lentas ou desorganizadas. Acesse seu cronograma completo e centralizado em um só clique.",
    icon: FolderCheck
  },
  {
    title: "Roteiro de Estudo com Mais Foco",
    description: "Saiba exatamente qual passo dar a cada dia. Reduza a ansiedade do planejamento e gaste sua energia puramente estudando.",
    icon: Target
  },
  {
    title: "Acesso Imediato e Seguro",
    description: "Inicie sua preparação de Elite hoje mesmo. Receba suas credenciais de acesso exclusivas instantaneamente após a confirmação.",
    icon: ShieldCheck
  }
];

export function PainSolution() {
  return (
    <>
      {/* SEÇÃO DE DOR (PAIN) */}
      <section className="py-24 px-4 bg-[#050505] border-b border-white/5 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <span className="text-zinc-500 text-xs font-black tracking-[0.25em] uppercase px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full inline-block mb-4 shadow">
            O Grande Obstáculo
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter leading-tight text-white">
            Você se <span className="text-primary italic">identifica</span> com alguma dessas situações?
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base max-w-2xl mx-auto uppercase tracking-wide">
            A maioria dos candidatos falha não por falta de esforço, mas por estudar sem a clareza e direção necessárias.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {PAINS.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0b0b0b] p-6 md:p-8 border border-white/5 hover:border-zinc-800 transition-colors duration-300 relative rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-red-950/20 rounded-xl flex items-center justify-center text-red-500 mb-6 border border-red-500/10">
                  <X size={18} className="stroke-[3]" />
                </div>
                <h4 className="text-base md:text-lg font-display font-black text-white uppercase tracking-tight mb-3">
                  {pain.title}
                </h4>
                <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed">
                  {pain.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEÇÃO DE SOLUÇÃO (SOLUTION) */}
      <section className="py-24 px-4 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 dot-pattern opacity-15 pointer-events-none" />
        
        {/* Dark military green glowing radial background effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <span className="text-primary text-xs font-black tracking-[0.25em] uppercase px-3 py-1 bg-primary/10 border border-primary/25 rounded-full inline-block mb-4 shadow-sm shadow-primary/20">
            A Solução Definitiva
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter leading-tight text-white animate-pulse">
            Agora imagine estudar <span className="text-primary italic">com direção</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base max-w-2xl mx-auto uppercase tracking-wide">
            Um método estruturado cirurgicamente para maximizar sua retenção e te levar direto à aprovação.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {SOLUTIONS.map((solution, i) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#111] p-6 md:p-8 border border-primary/10 hover:border-primary/30 transition-colors duration-300 relative rounded-2xl flex flex-col justify-between shadow-[0_10px_30px_-15px_rgba(79,102,60,0.15)]"
              >
                <div>
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 border border-primary/20">
                    <IconComponent size={18} className="stroke-[3]" />
                  </div>
                  <h4 className="text-base md:text-lg font-display font-black text-white uppercase tracking-tight mb-3">
                    {solution.title}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed">
                    {solution.description}
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

