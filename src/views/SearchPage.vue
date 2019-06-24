<template>
  <div>
    <Toolbar/>
    <v-container>
      <v-layout row class="teste">
        <v-flex py-3 text-xs-center xs12>
          <img
            class="logo"
            src="https://www.bainsight.com//wp-content/uploads/2012/09/google-cloud-logo.png"
          >
          <h1>O que está procurando?</h1>
          <v-form v-on:submit.prevent>
            <v-container>
              <v-layout row>
                <v-flex>
                  <v-text-field v-model="pesquisa" v-on:keyup.enter="show = !show, searchLink()" append-icon="search"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-flex>
      </v-layout>
      <transition v-if="!show" name="fade">
        <SearchSection :show="show"/>
      </transition>
      <!-- <transition v-if="!show" name="fade"> -->
        <LinkSearch :urlsBuscadas="urlsBuscadas"/>
      <!-- </transition> -->
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Toolbar from "../components/toolbar.vue";
import SearchSection from "../components/SearchSection.vue";
import LinkSearch from "../components/LinkSearch.vue";
import links from '@/store/modules/links';

@Component({
  components: {
    Toolbar,
    SearchSection,
    LinkSearch
  }
})
export default class SearchPage extends Vue {
  show = false;
  pesquisa = '';
  requisicaoErro = '';
  get urlsBuscadas() {
    return links.urlsBuscadas;
  }
  searchLink() {
    if (this.pesquisa != '') {
      console.log(this.pesquisa)
      links
        .searchLink({
          consulta: this.pesquisa,
        })
        .then(res => console.log(this.urlsBuscadas))
        .catch(err => {
          console.error(err);
          this.requisicaoErro = "Invalid username or password";
        });
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.teste {
  background-image: url(https://ssl.gstatic.com/support/content/images/static/homepage_header_background.svg);
  background-position: 50%;
  background-repeat: no-repeat;
  height: 19.0625rem;
  margin-top: 1.5rem;
}

.logo {
  width: 100px;
  margin-top: -300px;
}
</style>
