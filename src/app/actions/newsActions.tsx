"use server";

import { ApiResponse, FilterPaginatedNoticiaParams, Noticia } from "@/@types/services";
import {
  findAllDailyNoticia,
  findAllNoticia,
  findAllPaginatedNoticia,
  findAllWeeklyNoticia,
  findNoticiaById,
} from "@/services/revistaReacaoApi/noticiaService";
import { UUID } from "crypto";

export async function getAllNewsAction(): Promise<ApiResponse<Noticia>> {
  return await findAllNoticia();
}

export async function getPaginatedNewsAction(params: FilterPaginatedNoticiaParams): Promise<ApiResponse<Noticia>> {
  return await findAllPaginatedNoticia(params);
}

export async function getNewsByIdAction(id: UUID): Promise<Noticia> {
  return await findNoticiaById(id);
}

export async function getAllDailyNewsAction(): Promise<ApiResponse<Noticia>> {
  return await findAllDailyNoticia();
}

export async function getAllWeeklyNewsAction(): Promise<ApiResponse<Noticia>> {
  return await findAllWeeklyNoticia();
}
