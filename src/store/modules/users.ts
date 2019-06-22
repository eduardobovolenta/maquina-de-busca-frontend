import { VuexModule, Module, getModule, MutationAction, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'
import { User, UserSubmit } from '../model/models';
import { realizarLogin } from '../api';


@Module({
    namespaced: true,
    name: 'users',
    store,
    dynamic: true
})

class UsersModule extends VuexModule {
    user: User | null = null

    get username() {
        return (this.user) || null;
    }

    @MutationAction
    async login(userSubmit: UserSubmit) {
        const user = await realizarLogin(userSubmit);
        return { user };
    }
}

export default getModule(UsersModule);