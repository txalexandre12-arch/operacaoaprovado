import { Shield, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-10 bg-[#060606] border-t border-white/5 flex flex-col items-center gap-8 text-center">
      <div className="flex items-center gap-2">
        <span className="font-black tracking-tighter text-xl text-primary uppercase">Operação <span className="text-white">Aprovado</span></span>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
        <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
          <Instagram size={14} />
          @operacao_aprovado
        </a>
        <span>contato@operacaoaprovado.com.br</span>
      </div>

      <div className="max-w-md text-[9px] uppercase tracking-[0.2em] text-gray-700 font-bold leading-relaxed">
        © 2026 OPERAÇÃO APROVADO - ESTUDO DE ALTA PERFORMANCE. Todos os direitos reservados. Este material não é afiliado à Polícia Militar da Bahia.
      </div>

      <div className="flex gap-6 text-[9px] uppercase tracking-[0.2em] text-gray-600 font-bold">
        <span>Segurança Garantida</span>
        <span>Acesso Digital Imediato</span>
      </div>
    </footer>
  );
}

