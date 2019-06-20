<template>
  <div>
    <v-flex py-3 text-xs-center xs12>
      <h1>O que está procurando?</h1>
      <v-form>
        <v-container>
          <v-layout row wrap>
            <v-flex>
              <v-text-field label="Pesquisa..."></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex>
              <v-text-field label="Pesquisa..." box></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-flex>
    <v-footer height="auto" color="primary lighten-1">
      <v-layout justify-center row wrap>
        <v-btn v-for="link in links" :key="link" color="white" flat round>{{ link }}</v-btn>
        <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
          &copy;2018 —
          <strong>Vuetify</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  })
};
</script>

<style>
</style>
