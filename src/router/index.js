// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home/Home.vue";
import Montagem from "@/pages/montar/Montagem.vue"
import Pagamento from "@/pages/areaPagamento/Pagamento.vue"
import Pedidos from "@/pages/pedidos/Pedidos.vue";
import PaginaCardapio from "@/pages/cardapio/view/PaginaCardapio.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cardapio',
    name: 'Cardapio',
    component: PaginaCardapio
  },
  {
    path:'/montagem',
    name:'Montagem',
    component: Montagem
  },
  {
    path:'/pagamento',
    name:'Pagamento',
    component: Pagamento
  },
  {
    path:'/pedidos',
    name:'Pedidos',
    component: Pedidos
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
