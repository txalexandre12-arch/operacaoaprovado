import { motion } from "motion/react";
import { PainSolution } from "./components/PainSolution";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Guarantee } from "./components/Guarantee";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { SocialProof } from "./components/SocialProof";
import { Shield, Smartphone, CreditCard, Sparkles, ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      {/* Urgency Pre-header (Relative) */}
      <div className="bg-red-650 bg-[#b91c1c] text-white py-1.5 px-3 text-center relative z-50">
        <div className="flex items-center justify-center gap-1.5 animate-pulse max-w-full mx-auto">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.08em] sm:tracking-[0.25em] flex items-center justify-center gap-1.5 text-center text-white leading-tight">
            <Sparkles size={11} className="shrink-0 text-red-200" />
            <span>OFERTA LIMITADA APENAS HOJE</span>
            <Sparkles size={11} className="shrink-0 text-red-200" />
          </span>
        </div>
      </div>

      <main>
        <div className="relative pt-12 lg:pt-20 pb-20 overflow-hidden bg-black">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center px-4 relative z-10"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-6 max-w-4xl uppercase tracking-normal leading-snug md:leading-normal">
              A SENSAÇÃO DE ESTUDAR E ESQUECER TUDO <span className="text-red-500 font-extrabold">ACABA HOJE</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-3xl leading-tight font-medium tracking-tight">
              Revise em minutos, memorize mais rápido e aumente suas chances de aprovação.
            </p>

            {/* Premium Mockup Image Container */}
            <div className="w-full max-w-lg md:max-w-xl mx-auto mb-10 px-4 flex justify-center">
              <img 
                src="/mockup. de 2026, 11_12_29.png" 
                alt="Mockup do Material Preparatório 2026" 
                className="w-full h-auto max-h-[350px] md:max-h-[450px] object-contain drop-shadow-[0_20px_50px_rgba(79,102,60,0.65)] filter contrast-[1.05] brightness-110"
                referrerPolicy="no-referrer"
              />
            </div>

            <a href="#acesso" className="btn-geometric inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 group">
              QUERO GARANTIR MEU ACESSO
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
        <PainSolution />
        <div id="depoimentos"><Testimonials /></div>
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

      <SocialProof />

      {/* Mobile Fixed CTA removed as per user request */}
    </div>
  );
}
