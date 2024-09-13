"use server";

import { NewsCard, NewsCardMain } from "@/components/cards/NewsCard";
import { TopicTitle } from "@/components/ui/TopicTitle";
import React from "react";

export default async function HomePage() {
  return (
    <section className="section grid md:grid-cols-5 md:gap-3 gap-20 items-start pb-20 md:pt-[4rem] pt-[2.5rem] ">
      <div className="w-full col-span-3">
        <NewsCardMain />
      </div>
      <div className="flex flex-col gap-5 p-[.625rem] col-span-2">
        <TopicTitle text="Notícias populares" />

        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
}
