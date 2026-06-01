import { BookOpen, FileCheck, Layers, Layout, Target } from "lucide-react";
import { motion } from "motion/react";

const ITEMS = [
  {
    title: "Apostila PMBA",
    desc: "Material focado no último edital com teoria direto ao ponto.",
    iconName: "book"
  },
  {
    title: "Método de Revisão",
    desc: "Aprenda a revisar o conteúdo sem esquecer os assuntos.",
    iconName: "layers"
  },
  {
    title: "Mini Simulados",
    desc: "Treine com questões estratégicas focadas no estilo da banca.",
    iconName: "target"
  },
  {
    title: "Cronograma de Estudos",
    desc: "Guia passo a passo do que estudar a cada dia da semana.",
    iconName: "layout"
  }
];

const getIcon = (name: string) => {
  switch (name) {
    case "book": return <BookOpen className="text-primary" size={32} />;
    case "layers": return <Layers className="text-primary" size={32} />;
    case "target": return <Target className="text-primary" size={32} />;
    case "layout": return <Layout className="text-primary" size={32} />;
    default: return null;
  }
};

export function WhatYouReceive() {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
             Conteúdo Pronta Entrega
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter leading-none mb-4">
            O QUE VOCÊ <span className="text-primary italic">RECEBE</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-lg font-medium">
             Tudo o que você precisa para dominar o concurso, reunido em uma única plataforma.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card p-8 group overflow-hidden"
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="premium-card p-8 bg-blue-dark/20 border-blue-dark/30 flex flex-col items-center justify-center text-center group"
          >
             <div className="w-16 h-16 bg-blue-dark rounded-full flex items-center justify-center text-primary mb-6 animate-pulse">
                <Target size={32} />
             </div>
             <p className="font-display font-black text-2xl uppercase tracking-tighter italic">E MUITO MAIS...</p>
             <p className="text-xs font-bold text-blue-dark/80 mt-2 uppercase">Materiais Atualizados</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
