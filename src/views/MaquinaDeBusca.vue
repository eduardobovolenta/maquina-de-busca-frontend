<template>
  <div>
    <Toolbar/>
    <v-container py-3 text-xs-center xs12>
      <h1 class="titulo">Funções Máquina de Busca</h1>
      <v-card>
        <v-tabs centered color="cyan" dark icons-and-text>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab href="#tab-1">
            Crawler
            <v-icon>android</v-icon>
          </v-tab>
          <v-tab href="#tab-2">
            APIs
            <v-icon>cloud</v-icon>
          </v-tab>

          <v-tabs-items v-model="model">
            <v-tab-item value="tab-1">
              <v-card flat class="pa-3">
                <v-card-text>
                  <v-form>
                    <v-layout row wrap>
                      <v-flex xs12 sm6 md3>
                        <v-text-field label="Url a ser processada"></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-flex xs12 sm6>
                      <v-slider
                        color="blue"
                        label="Profundidade"
                        min="1"
                        max="100"
                        thumb-label
                      ></v-slider>
                    </v-flex>
                    <div class="text-xs-center">
                      <v-btn
                        :loading="loading"
                        :disabled="loading"
                        color="primary"
                        @click="loader = 'loading'"
                      >Rodar Crawler</v-btn>
                    </div>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item value="tab-2">
              <v-card flat>
                <v-card-text></v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Toolbar from "../components/toolbar.vue";
export default {
  components: {
    Toolbar
  },
  data() {
    return {
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  }
};
</script>

<style scoped>
.titulo {
  margin-top: -20px;
  margin-bottom: 30px;
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
