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
                  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent>
                    <v-layout row wrap>
                      <v-flex xs12 sm6 md3>
                        <v-text-field
                          v-model="urlProcessada[0]"
                          name="urlProcessada"
                          :rules="[rules.required]"
                          required
                          label="Url a ser processada"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-flex xs12 sm6>
                      <v-slider color="blue" label="Profundidade" min="1" max="100" thumb-label></v-slider>
                    </v-flex>
                    <div class="text-xs-center">
                      <v-btn
                        :loading="loading4"
                        :disabled="loading4"
                        color="primary"
                        @click="loader = 'loading4', rodar()"
                      >Rodar Crawler</v-btn>
                    </div>
                  </v-form>
                </v-card-text>
                <v-card>
                  <v-card-text>
                    <v-treeview :items="items">{{urlsAll}}</v-treeview>
                  </v-card-text>
                </v-card>
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

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Toolbar from "../components/toolbar.vue";
import links from "../store/modules/links";
@Component({
  components: {
    Toolbar
  }
})
export default class MaquinaDeBusca extends Vue {
  get urlsAll() {
    return links.urlsAll;
  }


  loader = null;
  loading = false;
  loading4 = false;
  requisicaoErro = "";
  valid = true;
  urlProcessada = [];
  profundidade = "1";
  rules = {
    required: value => !!value || "Campo requerido"
  };

  items = [];
  rodar() {
    if (this.$refs.form.validate()) {
      this.loading4 = true;
      links
        .postCrawler({
          url: this.urlProcessada,
          profundidade: this.profundidade
        })
        .then(response => (this.loading4 = false))
        .catch(err => {
          console.error(err);
          this.requisicaoErro = "Invalid username or password";
        });
    }
  }
  watch = {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
}
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
