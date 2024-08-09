<template>
  <v-container fluid class="pa-0" v-if="verificaSeExisteLanches">
    <v-main class="pa-5 pt-16">
      <v-app  class="mt-10">
        <v-card>
          <v-card-title>
            <p>Não Há nenhum lanche selecionado</p>
          </v-card-title>
        </v-card>
      </v-app>
    </v-main>
  </v-container>
  <Cardapio :lanches="lanchesSelecionados"
            :remover="true"
            :quantidade="true"
            v-else
  />
  <Pagamento :lanches="lanchesSelecionados"/>
</template>
<script>
import Pagamento from "@/components/Pagamento.vue";

export default {
  components: {Pagamento},
  data() {
    return {
    }
  },
  computed: {
    lanchesSelecionados() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.lanches += this.$store.state.lanchesSelecionados
      return this.$store.state.lanchesSelecionados
    },
    verificaSeExisteLanches() {
      return  this.$store.state.lanchesSelecionados.length === 0
    }
  },
  mounted() {
    console.log("lanches selecionados: ", this.$store.state.lanchesSelecionados)
  }
}
</script>

<style scoped>

</style>
