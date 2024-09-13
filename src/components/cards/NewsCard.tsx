import Link from "next/link";
import { NextImage } from "../ui/NextImage";

export const NewsCardMain = () => {
  return (
    <div className="flex flex-col gap-3 text-start aspect-[17/10]">
      <NextImage
        imageUrl="/img/temp/temp.png"
        altImage="Imagem alternativa"
        sizes="720px"
        width={720}
        height={478}
        className="w-full h-full object-cover bg-cover bg-center rounded-lg"
      />
      <div className="flex flex-col text-start">
        <div className="flex gap-[.625rem] items-center">
          <span className="paragraph-1 p-1 rounded-[.25rem] border border-[#FF5C00] w-max">Justiça e política</span>
          <span className="">- 20 de outubro de 2024</span>
        </div>
        <h2 className="h2-medium">
          Denúncia grave de preconceito racial durante V Conferência Nacional dos Direitos da PcD
        </h2>
        <p className="mt-2 paragraph-2">
          Jô Nunes, militante de longa data pelos direitos da PcD, denuncia discriminação racial sofrida durante a V
          Conferência Nacional dos Direitos da PcD, causando revolta e mobilização entre os conselheiros.
        </p>
      </div>

      <Link href={"#"} className="cta">
        Continuar lendo
      </Link>
    </div>
  );
};

export const NewsCard = () => {
  return (
    <div className="flex flex-col gap-2 text-start border-b border-var-cinza-150">
      <div className="flex flex-col text-start">
        <div className="flex gap-[.625rem] items-center">
          <span className="paragraph-1 p-1 rounded-[.25rem] border border-[#FF5C00] w-max">Justiça e política</span>
          <span className="">- 20 de outubro de 2024</span>
        </div>
        <h2 className="title-card">Férias de julho: dicas de atividades para crianças com autismo</h2>
        <p className="mt-2 paragraph-1 ">
          As férias de julho podem ser desafiadoras para crianças com autismo devido à hipersensibilidade sensorial
          causada por estímulos excessivos. Estratégias como a dessensibilização sistematizada e a criação de um
          ambiente tranquilo podem ajudar.
        </p>
      </div>

      <Link href={"#"} className="cta mb-4">
        Continuar lendo
      </Link>
    </div>
  );
};
