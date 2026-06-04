import { Star, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

const IMAGES = [
  "/depoi1.png",
  "/depoi2.png",
  "/depoi3.png",
];

const SNIPPETS = [
  "&quot;Estava há meses empacotado na mesma nota, a revisão me salvou&quot;",
  "&quot;Consigo revisar toda a matéria da semana em menos de 1 hora&quot;",
  "&quot;A retenção é bizarra. Fica muito fácil lembrar no dia do simulado&quot;"
];

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden border-b border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-glow text-amber-500 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-full mb-4">
            <Star size={11} className="fill-amber-500 text-amber-500" />
            <span>Resultados de Verdade (Risco Zero)</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter leading-tight text-white mb-4">
            Depoimentos de <span className="text-primary italic">Alunos</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-bold uppercase tracking-wider max-w-2xl text-center leading-relaxed font-sans px-2">
            &ldquo;Centenas de candidatos já utilizam o método para acelerar seus estudos.&rdquo;
          </p>
        </div>

        {/* Global Stars Highlights Bar */}
        <div className="max-w-2xl mx-auto bg-[#0d0d0d] rounded-2xl p-6 border border-white/5 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
            <div className="flex gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="fill-[#d4af37] text-[#d4af37] filter drop-shadow-[0_0_5px_rgba(212,175,55,0.4)]" />
              ))}
            </div>
            <p className="text-sm font-black text-white uppercase tracking-tight">MÉTRICA DE AVALIAÇÃO DE EXCELÊNCIA</p>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Aprovado pelo conselho de carreiras policiais</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-5xl font-black font-display text-white">4.9</span>
            <div className="text-left leading-none">
              <span className="text-[10px] font-black tracking-widest text-[#d4af37] uppercase">ESTRELAS</span>
              <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest leading-none mt-0.5">Satisfação de 98.7%</p>
            </div>
          </div>
        </div>

        {/* Testimonials horizontal slide bar */}
        <div className="relative">
          {/* Scroll indicators/buttons */}
          <div className="absolute -top-16 right-2 flex gap-2 z-20">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#d4af37]/45 hover:bg-zinc-800 transition-all cursor-pointer shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} className="stroke-[2.5]" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#d4af37]/45 hover:bg-zinc-800 transition-all cursor-pointer shadow-lg"
              aria-label="Próximo"
            >
              <ChevronRight size={18} className="stroke-[2.5]" />
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="snap-start shrink-0 w-[290px] sm:w-[320px] bg-[#0c0c0c] border border-white/5 rounded-2xl overflow-hidden p-3 hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(79,102,60,0.15)] flex flex-col justify-between transition-all"
              >
                {/* Visual Feedback screenshot panel */}
                <div className="relative bg-black rounded-xl overflow-hidden mb-4 border border-white/5 p-1 flex justify-center items-center">
                  <img
                    src={img}
                    alt={`Feedback do Aluno ${i + 1}`}
                    className="w-full h-auto max-h-[360px] object-contain rounded-lg filter contrast-[1.03]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Snip card description / golden subtitle */}
                <div className="bg-black/40 rounded-xl p-3 border border-dashed border-zinc-800/80">
                  <span className="text-[9px] text-[#d4af37] font-black uppercase tracking-widest block mb-1">DESTAQUE DO RELATO</span>
                  <p className="text-[11px] sm:text-xs font-bold text-zinc-300 uppercase tracking-tight leading-relaxed italic" dangerouslySetInnerHTML={{ __html: SNIPPETS[i] }} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Swipe indicator helper */}
          <div className="flex justify-center items-center gap-1.5 mt-2">
            {IMAGES.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
