<template>
  <v-container fluid class="pa-0">
    <v-main class="pa-5 pt-16">
      <v-app class="mt-10">
        <v-row>
          <v-card v-for="lanche in lanches"
                  class="mx-auto ma-2"
                  width="400"
                  height="425"
                  max-width="400">
            <v-img
              class="align-end text-white"
              height="200"
              :src="lanche.img"
              cover
            >
            </v-img>
            <v-card-title>{{ lanche.nome }}</v-card-title>
            <v-card-subtitle class="pt-4 font-weight-black">
              R$ {{ lanche.preco }}
            </v-card-subtitle>

            <v-card-text>
              <div><strong>Ingredientes:</strong> {{lanche.ingredientes}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" text="Escolher" v-if="selecionar"></v-btn>
            </v-card-actions>
          </v-card>
        </v-row>

      </v-app>
    </v-main>
  </v-container>
</template>
<script >
export default{
  props:{
    lanches: Array,
    selecionar: Boolean,
  },
  methods:{
    selecionaLanche(){
    }
  }
}

</script>

<style scoped>

</style>
