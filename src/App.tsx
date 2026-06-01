import { Hero } from "./components/Hero";
import { motion } from "motion/react";
import { PainSolution } from "./components/PainSolution";
import { MaterialPreview } from "./components/MaterialPreview";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { CompatibleExams } from "./components/CompatibleExams";
import { Guarantee } from "./components/Guarantee";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { ExitPopup } from "./components/ExitPopup";
import { SocialProof } from "./components/SocialProof";
import { Shield, Smartphone, CreditCard, Sparkles, ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      {/* Urgency Pre-header (Relative) */}
      <div className="bg-primary text-white py-1.5 px-4 text-center overflow-hidden whitespace-nowrap relative z-50">
        <div className="flex items-center justify-center gap-8 animate-pulse">
           <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
             <Sparkles size={12} /> ÚLTIMAS VAGAS COM VALOR PROMOCIONAL <Sparkles size={12} />
           </span>
        </div>
      </div>

      <main>
        <div className="relative pt-12 lg:pt-20 pb-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/pm1.png" 
              alt="PMBA Hero Background" 
              className="w-full h-full object-cover opacity-60 grayscale-[10%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center px-4 relative z-10"
          >
            <h1 className="text-3xl md:text-5xl font-black text-center mb-6 max-w-4xl uppercase tracking-tighter leading-tight">
              TORNE-SE UM <span className="text-primary">POLICIAL MILITAR</span> EM 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-3xl leading-tight font-medium tracking-tight">
              Material desenvolvido para candidatos que desejam <span className="text-white font-semibold">acelerar a memorização</span> para <span className="text-white font-semibold">concursos policiais</span>.
            </p>

            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[11px] font-black uppercase tracking-[0.2em] rounded-full">
                <Shield size={14} />
                Preparatório Estratégico 2026
              </div>
            </div>

            {/* Premium Mockup Image Container */}
            <div className="w-full max-w-lg md:max-w-xl mx-auto mb-10 px-4 flex justify-center">
              <img 
                src="/mockup. de 2026, 11_12_29.png" 
                alt="Mockup do Material Preparatório 2026" 
                className="w-full h-auto max-h-[350px] md:max-h-[450px] object-contain drop-shadow-[0_20px_45px_rgba(79,102,60,0.3)] filter contrast-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>

            <a href="#acesso" className="btn-geometric inline-flex items-center justify-center gap-3 w-full sm:w-auto px-12 group">
              QUERO GARANTIR MEU ACESSO
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
        <PainSolution />
        <MaterialPreview />
        <div id="depoimentos"><Testimonials /></div>
        <CompatibleExams />
        <Pricing />
        <Guarantee />
        <div id="faq"><FAQ /></div>
        
        {/* Floating Safe Seals */}
        <section className="py-12 bg-[#080808] border-t border-white/5">
           <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-opacity duration-500">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                 <Smartphone size={20} />
                 <span>Acesso Mobile</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                 <Shield size={20} />
                 <span>Compra Segura</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                 <CreditCard size={20} />
                 <span>Pagamento Instantâneo</span>
              </div>
           </div>
        </section>
      </main>

      {/* Fixed Desktop Scroll Top (Optional but nice) */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="hidden lg:flex fixed bottom-10 right-10 w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 items-center justify-center rounded-full transition-all z-40 cursor-pointer"
        role="button"
        tabIndex={0}
      >
        <ArrowRight size={20} className="-rotate-90" />
      </div>

      <Footer />

      <ExitPopup />

      <SocialProof />

      {/* Mobile Fixed CTA removed as per user request */}
    </div>
  );
}
