import { Check, X } from "lucide-react";
import { motion } from "motion/react";

export function Comparison() {
  const before = [
    "Estudava sem foco",
    "Não sabia por onde começar",
    "Conteúdos desorganizados",
    "Sem evolução real",
  ];

  const after = [
    "Foco total nos estudos",
    "Conteúdo organizado e direto",
    "Evolução perceptível",
    "Direção clara e estratégica",
  ];

  return (
    <section id="comparacao" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Antes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ul className="space-y-4">
              {before.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-500 font-bold uppercase tracking-widest text-[11px] justify-end">
                  <span>{item}</span>
                  <div className="w-2 h-2 bg-primary/40 rotate-45" />
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Depois */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="space-y-6"
          >
            <ul className="space-y-4">
              {after.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-primary font-black uppercase tracking-widest text-[11px]">
                  <div className="w-2 h-2 bg-primary rotate-45" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
