import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 lg:pt-20 pb-20 overflow-hidden bg-black flex flex-col items-center">
      {/* Absolute ambient lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-primary/10 blur-[150px] -z-10 rounded-full" />
      <div className="absolute top-1/4 left-1/3 w-[200px] h-[200px] bg-amber-500/5 blur-[100px] -z-10 rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center px-4 relative z-10 w-full max-w-4xl text-center"
      >


        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-snug sm:leading-tight md:leading-normal uppercase tracking-wide max-w-4xl mb-6 font-display">
          CONQUISTE SUA FARDA.<br className="hidden sm:inline" />{" "}
          <span className="text-[#d4af37] font-extrabold filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.25)]">
            SEM PASSAR HORAS E HORAS RELENDO MATÉRIA.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-300 text-sm sm:text-base md:text-xl leading-relaxed max-w-3xl mb-10 font-sans font-medium px-2">
          Um Sistema de Revisão Inteligente criado para candidatos de carreiras policiais que querem memorizar mais, revisar mais rápido e aumentar suas chances de aprovação.
        </p>

        {/* Premium Mockup Image Container */}
        <div className="w-full max-w-lg md:max-w-xl mx-auto mb-10 px-4 flex flex-col items-center relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-amber-500/10 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />
          <img 
            src="/mockup.png" 
            alt="Sistema de Revisão Inteligente para Carreiras Policiais" 
            className="w-full h-auto max-h-[350px] md:max-h-[420px] object-contain drop-shadow-[0_25px_60px_rgba(79,102,60,0.55)] filter contrast-[1.05] brightness-110 transition-transform duration-500 hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Interactive CTA Link */}
        <a 
          href="#acesso" 
          id="hero-cta"
          className="btn-geometric inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 group bg-primary hover:bg-[#3d4f2e] text-white rounded-xl shadow-[0_4px_30px_rgba(79,102,60,0.35)] hover:shadow-[0_4px_40px_rgba(79,102,60,0.5)] transition-all transform active:scale-95 duration-200"
        >
          <span>QUERO GARANTIR MEU ACESSO</span>
          <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform stroke-[2.5]" />
        </a>
      </motion.div>
    </section>
  );
}
