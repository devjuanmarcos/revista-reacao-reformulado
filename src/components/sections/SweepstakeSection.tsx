"use client";

import Image from "next/image";
import Link from "next/link";
import { TopicTitle } from "../ui/TopicTitle";
import { AdvertisingSectionProps } from "@/@types/types";

export const SweepstakeSection = ({ alt, src, description, href, title }: AdvertisingSectionProps) => {
  return (
    <section className="section flex w-full h-full flex-col gap-8">
      <div className="w-full flex gap-[4.4375rem] max-md:gap-8  justify-between items-center max-md:flex-col ">
        <Link href={href || "#"} target="_blank" className="w-full h-auto max-h-[45rem] ">
          <Image src={src} alt={alt} className="rounded-3xl" sizes="100vw" width={1200} height={800} quality={100} />
        </Link>

        <div className="flex flex-col  gap-8   w-full ">
          <div className="flex flex-col gap-4">
            <TopicTitle text="Sorteio da semana" />
            <div className="flex flex-col text-start">
              <h2 className="h2-medium">{title}</h2>
              <p className="mt-2 paragraph-2 max-w-[45rem]">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
