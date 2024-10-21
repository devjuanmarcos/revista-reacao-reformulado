"use server";

import { AdvertisingSectionProps } from "@/@types/types";
import { AdvertisinghorizontalSection, AdvertisingSection } from "@/components/sections/AdvertisingSection";
import { DailyNewsSection } from "@/components/sections/DailyNewsSection";
import { MainSection } from "@/components/sections/MainSection";
import { SweepstakeSection } from "@/components/sections/SweepstakeSection";
import { VideoFrameSection } from "@/components/sections/VideoFrameSection";
import { WeeklyNewsSection } from "@/components/sections/WeeklyNewsSection";

import React from "react";

export default async function HomePage() {
  return (
    <section className="flex flex-col gap-20 justify-center items-center w-full h-full  pt-[2.5rem] pb-20 ">
      <MainSection />
      <DailyNewsSection />
      <AdvertisinghorizontalSection {...firstAdvertising} />
      <VideoFrameSection />
      <WeeklyNewsSection />
      <SweepstakeSection {...Sweepstake} />
      <AdvertisinghorizontalSection {...secondAdvertising} />
      <AdvertisingSection {...lastAdvertising} />
    </section>
  );
}

const Sweepstake: AdvertisingSectionProps = {
  alt: "1 CANECA DA MOVE DESENVOLVIMENTO HUMANO",
  src: "/img/temp/sorteio/caneca-move-desenvolvimento.jpeg",
  title: "Sorteio de uma linda caneca da MOVE Desenvolvimento humano",
  description:
    "Preencha o Formulário de inscrição para participar do sorteio ESPECIAL DE 01 CANECA DA MOVE DESENVOLVIMENTO HUMANO",
};

const firstAdvertising: AdvertisingSectionProps = {
  src: "/img/publicidade/hyundai-anuncios/HYUNDAI - Banner 336x80_300dpi-1.png",
  alt: "Oferta do CRETA Action PcD 24/24 (de R$ 119.990,00 por R$ 98.823).",
  href: "https://www.hyundai.com.br/vendas-diretas.html?utm_source=Google&utm_medium=PMAX&utm_campaign=ONGOING_RETAIL_CRETA_SU2_2024&utm_content=PMAX_CRETA_PLATINUMSAFETYCTETO_PR_162690_SC_OPEN_OF&gad_source=1&gclid=CjwKCAjwuMC2BhA7EiwAmJKRrJV9okjWcLIqpp9OPzvINexoAjVxZtiL4VIcltLlpWAxMSR7NQuWpxoCUA8QAvD_BwE",
};

const secondAdvertising: AdvertisingSectionProps = {
  src: "/img/publicidade/hyundai-anuncios/1243X346_CRETA-PCD - CAOA.jpg",
  alt: "Chery Tiggo 8x Sport 150cv",
  href: "https://hmbcaoa.com.br/modelo/creta?utm_source=reacao&utm_medium=cpm&utm_campaign=pullse_hmb_alcance_awareness_site_reacao_cpm_display_creta-action&utm_content=n01-interesses-HM-35a65_all_all_br_re-impressoes&utm_term=all-dimensions_estatico_hmb_creta-action_semoferta_id-0272",
};

const lastAdvertising: AdvertisingSectionProps = {
  src: "/img/publicidade/musica_inclusiva.webp",
  alt: "Instituto Humanus e Orquestra Metropolitana apresentam Música Inclusiva.",
  title: "Música Inclusiva (evento gratuito)",
  description: "Instituto Humanus e Orquestra Metropolitana apresentam Música Inclusiva. Garanta já o seu ingresso!",
  href: "https://musicainclusiva.com.br",
};
