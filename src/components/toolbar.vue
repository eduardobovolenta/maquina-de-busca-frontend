<template>
  <div>
    <v-layout wrap style="height: 150px;">
      <v-toolbar flat color="transparent">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Máquina de Buscas - Search Page</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down" align-center justify-space-around wrap>
          <v-menu offset-y transition="slide-y-transition" bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" flat>
                <v-avatar flat color="grey lighten-4">
                  <img
                    v-bind:src="user.avatar"
                    v-bind:alt="user.name"
                  >
                </v-avatar>
              </v-btn>
            </template>

            <v-list>
              <v-list-tile>
                <v-list-tile-title>
                  <v-icon>perm_identity</v-icon>Perfil
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <v-icon>settings</v-icon>Configurações
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <v-icon>exit_to_app</v-icon>Sair
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar-items>
      </v-toolbar>

      <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute temporary>
        <v-list class="pa-1">
          <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img
                v-bind:src="user.avatar"
              >
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{user.nome}}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <router-link to="/">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>dashboard</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Página de Busca</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>

          <router-link to="/maquina-de-busca">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>android</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Máquina de Busca</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import users from '@/store/modules/users';

@Component
export default class Toolbar extends Vue{
  get user() {
    return users.user;
  }

  drawer = null
  items =  [
    { title: "Home", icon: "dashboard" },
    { title: "About", icon: "question_answer" }
  ]
  mini =  false
  right = null
}
</script>

<style scoped>
.v-list__tile__title {
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
}
.application a {
  text-decoration: none;
}
</style>
