import Link from "next/link";
import { NextImage } from "../ui/NextImage";
import { NextImageType } from "@/@types/types";

interface NewsCardProps {
  image?: NextImageType;
  category: string;
  title: string;
  paragraph: string;
  date: string;
  link: string;
  extraClassName?: string;
}

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

export const NewsCard = ({ category, date, link, paragraph, title, image, extraClassName }: NewsCardProps) => {
  return (
    <div className={`flex flex-col gap-2 text-start border-b border-var-cinza-150 w-full ${extraClassName}`}>
      <div className="flex flex-col gap-2 text-start">
        <div className="flex gap-[.625rem] items-center">
          <span className="paragraph-1 p-1 rounded-[.25rem] border border-[#FF5C00] w-max">{category}</span>
          <span className="">- {date}</span>
        </div>
        {image && (
          <NextImage
            imageUrl="/img/temp/temp.png"
            altImage="Imagem alternativa"
            sizes="400px"
            width={400}
            height={235}
            className="w-full h-full object-cover bg-cover bg-center rounded-lg"
          />
        )}
        <h2 className="title-card">{title}</h2>
        <p className="paragraph-1 ">{paragraph}</p>
      </div>

      <Link href={link} className="cta mb-4">
        Continuar lendo
      </Link>
    </div>
  );
};
