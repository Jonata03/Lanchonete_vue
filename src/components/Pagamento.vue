<template>
    <v-container class="pb-15">
      <v-row>
        <h1>Area de pagamento</h1>
        <v-card width="100%">
          <v-card-title>Pagamento</v-card-title>
          <v-card-text>total: {{somaTotal}} R$</v-card-text>
          <v-card-actions>
            <v-btn color="orange"
                   text="Pagar"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
</template>
<script>
import {mapState} from "vuex";

export  default {
  props:{
    lanches: Array
  },
  computed:{
    ...mapState(['lanchesSelecionados']),
    somaTotal: function () {
      let total = 0

      this.lanchesSelecionados.forEach(lanche =>{
        let preco = lanche.preco
        total += parseFloat(preco * lanche.quantidade)
      })
      console.log("total : ",total)
      return total.toFixed(2)

    }
  },
  data(){
    return{
    }
  },
  methods:{
    limpaTudo(){
      //precisa limpar tuido oque esta dentro de this.lanches selecionado e preco e mostrar os v-alert
    }
  }
}
</script>
<style scoped>

</style>
