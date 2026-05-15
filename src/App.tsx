/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Star, Download, Clock, ThumbsUp, X } from "lucide-react";
import React from 'react';

// --- Sub-components ---

const PremiumButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <button className={`btn-premium ${className}`}>
    {children}
  </button>
);

const GlowingDivider = () => (
  <div className="glowing-divider my-2 md:my-4" />
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

      {/* Hero Section */}
      <section className="relative min-h-[850px] flex items-center pt-[120px] pb-[100px] overflow-hidden">
        {/* Logo over background */}
        <div className="absolute top-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="font-heading font-[900] text-[26px] tracking-tighter text-gradient-primary leading-none">
              TSTUDIO
            </span>
            <div className="flex flex-col leading-[0.9] border-l border-white/20 pl-2">
              <span className="font-sans font-bold text-[11px] text-white uppercase tracking-tight">Pack</span>
              <span className="font-sans font-bold text-[11px] text-white uppercase tracking-tight">Gospel</span>
            </div>
          </div>
        </div>

        {/* Background Image - 100% size, exactly fitting the section, not cut (stretched if necessary) */}
        <img
          src="/pack_mockup.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-fill z-0"
        />

        <div className="container-custom relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Content */}
            <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left px-2 sm:px-0">
              <h1 className="font-heading font-[900] text-[24px] lg:text-[39px] leading-[1.03] mb-4 drop-shadow-2xl w-full max-w-[580px] text-white">
                Pare de criar artes do zero.<br />
                <span className="text-brand-magenta">Artes Gospel 100% Editáveis<br />
                  para sua igreja em minutos.</span>
              </h1>

              <p className="text-[17pt] font-medium text-white mb-10 leading-[1.6] opacity-[0.88] max-w-[580px]">
                Edite no Celular ou PC, mesmo sem experiência.
              </p>

              <div className="mb-10 w-full flex flex-col items-center lg:items-start gap-3">
                <span className="strikethrough-magenta text-[16px] lg:text-[20px] font-bold leading-none -mb-5">DE: R$ 89,99</span>

                {/* Unified Price Layout */}
                <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-x-2 leading-[0.7] text-brand-yellow">
                  <span className="font-heading font-[900] text-[20pt] uppercase leading-none">HOJE POR APENAS R$</span>
                  <div className="flex items-start leading-[0.7]">
                    <span className="font-heading font-[900] text-[72px] drop-shadow-[0_0_30px_rgba(255,193,0,0.5)] leading-[0.7]">29</span>
                    <span className="font-heading font-[900] text-[32px] mt-1 leading-none">,99</span>
                  </div>
                </div>

                <span className="text-[13px] sm:text-[14px] lg:text-[14px] text-white/70 font-medium italic leading-none">
                  Acesso vitalício. (Oferta por tempo limitado)
                </span>
              </div>

              <PremiumButton className="translate-y-[40px]">
                QUERO GARANTIR<br />MEU PACK + BÔNUS
              </PremiumButton>
            </div>
          </div>
        </div>

        {/* Section Divider Bar */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="hero-divider" />
        </div>
      </section>


      {/* Showcase Section */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="text-center mb-[60px]">
            <h2 className="font-heading font-[900] text-[42px] uppercase mb-4 tracking-tight leading-none text-white">
              VEJA ALGUMAS ARTES QUE <span className="text-brand-magenta">VOCÊ VAI RECEBER</span>
            </h2>
            <p className="text-white/80 text-[16pt] font-medium max-w-3xl mx-auto leading-tight">
              Modelos modernos, impactantes e totalmente personalizáveis.
            </p>
          </div>

          {/* Grid Desktop / Static Layout */}
          <div className="hidden md:flex justify-center flex-wrap gap-[28px] mb-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-[260px] h-[430px] shrink-0">
                <div className="w-full h-full overflow-hidden group shadow-2xl rounded-xl">
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
          <div className="bg-gradient-to-r from-brand-magenta to-brand-blue rounded-[20px] mx-auto shadow-[0_10px_40px_rgba(123,0,255,0.3)] w-full md:w-fit px-10 py-4 flex items-center justify-center">
            <span className="text-white font-[800] text-[18pt] uppercase tracking-normal text-center">
              IDEAL PARA IGREJAS, LÍDERES E MÍDIAS QUE PRECISAM POSTAR TODA SEMANA.
            </span>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="section-padding relative overflow-hidden section-gradient">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-[22px] md:text-[48px] font-[900] mb-8 md:mb-14 uppercase leading-tight text-white px-4">
            ADQUIRINDO O <span className="text-brand-magenta">PACK GOSPEL</span> HOJE<br />
            VOCÊ LEVA TUDO ISSO DE BÔNUS
          </h2>

          {/* Grid Desktop */}
          <div className="hidden md:flex justify-center gap-[18px] mb-20">
            {[
              { text: "CURSO PC: PASSO A PASSO", color: "#405CFF" },
              { text: "CURSO MOBILE: PASSO A PASSO", color: "#405CFF" },
              { text: "DO ZERO À ARTE PRONTA", color: "#FF00D4" },
              { text: "MEU PROCESSO CRIATIVO", color: "#405CFF" },
              { text: "CENTRAL DE DOWNLOADS", color: "#FF00D4", icon: true },
            ].map((bonus, i) => (
              <div key={i} className="w-[195px] h-[290px] shrink-0">
                <div
                  className="w-full h-full rounded-[2rem] overflow-hidden border border-white/10 relative group"
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

          <div className="max-w-[700px] mx-auto mb-16 md:mb-20 px-4 flex flex-col items-center text-center">
            <div className="text-[19px] md:text-[23px] font-medium text-white leading-[1.6]">
              <div><span className="text-brand-magenta">Videoaulas completas</span> para você mesmo não sabendo nada de design possa criar suas artes.</div>
              <div className="h-4 md:h-6" />
              <div>Mais de <span className="text-brand-magenta font-bold">R$ 200 EM BÔNUS DE PRESENTE</span>.</div>
              <div className="mt-4">
                <span className="text-white">Só o conhecimento dessas aulas</span>
                <span className="text-brand-magenta"> vale muito mais do que o seu investimento hoje.</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <PremiumButton>
              QUERO GARANTIR<br />MEU PACK + BÔNUS
            </PremiumButton>
          </div>
        </div>
      </section>

      <GlowingDivider />

      {/* Comparison Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <img
          src="/comparison_image.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="container-custom relative z-20">
          <div className="flex flex-col lg:flex-row gap-[40px] md:gap-[80px] lg:gap-[120px] items-start">
            {/* Left Column: Title (45%) */}
            <div className="w-full lg:w-[45%]">
              <h2 className="text-[17px] md:text-[34px] font-[900] leading-[1.2] text-center lg:text-left break-words w-full text-white">
                Por que esse Pack <br className="hidden md:block" />
                <span className="text-gradient-primary">é a escolha mais inteligente</span><br className="hidden md:block" />
                para sua igreja?
              </h2>
            </div>

            {/* Right: Text & Comparison (55%) */}
            <div className="w-full lg:w-[55%] space-y-8 md:space-y-12 px-4 md:px-0">
              <div className="space-y-[32px] w-full">
                {/* COM O PACK */}
                <div className="p-[40px] rounded-[16px] border border-[#00FF88] shadow-[0_0_15px_rgba(0,255,136,0.15)] bg-black/40 space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <h3 className="text-[20px] md:text-[24px] font-[900] uppercase text-white">COM O PACK</h3>
                    <div className="bg-[#00FF88] rounded-full p-1"><ThumbsUp size={16} className="text-black" /></div>
                  </div>
                  <ul className="space-y-4 text-text-gray text-[16px] leading-[1.8] font-medium text-left w-full">
                    <li className="flex items-start gap-3"><span className="text-[#00FF88] mt-1 shrink-0">•</span> <span className="min-w-0">Artes modernas e impactantes por <span className="text-brand-yellow font-bold">apenas R$ 29,99</span>.</span></li>
                    <li className="flex items-start gap-3"><span className="text-[#00FF88] mt-1 shrink-0">•</span> <span className="min-w-0"><span className="text-brand-yellow font-bold">Sem depender de designers</span> ou perder horas criando do zero.</span></li>
                    <li className="flex items-start gap-3"><span className="text-[#00FF88] mt-1 shrink-0">•</span> <span className="min-w-0">Sem gastar centenas de reais por mês.</span></li>
                    <li className="flex items-start gap-3"><span className="text-[#00FF88] mt-1 shrink-0">•</span> <span className="min-w-0">Você investe uma única vez e tem <span className="text-brand-yellow font-bold">acesso vitalício</span>.</span></li>
                  </ul>
                </div>

                {/* SEM O PACK */}
                <div className="p-[40px] rounded-[16px] border border-[#FF4D4D] shadow-[0_0_15px_rgba(255,77,77,0.15)] bg-black/40 space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <h3 className="text-[20px] md:text-[24px] font-[900] uppercase text-white/70 tracking-widest">SEU PRAZO</h3>
                    <div className="bg-[#FF4D4D] rounded-full p-1"><Clock size={16} className="text-white" /></div>
                  </div>
                  <p className="text-text-gray text-[16px] leading-[1.8] text-center lg:text-left w-full">
                    Criar artes do zero consome tempo, energia e criatividade. Muitas vezes o resultado não fica profissional, impactando negativamente a imagem da sua igreja. Contratar um designer pode custar entre <span className="text-white font-bold">R$ 50 e R$ 150</span> por arte.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex justify-center pt-12 md:pt-20 relative w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-magenta/10 blur-[80px] -z-10" />
            <PremiumButton>QUERO GARANTIR<br />MEU PACK + BÔNUS</PremiumButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding section-gradient overflow-x-hidden">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[24px] md:text-[42px] font-[900] uppercase leading-tight tracking-tighter text-white">
              AINDA ESTÁ EM DÚVIDA? OLHA SÓ O QUE<br className="hidden md:block" />
              OS MEMBROS FALAM DO PACK GOSPEL.
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-[1250px] mx-auto px-4">
            {[
              "Fala Léo, só passando pra te agradecer por esse pack 🙏 a gente não tinha identidade nenhuma, agora tá tudo padronizado, bonito... outro nível!",
              "mano, o pastor até comentou hoje da arte kkk nem esperava isso",
              "Oi Leo. Parabéns pelo pack que você criou e quero agradecer pelas videoaulas, pois eu não sei mexer muito com design, mas consegui usar tranquilamente. Muito fácil mesmo!",
              "Léo, peguei teu pack aqui... usei uma arte rapidinho e já postei kkk ficou bom demais mano",
              "Mano, essas artes mudaram totalmente a estética da nossa igreja. Antes a gente postava qualquer coisa, agora tá tudo profissional. Já teve gente nova falando que conheceu o culto pelo Instagram 💪",
              "Mano usei uma das artes hoje do pack gospel e já teve gente perguntando quem fez 😍 bom demais!",
              "Boa tarde irmão. A paz! Quero agradecer d mais homem por esse pack, valeu cada centavo! Já estou ansioso para mais atualização rsrs... 🔥 ❤️",
              "E ai Tondella. tudo bem? Sou líder de mídia na igreja e isso aqui me salvou! Eu não tenho muito tempo pra criar arte, e esse pack já vem praticamente pronto. Obrigado mesmo irmão pela qualidade e a praticidade só edito e posto. Recomendo demais!",
              "amigo, isso aqui ajudou viu... eu sempre travava pra fazer arte, agora foi bem mais rápido",
              "Léo, nem terminei de ver tudo ainda mas já gostei kkk tem bastante coisa boa",
              "mano, não sou muito de comprar essas coisas mas esse aqui valeu viu"
            ].map((text, i) => (
              <div key={i} className="bg-white rounded-[14px] p-5 flex flex-col shadow-lg hover:scale-[1.02] transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-[360px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
                    <img src={`https://i.pravatar.cc/100?u=${i + 60}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-[#1A1A1A] font-medium text-[14px] leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Offer Section */}
      <section className="section-padding relative overflow-hidden section-gradient">
        <div className="container-custom text-center">
          <h2 className="text-[22px] md:text-[42px] font-[900] uppercase mb-8 md:mb-14 leading-tight tracking-tighter px-4 text-white">
            CHEGA DE SÓ OLHAR. <span className="text-gradient-primary">COMECE AGORA</span><br />
            <span className="text-gradient-primary">A CRIAR ARTES</span> PROFISSIONAIS.
          </h2>

          <div className="mx-auto offer-card-border p-[40px] flex flex-col w-full md:w-[380px] min-h-[660px] items-center text-center relative mb-20">
            {/* Header */}
            <div className="mb-6">
              <span className="text-brand-magenta font-black uppercase text-[12px] tracking-[0.3em] block mb-1">TSTUDIO</span>
              <h3 className="text-white text-[48px] font-[900] leading-[0.9] uppercase tracking-tighter">
                Pack<br />Gospel
              </h3>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-6" />

            {/* List */}
            <ul className="text-left space-y-[18px] mb-8 text-white text-[15px] font-bold w-full px-2">
              {[
                "Videoaula editando pelo celular",
                "Videoaula editando pelo pc",
                "Videoaula criando arte do zero",
                "Download de fontes e programas",
                "Atualizações",
                "Acesso vitalício",
                "Garantia incondicional de 7 dias"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="bg-brand-magenta rounded-full p-1 shrink-0"><Check size={14} strokeWidth={4} className="text-white" /></div>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-6" />

            {/* Price */}
            <div className="mb-12">
              <span className="text-white font-medium text-[14px] block mb-1">Tudo isso hoje por apenas:</span>
              <div className="text-[64px] font-[900] text-brand-yellow leading-none mb-1">
                R$ 29,99
              </div>
              <span className="text-white/60 text-[13px] font-bold">ou 6x de R$ 5,63 no cartão.</span>
            </div>

            {/* Overlapping Button */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center">
              <PremiumButton>GARANTIR ACESSO AGORA</PremiumButton>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(90deg,#1f0040,#0059ff,#5f007a)' }}>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="shrink-0 flex items-center justify-center">
              <div className="w-[208px] h-[208px] bg-bg-dark rounded-full flex flex-col items-center justify-center jagged-seal border-[4px] border-[#4776FF] shadow-[0_0_50px_rgba(71,118,255,0.8)] relative">
                <div className="text-[80px] font-[900] text-brand-blue leading-none">7</div>
                <div className="text-[16px] font-[900] text-white uppercase tracking-[0.3em] mt-1">DIAS</div>
                <div className="text-[12px] font-[900] text-[#E500FF] uppercase tracking-[0.2em]">GARANTIA</div>
              </div>
            </div>

            <div className="text-center md:text-left max-w-lg">
              <h3 className="text-[36px] font-[900] mb-4 uppercase leading-tight text-white drop-shadow-lg">
                SE VOCÊ NÃO GOSTAR,<br />DEVOLVEMOS SEU DINHEIRO.
              </h3>
              <p className="text-white/90 text-[18px] font-medium leading-[1.6] drop-shadow-sm">
                Teste o Pack Gospel por 7 dias sem risco. Se por algum motivo você não se sentir satisfeito, é só solicitar o estorno direto pela plataforma que eu devolvo todo o seu investimento sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="section-padding overflow-x-hidden section-gradient">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-14 px-4">
            <span className="text-white font-[900] text-[12px] uppercase tracking-[0.5em] opacity-80">
              CRIADO POR QUEM ENTENDE DE DESIGN PARA O REINO
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-[40px] md:gap-[60px] items-center max-w-5xl mx-auto">
            {/* Photo (48%) */}
            <div className="w-full md:w-[48%] relative flex justify-center px-4 md:px-0 mb-8 md:mb-0">
              <div className="rounded-[2.5rem] p-[2px] bg-[#E500FF] shadow-[0_0_60px_rgba(229,0,255,0.4)] w-full max-w-[500px] h-auto md:h-[360px]">
                <img
                  src="/creator_photo.png"
                  alt="Criador"
                  className="rounded-[2.4rem] w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio (52%) */}
            <div className="w-full md:w-[52%] space-y-6 md:space-y-8 text-text-gray text-[17px] leading-[1.8] font-medium text-center md:text-left px-4 md:px-0">
              <p>
                Olá, eu sou o <span className="text-gradient-primary font-[900] text-[28px] uppercase block mb-4 mt-2">Leonardo Tondella</span> designer à frente da Tondella Studio.
              </p>
              <p>
                <span className="text-white font-bold">Desenvolvi este pack</span> após notar que centenas de líderes e ministérios perdem horas valiosas tentando criar artes que, no fim, não passam a mensagem que deveriam.
              </p>
              <p>
                Reuni toda a minha experiência para criar designs <span className="text-brand-magenta font-[900]">profissionais, elegantes</span> e extremamente fáceis de editar.
              </p>
              <p>
                Meu foco está no que realmente importa: <span className="text-gradient-primary font-[900] uppercase underline underline-offset-8">a mensagem.</span> Deixe o design profissional com quem já é referência no mercado.
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


