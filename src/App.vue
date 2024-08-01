<template>
  <v-app>
    <NavBar/>
    <router-view></router-view>
    <Footer/>
  </v-app>
</template>

<script>
import NavBar from "@/components/Nav-bar.vue";
import Footer from "@/components/Nav-bar.vue"
export default {
  name: 'App',
}
</script>
