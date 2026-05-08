/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, Star, PlayCircle, Download, Clock, ThumbsUp } from "lucide-react";
import React from 'react';

// --- Sub-components ---

const PremiumButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`btn-premium px-8 py-4 sm:px-12 sm:py-5 text-sm sm:text-lg ${className}`}
  >
    {children}
  </motion.button>
);

const GlowingDivider = () => (
  <div className="w-full h-[2px] glowing-divider my-12 opacity-80" />
);

// --- Main Application ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#05000a] text-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-20 px-4 min-h-screen flex flex-col justify-center">
        {/* Background Grid Blur */}
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#1a0b2e] to-[#05000a] z-10" />
           {/* Placeholder for the blurry arts wall */}
           <div className="w-full h-full bg-[url('https://placehold.co/1920x1080/2a1040/1a0b2e?text=BLURRY+ARTS+GRID+BACKGROUND')] bg-cover bg-center filter blur-xl opacity-50" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="text-gradient-pink-purple font-heading font-black tracking-[0.3em] text-xs sm:text-sm uppercase mb-8">
              TSTUDIO PACK
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
              Pare de criar artes do zero.<br />
              <span className="text-gradient-pink-purple block my-2">
                Artes Gospel 100% Editáveis
              </span>
              para sua igreja em minutos.
            </h1>
            
            <p className="text-lg text-gray-300 mb-10 font-light italic opacity-90">
              Edite no Celular ou PC, mesmo sem experiência.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-1 mb-10">
              <span className="text-gray-500 line-through text-sm sm:text-base font-bold">DE: R$ 89,90</span>
              <div className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl font-black drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]">
                HOJE POR APENAS R$ 29,99
              </div>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-2">
                Acesso vitalício. Oferta por tempo limitado.
              </span>
            </div>

            <PremiumButton>GARANTIR MEU PACK</PremiumButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
             <img 
               src="/pack_mockup.png" 
               alt="Pack Gospel 3D Box"
               className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-[0_0_80px_rgba(217,70,239,0.3)]"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://placehold.co/600x800/1e0a2d/white?text=3D+PACK+MOCKUP";
               }}
             />
          </motion.div>
        </div>
      </section>

      <GlowingDivider />

      {/* Showcase Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 uppercase">
              VEJA ALGUMAS ARTES QUE <span className="text-gradient-pink-purple">VOCÊ VAI RECEBER</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-medium">Artes para cultos, eventos, campanhas, e muito mais, prontas para editar.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
              >
                <img 
                  src={`https://placehold.co/400x500/1a0b2e/white?text=ARTE+${i}`} 
                  className="w-full h-full object-cover"
                  alt={`Arte ${i}`}
                />
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-pink-purple p-[2px] rounded-full max-w-3xl mx-auto shadow-[0_0_30px_rgba(217,70,239,0.3)]">
            <div className="bg-[#0a0514] rounded-full py-4 px-6 text-center">
               <span className="text-white font-black text-sm sm:text-lg uppercase tracking-widest">
                 MAIS DE 100 ARTES PRONTAS PARA VOCÊ USAR
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-16 leading-tight max-w-4xl mx-auto uppercase">
            Adquirindo o <span className="text-gradient-pink-purple lowercase italic">Pack Gospel</span> hoje<br/>você leva tudo isso de bônus
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
            {[
              { text: "BÔNUS 1" },
              { text: "BÔNUS 2" },
              { text: "BÔNUS 3" },
              { text: "PROCESSO CRIATIVO" },
              { text: "DOWNLOADS", icon: true },
            ].map((bonus, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-xl group"
              >
                <img 
                  src={`https://placehold.co/400x700/2a1040/white?text=${bonus.text.replace(' ', '+')}`} 
                  alt={bonus.text} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                />
                {bonus.icon && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Download size={32} className="text-white" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-4 mb-12">
            <h3 className="text-xl sm:text-2xl font-black text-gradient-pink-purple uppercase tracking-widest mb-2">
              VOCÊ VAI RECEBER TUDO ISSO...
            </h3>
            <p className="text-base sm:text-lg text-gray-300 font-medium">
              Videoaulas passo a passo ensinando a editar pelo celular e computador.
            </p>
            <p className="text-base sm:text-xl font-bold uppercase pt-4">
              <span className="text-gradient-pink-purple">Mais de R$ 200 EM BÔNUS DE PRESENTE.</span><br/>
              <span className="text-sm sm:text-base text-gray-400 mt-2 block">Só o conhecimento dessas aulas vale muito mais que o seu investimento.</span>
            </p>
          </div>

          <PremiumButton>QUERO GARANTIR MEU PACK + BÔNUS</PremiumButton>
        </div>
      </section>

      <GlowingDivider />

      {/* Why this Pack Section */}
      <section className="py-20 px-4 bg-[#0a0514]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Mockups */}
            <div className="order-2 lg:order-1 relative flex justify-center">
               <motion.div 
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               >
                 <img 
                   src="/phones_mockup.png" 
                   alt="Phone Mockups"
                   className="w-full max-w-md drop-shadow-[0_0_60px_rgba(59,130,246,0.3)]"
                   onError={(e) => {
                     (e.target as HTMLImageElement).src = "https://placehold.co/800x1000/1e0a2d/white?text=PHONES+MOCKUP";
                   }}
                 />
               </motion.div>
            </div>

            {/* Right: Text & Comparison */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 leading-tight uppercase">
                Por que esse Pack é <span className="text-gradient-pink-purple">a escolha mais inteligente</span> para sua igreja?
              </h2>
              
              <div className="space-y-10">
                {/* Com o Pack */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl sm:text-2xl font-black uppercase">COM O PACK</h3>
                    <div className="bg-green-500 rounded-full p-1"><ThumbsUp size={16} className="text-black" /></div>
                  </div>
                  <ul className="space-y-3 text-gray-300 font-medium text-sm sm:text-base border-l-2 border-green-500/30 pl-4">
                    <li>Artes modernas e impactantes por <span className="text-yellow-400 font-bold">apenas R$ 29,99</span>.</li>
                    <li><span className="text-yellow-400 font-bold">Sem depender de designers</span> ou perder horas criando do zero.</li>
                    <li>Sem gastar centenas de reais por mês.</li>
                    <li>Você investe uma única vez e tem <span className="text-yellow-400 font-bold">acesso vitalício</span>.</li>
                  </ul>
                </div>

                <div className="w-full h-px bg-white/10" />

                {/* Sem o Pack */}
                <div className="opacity-80">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-gray-400">SEU PRAZO</h3>
                    <div className="bg-red-500 rounded-full p-1"><Clock size={16} className="text-white" /></div>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed border-l-2 border-red-500/30 pl-4">
                    Criar artes do zero consome tempo, energia e criatividade. Muitas vezes o resultado não fica profissional, impactando negativamente a imagem da sua igreja. Contratar um designer pode custar entre <span className="text-white font-bold">R$ 50 e R$ 150</span> por arte.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center lg:text-left">
                <PremiumButton>GARANTIR MEU PACK</PremiumButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-[#05000a]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight">
              AINDA ESTÁ EM DÚVIDA? VEJA O QUE<br/>
              OS MEMBROS FALAM DO PACK GOSPEL.
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {[
              "A gente não tinha identidade nenhuma, agora tá tudo padronizado, bonito... outro nível!",
              "O pastor até comentou hoje da arte kkk nem esperava isso.",
              "Parabéns pelo pack, não sei mexer muito com design, mas consegui usar tranquilamente.",
              "Usei uma arte rapidinho e já postei kkk ficou bom demais mano.",
              "Essas artes mudaram totalmente a estética da nossa igreja. Agora tá tudo profissional.",
              "Usei uma das artes hoje e já teve gente perguntando quem fez 😍 bom demais!",
              "Quero agradecer demais por esse pack, valeu cada centavo!",
              "Sou líder de mídia na igreja e isso aqui me salvou! Já vem praticamente pronto.",
              "Eu sempre travava pra fazer arte, agora foi bem mais rápido."
            ].map((text, i) => (
              <div
                key={i}
                className="bg-white text-black p-6 rounded-xl shadow-lg flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Membro da Comunidade</h4>
                    <div className="flex text-[#FACC15] mt-1">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" className="text-[#FACC15]" />)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1 italic">"{text}"</p>
              </div>
            ))}
          </div>

          {/* Video Testimonials */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             <div className="aspect-video bg-gray-900 rounded-2xl border border-white/10 relative overflow-hidden group cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.05)]">
               <img src="https://placehold.co/600x337/1a0b2e/white?text=VIDEO+DEPOIMENTO+1" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" alt="Video" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <PlayCircle size={64} className="text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
               </div>
             </div>
             <div className="aspect-video bg-gray-900 rounded-2xl border border-white/10 relative overflow-hidden group cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.05)]">
               <img src="https://placehold.co/600x337/1a0b2e/white?text=VIDEO+DEPOIMENTO+2" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" alt="Video" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <PlayCircle size={64} className="text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Offer / Pricing Card Section */}
      <section className="py-24 px-4 bg-[#0a0514] relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-12 uppercase leading-tight">
            CHEGA DE SÓ OLHAR. <span className="text-gradient-pink-purple">COMECE AGORA</span><br />
            A CRIAR ARTES PROFISSIONAIS.
          </h2>

          <div className="max-w-md mx-auto glowing-border-card p-8 sm:p-10 text-center shadow-[0_0_80px_rgba(139,92,246,0.2)]">
             <div className="inline-block bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-6">
               <span className="text-gradient-pink-purple font-black uppercase tracking-widest text-sm">
                 Pack Gospel
               </span>
             </div>

             <ul className="text-left space-y-4 mb-10 text-gray-300 text-sm sm:text-base font-medium">
               {[
                 "Videoaula editando pelo celular",
                 "Videoaula editando pelo pc",
                 "Milhares de fontes premium",
                 "Processo Criativo (do zero)",
                 "Atualizações",
                 "Acesso vitalício",
                 "Garantia incondicional de 7 dias"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3">
                   <div className="bg-[#8B5CF6] rounded-full p-1 flex-shrink-0"><Check size={12} strokeWidth={4} className="text-white" /></div>
                   {item}
                 </li>
               ))}
             </ul>

             <div className="mb-8 border-t border-white/10 pt-8">
               <span className="text-gray-400 uppercase font-bold text-[10px] sm:text-xs tracking-widest block mb-2">TUDO ISSO HOJE POR APENAS:</span>
               <div className="text-4xl sm:text-5xl font-black text-[#FACC15] drop-shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                 R$ 29,99
               </div>
               <span className="text-gray-500 text-[10px] sm:text-xs mt-2 uppercase font-bold tracking-widest block">OU 6X DE R$ 5,63 NO CARTÃO</span>
             </div>

             <PremiumButton className="w-full text-base sm:text-lg">QUERO GARANTIR AGORA</PremiumButton>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-gradient-pink-purple py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
           <div className="relative shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-[#0a0514] rounded-full flex items-center justify-center border-4 border-dashed border-[#D946EF] shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-black text-white leading-none">7</div>
                  <div className="text-xs sm:text-sm font-bold text-[#D946EF] uppercase tracking-widest mt-1">DIAS</div>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest border border-white/20 whitespace-nowrap">
                GARANTIA
              </div>
           </div>
           
           <div className="text-center md:text-left max-w-lg">
             <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 uppercase text-white drop-shadow-md">
               SE VOCÊ NÃO GOSTAR,<br/>DEVOLVEMOS SEU DINHEIRO.
             </h3>
             <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed">
               Teste o Pack Gospel por 7 dias sem risco. Se por algum motivo você não se sentir satisfeito, é só solicitar o estorno direto pela plataforma que eu devolvo todo o seu investimento sem burocracia.
             </p>
           </div>
        </div>
      </section>

      {/* Creator & Footer Section */}
      <section className="py-20 px-4 bg-[#05000a]">
        <div className="container mx-auto max-w-5xl">
           <div className="text-center mb-16">
             <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
               CRIADO POR QUEM ENTENDE DE DESIGN PARA O REINO
             </span>
           </div>

           <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="flex justify-center md:justify-end relative">
                 {/* Glowing Border effect for the image */}
                 <div className="relative rounded-[2rem] p-1 bg-gradient-to-tr from-[#D946EF] to-[#8B5CF6] shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                   <img 
                     src="/creator_photo.png" 
                     alt="Criador" 
                     className="rounded-[1.8rem] w-full max-w-sm object-cover aspect-square"
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = "https://placehold.co/600x600/1e0a2d/white?text=FOTO+CRIADOR";
                     }}
                   />
                 </div>
              </div>

              <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-5 font-medium">
                <p>
                  Olá, eu sou o <span className="text-gradient-pink-purple font-bold">Leonardo Tondella</span>, designer à frente da Tondiella Studio.
                </p>
                <p>
                  <span className="text-white font-bold">Desenvolvi este pack</span> após notar que <span className="text-white font-bold">centenas de líderes e ministérios</span> perdem horas valiosas tentando criar artes que, no fim, não passam a mensagem que deveriam.
                </p>
                <p>
                  Reuni toda a minha experiência de estúdio para criar <span className="text-white font-bold">designs profissionais, elegantes</span> e extremamente fáceis de editar.
                </p>
                <p>
                  Meu objetivo é que você foque no que realmente importa: <span className="text-gradient-pink-purple font-bold underline underline-offset-4">a mensagem</span>. Deixe o design profissional com quem já é referência no mercado.
                </p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}


