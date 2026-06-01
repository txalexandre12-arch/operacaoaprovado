import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "O acesso é vitalício?",
    a: "Sim! Uma vez que você garantir o seu acesso hoje, o material será seu para sempre, incluindo todas as atualizações futuras para os próximos editais."
  },
  {
    q: "Como recebo o material?",
    a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com os dados de acesso à nossa plataforma exclusiva de estudos."
  },
  {
    q: "Funciona no celular?",
    a: "Totalmente. O conteúdo é otimizado para ser lido em smartphones, tablets ou computadores. Você estuda de onde quiser, quando quiser."
  },
  {
    q: "Serve para iniciantes?",
    a: "Com certeza. O material foi estruturado de forma didática, partindo do zero até o nível avançado exigido pela prova da PMBA."
  },
  {
    q: "Tem garantia?",
    a: "Sim, você tem 7 dias de garantia incondicional. Ou você gosta do material e avança nos estudos, ou devolvemos seu dinheiro."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
             F.A.Q
          </div>
          <h2 className="text-4xl font-display font-black uppercase tracking-tighter leading-none mb-4">
            DÚVIDAS <span className="text-primary italic">COMUNS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className={`border transition-all duration-300 ${openIndex === i ? 'border-primary/40 bg-[#111]' : 'border-white/5 bg-[#0d0d0d]'}`}
            >
              <div 
                onClick={() => toggle(i)}
                className="w-full p-6 flex items-center justify-between text-left group cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggle(i); }}
              >
                <span className={`text-sm md:text-lg font-bold uppercase tracking-tight transition-colors ${openIndex === i ? 'text-primary' : 'text-white'}`}>
                   {faq.q}
                </span>
                {openIndex === i ? (
                  <Minus size={20} className="text-primary" />
                ) : (
                  <Plus size={20} className="text-gray-500 group-hover:text-white" />
                )}
              </div>
              
              {openIndex === i && (
                <div className="p-6 pt-0 text-gray-400 font-medium text-sm md:text-base leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
