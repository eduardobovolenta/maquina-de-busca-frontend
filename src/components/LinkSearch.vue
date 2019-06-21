<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-2">Kangaroo Valley Safari</h3>
          <div>{{ card_text }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="blue">Visitar</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      card_text:
        `Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. 
        Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci.`
    };
  }
};
</script>

<style scoped>
.v-sheet{
    background-color: #fff;
    margin: 0 0 10px 0;
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    border-radius: 8px;
}
</style>
