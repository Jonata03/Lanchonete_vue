<template>

  <Cardapio :lanches="cardapioLanches"
            :selecionar="true"
            textoAlerta="Lanche Adicionado com sucesso"/>
</template >
<script>
export default {
  data() {
    return {

    }
  },
  computed:{
    cardapioLanches(){
      return this.$store.state.cardapioLanches
    }
  },
  methods:{


  },

}
</script>

<style scoped>

</style>
