import { Shield, Instagram, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 bg-[#040404] border-t border-white/5 text-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand signature */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-black tracking-tighter text-lg text-primary uppercase">
            Operação <span className="text-white">Aprovado</span>
          </span>
          <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest mt-1">Estudo Avançado de Alta Performance</p>
        </div>

        {/* Dynamic center contact links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-[10px] uppercase tracking-wider font-black">
          <a 
            href="https://instagram.com/operacao_aprovado" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-amber-500 text-zinc-400 transition-colors flex items-center gap-1.5"
          >
            <Instagram size={13} className="text-primary" />
            <span>@operacao_aprovado</span>
          </a>
          <span className="text-zinc-700 hidden sm:inline">•</span>
          <a 
            href="mailto:contato@operacaoaprovado.com.br" 
            className="hover:text-amber-500 text-zinc-400 transition-colors flex items-center gap-1.5"
          >
            <Mail size={13} className="text-primary" />
            <span>contato@operacaoaprovado.com.br</span>
          </a>
        </div>

        {/* Safety credentials row */}
        <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
          <span className="flex items-center gap-1.5 text-emerald-500/80">
            <Shield size={11} className="stroke-[2.5]" /> Segura
          </span>
          <span>•</span>
          <span>Acesso Imediato</span>
        </div>

      </div>

      {/* Legal & copyright disclaimer section */}
      <div className="max-w-4xl mx-auto border-t border-white/5 mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-[8px] sm:text-[9px] uppercase tracking-widest font-bold">
        <span>© {currentYear} OPERAÇÃO APROVADO. TODOS OS DIREITOS RESERVADOS.</span>
        <span className="hover:text-zinc-400 transition-colors cursor-help">ESTE MATERIAL NÃO É AFILIADO À POLÍCIA MILITAR OU OUTRAS CORPORAÇÕES.</span>
      </div>
    </footer>
  );
}
