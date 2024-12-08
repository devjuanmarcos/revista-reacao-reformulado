"use client";
import React, { memo, Suspense } from "react";
import { AdvertisingSectionProps } from "@/@types/types";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import Script from "next/script";

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
const CarOfTheYearSection = dynamic(() =>
  import("@/sections/CarOfTheYearSection").then((mod) => mod.CarOfTheYearSection)
);

const HomePage: React.FC = () => {
  React.useEffect(() => {
    import("@/sections/MainSection");
  }, []);

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

      <CarOfTheYearSection {...CarOfTheYear} />
      {/* <DailyNewsSection />
      <AdvertisinghorizontalSection {...firstAdvertising} />
      <VideoFrameSection />
      <AdvertisinghorizontalSection {...secondAdvertising} />
      <WeeklyNewsSection />
      <AdvertisinghorizontalSection {...threeAdvertising} />
      <SweepstakeSection {...Sweepstake} />
      <AdvertisinghorizontalSection {...fourAdvertising} />
      <AdvertisingSection {...lastAdvertising} /> */}
    </section>
  );
};

HomePage.displayName = "HomePage";
export default memo(HomePage);

const CarOfTheYear: AdvertisingSectionProps = {
  alt: "Votação para o prêmio de carro do ano para PCD",
  src: "/temp/carro-do-ano/LOGO CARRO DO ANO - 2024.jpg",
  buttonText: "Quero votar",
  href: "/premio-carro-do-ano",
  title: "Votação para o prêmio de carro do ano para PCD",
  topTitle: "Carro do Ano",
  description:
    "Para este ano de 2024 estamos vindo com uma novidade. Agora, vamos eleger o “melhor carro para pessoas com deficiência” em 4 categorias diferentes – elétricos, SUV, compactos e sedan – você pode votar em todas as 4 categorias no modelo e marca que mais te agrada.",
};

const Sweepstake: AdvertisingSectionProps = {
  alt: "1 CANECA DA MOVE DESENVOLVIMENTO HUMANO",
  src: "/img/temp/sorteio/caneca-move-desenvolvimento.jpeg",
  title: "Sorteio de uma linda caneca da MOVE Desenvolvimento humano",
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
  src: "/temp/anuncios/hyundai-anuncios/bannerhyundai.jpg",
  alt: "Hyundai Facilita.",
  href: "https://www.hyundai.com.br/vendas-diretas.html?utm_source=Google&utm_medium=PMAX&utm_campaign=ONGOING_RETAIL_CRETA_SU2_2024&utm_content=PMAX_CRETA_PLATINUMSAFETYCTETO_PR_162690_SC_OPEN_OF&gad_source=1&gclid=CjwKCAjwuMC2BhA7EiwAmJKRrJV9okjWcLIqpp9OPzvINexoAjVxZtiL4VIcltLlpWAxMSR7NQuWpxoCUA8QAvD_BwE",
};

const fourAdvertising: AdvertisingSectionProps = {
  src: "/temp/anuncios/citroen/banner aircross_1800x300.png",
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
