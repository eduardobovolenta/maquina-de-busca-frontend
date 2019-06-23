import { VuexModule, Module, getModule, MutationAction, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'
import { Link, BuscaSubmit } from '../model/models';
import { realizarBusca } from '../api';


@Module({
    namespaced: true,
    name: 'link',
    store,
    dynamic: true,
})
class LinksModule extends VuexModule {
    link: Link | null = null

    @MutationAction
    async searchLink(linkSubmit: BuscaSubmit) {
        const link = await realizarBusca(linkSubmit);
        return { link };
    }
}

export default getModule(LinksModule)