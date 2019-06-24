<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card v-for="urlsBuscadas in urlsBuscadas" :key="urlsBuscadas">
      <v-card-title primary-title>
        <div class="link-header">
          <img
            class="image-ico"
            height="16"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABO0lEQVQ4jaWTMaoCMRCG/wnvDtELmHaxdAmIXcheZA9hYeMNxNZqsc81lu0X+2VLTzBj8V5C8uQ9UAcG5k+YP5kvhPATzCx4IZRSBAD0TnNuQu82J5NPmgFADcMAay2UUjifzwAA733S8zzDWgtrLeZ5xvV6xXK5hPcet9vte/5pmoSIJIQgURtj5HQ6CTOLc06maRJmFmaWuq5TjVg454qNrutEay0hBDkej8V6NC4M+r4XANL3fdo0xogxJul4UK4TxPV6Decc9vt9ArTb7XC/35MehgFVVZUUc7cQghCRjOOYTtNaS9d1wszStm3BgpnlKzfz3mO1WuFyuWCz2aBpGlhrcTgcsN1uAQCLxeLvG0RIRJRmjS9U13XB5wlinlrrgnTbtk/w/jWIDPL8PXvMzz9TzuLVZgB4AExRsO8ga8hoAAAAAElFTkSuQmCC"
            width="16"
            aria-hidden="true"
            data-atf="1"
          >
          <span class="url-link">{{urlsBuscadas}} › wiki</span>
        </div>
        <div>
          <h3 class="headline mb-2 titleSearch" href>{{titlesBuscados[0]}}</h3>
          <div>{{ card.card_text2 }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="blue" :href="urlsBuscadas">Visitar</v-btn>
      </v-card-actions>
    </v-card>
    <!-- <v-card v-for="i in 3" :key="i">
      <v-card-title primary-title>
        <div class="link-header">
          <img
            class="image-ico"
            height="16"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABO0lEQVQ4jaWTMaoCMRCG/wnvDtELmHaxdAmIXcheZA9hYeMNxNZqsc81lu0X+2VLTzBj8V5C8uQ9UAcG5k+YP5kvhPATzCx4IZRSBAD0TnNuQu82J5NPmgFADcMAay2UUjifzwAA733S8zzDWgtrLeZ5xvV6xXK5hPcet9vte/5pmoSIJIQgURtj5HQ6CTOLc06maRJmFmaWuq5TjVg454qNrutEay0hBDkej8V6NC4M+r4XANL3fdo0xogxJul4UK4TxPV6Decc9vt9ArTb7XC/35MehgFVVZUUc7cQghCRjOOYTtNaS9d1wszStm3BgpnlKzfz3mO1WuFyuWCz2aBpGlhrcTgcsN1uAQCLxeLvG0RIRJRmjS9U13XB5wlinlrrgnTbtk/w/jWIDPL8PXvMzz9TzuLVZgB4AExRsO8ga8hoAAAAAElFTkSuQmCC"
            width="16"
            aria-hidden="true"
            data-atf="1"
          >
          <span class="url-link">https://pt.m.wikipedia.org › wiki</span>
        </div>
        <div>
          <h3 class="headline mb-2" href>{{card.card_title}}</h3>
          <div>{{ card.card_text }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="blue" :href="card.card_link">Visitar</v-btn>
      </v-card-actions>
    </v-card>-->
  </v-flex>
</template>

<script>
export default {
  props: {
    urlsBuscadas: Array,
    titlesBuscados: Array
  },
  data() {
    return {
      card: {
        card_link: `https://www.wikipedia.org`,
        card_text: `A Wikipédia é um projeto de enciclopédia colaborativa, universal e multilíngue estabelecido na internet sob o princípio wiki. Tem como propósito fornecer um ...`,
        card_title: `Wikipédia, a enciclopédia livre`,
        card_text2: `Resumo da página será aprensentado neste bloco. Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
        card_title2: `Título da pagina tag title`
      }
    };
  }
};
</script>

<style scoped>
.titleSearch:first-letter {
    text-transform: uppercase;
}

.link-header {
  padding-bottom: 0.5em;
}
.image-ico {
  margin-right: 12px;
  vertical-align: middle;
}
.url-link {
  font-size: 12px;
  color: #3c4043;
  white-space: nowrap;
}

.v-sheet {
  background-color: #fff;
  margin: 0 0 10px 0;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  border-radius: 8px;
}
</style>
