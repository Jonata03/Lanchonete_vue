<template>
  <v-container class="pt-16">
    <v-app class="mt-16">
      <p>De um nome para o seu lanche:</p>
      <v-text-field
        label="Nome"
        v-model="nome"
      ></v-text-field>
      <p>Pão</p>
      <v-select
        chips
        label="Pão"
        :items="paes"
        item-title="text"
        item-value="preco"
        v-model="paoSelecionado"
        :hint=" `Total: ${paoSelecionado} R$`"
        persistent-hint
      ></v-select>

      <p>Saladas</p>
      <v-select
        chips
        label="Saladas"
        :items="saladas"
        item-title="text"
        item-value="preco"
        v-model="saladasSelecionadas"
        :hint=" `Total: ${totalSaladas} R$`"
        persistent-hint
        multiple
      >
      </v-select>
      <p>Carnes</p>
      <v-select
        chips
        label="Carnes"
        :items="carnes"
        item-title="text"
        item-value="preco"
        v-model="carnesSelecionadas"
        :hint=" `Total: ${totalPrecoCarne} R$`"
        persistent-hint
        multiple
      ></v-select>

      <p>Complemento</p>
      <v-select
        chips
        label="Complemento"
        :items="complementos"
        item-title="text"
        item-value="preco"
        v-model="complementosSelecionados"
        :hint=" `Total: ${totalPrecoComplementos} R$`"
        persistent-hint
        multiple
      ></v-select>
      <v-card>
        <v-card-title>Total:</v-card-title>
        <v-card-text>R$: {{ total }}</v-card-text>
        <v-card-actions>
          <v-btn class="border" @click="criaPedido">Proximo</v-btn>
        </v-card-actions>
      </v-card>
    </v-app>
  </v-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      nome: '',
      paes: [
        {text: 'Francês', preco: 3},
        {text: 'Americano (hotdog)', preco: 5},
        {text: 'Lanche', preco: 4}
      ],
      saladas: [
        {text: 'Alface', preco: 1.00},
        {text: 'Tomate', preco: 2.00},
        {text: 'Cebola', preco: 1.50},
      ],
      carnes: [
        {text: 'Frango', preco: 5.00},
        {text: 'Carne Bovina', preco: 7.00},
        {text: 'Carne Suína', preco: 6.00},
      ],
      complementos: [
        {text: 'Queijo', preco: 2.00},
        {text: 'Presunto', preco: 2.50},
        {text: 'Ovo', preco: 1.50},
      ],
      paoSelecionado: [],
      saladasSelecionadas: [],
      carnesSelecionadas: [],
      complementosSelecionados: [],
      pedido: []

    };
  },
  computed: {
    ...mapState(['lanchesSelecionados']),
    totalSaladas() {
      let totalSaladas = 0
      for (let i of this.saladasSelecionadas) {
        totalSaladas += i
      }
      return totalSaladas
    },
    totalPrecoCarne() {
      let total = 0
      for (let i of this.carnesSelecionadas) {
        total += i
      }
      return total
    },
    totalPrecoComplementos() {
      let total = 0
      for (let i of this.complementosSelecionados) {
        total += i
      }
      return total
    },
    total() {
      let totalCarne = this.totalPrecoCarne
      let totalComplemento = this.totalPrecoComplementos
      let totalSaladas = this.totalSaladas
      let totalPao = this.paoSelecionado
      return totalSaladas + totalCarne + totalComplemento + totalPao
    }
  },
  methods: {
    criaPedido() {
      const nome = this.nome;
      const pao = this.paes.find(p => p.preco === this.paoSelecionado);
      const saladas = this.saladasSelecionadas.map(preco => this.saladas.find(s => s.preco === preco).text);
      const carnes = this.carnesSelecionadas.map(preco => this.carnes.find(c => c.preco === preco).text);
      const complementos = this.complementosSelecionados.map(preco => this.complementos.find(co => co.preco === preco).text);

      const id = Date.now(); // Usando timestamp como ID simples
      const precoTotal = this.total;

      const pedido = {
        id,
        nome,
        ingredientes: [...saladas, ...carnes, ...complementos, pao].join(", "),
        preco: precoTotal,
        quantidade: 1
      };

      this.pedido = pedido
      this.selectItem(this.pedido)
      console.log(this.pedido);
      console.log(this.lanchesSelecionados)
    },
    selectItem(lanche) {
      console.log(lanche)
      this.lanchesSelecionados.push(lanche)
      // this.alert = true
      // this.tempoAlerta()
    }
  }
};
</script>

<style scoped>
</style>
