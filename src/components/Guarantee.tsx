import { ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function Guarantee() {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0c0c0c] border border-white/5 p-8 md:p-14 rounded-3xl flex flex-col md:flex-row items-center gap-10 md:gap-14 relative overflow-hidden shadow-2xl"
        >
          {/* Glowing element behind seal */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-3xl rounded-full" />
          
          <div className="relative shrink-0 select-none">
            <img 
              src="/Selo.png" 
              alt="Garantia de 7 Dias" 
              className="w-32 md:w-44 h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(79,102,60,0.35)] transition-transform duration-500 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="text-center md:text-left flex-1 space-y-4">
            <span className="inline-flex items-center gap-1.5 text-primary font-black uppercase text-[10px] sm:text-xs tracking-[0.2em] px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-md">
              <ShieldCheck size={14} className="stroke-[2.5]" />
              Compromisso e Transparência
            </span>
            
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter leading-none text-white">
              TESTE POR 7 DIAS <br className="hidden md:block" /> <span className="text-[#d4af37] italic">SEM RISCO</span>
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-semibold">
              Utilize o material. Se por qualquer motivo você sentir que ele não é para você, devolvemos 100% do seu investmento. Bastará nos mandar uma mensagem simples. Sem perguntas, sem burocracia ou ressentimentos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
