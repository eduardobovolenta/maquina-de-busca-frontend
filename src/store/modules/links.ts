import { VuexModule, Module, getModule, MutationAction, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'
import { Link, BuscaSubmit, CrawlerSubmit } from '../model/models';
import { realizarBusca, rodarCrawler} from '../api';


@Module({
    namespaced: true,
    name: 'link',
    store,
    dynamic: true,
})
class LinksModule extends VuexModule {
    link: Link | null = null
    urlsAll: Link[] = [];

    @MutationAction
    async searchLink(linkSubmit: BuscaSubmit) {
        const link = await realizarBusca(linkSubmit);
        return { link };
    }

    @MutationAction
    async postCrawler(crawlerSubmit: CrawlerSubmit) {
        console.log(crawlerSubmit)
        const linkCrawler = await rodarCrawler(crawlerSubmit);
        return { urlsAll: linkCrawler.urls };
    }
}

export default getModule(LinksModule)