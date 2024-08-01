<template>
  <Cardapio :lanches="LanchesSelecionados" />
</template>
<script>
  export default {
   computed:{
     LanchesSelecionados(){
       return this.$store.state.LanchesSelecionados
     }
   },
    method: {
      addNewItem() {

      }
    },
  }
</script>

<style scoped>

</style>
