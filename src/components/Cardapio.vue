<template>
  <v-container fluid class="pa-0">
    <v-alert class="fixed-alert"
             color="success"
             v-if="alert"
             icon="$success"
             title="lanche escolhido com sucesso"
             @input="tempoAlerta"
    ></v-alert>
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
            <v-card-title>{{ lanche.nome }} <span v-if="quantidade" class="quantidade">{{lanche.quantidade}}</span></v-card-title>
            <v-card-subtitle class="pt-4 font-weight-black">
              R$ {{ lanche.preco }}
            </v-card-subtitle>

            <v-card-text>
              <div><strong>Ingredientes:</strong> {{ lanche.ingredientes }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange"
                     text="Escolher"
                     v-if="selecionar"
                     @click="selectItem(lanche)"

              ></v-btn>
              <v-btn color="red"
                     text="Remover"
                     v-if="remover"
                     @click="removeItem(lanche)"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-app>
    </v-main>
  </v-container>


</template>
<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      alert: false
    }
  },
  props: {
    lanches: Array,
    selecionar: Boolean,
    remover: Boolean,
    quantidade:Boolean
  },
  computed: {
    ...mapState(['cardapioLanches', 'lanchesSelecionados']),
  },
  methods: {
    selectItem(lanche) {
      console.log(lanche)

      // Adiciona o índice diretamente ao array de lanchesSelecionados
      if (!this.lanchesSelecionados.includes(lanche)) {
        this.lanchesSelecionados.push(lanche)
        this.alert = true
        this.tempoAlerta()
      }else{
        lanche.quantidade++
        this.alert = true
        this.tempoAlerta()
      }
    },
    removeItem(lanche) {
      console.log(lanche)
      // Remove o índice diretamente do array de lanchesSelecionados
      if(lanche.quantidade !== 1 ){
        lanche.quantidade--
      }else{
        this.$store.dispatch('removeLanche', lanche.id);
      }
    },
    isSelected(index) {
      // Verifica se o índice está selecionado
      return this.lanchesSelecionados.includes(index);
    },
    tempoAlerta(){
      setTimeout(()=>{
        this.alert = false
      },2000)
    },

  },
}

</script>

<style scoped>
.fixed-alert {
  position: fixed;
  top: 5em;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2000;
  /* Garanta que esteja acima de todos os outros elementos */
}
.quantidade{
  background-color: orange;
  color:white;
  border-radius: 50%;
  font-size: 13px;
  padding: 5px;
}

</style>
