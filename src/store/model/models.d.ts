export interface Link {
    url: string;
    title: string;
    favicon?: string;
}

export interface Title {
    title: string;
}

export interface User {
    nome: string;
    login: string;
    senha: string;
    email: string;
    avatar?: string;
}

export interface UserSubmit{
    login: string;
    senha: string;
}

export interface BuscaSubmit{
    consulta: string;
}

export interface CrawlerSubmit{
    url: string[];
    profundidade: string;
}

export interface UserResponse {
    user: User;
}

export interface LinkResponse {
    urlsBuscadas?: (Link)[] | null;
    titulo?:  (Title)[] | null;
}

export interface CrawlerResponse {
    urls?: (Link)[] | null;
}