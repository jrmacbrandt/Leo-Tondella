/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Star, Download, PlayCircle, Clock, MessageSquare, ChevronRight, Check } from "lucide-react";
import React, { useState, useEffect } from 'react';


// --- Sub-components ---

const PremiumButton = ({ children, className = "", variant = "primary" }: { children: React.ReactNode; className?: string; variant?: "primary" | "secondary" }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}
    whileTap={{ scale: 0.95 }}
    className={`px-10 py-5 rounded-full font-extrabold text-lg uppercase tracking-wider transition-all shadow-2xl relative overflow-hidden group ${
      variant === "primary"
        ? "bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white"
        : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
    } ${className}`}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
  </motion.button>
);

const SectionDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-4" />
);

const GlowingBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(110,72,170,0.05)_0%,_transparent_70%)]" />
  </div>
);

// --- Main Application ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030014] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-4 overflow-hidden">
        <GlowingBackground />
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold text-xs uppercase tracking-widest mb-8">
              TSTUDIO PACK GOSPEL
            </span>
            
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Pare de criar artes do zero.<br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Artes gospel 100% Editáveis
              </span><br />
              para sua igreja em minutos.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
              Edite no Celular ou PC, mesmo sem experiência.
            </p>

            <div className="flex flex-col items-center gap-2 mb-12">
              <span className="text-gray-500 line-through text-lg font-bold">DE: R$ 89,99</span>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 text-4xl md:text-5xl font-black">HOJE POR APENAS</span>
                <span className="text-white text-4xl md:text-5xl font-black drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">R$ 29,99</span>
              </div>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">
                ACESSO VITALÍCIO. (OFERTA POR TEMPO LIMITADO)
              </span>
            </div>

            <PremiumButton className="mb-20">GARANTIR MEU PACK</PremiumButton>

            {/* 3D Mockup Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="relative z-10 group">
                 <img 
                   src="https://placehold.co/800x1000/1e1b4b/white?text=PACK+GOSPEL+3D+MOCKUP" 
                   alt="Pack Gospel Mockup"
                   className="rounded-3xl shadow-[0_0_100px_rgba(168,85,247,0.3)] border border-white/10 transition-transform duration-500 group-hover:scale-[1.02]"
                 />
                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600/20 via-transparent to-blue-600/20 pointer-events-none" />
              </div>
              {/* Reflection */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-gradient-to-t from-transparent via-purple-500/10 to-transparent blur-3xl opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Decorative Gradient Bar */}
      <div className="h-24 bg-gradient-to-b from-transparent via-purple-600/20 to-transparent" />

      {/* Showcase Section */}
      <section className="py-24 bg-[#050510]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black mb-4">
              VEJA ALGUMAS ARTES QUE <span className="text-purple-500 uppercase">VOCÊ VAI RECEBER</span>
            </h2>
            <p className="text-gray-400 text-lg uppercase tracking-wide">Modelos modernos, impactantes e totalmente personalizáveis.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 bg-gray-900"
              >
                <img 
                  src={`https://placehold.co/600x800/2e1065/white?text=ARTE+GOSPEL+${i}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={`Arte ${i}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section Header Bar */}
      <div className="bg-gradient-to-r from-transparent via-purple-600 to-transparent h-[1px] w-full" />
      <div className="bg-[#0b0b2b] py-4 text-center">
        <span className="text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em] px-4">
          IDEAL PARA IGREJAS, LÍDERES E MÍDIAS QUE PRECISAM POSTAR TODA SEMANA.
        </span>
      </div>
      <div className="bg-gradient-to-r from-transparent via-purple-600 to-transparent h-[1px] w-full" />

      {/* Bonus Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 leading-tight max-w-4xl mx-auto">
            Adquirindo o <span className="text-purple-500 italic">Pack Gospel</span> hoje você leva tudo isso de bônus
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-20">
            {[
              { label: "STORIES", icon: <PlayCircle />, color: "bg-blue-500", img: "https://placehold.co/200x200/1e3a8a/white?text=PLAY" },
              { label: "FEED", icon: <PlayCircle />, color: "bg-purple-500", img: "https://placehold.co/200x200/4c1d95/white?text=PLAY" },
              { label: "ARTE PRONTA", icon: <Star />, color: "bg-yellow-500", img: "https://placehold.co/200x200/713f12/white?text=STAR" },
              { label: "CRIATIVO", icon: <PlayCircle />, color: "bg-indigo-500", img: "https://placehold.co/200x200/312e81/white?text=PLAY" },
              { label: "DOWNLOADS", icon: <Download />, color: "bg-pink-500", img: "https://placehold.co/200x200/831843/white?text=SAVE" },
            ].map((bonus, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 p-1 bg-gradient-to-tr from-purple-500 to-blue-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center relative group">
                    <img src={bonus.img} alt={bonus.label} className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-3xl opacity-80 group-hover:scale-110 transition-transform">
                      {bonus.icon}
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-sm md:text-base uppercase tracking-widest">{bonus.label}</h4>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <p className="text-lg md:text-xl text-gray-300">
              <span className="text-purple-400 font-bold">Videoaulas completas</span> para você mesmo não sabendo nada de design possa criar suas artes.
            </p>
            <p className="text-xl md:text-2xl font-black">
              MAIS DE <span className="text-yellow-400">R$ 200 EM BÔNUS DE PRESENTE</span><br />
              <span className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-widest">SÓ O CONHECIMENTO DESSAS AULAS VALE MUITO MAIS DO QUE O SEU INVESTIMENTO HOJE.</span>
            </p>
          </div>

          <PremiumButton variant="secondary" className="px-12">
            QUERO GARANTIR MEU PACK + BÔNUS
          </PremiumButton>
        </div>
      </section>

      {/* Why this Pack Section */}
      <section className="py-24 bg-[#0a0a1a] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">
                Por que esse Pack é a escolha <span className="text-purple-500">mais inteligente</span> para sua igreja?
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
                  <div className="p-2 rounded-full bg-green-500/20 text-green-500 mt-1">
                    <Check size={20} strokeWidth={4} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase text-green-400">COMO O PACK</h3>
                    <ul className="space-y-2 text-gray-300 font-medium">
                      <li>• Artes modernas e impactantes por apenas R$ 29,99.</li>
                      <li>• Sem depender de ninguém. Sem perder horas criando do zero.</li>
                      <li>• Sem gastar centenas de reais por mês.</li>
                      <li>• Você investe uma única vez e pode usar sempre que precisar.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-red-500/5 border border-red-500/20 opacity-70">
                  <div className="p-2 rounded-full bg-red-500/20 text-red-500 mt-1">
                    <Clock size={20} strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase text-red-400">SEU PRAZO</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Criar artes do zero consome tempo, energia e criatividade. Muitas vezes o resultado não fica profissional, impactando negativamente a imagem da sua igreja. Contratar um designer pode custar entre R$ 50 e R$ 150 por arte.
                    </p>
                  </div>
                </div>
              </div>

              <PremiumButton className="mt-12 w-full md:w-auto">GARANTIR MEU PACK</PremiumButton>
            </div>

            <div className="flex-1 order-1 lg:order-2">
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="relative"
               >
                 <img 
                   src="https://placehold.co/800x1200/1e1b4b/white?text=PHONE+MOCKUPS+ARTES" 
                   alt="Phone Mockups"
                   className="w-full h-auto drop-shadow-[0_0_50px_rgba(168,85,247,0.2)]"
                 />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white text-[#030014]">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <span className="text-purple-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">AINDA ESTÁ EM DÚVIDA?</span>
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase leading-tight">
            VEJA O QUE OS MEMBROS <span className="text-purple-600 italic">FALAM DO PACK GOSPEL</span>.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Fala Léo, só passando pra te agradecer por esse pack. A gente não tinha identidade nenhuma, agora tá tudo padronizado, bonito... outro nível!",
              "mano, o pastor até comentou hoje da arte kkk nem esperava isso",
              "Oi Léo Parabéns pelo pack que você criou e quero agradecer pelas videoaulas, pois eu não sei mexer muito com design, mas consegui usar tranquilamente.",
              "Léo, peguei teu pack aqui... usei uma arte rapidinho e já postei kkk ficou bom demais mano",
              "Mano, essas artes mudaram totalmente a estética da nossa igreja. Antes a gente postava qualquer coisa, agora tá tudo profissional.",
              "Mano usei uma das artes hoje do pack gospel e já teve gente perguntando quem fez 😍 bom demais!",
              "Boa tarde irmão. A paz! Quero agradecer de mais por esse pack, valeu cada centavo!",
              "Sou líder de mídia na igreja e isso aqui me salvou! Eu não tenho muito tempo pra criar arte, e esse pack já vem praticamente pronto.",
              "amigo, isso aqui ajudou viu... eu sempre travava pra fazer arte, agora foi bem mais rápido"
            ].map((text, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 text-left flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Usuário do Pack</h4>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic leading-relaxed flex-1">"{text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Highlight Section */}
      <section className="py-24 bg-black relative">
        <GlowingBackground />
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-12 uppercase leading-tight">
            CHEGA DE SÓ OLHAR. <span className="text-purple-500 underline decoration-purple-500/30 underline-offset-8">COMECE AGORA</span><br />
            A CRIAR ARTES PROFISSIONAIS.
          </h2>

          {/* Pricing Card */}
          <div className="relative p-1 bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 rounded-[2.5rem] shadow-[0_0_80px_rgba(168,85,247,0.25)]">
            <div className="bg-[#030014] rounded-[2.4rem] p-8 md:p-12">
              <span className="text-purple-400 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">TSTUDIO PACK GOSPEL</span>
              <h3 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter italic">Pack Gospel</h3>
              
              <ul className="text-left space-y-4 mb-12 max-w-md mx-auto">
                {[
                  "Videoaula editando pelo celular",
                  "Videoaula editando pelo pc",
                  "Videoaula criando arte do zero",
                  "Download de fontes e programas",
                  "Atualizações",
                  "Acesso vitalício",
                  "Garantia incondicional de 7 dias"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                    <div className="bg-purple-600 rounded-full p-1"><Check size={14} strokeWidth={4} /></div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mb-10">
                <span className="text-gray-400 uppercase font-bold text-xs tracking-widest block mb-2">TUDO ISSO HOJE POR APENAS:</span>
                <span className="text-5xl md:text-7xl font-black text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">R$ 29,99</span>
                <p className="text-gray-500 text-xs mt-4 uppercase font-bold tracking-widest">OU 6X DE R$ 5,63 NO CARTÃO</p>
              </div>

              <PremiumButton className="w-full py-6 text-xl">QUERO GARANTIR AGORA</PremiumButton>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex flex-col items-center justify-center p-1 glow-purple">
                  <div className="w-full h-full rounded-full bg-[#030014] flex flex-col items-center justify-center border border-white/10">
                    <span className="text-5xl font-black text-white">7</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">DIAS</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full font-black text-[10px] uppercase whitespace-nowrap">GARANTIA TOTAL</div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase">
                  SE VOCÊ NÃO GOSTAR, <span className="text-purple-500">DEVOLVEMOS SEU DINHEIRO.</span>
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Teste o Pack Gospel por 7 dias sem risco. Se por algum motivo você não se sentir satisfeito, é só solicitar o estorno direto pela plataforma que eu devolvo todo o seu investimento sem burocracia.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-24 md:py-32 bg-[#050510] relative">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-purple-500 blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity" />
                    <img 
                      src="https://placehold.co/600x800/1e1b4b/white?text=FOTO+CRIADOR" 
                      className="rounded-[3rem] border border-purple-500/30 relative z-10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" 
                      alt="Creator"
                    />
                 </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <span className="text-purple-400 font-bold uppercase tracking-[0.3em] text-xs">O CRIADOR</span>
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                  Design de excelência para o <span className="italic text-purple-500">Reino</span>
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed font-medium">
                  <p>Olá, eu sou o <span className="text-white font-bold">Leonardo Tondella</span>, designer à frente da Tondiella Studio.</p>
                  <p>Desenvolvi este pack após notar que centenas de líderes e ministérios perdem horas valiosas tentando criar artes que, no fim, não passam a mensagem que deveriam. Reuni toda a minha experiência de estúdio para criar modelos que são visualmente <span className="text-purple-400">impactantes, profissionais</span> e extremamente <span className="text-purple-400">fáceis de editar</span>.</p>
                  <p>Hoje, sinto um orgulho imenso em saber que mais de <span className="text-white font-bold">1.000 igrejas e ministérios</span> em todo o Brasil já utilizam e aprovam o meu material.</p>
                  <p>Meu objetivo é que você foque no que realmente importa: <span className="text-yellow-400 underline underline-offset-8 font-bold">a mensagem</span>. Deixe o design profissional com quem já é referência no mercado.</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/5 text-center">
        <div className="container mx-auto px-4">
           <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-widest">
             © 2026 TONDIELLA STUDIO. TODOS OS DIREITOS RESERVADOS.
           </p>
        </div>
      </footer>

      {/* Floating WhatsApp / Contact (Optional but nice) */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-green-500 p-4 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] text-white"
      >
        <MessageSquare size={24} />
      </motion.a>
    </div>
  );
}

// --- Custom Animations ---
const style = typeof document !== 'undefined' ? document.createElement('style') : null;
if (style) {
  style.textContent = `
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `;
  document.head.appendChild(style);
}

