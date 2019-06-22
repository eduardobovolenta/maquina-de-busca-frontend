export interface Link {
    url: string;
    title: string;
    favicon?: string;
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

export interface UserResponse {
    user: User
}