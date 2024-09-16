import { AxiosResponse } from "axios";
import {
  ApiResponse,
  FilterNoticiaParams,
  FilterPaginatedNoticiaParams,
  Noticia,
} from "@/@types/services";
import { apiRevistaReacao } from "./api";

function directionToString(direction: boolean | undefined): string {
  return direction ? "asc=true" : "desc=true";
}

export async function findAllNoticia(
  service: "biomob" | "revista"
): Promise<AxiosResponse<Noticia>> {
  if (service == "biomob") {
    return await apiRevistaReacao.get("/noticias/biomob", {});
  } else {
    return await apiRevistaReacao.get("/noticias", {});
  }
}

export async function findAllFilteredNoticia(
  service: "biomob" | "revista",
  params: FilterNoticiaParams = {}
): Promise<ApiResponse<Noticia>> {
  const queryString = new URLSearchParams(params as any).toString();
  if (service == "biomob") {
    return await apiRevistaReacao.get(
      `/noticias/biomob/filtradas?${queryString}`,
      {}
    );
  } else {
    return await apiRevistaReacao.get(`/noticias/filtradas?${queryString}`, {});
  }
}

export async function findAllPaginatedNoticia(
  service: "biomob" | "revista",
  params: FilterPaginatedNoticiaParams = {}
): Promise<ApiResponse<Noticia>> {
  const queryString = new URLSearchParams(params as any).toString();

  if (service == "biomob") {
    return await apiRevistaReacao.get(`/noticias/biomob?${queryString}`, {});
  } else {
    return await apiRevistaReacao.get(`/noticias?${queryString}`, {});
  }
}

export async function findNoticiaByid(
  id: string
): Promise<AxiosResponse<Noticia>> {
  return await apiRevistaReacao.get(`noticias/${id}`, {});
}

export async function findAllArchivedNoticia(
  params: FilterPaginatedNoticiaParams = {}
): Promise<ApiResponse<Noticia>> {
  return await apiRevistaReacao.get("/noticias/arquivadas/admin", { params });
}

export async function createNoticia(
  service: "biomob" | "revista",
  formData: FormData
): Promise<AxiosResponse<Noticia>> {
  const url = service === "biomob" ? "/noticias/biomob" : "/noticias/reacao";
  return await apiRevistaReacao.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function archiveNoticia(
  noticiaId: string
): Promise<AxiosResponse<Noticia>> {
  return await apiRevistaReacao.put(`/noticias/arquivar/${noticiaId}`, {});
}

export async function reativeNoticia(
  noticiaId: string
): Promise<AxiosResponse<Noticia>> {
  return await apiRevistaReacao.put(`/noticias/reativar/${noticiaId}`, {});
}

export async function updateNoticia(
  noticiaId: string,
  formData: FormData
): Promise<AxiosResponse<Noticia>> {
  return await apiRevistaReacao.put(`/noticias/${noticiaId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function findCategories(): Promise<AxiosResponse<undefined>> {
  return await apiRevistaReacao.get("/noticias/categorias");
}
