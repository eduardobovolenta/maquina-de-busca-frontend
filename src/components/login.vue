<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid="true" grid-list-xl text-xs-center class="mt-1 pt-5">
          <v-layout row wrap>
            <v-flex xs6 offset-xs3>
              <v-card color="white" class="ma-5 pa-1">
                <img
                  style="width: 150px;"
                  src="https://www.bainsight.com//wp-content/uploads/2012/09/google-cloud-logo.png"
                >
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  @submit.prevent
                  class="ma-4 pa-2"
                >
                  <v-text-field
                    v-model="login"
                    name="login"
                    :rules="[rules.required]"
                    placeholder
                    label="Usuario"
                    required
                    :append-icon="'person'"
                  ></v-text-field>
                  <v-text-field
                    v-model="senha"
                    name="senha"
                    :rules="[rules.required]"
                    placeholder
                    label="Senha"
                    required
                    :append-icon="show ? 'visibility' : 'visibility_off'"
                    :type="show ? 'text' : 'senha'"
                    class="input-group--focused"
                    @click:append="show = !show"
                  ></v-text-field>
                  <v-btn
                    type="submit"
                    @click="realizarLogin()"
                    color="info"
                    large
                    block
                    class="mt-5"
                  >Login</v-btn>
                </v-form>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import users from "@/store/modules/users";

@Component
export default class Login extends Vue {
  login = "";
  senha = "";
  account = "";
  loginError = '';
  valid = true;
  show = false;
  rules = {
    required: value => !!value || "Campo requerido",
    min: value => value.length >= 4 || "Mínimo 4 caracteres"
  };

  realizarLogin() {
    if (this.$refs.form.validate()) {
      users
        .login({
          login: this.login,
          senha: this.senha
        })
        .then(() => this.$router.push("/"))
        .catch(err => {
          console.error(err);
          this.loginError = "Invalid username or password";
        });
    }
  }
}
</script>

<style>
</style>
