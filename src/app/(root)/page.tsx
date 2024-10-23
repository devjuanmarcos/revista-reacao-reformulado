"use server";
import React from "react";
import HomePage from "@/components/pages/home";
import defaultMetatada from "@/metadata/defaultMetadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return defaultMetatada();
}

export default async function page() {
  return <HomePage />;
}
