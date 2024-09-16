import { AxiosResponse } from "axios";
import { Revista } from "@/@types/services";
import { apiRevistaReacao } from "./api";

export async function findAllIEdicao(): Promise<AxiosResponse<Revista>> {
  return await apiRevistaReacao.get("/edicoes", {});
}

export async function findAllArchivedEdicao(): Promise<AxiosResponse<Revista>> {
  return await apiRevistaReacao.get(`/edicoes/arquivadas`, {});
}

export async function createEdicao(
  dto: Revista,
  imagemFile: File,
  pdfFile: File
): Promise<AxiosResponse<Revista>> {
  const formData = new FormData();
  for (const key in dto) {
    if (Object.hasOwn(dto, key)) {
      formData.append(key, (dto as any)[key]);
    }
  }
  formData.append("imagemFile", imagemFile);
  formData.append("pdfFile", pdfFile);
  return await apiRevistaReacao.post("/boletim", formData);
}

export async function archiveEdicao(
  edicaoId: string
): Promise<AxiosResponse<Revista>> {
  return await apiRevistaReacao.put(`/edicoes/arquivar/${edicaoId}`, {});
}

export async function reactivateEdicao(
  edicaoId: string
): Promise<AxiosResponse<Revista>> {
  return await apiRevistaReacao.put(`/edicoes/reativar/${edicaoId}`, {});
}
