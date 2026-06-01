import { Star } from "lucide-react";
import { motion } from "motion/react";

const IMAGES = [
  "/depoi1.png",
  "/depoi2.png",
  "/depoi3.png",
  "/depoi4.png",
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4 font-sans">
             Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter leading-none mb-4">
            DEPOIMENTOS DE <span className="text-primary italic">ALUNOS</span>
          </h2>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={16} className="fill-primary text-primary animate-pulse" style={{ animationDelay: `${s * 150}ms` }} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#111] hover:border-primary/45 hover:shadow-[0_0_35px_rgba(79,102,60,0.22)] transition-all duration-300 group flex justify-center items-center p-1.5"
            >
              <img
                src={img}
                alt={`Depoimento de Aluno ${i + 1}`}
                className="w-full h-auto object-contain rounded-xl transition-all duration-500 group-hover:scale-[1.03] filter contrast-[1.03]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
