<template>
    <v-app-bar class="bg-grey-darken-3 pa-2" >
      <v-img src="@/assets/img/hamburguer-icon.png"
             alt="teste logo"
             width="50"
             @click="goToHome"
             class="cursor-image"
            ></v-img>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn :class="btn" to="/cardapio">Cardápio</v-btn>
      <v-btn :class="btn" to="/pedidos">Pedidos</v-btn>
      <v-btn :class="btn" to="/montagem">Montar Lanche</v-btn>
    </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      btn: "bg-amber align-center pa-2 pl-6 pr-6 rounded-lg  mr-7 "
    }
  },
  methods:{
    goToHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.cursor-image{
  cursor: pointer
}
</style>
