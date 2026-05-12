/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Star, Download, Clock, ThumbsUp, X } from "lucide-react";
import React from 'react';

// --- Sub-components ---

const PremiumButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <button className={`btn-premium px-12 py-5 text-white flex items-center justify-center text-center w-full md:w-auto ${className}`}>
    {children}
  </button>
);

const GlowingDivider = () => (
  <div className="glowing-divider my-16" />
);

// --- Main Application ---

export default function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [bonusActiveIndex, setBonusActiveIndex] = React.useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const bonusCarouselRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 3000);
    const bonusTimer = setInterval(() => {
      setBonusActiveIndex((prev) => (prev + 1) % 5);
    }, 3500); // Slightly different timing for variety
    return () => {
      clearInterval(timer);
      clearInterval(bonusTimer);
    };
  }, []);

  React.useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * activeIndex;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  React.useEffect(() => {
    if (bonusCarouselRef.current) {
      const scrollAmount = bonusCarouselRef.current.offsetWidth * bonusActiveIndex;
      bonusCarouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [bonusActiveIndex]);

  return (
    <div className="min-h-screen bg-bg-dark text-white font-sans selection:bg-brand-purple-deep/30 overflow-x-hidden">
      
      {/* Header Logo */}
      <div className="py-10 flex justify-center">
        <div className="flex items-center gap-2">
          <span className="font-heading font-extrabold text-[32px] tracking-tighter text-gradient-primary leading-none">
            TSTUDIO
          </span>
          <div className="flex flex-col leading-[0.9] border-l border-white/20 pl-2">
            <span className="font-sans font-bold text-[14px] text-white uppercase tracking-tight">Pack</span>
            <span className="font-sans font-bold text-[14px] text-white uppercase tracking-tight">Gospel</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-40 overflow-hidden">
        {/* Background Posters (Blurred) */}
        <div className="absolute inset-0 z-0 opacity-30 blur-[2px]">
          <img src="/hero_bg.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-bg-blur" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
            {/* Left: Text Content (6 columns) */}
            <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left px-2 sm:px-0">
              <h1 className="font-heading font-extrabold text-[22px] sm:text-[28px] md:text-[42px] lg:text-[48px] leading-[1.1] mb-2 drop-shadow-2xl w-full break-words">
                Pare de criar artes do zero.
              </h1>
              <h2 className="font-heading font-extrabold text-[22px] sm:text-[28px] md:text-[42px] lg:text-[48px] leading-[1.1] text-brand-magenta mb-8 drop-shadow-2xl w-full break-words">
                Artes Gospel 100% Editáveis<br/>
                para sua igreja em minutos.
              </h2>
              
              <p className="text-[15px] sm:text-[17px] md:text-[22px] font-medium text-white/90 mb-10 leading-relaxed w-full">
                Edite no Celular ou PC, mesmo sem experiência.
              </p>

              <div className="mb-12 w-full flex flex-col items-center lg:items-start">
                <span className="strikethrough-magenta text-[15px] md:text-[20px] font-bold opacity-70 mb-1">DE: R$ 89,99</span>
                <div className="text-brand-yellow flex flex-col items-center lg:items-start leading-none">
                  <span className="font-heading font-extrabold text-[12px] sm:text-[13px] md:text-[22px] tracking-widest uppercase">HOJE POR APENAS</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-extrabold text-[18px] md:text-[24px]">R$</span>
                    <span className="font-heading font-extrabold text-[40px] sm:text-[48px] md:text-[64px] drop-shadow-[0_0_20px_rgba(255,196,0,0.4)]">29,99</span>
                  </div>
                </div>
                <span className="text-[12px] sm:text-[14px] md:text-[18px] text-white/70 font-medium italic mt-2">
                  Acesso vitalício. (Oferta por tempo limitado)
                </span>
              </div>

              <PremiumButton className="px-12 md:px-20 py-5 w-full md:w-auto">
                GARANTIR MEU PACK
              </PremiumButton>
            </div>

            {/* Right: Box Mockup (6 columns) */}
            <div className="col-span-12 lg:col-span-6 relative flex justify-center perspective-[2000px]">
               <div className="relative transform rotate-y-[-10deg] rotate-x-[5deg] transition-transform duration-700">
                  <img 
                    src="/pack_mockup.png" 
                    alt="Pack Gospel Mockup" 
                    className="w-full max-w-[500px] drop-shadow-[0_40px_80px_rgba(123,0,255,0.4)]"
                  />
                  {/* Reflection */}
                  <img 
                    src="/pack_mockup.png" 
                    alt="" 
                    className="absolute -bottom-full left-0 w-full max-w-[500px] reflection-bottom pointer-events-none"
                  />
               </div>
            </div>
          </div>
        </div>

        {/* Section Divider Bar */}
        <div className="absolute bottom-0 left-0 w-full">
           <div className="hero-divider" />
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-[32px] md:text-[42px] uppercase mb-4 tracking-tight leading-none">
              VEJA ALGUMAS ARTES QUE <span className="text-brand-magenta">VOCÊ VAI RECEBER</span>
            </h2>
            <p className="text-white/80 text-[24px] font-medium max-w-3xl mx-auto leading-tight">
              Modelos modernos, impactantes e totalmente personalizáveis.
            </p>
          </div>

          {/* Grid Desktop / Static Layout */}
          <div className="hidden md:grid grid-cols-4 gap-4 mb-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="col-span-1">
                <div className="aspect-[3/4.5] overflow-hidden group shadow-2xl rounded-xl">
                  <img 
                    src={`/showcase_${i}.png`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={`Modelo ${i}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Mobile Only */}
          <div className="md:hidden mb-16 px-4 overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex overflow-x-hidden snap-x snap-mandatory scrollbar-hide pb-4"
            >
              {[1, 2, 3, 4].map((i, index) => (
                <div key={i} className="min-w-full snap-center px-2">
                  <div className="aspect-[3/4.5] overflow-hidden shadow-2xl rounded-2xl border border-white/5">
                    <img 
                      src={`/showcase_${i}.png`} 
                      className="w-full h-full object-cover"
                      alt={`Modelo ${i}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-4">
              {[0, 1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === i ? 'w-8 bg-brand-magenta' : 'w-2 bg-white/20'}`} 
                />
              ))}
            </div>
          </div>

          {/* Banner Ideal */}
          <div className="bg-gradient-to-r from-brand-magenta to-brand-blue rounded-2xl md:rounded-full max-w-5xl mx-auto shadow-[0_10px_40px_rgba(123,0,255,0.3)]">
            <div className="py-4 px-6 md:px-10 text-center">
               <span className="text-white font-extrabold text-[14px] md:text-[18px] uppercase tracking-normal">
                 IDEAL PARA IGREJAS, LÍDERES E MÍDIAS QUE PRECISAM POSTAR TODA SEMANA.
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-[24px] md:text-[48px] font-extrabold mb-20 uppercase leading-tight text-white px-4">
            ADQUIRINDO O <span className="text-gradient-primary italic">PACK GOSPEL</span> HOJE<br/>
            VOCÊ LEVA TUDO ISSO DE BÔNUS
          </h2>

          {/* Grid Desktop */}
          <div className="hidden md:grid grid-cols-10 gap-4 mb-20">
            {[
              { text: "CURSO PC: PASSO A PASSO", color: "#405CFF" },
              { text: "CURSO MOBILE: PASSO A PASSO", color: "#405CFF" },
              { text: "DO ZERO À ARTE PRONTA", color: "#FF00D4" },
              { text: "MEU PROCESSO CRIATIVO", color: "#405CFF" },
              { text: "CENTRAL DE DOWNLOADS", color: "#FF00D4", icon: true },
            ].map((bonus, i) => (
              <div key={i} className="col-span-2">
                <div 
                  className="aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 relative group"
                  style={{ boxShadow: `0 0 20px ${bonus.color}30` }}
                >
                  <img 
                    src={`/bonus_${i + 1}.png`} 
                    alt={bonus.text} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Mobile Only */}
          <div className="md:hidden mb-20 px-4 overflow-hidden">
            <div 
              ref={bonusCarouselRef}
              className="flex overflow-x-hidden snap-x snap-mandatory scrollbar-hide pb-4"
            >
              {[1, 2, 3, 4, 5].map((i, index) => (
                <div key={i} className="min-w-full snap-center px-4">
                  <div className="aspect-[9/16] rounded-[2.5rem] overflow-hidden border border-white/10 relative shadow-2xl">
                    <img 
                      src={`/bonus_${i}.png`} 
                      className="w-full h-full object-cover opacity-90"
                      alt={`Bônus ${i}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {[0, 1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={`h-1.5 transition-all duration-500 rounded-full ${bonusActiveIndex === i ? 'w-8 bg-brand-magenta' : 'w-2 bg-white/20'}`} 
                />
              ))}
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto mb-24 px-4 flex flex-col items-center text-center">
            <div className="text-[19px] md:text-[34px] font-medium text-white leading-[1.3]">
              <div className="md:whitespace-nowrap"><span className="text-brand-magenta">Videoaulas completas</span> para você mesmo não sabendo</div>
              <div className="md:whitespace-nowrap">nada de design possa criar suas artes.</div>
              <div className="h-6 md:h-10" />
              <div className="md:whitespace-nowrap">Mais de <span className="text-brand-magenta font-bold">R$ 200 EM BÔNUS DE PRESENTE</span>.</div>
              <div className="md:whitespace-nowrap text-brand-magenta">Só o conhecimento dessas aulas vale muito mais do que o seu investimento hoje.</div>
            </div>
          </div>

          <div className="flex justify-center">
            <PremiumButton className="px-20 py-6">
              <div className="flex flex-col items-center leading-none">
                <span className="text-18">QUERO GARANTIR</span>
                <span className="text-[10px] tracking-[0.2em] mt-1 opacity-70">MEU PACK + BÔNUS</span>
              </div>
            </PremiumButton>
          </div>
        </div>
      </section>

      <GlowingDivider />

      {/* Comparison Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Smartphones Mockup (5 columns) */}
            <div className="col-span-12 lg:col-span-5 relative flex justify-center">
               <div className="relative">
                 <img 
                   src="/phones_mockup.png" 
                   alt="Phone Mockups"
                   className="w-full max-w-[320px] md:max-w-[420px] drop-shadow-[0_0_100px_rgba(123,0,255,0.3)] hover:scale-105 transition-transform duration-500"
                 />
                 {/* Radial Glow behind phones */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-purple-deep/20 blur-[120px] -z-10" />
               </div>
            </div>

            {/* Right: Text & Comparison (7 columns) */}
            <div className="col-span-12 lg:col-span-7 space-y-8 md:space-y-12">
              <h2 className="text-[22px] md:text-[42px] font-extrabold leading-tight uppercase text-center lg:text-left">
                Por que esse Pack <br className="md:block" />
                <span className="text-gradient-primary">é a escolha mais inteligente</span><br className="md:block" />
                para sua igreja?
              </h2>
              
              <div className="space-y-8 md:space-y-12 w-full flex flex-col items-center lg:items-start">
                {/* COM O PACK */}
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <h3 className="text-[20px] md:text-[24px] font-extrabold uppercase text-white">COM O PACK</h3>
                    <div className="bg-green-500 rounded-full p-1"><ThumbsUp size={16} className="text-black" /></div>
                  </div>
                  <div className="w-full h-[1px] bg-green-500/30" />
                  <div className="flex justify-center lg:justify-start w-full">
                    <ul className="space-y-4 text-text-gray text-[16px] md:text-[20px] font-medium text-left max-w-xs md:max-w-none">
                      <li className="flex items-start gap-3"><span className="text-green-500 mt-1.5 shrink-0">•</span> <span>Artes modernas e impactantes por <span className="text-brand-yellow font-bold">apenas R$ 29,99</span>.</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 mt-1.5 shrink-0">•</span> <span><span className="text-brand-yellow font-bold">Sem depender de designers</span> ou perder horas criando do zero.</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 mt-1.5 shrink-0">•</span> <span>Sem gastar centenas de reais por mês.</span></li>
                      <li className="flex items-start gap-3"><span className="text-green-500 mt-1.5 shrink-0">•</span> <span>Você investe uma única vez e tem <span className="text-brand-yellow font-bold">acesso vitalício</span>.</span></li>
                    </ul>
                  </div>
                </div>

                {/* SEM O PACK */}
                <div className="space-y-4 opacity-60 w-full">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <h3 className="text-[20px] md:text-[24px] font-extrabold uppercase text-white/70 tracking-widest">SEU PRAZO</h3>
                    <div className="bg-red-500 rounded-full p-1"><Clock size={16} className="text-white" /></div>
                  </div>
                  <div className="w-full h-[1px] bg-red-500/30" />
                  <p className="text-text-gray text-[16px] md:text-[20px] leading-relaxed text-center lg:text-left max-w-md mx-auto lg:mx-0">
                    Criar artes do zero consome tempo, energia e criatividade. Muitas vezes o resultado não fica profissional, impactando negativamente a imagem da sua igreja. Contratar um designer pode custar entre <span className="text-white font-bold">R$ 50 e R$ 150</span> por arte.
                  </p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start pt-4 md:pt-8 relative w-full">
                 {/* Radial magenta glow behind button */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-magenta/10 blur-[80px] -z-10" />
                 <PremiumButton className="w-full md:w-auto">GARANTIR MEU PACK</PremiumButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-bg-alt">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-[24px] md:text-[42px] font-extrabold uppercase leading-tight tracking-tighter">
              AINDA ESTÁ EM DÚVIDA? VEJA O QUE<br className="hidden md:block" />
              OS MEMBROS FALAM DO PACK GOSPEL.
            </h2>
          </div>

          {/* Testimonial Cards (3x3 grid) */}
          <div className="grid grid-cols-12 gap-4 mb-16">
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
              <div key={i} className="col-span-12 md:col-span-4">
                <div className="bg-white p-6 rounded-[1.5rem] flex flex-col h-full shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-bg-dark shrink-0">
                      <img src={`https://i.pravatar.cc/150?u=${i + 100}`} alt="User" />
                    </div>
                    <div>
                      <h4 className="font-bold text-bg-dark text-18">Nome Sobrenome</h4>
                      <div className="flex text-brand-yellow">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                  <p className="text-bg-dark/80 text-18 leading-snug flex-1 italic">"{text}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonials */}
          <div className="flex flex-wrap justify-center gap-6 mt-16 max-w-4xl mx-auto">
             {[1, 2].map((v) => (
               <div key={v} className="flex-1 min-w-[320px] aspect-video bg-bg-dark rounded-[2rem] border-[3px] border-white/5 relative overflow-hidden group cursor-pointer shadow-2xl">
                 <img 
                   src={`https://placehold.co/800x450/050505/white?text=DEPOIMENTO+VIDEO+${v}`} 
                   className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                   alt="Video Depoimento" 
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                     <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white translate-x-1" />
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container-custom text-center">
          <h2 className="text-[26px] md:text-[42px] font-extrabold uppercase mb-16 leading-tight tracking-tighter">
            CHEGA DE SÓ OLHAR. <span className="text-gradient-primary">COMECE AGORA</span><br />
            A CRIAR ARTES PROFISSIONAIS.
          </h2>

          <div className="max-w-[400px] mx-auto offer-card-border p-12 text-center shadow-[0_0_100px_rgba(123,0,255,0.25)]">
             <div className="inline-block border border-white/20 rounded-full px-6 py-2 mb-10">
               <span className="text-white font-extrabold uppercase tracking-[0.3em] text-[12px]">
                 Pack Gospel
               </span>
             </div>

             <ul className="text-left space-y-6 mb-12 text-text-gray text-18 font-medium">
               {[
                 "Videoaula editando pelo celular",
                 "Videoaula editando pelo pc",
                 "Milhares de fontes premium",
                 "Processo Criativo (do zero)",
                 "Atualizações",
                 "Acesso vitalício",
                 "Garantia incondicional de 7 dias"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-4">
                   <div className="bg-brand-magenta rounded-full p-1 shrink-0"><Check size={16} strokeWidth={4} className="text-white" /></div>
                   {item}
                 </li>
               ))}
             </ul>

             <div className="mb-10 pt-10 border-t border-white/10">
               <span className="text-text-gray font-bold text-18 block mb-2">Tudo isso hoje por apenas:</span>
               <div className="text-48 font-extrabold text-brand-yellow drop-shadow-[0_0_15px_rgba(255,196,0,0.4)]">
                 R$ 29,99
               </div>
               <span className="text-text-gray/50 text-[12px] uppercase font-bold tracking-widest mt-2 block">ou 6x de R$ 5,63 no cartão</span>
             </div>

             <PremiumButton className="w-full py-6">GARANTIR ACESSO AGORA</PremiumButton>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 via-brand-purple-deep/30 to-brand-magenta/30 opacity-60" />
        
        <div className="container-custom relative z-10">
           <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
             <div className="shrink-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-bg-dark rounded-full flex flex-col items-center justify-center jagged-seal border-[4px] border-brand-magenta shadow-[0_0_50px_rgba(255,0,212,0.5)]">
                  <div className="text-56 font-extrabold text-brand-blue leading-none">7</div>
                  <div className="text-[12px] font-extrabold text-white uppercase tracking-[0.3em] mt-1">DIAS</div>
                  <div className="text-[10px] font-extrabold text-brand-magenta uppercase tracking-[0.2em]">GARANTIA</div>
                </div>
             </div>
             
             <div className="text-center md:text-left max-w-lg">
               <h3 className="text-[32px] font-extrabold mb-4 uppercase leading-tight text-white drop-shadow-lg">
                 SE VOCÊ NÃO GOSTAR,<br/>DEVOLVEMOS SEU DINHEIRO.
               </h3>
               <p className="text-text-gray text-18 font-medium leading-relaxed drop-shadow-sm">
                 Teste o Pack Gospel por 7 dias sem risco. Se por algum motivo você não se sentir satisfeito, é só solicitar o estorno direto pela plataforma que eu devolvo todo o seu investimento sem burocracia.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-32 bg-bg-dark">
        <div className="container-custom">
           <div className="text-center mb-24">
             <span className="text-white font-extrabold text-[12px] uppercase tracking-[0.5em] opacity-80">
               CRIADO POR QUEM ENTENDE DE DESIGN PARA O REINO
             </span>
           </div>

           <div className="grid grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
              {/* Photo (5 columns) */}
              <div className="col-span-12 md:col-span-5 relative flex justify-center">
                 <div className="rounded-[2.5rem] p-1 bg-gradient-to-tr from-brand-magenta to-brand-purple-deep shadow-[0_0_60px_rgba(123,0,255,0.3)]">
                   <img 
                     src="/creator_photo.png" 
                     alt="Criador" 
                     className="rounded-[2.4rem] w-full max-w-[400px] object-cover aspect-square"
                   />
                 </div>
              </div>

              {/* Bio (7 columns) */}
              <div className="col-span-12 md:col-span-7 space-y-8 text-text-gray text-18 leading-relaxed font-medium text-center md:text-left">
                <p>
                  Olá, eu sou o <span className="text-gradient-primary font-extrabold uppercase">Leonardo Tondella</span>, designer à frente da Tondella Studio.
                </p>
                <p>
                  <span className="text-white font-bold">Desenvolvi este pack</span> após notar que centenas de líderes e ministérios perdem horas valiosas tentando criar artes que, no fim, não passam a mensagem que deveriam.
                </p>
                <p>
                  Reuni toda a minha experiência para criar designs <span className="text-brand-magenta font-extrabold">profissionais, elegantes</span> e extremamente fáceis de editar.
                </p>
                <p>
                  Meu foco está no que realmente importa: <span className="text-gradient-primary font-extrabold uppercase underline underline-offset-8">a mensagem.</span> Deixe o design profissional com quem já é referência no mercado.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-bg-dark text-center border-t border-white/5">
         <p className="text-white/20 text-[10px] font-extrabold uppercase tracking-[0.5em]">
           © 2026 TONDIELLA STUDIO. TODOS OS DIREITOS RESERVADOS.
         </p>
      </footer>
    </div>
  );
}


