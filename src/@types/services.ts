type LoginProps = {
  login: string;
  password: string;
};

type CategoriesType =
  | "ACESSIBILIDADE"
  | "ACIDENTESEDESASTRESNATURAIS"
  | "CONFLITOSEGUERRAS"
  | "CULTURA"
  | "ESPECIAL"
  | "ESPORTES"
  | "ENTREVISTA"
  | "EVENTOS"
  | "FAMOSOS"
  | "INTERNACIONAL"
  | "JUSTICAEPOLITICA"
  | "SAUDE"
  | "TECNOLOGIA"
  | "TESTDRIVE"
  | "TRABALHO"
  | "TRAGEDIASSOCIAIS";

type ApiResponse<T> = {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
};

interface FilterNoticiaParams {
  categoria?: string;
  data?: string;
  dataInicial?: string;
  dataFinal?: string;
  palavraChave?: string;
  ultimaSemana?: boolean;
  asc?: boolean;
  desc?: boolean;
  page?: number;
  size?: number;
  sort?: string[];
}

interface FilterPaginatedNoticiaParams {
  page?: number;
  size?: number;
  asc?: boolean;
  desc?: boolean;
  categoria?: CategoriesType;
}

type Noticia = {
  id?: string;
  titulo: string;
  paragrafo: string[];
  resumo: string;
  categoria: string;
  data?: Date;
  hora?: string;
  link?: string;
  imagem?: string;

  // novo modelo
  textoAlternativoImagem?: string;
  creditosImagem?: string;
  linkImagem?: string;
  imagemAlternativa?: string;
  textoAlternativoImagemA?: string;
  creditosImagemA?: string;
  linkImagemA?: string;
};

type Boletim = {
  id?: string;
  titulo: string;
  descricao: string;
  link: string;
  data?: string;
};

type Revista = {
  id?: string | number;
  nome: string;
  data: string;
  descricao: string;
  capa?: string;
};

export type {
  ApiResponse,
  LoginProps,
  Noticia,
  Boletim,
  Revista,
  FilterNoticiaParams,
  FilterPaginatedNoticiaParams,
  CategoriesType,
};
