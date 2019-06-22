import { VuexModule, Module, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { Link } from '../model/models';


@Module({
    namespaced: true,
    name: 'links',
    store
})
class LinksModule extends VuexModule {
    link: Link | null = null
}

export default getModule(LinksModule)