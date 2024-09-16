"use client";
import * as React from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { NewsCard } from "../cards/NewsCard";
import { TopicTitle } from "../ui/TopicTitle";

const image = {
  imageUrl: "/img/temp/temp.png",
  altImage: "Imagem alternativa",
  sizes: "720px",
  width: 720,
  height: 478,
  className: "w-full h-full object-cover bg-cover bg-center rounded-lg",
};

export function WeeklyNewsSection() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full flex flex-col gap-5 section"
    >
      <TopicTitle text="Notícias do semana" />

      <CarouselContent>
        {Array.from({ length: 23 }).map((_, index) => (
          <CarouselItem key={index} className="lg:basis-[auto] select-none">
            <div className="p-1 flex items-center justify-center">
              <NewsCard
                extraClassName="w-full max-w-[25rem]"
                image={image}
                title="Férias de julho: dicas de atividades para crianças com autismo"
                paragraph="As férias de julho podem ser desafiadoras para crianças com autismo devido à hipersensibilidade sensorial
          causada por estímulos excessivos. Estratégias como a dessensibilização sistematizada e a criação de um
          ambiente tranquilo podem ajudar."
                category="Justiça e Política"
                date="20 de outubro de 2024"
                link="#"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
