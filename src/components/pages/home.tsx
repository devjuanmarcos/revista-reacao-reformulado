"use client";
import React, { memo, Suspense } from "react";
import { AdvertisingSectionProps } from "@/@types/types";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const MainSection = dynamic(() => import("@/sections/MainSection").then((mod) => mod.MainSection), {
  loading: () => (
    <div className="w-full h-[80vh] flex justify-center">
      <Loader2 className={cn("h-12 w-12  m-auto animate-spin")} />
    </div>
  ),
});
const DailyNewsSection = dynamic(() => import("@/sections/DailyNewsSection").then((mod) => mod.DailyNewsSection));
const AdvertisinghorizontalSection = dynamic(() =>
  import("@/sections/AdvertisingSection").then((mod) => mod.AdvertisinghorizontalSection)
);
const VideoFrameSection = dynamic(() => import("@/sections/VideoFrameSection").then((mod) => mod.VideoFrameSection));
const WeeklyNewsSection = dynamic(() => import("@/sections/WeeklyNewsSection").then((mod) => mod.WeeklyNewsSection));
const AdvertisingSection = dynamic(() => import("@/sections/AdvertisingSection").then((mod) => mod.AdvertisingSection));
const SweepstakeSection = dynamic(() => import("@/sections/SweepstakeSection").then((mod) => mod.SweepstakeSection));

const HomePage: React.FC = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-[80vh] flex justify-center">
        <Loader2 className={cn("h-12 w-12  m-auto animate-spin")} />
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-20 justify-center items-center w-full h-full  pt-[2.5rem] pb-20 ">
      <Suspense
        fallback={
          <div className="w-full h-[80vh] flex justify-center">
            <Loader2 className={cn("h-12 w-12  m-auto animate-spin")} />
          </div>
        }
      >
        <MainSection />
      </Suspense>

      <DailyNewsSection />
      <AdvertisinghorizontalSection {...firstAdvertising} />
      <VideoFrameSection />
      <AdvertisinghorizontalSection {...secondAdvertising} />
      <WeeklyNewsSection />

      {/* <AdvertisinghorizontalSection {...threeAdvertising} /> */}
      {/* <SweepstakeSection {...Sweepstake} /> */}
      <AdvertisinghorizontalSection {...fourAdvertising} />
      {/* <AdvertisingSection {...lastAdvertising} /> */}
    </section>
  );
};

HomePage.displayName = "HomePage";
export default memo(HomePage);

const Sweepstake: AdvertisingSectionProps = {
  alt: "Preencha o Formulário de inscrição para participar do sorteio de 1 KIT DE LIVROS DE MARCELO VILAS BOAS – “MÊ DÊ SUA MÃO + QUANDO ENTREGO A MINHA DOR” ",
  src: "/img/temp/sorteio/2LIVROS.png",
  title:
    "Preencha o Formulário de inscrição para participar do sorteio de 1 KIT DE LIVROS DE MARCELO VILAS BOAS – “MÊ DÊ SUA MÃO + QUANDO ENTREGO A MINHA DOR” ",
  description:
    "Preencha o Formulário de inscrição para participar do sorteio ESPECIAL DE 01 CANECA DA MOVE DESENVOLVIMENTO HUMANO",
};

const firstAdvertising: AdvertisingSectionProps = {
  src: "/temp/anuncios/jeep-acessivel-anuncios/18682_banner-horizontal_1800x300_mm_jeep_pcd-a.jpg",
  alt: "Jeep Renegade - O mundo da aventura é para você!",
  href: "https://mclartymaia.com.br",
};

const secondAdvertising: AdvertisingSectionProps = {
  src: "/temp/anuncios/hyundai-anuncios/AFO_2110_POST.jpg",
  alt: "O conforto e a segurança que você merece.",
  href: "https://hmbcaoa.com.br?utm_source=reacao&utm_medium=cpm&utm_campaign=pullse_hmb_alcance_awareness_site_reacao_cpm_display_hb20&utm_content=n01-interesses-HM-35a65_all_all_br_re-impressoes&utm_term=all-dimensions_estatico_hmb_hb20_semoferta_id-0441",
};

const threeAdvertising: AdvertisingSectionProps = {
  src: "/temp/anuncios/hyundai-anuncios/hyundainovo.jpg",
  alt: "Hyundai Facilita.",
  href: "https://www.hyundai.com.br/vendas-diretas.html?utm_source=Google&utm_medium=PMAX&utm_campaign=ONGOING_RETAIL_CRETA_SU2_2024&utm_content=PMAX_CRETA_PLATINUMSAFETYCTETO_PR_162690_SC_OPEN_OF&gad_source=1&gclid=CjwKCAjwuMC2BhA7EiwAmJKRrJV9okjWcLIqpp9OPzvINexoAjVxZtiL4VIcltLlpWAxMSR7NQuWpxoCUA8QAvD_BwE",
};

const fourAdvertising: AdvertisingSectionProps = {
  src: "/temp/anuncios/citroen/banner basalt_1800x300-HORIZ.png",
  alt: "Novo AirCross.",
  href: "https://www.citroen.com.br/vendas-diretas/pcd.html",
};

const lastAdvertising: AdvertisingSectionProps = {
  src: "/temp/anuncios/clinicasantissima/clinicasantissima.jpeg",
  alt: "Clinica Santíssima",
  title: "Confiança, Tradição e Qualidade",
  description: "Temos a missão de cuidar da sua saúde!",
  buttonText: "Saiba mais no nosso instagram",
  href: "https://www.instagram.com/clinicasantissima/",
};
