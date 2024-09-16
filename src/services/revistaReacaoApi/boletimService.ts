import { AxiosResponse } from "axios";

import { apiRevistaReacao } from "./api";
import { ApiResponse, Boletim, FilterPaginatedNoticiaParams } from "@/@types/services";

export async function findAllIBoletim(params: FilterPaginatedNoticiaParams = {}): Promise<ApiResponse<Boletim>> {
  const queryString = new URLSearchParams(params as any).toString();

  return await apiRevistaReacao.get(`/boletim?${queryString}`, {});
}

export async function findById(boletimId: string): Promise<AxiosResponse<Boletim>> {
  return await apiRevistaReacao.get(`/boletim/${boletimId}`, {});
}

export async function createBoletim(boletim: Boletim): Promise<AxiosResponse<Boletim>> {
  return await apiRevistaReacao.post("/boletim", boletim);
}

export async function updateBoletim(boletim: Boletim, boletimId: string): Promise<AxiosResponse<Boletim>> {
  return await apiRevistaReacao.put(`boletim/${boletimId}`, boletim);
}

export async function archiveBoletim(boletimId: string): Promise<AxiosResponse<Boletim>> {
  return await apiRevistaReacao.put(`/boletim/arquivar/${boletimId}`, {});
}
