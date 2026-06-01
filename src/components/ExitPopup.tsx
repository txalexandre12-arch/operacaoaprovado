import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldAlert, Timer, ArrowRight, Zap, Shield, Check, FileText, Target, Brain, RotateCw, Calendar } from "lucide-react";
import { getCheckoutUrl } from "../lib/checkout";

export function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes timer

  useEffect(() => {
    // Desktop: Mouse Leave
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isOpen) {
        const hasShown = sessionStorage.getItem("exit_popup_shown");
        if (!hasShown) {
          setIsOpen(true);
          sessionStorage.setItem("exit_popup_shown", "true");
        }
      }
    };

    // Mobile: Show after a delay
    const mobileTimer = setTimeout(() => {
        const hasShown = sessionStorage.getItem("exit_popup_shown");
        if (!hasShown && window.innerWidth < 768) {
            setIsOpen(true);
            sessionStorage.setItem("exit_popup_shown", "true");
        }
    }, 45000); // 45 seconds for mobile delay logic

    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [isOpen]);

  // Timer logic
  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="exit-popup-overlay" className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop with extreme blur and dark overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-[#0a0a0a] border-2 border-primary/30 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(79,102,60,0.25)]"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white/30 hover:text-white transition-colors z-20"
              id="close-exit-popup"
            >
              <X size={24} />
            </button>

            {/* Tactical/Cinematic Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Dot pattern */}
                <div className="absolute inset-0 dot-pattern opacity-10" />
                
                {/* Red Glow Corner */}
                <div className="absolute -top-1/4 -right-1/4 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full" />
                
                {/* Smoke/Mist bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent" />
                
                {/* Military Texture Overlay (simulated with subtle stripes) */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
            </div>

            <div className="relative z-10 p-4 md:p-8 flex flex-col items-center text-center">
              {/* Alert Icon - Hiding on mobile to save space */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="hidden md:flex mb-4 w-14 h-14 bg-primary/10 border border-primary/40 rounded-xl items-center justify-center text-primary relative"
              >
                  <ShieldAlert size={28} className="relative z-10" />
                  <div className="absolute inset-0 rounded-xl border-2 border-primary/40 animate-ping opacity-20" />
                  <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl" />
              </motion.div>

              {/* Title Section */}
              <div className="mb-3 md:mb-4">
                <h2 className="text-lg md:text-2xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                  🚨 ESPERA! <span className="text-primary italic">NÃO SAIA AINDA...</span>
                </h2>
                <div className="h-1 w-12 md:w-16 bg-primary mx-auto rounded-full mb-2 md:mb-3 shadow-[0_0_10px_rgba(79,102,60,0.5)]" />
                <p className="text-gray-300 font-bold text-[10px] md:text-sm uppercase tracking-tight max-w-[240px] mx-auto">
                  Seu sonho de se tornar Policial Militar pode começar <span className="text-white underline decoration-primary underline-offset-4">HOJE.</span>
                </p>
              </div>

              {/* Price Reveal Box */}
              <div className="w-full bg-[#111] border border-white/5 rounded-2xl p-3 md:p-4 mb-3 md:mb-4 relative group shadow-inner">
                 <div className="absolute inset-0 bg-primary/5 opacity-40" />
                 
                 <div className="relative z-10">
                    <p className="text-gray-500 line-through text-[9px] md:text-xs font-black uppercase tracking-widest">
                      De R$ 27,00 por apenas:
                    </p>
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-[10px] md:text-sm font-black text-white/60 mb-2 md:mb-4">R$</span>
                        <span className="text-4xl md:text-6xl font-black text-primary tracking-tighter text-glow drop-shadow-[0_0_15px_rgba(79,102,60,0.4)]">
                          22,00
                        </span>
                    </div>
                 </div>
              </div>

              {/* Timer */}
              <div className="flex items-center gap-2 mb-3 md:mb-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full shadow-lg">
                <Timer size={12} className="text-primary animate-pulse" />
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-white/80">
                  Oferta exclusiva encerra em: <span className="text-primary">{formatTime(timeLeft)}</span>
                </span>
              </div>

              {/* Benefits Section: Plano Premium */}
              <div className="w-full mb-4 md:mb-6 text-left bg-black/40 border border-white/5 rounded-xl p-3 md:p-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Shield size={40} className="text-primary" />
                </div>
                
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                  <span className="w-4 h-px bg-primary" />
                  Plano Premium
                </h3>

                <div className="grid grid-cols-1 gap-1.5 md:gap-2">
                  {[
                    { label: "+2.000 Flashcards Estratégicos", icon: Check },
                    { label: "Todas as matérias", icon: FileText },
                    { label: "Bônus Inclusos", icon: Zap },
                  ].map((benefit, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.05) }}
                      className="flex items-center gap-2 group/item border-b border-white/[0.02] pb-1 md:pb-1.5 last:border-0 last:pb-0"
                    >
                      <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all">
                        <Check size={10} md:size={12} strokeWidth={3} />
                      </div>
                      <span className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-tight group-hover/item:text-white transition-colors">
                        {benefit.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Main Button */}
              <a 
                href={getCheckoutUrl("https://pay.wiapy.com/xyDAkpwkND")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-neutral-900 text-white font-black py-3 md:py-4 px-6 rounded-xl shadow-[0_15px_40px_-10px_rgba(79,102,60,0.5)] hover:shadow-[0_20px_50px_-8px_rgba(79,102,60,0.7)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group text-sm md:text-lg uppercase tracking-tight text-center"
              >
                QUERO APROVEITAR AGORA
                <ArrowRight size={18} md:size={20} className="group-hover:translate-x-1.5 transition-transform" />
              </a>

              {/* Trust/Tactical Badges */}
              <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-white/5 w-full flex items-center justify-center gap-4 md:gap-6 opacity-40">
                 <div className="flex items-center gap-1.5 md:gap-2 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white">
                    <Shield size={10} md:size={12} /> 100% SEGURO
                 </div>
                 <div className="flex items-center gap-1.5 md:gap-2 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white">
                    <Zap size={10} md:size={12} /> ACESSO IMEDIATO
                 </div>
              </div>
            </div>
            
            {/* Ambient light bar at the bottom */}
            <div className="h-1.5 w-full bg-primary shadow-[0_0_20px_rgba(79,102,60,0.8)]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
