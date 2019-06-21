<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card v-for="i in 3" :key="i">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-2" href="">{{card.card_title}}</h3>
          <div>{{ card.card_text }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="blue" :href=card.card_link>Visitar</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      card: {
        card_link: `https://www.wikipedia.org`,
        card_text: `A Wikipédia é um projeto de enciclopédia colaborativa, universal e multilíngue estabelecido na internet sob o princípio wiki. Tem como propósito fornecer um ...`,
        card_title: `Wikipédia, a enciclopédia livre`,
      }
    };
  }
};
</script>

<style scoped>
.v-sheet {
  background-color: #fff;
  margin: 0 0 10px 0;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  border-radius: 8px;
}
</style>
