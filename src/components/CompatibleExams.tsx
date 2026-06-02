import { useState } from "react";
import { Shield, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const CONCURSOS = [
  { id: "PMBA", name: "PMBA", state: "Bahia" },
  { id: "PMAL", name: "PMAL", state: "Alagoas" },
  { id: "PMPE", name: "PMPE", state: "Pernambuco" },
  { id: "PMSE", name: "PMSE", state: "Sergipe" },
  { id: "PMES", name: "PMES", state: "Espírito Santo" },
  { id: "PMDF", name: "PMDF", state: "Distrito Federal" },
  { id: "PMGO", name: "PMGO", state: "Goiás" },
  { id: "PMMG", name: "PMMG", state: "Minas Gerais" },
  { id: "PMPR", name: "PMPR", state: "Paraná" },
  { id: "PMCE", name: "PMCE", state: "Ceará" },
  { id: "PMPB", name: "PMPB", state: "Paraíba" },
  { id: "PMRN", name: "PMRN", state: "Rio Grande do Norte" },
];

export function CompatibleExams() {
  // Store selected/clicked cards to add high-energy glowing states
  const [selectedCards, setSelectedCards] = useState<Record<string, boolean>>({
    PMBA: true, // Let PMBA start activated as a default demo of the glow
  });

  const toggleCard = (id: string) => {
    setSelectedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      {/* Background tatic textures (military grid lines / dot patterns) */}
      <div className="absolute inset-0 dot-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Badge Indicator Section */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#13180e] border border-primary/30 text-emerald-400 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] rounded-full shadow-[0_0_15px_rgba(79,102,60,0.2)] mb-4"
          >
            <span className="text-emerald-400">✅</span>
            <span>CONCURSOS COMPATÍVEIS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight max-w-3xl leading-none text-white"
          >
            Estude Hoje. Aproveite para <span className="text-primary italic">Diversos Concursos</span> Policiais.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl font-medium tracking-tight"
          >
            Nosso material foi desenvolvido com base nas matérias mais cobradas dos principais concursos policiais do Brasil. 
            <span className="block mt-1 text-[11px] text-primary font-bold uppercase tracking-widest">
              💡 Clique nas táticas estaduais abaixo para simular a cobertura!
            </span>
          </motion.p>
        </div>

        {/* 12 Exam Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {CONCURSOS.map((concurso, idx) => {
            const isSelected = selectedCards[concurso.id];
            
            return (
              <motion.div
                key={concurso.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: (idx % 4) * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, translateY: -2 }}
                onClick={() => toggleCard(concurso.id)}
                className={`cursor-pointer select-none relative p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[140px] overflow-hidden ${
                  isSelected
                    ? "bg-[#131a0d] border-primary shadow-[0_0_25px_rgba(79,102,60,0.45)] ring-2 ring-primary/30"
                    : "bg-[#111] border-white/5 hover:border-primary/40 hover:bg-[#0c0f0a] hover:shadow-[0_0_15px_rgba(79,102,60,0.15)]"
                }`}
              >
                {/* Tactical Corner Indicator on Select */}
                {isSelected && (
                  <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10px] right-[-10px] w-6 h-6 bg-primary rotate-45" />
                  </div>
                )}

                {/* Shield Icon container with glowing pulse on selection */}
                <div className={`p-3 rounded-full mb-3 transition-all duration-300 ${
                  isSelected 
                    ? "bg-primary/20 text-emerald-400 scale-110 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]" 
                    : "bg-white/5 text-gray-500"
                }`}>
                  <Shield size={22} className={`${isSelected ? "fill-emerald-400/20" : ""}`} />
                </div>

                {/* State Acronym */}
                <span className={`text-lg md:text-xl font-display font-black tracking-wider transition-colors uppercase ${
                  isSelected ? "text-white" : "text-gray-300"
                }`}>
                  {concurso.name}
                </span>

                {/* State Friendly description / region */}
                <span className={`text-[10px] font-bold uppercase tracking-wider mt-1 transition-colors ${
                  isSelected ? "text-primary" : "text-gray-600"
                }`}>
                  {concurso.state}
                </span>
                
                {/* Click animation sparkles effect */}
                {isSelected && (
                  <div className="absolute bottom-2 hidden sm:flex items-center gap-1 text-[8px] font-black text-emerald-400 tracking-widest uppercase">
                    <Sparkles size={8} className="animate-spin" />
                    <span>ATIVO</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Motivational Banner Frame below grid */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#0a0f07] via-[#121c0b] to-[#0a0f07] border border-primary/20 text-center relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="absolute inset-0 bg-glow opacity-30 pointer-events-none" />
          <div className="text-left max-w-xl z-10">
            <h4 className="text-sm md:text-base font-black uppercase text-white mb-1.5">
              🚀 A preparação tática definitiva para a aprovação
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-sans font-medium">
              Geografia, atualidades, história, matérias jurídicas e muito mais. Ao adquirir o material hoje, você desfolha as barreiras estaduais e se qualifica de forma ágil para as provas de todos os estados representados acima.
            </p>
          </div>
          <a 
            href="#acesso" 
            className="w-full md:w-auto px-6 py-3 bg-primary text-white font-sans font-black rounded-lg text-base uppercase tracking-wide text-center hover:bg-white hover:text-black transition-all shadow-lg shrink-0 z-10"
          >
            Quero Iniciar Hoje
          </a>
        </motion.div>

      </div>
    </section>
  );
}
