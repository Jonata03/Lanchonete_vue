<template>
  <v-container>
    <v-alert
      class="fixed-alert"
      color="green"
      icon="$success"
      v-if="tempoAlerta"
      :title="textoAlerta"
      @input="tempoAlerta"
    >

    </v-alert>
  </v-container>
</template>

<script>

export default {

  data(){
    return{
      alert: false
    }
  },
  mounted() {
    this.tempoAlerta()
  },
  props:{
    color: String,
    textoAlerta: String,
    mostrarAlerta:Boolean
  },
  methods:{
    tempoAlerta(){
      setTimeout(()=>{
        this.alert = false
      },2000)
    },
  },
}
</script>

<style >
.fixed-alert {
  position: fixed;
  top: 5em;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2000;
  /* Garanta que esteja acima de todos os outros elementos */
}
</style>
