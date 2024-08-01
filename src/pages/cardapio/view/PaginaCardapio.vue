<template>
  <Cardapio :lanches="cardapioLanches" :selecionar="true"/>
</template >
<script>
export default {
  data() {
    return {
      lanches: [

      ]
    }
  },
  computed:{
    cardapioLanches(){
      return this.$store.state.cardapioLanches
    }
  },
  methods:{
    selecionaLanche(index){
      indexOf(index)
    },
  },

}
</script>

<style scoped>

</style>
