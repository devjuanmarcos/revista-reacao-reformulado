"use client";

import { NewsCard, NewsCardMain } from "@/components/cards/NewsCard";
import { TopicTitle } from "@/components/ui/TopicTitle";

export const MainSection = () => {
  return (
    <section className="section grid md:grid-cols-5 md:gap-3 gap-20 items-start ">
      <div className="w-full col-span-3">
        <NewsCardMain />
      </div>
      <div className="flex flex-col gap-5 p-[.625rem] col-span-3 md:col-span-2  md:[&>*:last-child]:hidden 2xl:[&>*:last-child]:flex ">
        <TopicTitle text="Notícias populares" />

        <NewsCard
          title="Férias de julho: dicas de atividades para crianças com autismo"
          paragraph="As férias de julho podem ser desafiadoras para crianças com autismo devido à hipersensibilidade sensorial
          causada por estímulos excessivos. Estratégias como a dessensibilização sistematizada e a criação de um
          ambiente tranquilo podem ajudar."
          category="Justiça e Política"
          date="20 de outubro de 2024"
          link="#"
        />
        <NewsCard
          title="Férias de julho: dicas de atividades para crianças com autismo"
          paragraph="As férias de julho podem ser desafiadoras para crianças com autismo devido à hipersensibilidade sensorial
          causada por estímulos excessivos. Estratégias como a dessensibilização sistematizada e a criação de um
          ambiente tranquilo podem ajudar."
          category="Justiça e Política"
          date="20 de outubro de 2024"
          link="#"
        />
        <NewsCard
          title="Férias de julho: dicas de atividades para crianças com autismo"
          paragraph="As férias de julho podem ser desafiadoras para crianças com autismo devido à hipersensibilidade sensorial
          causada por estímulos excessivos. Estratégias como a dessensibilização sistematizada e a criação de um
          ambiente tranquilo podem ajudar."
          category="Justiça e Política"
          date="20 de outubro de 2024"
          link="#"
        />
      </div>
    </section>
  );
};
