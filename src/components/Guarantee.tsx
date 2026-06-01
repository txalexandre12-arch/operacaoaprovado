import { ShieldCheck, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";

export function Guarantee() {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-dark/10 border border-primary/20 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -z-10" />
          
          <div className="relative shrink-0">
            <img 
              src="/Selo.png" 
              alt="Garantia de 7 Dias" 
              className="w-36 md:w-52 h-auto object-contain filter drop-shadow-[0_10px_30px_rgba(79,102,60,0.2)]"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-[0.3em] mb-4">
              <Calendar size={14} />
              Risco Zero Garantido
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter leading-none mb-6">
              GARANTIA DE <br/> <span className="text-primary italic">7 DIAS</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-medium mb-8">
              O nosso compromisso é com a sua aprovação. Se em até 7 dias você sentir que o material não é para você, basta nos enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
               <Clock size={16} className="text-primary" />
               Proteção Total ao Consumidor
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
