import { ApiResponse, FilterNoticiaParams, FilterPaginatedNoticiaParams, Noticia } from "@/@types/services";
import fetchWrapper from "./api";

export async function findAllNoticia(): Promise<ApiResponse<Noticia>> {
  return fetchWrapper("/noticias?page=0&size=10&sort=data,desc", { cache: "no-store" });
}

export async function findAllFilteredNoticia(params: FilterNoticiaParams = {}): Promise<ApiResponse<Noticia>> {
  const queryString = new URLSearchParams(params as any).toString();
  return fetchWrapper(`/noticias/filtradas?${queryString}`, { cache: "no-store" });
}

export async function findAllPaginatedNoticia(
  params: FilterPaginatedNoticiaParams = {}
): Promise<ApiResponse<Noticia>> {
  const queryString = new URLSearchParams(params as any).toString();
  return fetchWrapper(`/noticias?${queryString}`);
}

export async function findAllDailyNoticia(): Promise<Noticia[]> {
  const dataAtual = new Date();
  const timeZone = "America/Sao_Paulo";
  const dataAtualFormatada = dataAtual
    .toLocaleDateString("pt-BR", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");

  const queryString = new URLSearchParams({ data: dataAtualFormatada }).toString();
  return fetchWrapper(`/noticias/filtradas?${queryString}`);
}

export async function findNoticiaById(id: string): Promise<Noticia> {
  const timestamp = new Date().getTime();
  return fetchWrapper(`/noticias/${id}?_=${timestamp}`);
}

export async function findAllArchivedNoticia(): Promise<Noticia[]> {
  return fetchWrapper("/noticias/arquivadas/admin");
}
