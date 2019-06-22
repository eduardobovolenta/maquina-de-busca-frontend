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
                  <v-text-field v-on:keyup.enter="show = !show" append-icon="search"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-flex>
      </v-layout>
      <SearchSection :show="show"/>
      <LinkSearch/>
    </v-container>
  </div>
</template>

<script>
import Toolbar from "../components/toolbar.vue";
import SearchSection from "../components/SearchSection.vue";
import LinkSearch from "../components/LinkSearch.vue";

export default {
  components: {
    Toolbar,
    SearchSection,
    LinkSearch
  },
  data() {
    return {
      show: true
    };
  }
};
</script>

<style>
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
