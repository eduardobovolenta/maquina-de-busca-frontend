import axios from 'axios'
import { UserSubmit, User, UserResponse, BuscaSubmit, Link, LinkResponse, CrawlerSubmit, CrawlerResponse } from './model/models';

export const conduitApi = axios.create({
    baseURL: 'http://localhost:5000/',
})

export async function realizarLogin(user: UserSubmit): Promise<User> {
    const response = await conduitApi.post('login', {
        user
    })
    const responseCorreto = {"user": response.data}
    return (responseCorreto as UserResponse).user;
}

export async function realizarBusca(busca: BuscaSubmit): Promise<Link> {
    const response = await conduitApi.post('busca', {
        busca
    })
    return (response.data as LinkResponse).link;
}

export async function rodarCrawler(link : CrawlerSubmit){
    const response = await conduitApi.post('crawler', {
        link
    })
    return response.data as CrawlerResponse;
}