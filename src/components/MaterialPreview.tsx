import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const FLASHCARDS = [
  {
    src: "/dep1.png",
    alt: "Prévia do Material 1"
  },
  {
    src: "/dep2.png",
    alt: "Prévia do Material 2"
  },
  {
    src: "/dep3.png",
    alt: "Prévia do Material 3"
  }
];

export function MaterialPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % FLASHCARDS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  // Variants for slide animation
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  return (
    <section className="py-24 px-4 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
      {/* Subtle background glow effect using military green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
        <span className="text-primary text-xs font-black tracking-[0.25em] uppercase px-3 py-1 bg-primary/10 border border-primary/25 rounded-full inline-block mb-4 shadow">
          <Sparkles className="inline-block w-3 .h-3 mr-1 animate-pulse" /> Material Prático
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter leading-tight text-white mb-4">
          PRÉVIA DO <span className="text-primary italic">MATERIAL</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto uppercase tracking-wide">
          Veja abaixo alguns dos nossos flashcards e entenda como funciona a metodologia de fixação acelerada.
        </p>
      </div>

      <div className="max-w-lg mx-auto relative z-10 px-4 md:px-0">
        {/* Carousel Outer Container */}
        <div className="relative flex items-center justify-center min-h-[580px] md:min-h-[660px]">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] md:left-[-60px] z-30 p-3 rounded-full bg-zinc-950/85 hover:bg-primary border border-zinc-800 hover:border-primary text-white hover:text-white transition-all shadow-[0_4px_24px_rgba(0,0,0,0.5)] touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center group"
            aria-label="Flashcard anterior"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[-20px] md:right-[-60px] z-30 p-3 rounded-full bg-zinc-950/85 hover:bg-primary border border-zinc-800 hover:border-primary text-white hover:text-white transition-all shadow-[0_4px_24px_rgba(0,0,0,0.5)] touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center group"
            aria-label="Próximo flashcard"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Phone Frame Mockup container */}
          <div className="relative w-full max-w-[320px] aspect-[9/18.5] bg-[#0c0c0c] rounded-[45px] border-[8px] border-zinc-800 p-2 shadow-[0_25px_60px_-15px_rgba(79,102,60,0.25)] ring-1 ring-white/10 overflow-hidden">
            {/* Phone Speaker & Camera Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#000000] rounded-full z-20 flex items-center justify-center border border-white/5">
              <div className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full mr-2" />
              <div className="w-8 h-1 bg-[#151515] rounded-full" />
            </div>

            {/* Content area */}
            <div className="w-full h-full bg-black rounded-[36px] overflow-hidden relative flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full overflow-hidden"
                >
                  <img
                    src={FLASHCARDS[currentIndex].src}
                    alt={FLASHCARDS[currentIndex].alt}
                    className="w-full h-full object-cover scale-[1.08] origin-center rounded-[36px]"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dots Page Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {FLASHCARDS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-primary" : "w-2 bg-zinc-800 hover:bg-zinc-700"
              }`}
              aria-label={`Ir para flashcard ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
