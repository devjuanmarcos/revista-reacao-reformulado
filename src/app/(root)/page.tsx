"use server";

import { DailyNewsSection } from "@/components/sections/DailyNewsSection";
import { MainSection } from "@/components/sections/MainSection";
import { VideoFrameSection } from "@/components/sections/VideoFrameSection";
import { WeeklyNewsSection } from "@/components/sections/WeeklyNewsSection";

import React from "react";

export default async function HomePage() {
  return (
    <section className="flex flex-col gap-20 justify-center items-center w-full h-full  pt-[2.5rem] pb-20 ">
      <MainSection />
      <DailyNewsSection />
      <VideoFrameSection />
      <WeeklyNewsSection />
    </section>
  );
}
