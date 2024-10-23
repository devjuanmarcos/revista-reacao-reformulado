"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { NewsCard } from "../cards/NewsCard";
import { TopicTitle } from "../ui/TopicTitle";
import { Noticia } from "@/@types/services";
import { getAllDailyNewsAction } from "@/app/actions/newsActions";
import { getCategoryInfo } from "@/utils/categories";

export function DailyNewsSection() {
  const [dailyNews, setDailyNews] = React.useState<Noticia[] | null>(null);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function fetch() {
      try {
        const res = await getAllDailyNewsAction();
        setDailyNews(res.content);
      } catch (error) {
        console.log(error);
      } finally {
        setIsMounted(true);
      }
    }
    fetch();
  }, []);

  if (!isMounted || !dailyNews) {
    return null;
  }

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full flex flex-col gap-5 section"
    >
      <TopicTitle text="Notícias do dia" />

      <CarouselContent>
        {dailyNews.map((data) => (
          <CarouselItem key={data.id} className="lg:basis-[auto] select-none">
            <div className="p-1 flex items-center justify-center">
              <NewsCard
                extraClassName="w-full max-w-[80vw] lg:max-w-[25rem]"
                imageUrl={data.imagem}
                title={data.titulo}
                paragraph={data.resumo}
                category={getCategoryInfo(data.categoria).name}
                date="20 de outubro de 2024"
                link={`/noticias/noticia?id=${data.id}`}
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
