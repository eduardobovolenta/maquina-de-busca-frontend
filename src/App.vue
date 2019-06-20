<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Search</span>
        <span class="font-weight-light">Machine</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Logout</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <SearchPage/>
    </v-content>
  </v-app>
</template>

<script>
import SearchPage from './components/SearchPage'

export default {
  name: 'App',
  components: {
    SearchPage
  },
  data () {
    return {
    }
  }
}
</script>
