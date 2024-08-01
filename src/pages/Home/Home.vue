<template>
  <v-app>
    <v-container fluid class="bg-surface-variant pt-4" :style="{padding:0}">
      <hero-banner class="mt-10"/>
      <Main />
      <Main />
    </v-container>
  </v-app>
</template>

<script>
import HeroBanner from "@/components/Hero-banner.vue"
import Main from "@/components/Main.vue"
export default {
}
</script>
