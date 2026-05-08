/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Star, PlayCircle, Download, Clock, ThumbsUp } from "lucide-react";
import React from 'react';

// --- Sub-components ---

const PremiumButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <button
    className={`btn-glossy px-8 py-3 sm:px-12 sm:py-4 rounded-full font-bold text-sm sm:text-base uppercase tracking-wider text-white flex items-center justify-center text-center ${className}`}
  >
    {children}
  </button>
);

const GlowingDivider = () => (
  <div className="w-full h-[3px] glowing-divider" />
);

// --- Main Application ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 px-4 min-h-screen flex flex-col justify-center">
        {/* Background Posters with Overlay Fade */}
        <div className="absolute inset-0 z-0">
           <div 
             className="w-full h-full bg-cover bg-top opacity-50"
             style={{ backgroundImage: "url('/hero_bg.png')" }} 
           />
           <div className="absolute inset-0 hero-bg-overlay" />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10 grid md:grid-cols-2 gap-8 items-center pt-10">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 bg-gradient-to-r from-[#e600ff] to-[#7a00ff] rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-sm" />
              </div>
              <span className="text-white font-bold tracking-widest text-[10px] uppercase">
                TSTUDIO PACK
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black mb-4 leading-tight">
              Pare de criar artes do zero.<br />
              <span className="text-gradient-magenta block my-1">
                Artes Gospel 100% Editáveis
              </span>
              para sua igreja em minutos.
            </h1>
            
            <p className="text-sm sm:text-base text-gray-300 mb-8 font-light italic">
              Edite no Celular ou no PC, mesmo sem experiência.
            </p>

            <div className="flex flex-col items-center md:items-start gap-1 mb-8">
              <span className="text-gray-500 line-through text-xs sm:text-sm font-semibold">DE: R$ 89,90</span>
              <div className="flex items-baseline gap-2">
                <span className="text-yellow-400 text-lg sm:text-xl font-bold">HOJE POR APENAS</span>
                <span className="text-yellow-400 text-3xl sm:text-4xl font-black drop-shadow-[0_0_10px_rgba(255,204,0,0.4)]">R$ 29,99</span>
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium">
                Acesso vitalício. Oferta por tempo limitado.
              </span>
            </div>

            <PremiumButton className="w-full md:w-auto">GARANTIR MEU PACK</PremiumButton>
          </div>

          <div className="relative flex justify-center md:justify-end mt-12 md:mt-0">
             <img 
               src="/pack_mockup.png" 
               alt="Pack Gospel 3D Box"
               className="w-full max-w-[320px] md:max-w-[400px] object-contain drop-shadow-[0_0_60px_rgba(122,0,255,0.4)] rotate-[-2deg]"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://placehold.co/600x800/1e0a2d/white?text=3D+PACK+MOCKUP";
               }}
             />
             {/* Base glow under the box */}
             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-[#e600ff] blur-[40px] opacity-40 rounded-full" />
          </div>
        </div>
      </section>

      <GlowingDivider />

      {/* Showcase Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 uppercase">
              VEJA ALGUMAS ARTES QUE <span className="text-gradient-magenta">VOCÊ VAI RECEBER</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm font-medium">Artes para cultos, eventos, campanhas e muito mais prontas para editar.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 px-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative aspect-[3/4.5] rounded-lg overflow-hidden border border-white/5 shadow-[0_0_20px_rgba(122,0,255,0.15)]"
              >
                <img 
                  src={`https://placehold.co/400x600/1a0b2e/white?text=ARTE+${i}`} 
                  className="w-full h-full object-cover"
                  alt={`Arte ${i}`}
                />
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#e600ff] to-[#00d2ff] rounded-full max-w-[80%] mx-auto p-[2px] shadow-[0_0_30px_rgba(122,0,255,0.3)]">
            <div className="bg-[#000000] rounded-full py-3 px-4 text-center">
               <span className="text-white font-bold text-xs sm:text-sm md:text-base uppercase tracking-widest">
                 MAIS DE 100 ARTES PRONTAS PARA VOCÊ USAR
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-12 leading-tight uppercase">
            Adquirindo o <span className="text-gradient-magenta lowercase italic">Pack Gospel</span> hoje<br/>você leva tudo isso de bônus
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-12">
            {[
              { text: "BÔNUS 1", color: "#00d2ff" },
              { text: "BÔNUS 2", color: "#00d2ff" },
              { text: "BÔNUS 3", color: "#e600ff" },
              { text: "PROCESSO CRIATIVO", color: "#00d2ff" },
              { text: "DOWNLOADS", color: "#e600ff", icon: true },
            ].map((bonus, i) => (
              <div 
                key={i} 
                className="relative aspect-[9/16] rounded-xl overflow-hidden border-[1px] shadow-lg"
                style={{ borderColor: bonus.color, boxShadow: `0 0 15px ${bonus.color}40` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-10" />
                <img 
                  src={`https://placehold.co/400x700/1a0b2e/white?text=${bonus.text.replace(' ', '+')}`} 
                  alt={bonus.text} 
                  className="w-full h-full object-cover relative z-0" 
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-end p-4">
                   {bonus.icon ? (
                     <div className="mb-4 w-12 h-12 rounded-full border border-white flex items-center justify-center">
                       <Download size={24} className="text-white" />
                     </div>
                   ) : null}
                   <span className="text-white font-black text-[10px] sm:text-xs uppercase tracking-wider text-center drop-shadow-md">
                     {bonus.text}
                   </span>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-3 mb-10">
            <h3 className="text-lg sm:text-xl font-black text-gradient-magenta uppercase tracking-widest mb-1">
              VOCÊ VAI RECEBER TUDO ISSO...
            </h3>
            <p className="text-sm sm:text-base text-gray-300 font-medium">
              Videoaulas passo a passo ensinando a editar pelo celular e computador.
            </p>
            <p className="text-sm sm:text-base font-bold pt-2">
              Mais de <span className="text-gradient-magenta">R$ 200 EM BÔNUS DE PRESENTE</span>. Só o conhecimento dessas aulas<br className="hidden sm:block" />
              vale muito mais que o seu investimento.
            </p>
          </div>

          <div className="flex justify-center">
            <PremiumButton className="flex flex-col items-center px-16">
              <span>QUERO GARANTIR</span>
              <span className="text-[10px] sm:text-xs tracking-widest opacity-80 mt-1">MEU PACK + BÔNUS</span>
            </PremiumButton>
          </div>
        </div>
      </section>

      <GlowingDivider />

      {/* Why this Pack Section */}
      <section className="py-16 px-4 bg-radial-purple relative">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Left: Mockups */}
            <div className="relative flex justify-center">
               <img 
                 src="/phones_mockup.png" 
                 alt="Phone Mockups"
                 className="w-full max-w-[280px] md:max-w-[350px] drop-shadow-[0_0_40px_rgba(230,0,255,0.2)]"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://placehold.co/800x1000/1e0a2d/white?text=PHONES+MOCKUP";
                 }}
               />
            </div>

            {/* Right: Text & Comparison */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-10 leading-tight">
                Por que esse Pack <br/>
                <span className="text-gradient-magenta">é a escolha mais inteligente</span><br/>
                para sua igreja?
              </h2>
              
              <div className="space-y-8">
                {/* Com o Pack */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-black uppercase text-white">COM O PACK</h3>
                    <div className="bg-green-500 rounded-full p-1"><ThumbsUp size={14} className="text-black" /></div>
                  </div>
                  <div className="w-full h-px bg-green-500/50 mb-3" />
                  <ul className="space-y-2 text-white font-medium text-xs sm:text-sm">
                    <li>• Artes modernas e impactantes por <span className="text-yellow-400 font-bold">apenas R$ 29,99</span>.</li>
                    <li>• <span className="text-yellow-400 font-bold">Sem depender de designers</span> ou perder horas criando do zero.</li>
                    <li>• Sem gastar centenas de reais por mês.</li>
                    <li>• Você investe uma única vez e tem <span className="text-yellow-400 font-bold">acesso vitalício</span>.</li>
                  </ul>
                </div>

                {/* Sem o Pack */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-black uppercase text-white">SEU PRAZO</h3>
                    <div className="bg-red-500 rounded-full p-1"><Clock size={14} className="text-white" /></div>
                  </div>
                  <div className="w-full h-px bg-red-500/50 mb-3" />
                  <p className="text-white text-xs sm:text-sm leading-relaxed">
                    Criar artes do zero consome tempo, energia e criatividade. Muitas vezes o resultado não fica profissional, impactando negativamente a imagem da sua igreja. Contratar um designer pode custar entre <span className="font-bold">R$ 50 e R$ 150</span> por arte.
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="mt-16 flex justify-center relative z-10">
            {/* Massive glow behind the button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-20 bg-[#e600ff] blur-[50px] opacity-30 pointer-events-none" />
            <PremiumButton className="relative z-10 px-16">GARANTIR MEU PACK</PremiumButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-[#05000a]">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight mb-12">
            AINDA ESTÁ EM DÚVIDA? VEJA O QUE<br/>
            OS MEMBROS FALAM DO PACK GOSPEL
          </h2>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-10">
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
                className="bg-white text-black p-4 rounded-lg flex flex-col h-full text-left"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 shrink-0">
                    <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[10px] uppercase">Usuário {i+1}</h4>
                    <div className="flex text-[#ffcc00]">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} fill="currentColor" className="text-[#ffcc00]" />)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-800 text-[11px] leading-snug flex-1">"{text}"</p>
              </div>
            ))}
          </div>

          {/* Video Testimonials */}
          <div className="flex justify-center gap-4 sm:gap-8 max-w-2xl mx-auto">
             <div className="w-40 sm:w-48 aspect-video bg-white rounded-md border-2 border-white/20 relative overflow-hidden flex-shrink-0">
               <img src="https://placehold.co/300x168/222/white?text=VIDEO" className="w-full h-full object-cover opacity-80" alt="Video" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <PlayCircle size={32} className="text-white drop-shadow-md" />
               </div>
             </div>
             <div className="w-40 sm:w-48 aspect-video bg-white rounded-md border-2 border-white/20 relative overflow-hidden flex-shrink-0">
               <img src="https://placehold.co/300x168/222/white?text=VIDEO" className="w-full h-full object-cover opacity-80" alt="Video" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <PlayCircle size={32} className="text-white drop-shadow-md" />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Offer / Pricing Card Section */}
      <section className="py-16 px-4 bg-[#000000] relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-10 uppercase leading-tight">
            CHEGA DE SÓ OLHAR. <span className="text-gradient-magenta">COMECE AGORA</span><br />
            A CRIAR ARTES PROFISSIONAIS
          </h2>

          <div className="max-w-[320px] sm:max-w-[360px] mx-auto card-border-glow p-6 sm:p-8 text-center">
             <div className="inline-block border border-white/20 rounded-full px-5 py-1 mb-6">
               <span className="text-white font-bold uppercase tracking-widest text-[10px]">
                 Pack Gospel
               </span>
             </div>

             <ul className="text-left space-y-3 mb-8 text-white text-xs sm:text-sm font-medium px-2">
               {[
                 "Videoaula editando pelo celular",
                 "Videoaula editando pelo pc",
                 "Milhares de fontes premium",
                 "Processo Criativo (do zero)",
                 "Atualizações",
                 "Acesso vitalício",
                 "Garantia incondicional de 7 dias"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-2">
                   <div className="bg-[#e600ff] rounded-full p-[2px] shrink-0"><Check size={10} strokeWidth={4} className="text-white" /></div>
                   {item}
                 </li>
               ))}
             </ul>

             <div className="mb-6 pt-6">
               <span className="text-gray-300 font-medium text-[10px] tracking-wide block mb-1">Tudo isso hoje por apenas:</span>
               <div className="text-4xl sm:text-[42px] font-black text-[#ffcc00] leading-none mb-1">
                 R$ 29,99
               </div>
               <span className="text-gray-400 text-[9px] uppercase font-bold tracking-widest block">ou 6x de R$ 5,63 no cartão</span>
             </div>

             <PremiumButton className="w-full py-3 text-xs">GARANTIR ACESSO AGORA</PremiumButton>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="relative py-16 px-4">
        {/* Huge Cyan to Magenta background block */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00d2ff] via-[#7a00ff] to-[#e600ff] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
        
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
           <div className="shrink-0 flex items-center justify-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#000000] flex flex-col items-center justify-center jagged-seal border-[2px] border-[#e600ff] shadow-[0_0_30px_rgba(230,0,255,0.5)]">
                <div className="text-4xl sm:text-[42px] font-black text-[#00d2ff] leading-none text-glow-magenta mt-1">7</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-widest mt-0">DIAS</div>
                <div className="text-[8px] font-bold text-[#e600ff] uppercase tracking-widest mt-0">GARANTIA</div>
              </div>
           </div>
           
           <div className="text-center md:text-left max-w-sm">
             <h3 className="text-lg sm:text-xl font-black mb-2 uppercase text-white drop-shadow-md">
               SE VOCÊ NÃO GOSTAR,<br/>DEVOLVEMOS SEU DINHEIRO.
             </h3>
             <p className="text-white/90 text-xs sm:text-sm font-medium leading-relaxed drop-shadow-sm">
               Teste o Pack Gospel por 7 dias sem risco. Se por algum motivo você não se sentir satisfeito, é só solicitar o estorno direto pela plataforma que eu devolvo todo o seu investimento sem burocracia.
             </p>
           </div>
        </div>
      </section>

      {/* Creator & Footer Section */}
      <section className="py-16 px-4 bg-[#000000]">
        <div className="container mx-auto max-w-4xl">
           <div className="text-center mb-12">
             <span className="text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest">
               CRIADO POR QUEM ENTENDE DE DESIGN PARA O REINO
             </span>
           </div>

           <div className="grid md:grid-cols-2 gap-10 items-center max-w-3xl mx-auto">
              <div className="flex justify-center relative">
                 <div className="rounded-xl p-[2px] bg-gradient-to-tr from-[#e600ff] to-[#7a00ff]">
                   <img 
                     src="/creator_photo.png" 
                     alt="Criador" 
                     className="rounded-xl w-full max-w-[240px] sm:max-w-[280px] object-cover aspect-square"
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = "https://placehold.co/400x400/1e0a2d/white?text=FOTO+CRIADOR";
                     }}
                   />
                 </div>
              </div>

              <div className="text-white text-xs sm:text-sm leading-relaxed space-y-4 font-medium">
                <p>
                  Olá, eu sou o <span className="text-gradient-magenta font-bold">Leonardo Tondella</span>,
                </p>
                <p>
                  Desenvolvi este pack após notar que centenas de líderes e ministérios perdem horas valiosas tentando criar artes que, no fim, não passam a mensagem que deveriam.
                </p>
                <p>
                  Reuni toda a minha experiência para criar designs <span className="text-gradient-magenta font-bold">profissionais, elegantes</span> e extremamente fáceis de editar.
                </p>
                <p>
                  Meu foco no que realmente importa: <span className="text-gradient-magenta font-bold">a mensagem.</span>
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#000000] text-center border-t border-white/5">
         <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">
           © 2026 TONDIELLA STUDIO. TODOS OS DIREITOS RESERVADOS.
         </p>
      </footer>
    </div>
  );
}


