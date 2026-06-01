import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ShieldCheck, Zap } from "lucide-react";

interface SocialProofItem {
  id: number;
  name: string;
  action: string;
  time: string;
  location: string;
}

const ITEMS: SocialProofItem[] = [
  { id: 1, name: "Guilherme S.", action: "acabou de adquirir o material", time: "há 12 segundos", location: "Salvador - BA" },
  { id: 2, name: "João P.", action: "acabou de garantir acesso ao combo", time: "há 45 segundos", location: "Feira de Santana - BA" },
  { id: 3, name: "Lucas M.", action: "começou a estudar com estratégia", time: "há 1 minuto", location: "Vitória da Conquista - BA" },
  { id: 4, name: "Matheus B.", action: "garantiu a Operação Tática Completa", time: "há 2 minutos", location: "Camaçari - BA" },
  { id: 5, name: "Felipe R.", action: "saiu na frente da concorrência", time: "há 3 minutos", location: "Itabuna - BA" },
  { id: 6, name: "Gabriel N.", action: "acabou de garantir o acesso", time: "há 4 minutos", location: "Juazeiro - BA" },
  { id: 7, name: "Rafael A.", action: "iniciou a preparação rumo à PMBA", time: "há 5 minutos", location: "Lauro de Freitas - BA" },
  { id: 8, name: "Rodrigo T.", action: "adquiriu o material tático", time: "há 6 minutos", location: "Jequié - BA" },
  { id: 9, name: "Bruno C.", action: "acabou de se juntar ao pelotão", time: "há 7 minutos", location: "Teixeira de Freitas - BA" },
  { id: 10, name: "Victor S.", action: "começou sua jornada de estudos", time: "há 8 minutos", location: "Barreiras - BA" }
];

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before showing the first popup
    const startTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Time that the popup remains visible (e.g., 5 seconds)
    const activeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5500);

    return () => clearTimeout(activeTimer);
  }, [isVisible, currentIndex]);

  useEffect(() => {
    if (isVisible) return;

    // Delay between popups (e.g., 6 seconds)
    const delayTimer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ITEMS.length);
      setIsVisible(true);
    }, 6000);

    return () => clearTimeout(delayTimer);
  }, [isVisible]);

  const currentItem = ITEMS[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] sm:w-auto sm:max-w-sm bg-zinc-950/95 backdrop-blur-md rounded-xl border border-white/10 border-l-4 border-l-primary shadow-2xl p-4 flex items-center gap-3.5 select-none"
        >
          {/* Status Icon/Verified Badge */}
          <div className="flex-shrink-0 relative">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary relative shadow-inner">
              <ShieldCheck size={20} className="text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-950 flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full animate-ping" />
              </div>
            </div>
          </div>

          {/* Social Proof Text Content */}
          <div className="flex-grow min-w-0 pr-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold text-gray-200">
                {currentItem.name}
              </span>
              <span className="text-[10px] font-medium text-gray-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/5 uppercase">
                {currentItem.location}
              </span>
            </div>
            <p className="text-xs text-gray-300 mt-0.5 leading-snug font-medium">
              <span className="text-primary font-bold">✅ </span>
              {currentItem.action}
            </p>
            <div className="flex items-center gap-1 mt-1 text-[10px] text-gray-500 font-semibold tracking-wide">
              <Zap size={10} className="text-primary" />
              <span>{currentItem.time}</span>
              <span className="mx-1">•</span>
              <span className="text-emerald-500 flex items-center gap-0.5">
                <Check size={8} className="stroke-[3]" /> conexão segura
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
