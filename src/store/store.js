// src/store.js
import {createStore} from 'vuex'

export default createStore({
  state: {
    cardapioLanches: [
      {
        id: 1,
        nome: "X-tudo",
        ingredientes: "pão,alface,tomate,2 hamburguer,cebola,ketchup,maionese",
        preco: "25.90",
        img: "https://img.freepik.com/fotos-gratis/cheeseburguer-gourmet-com-carne-grelhada-tomate-cebola-e-pao-rustico-gerado-por-ia_188544-56059.jpg?w=900&t=st=1721856210~exp=1721856810~hmac=7e6ba82a5ebbf91b06232285dcb3047e8938e2d82afd9f4222bd99a95bbc8c54",
        quantidade: 1
      },
      {
        id: 2,
        nome: "X-file",
        ingredientes: "pão,alface,tomate,file de picanha,cebola,ketchup,maionese",
        preco: "25.90",
        img: "https://img.freepik.com/fotos-premium/hamburguer-de-queijo-de-bacon-perfeito-com-cebola-de-tomate-de-carne-e-folhas-de-alface-fresca-fundo-escuro-ai_108146-4779.jpg?w=740",
        quantidade: 1
      },
      {
        id: 3,
        nome: "X-salada simples",
        ingredientes: "pão,alface,tomate,2 hamburguer,cebola,ketchup,maionese",
        preco: "18.90",
        img: "https://img.freepik.com/fotos-gratis/hamburguer-grande-e-saboroso_144627-16484.jpg?w=900&t=st=1721856296~exp=1721856896~hmac=574fefb3e7f36bc27df261bc58036983fd124400c762c585f52851487ec082ad",
        quantidade: 1
      },
      {
        id: 4,
        nome: "X-Combo",
        ingredientes: "pão,alface,tomate,2 hamburguer,cebola,ketchup,maionese",
        preco: "44.00",
        img: "https://img.freepik.com/fotos-gratis/hamburguer-de-carne-grelhada-com-batatas-fritas-queijo-e-tomate-generative-ai_188544-8466.jpg?w=900&t=st=1721856327~exp=1721856927~hmac=ebd8935c06ba822451519f44696728981d26efa59722b0177a77954d7648966f",
        quantidade: 1
      },
      {
        id: 5,
        nome: "Hot-dogão",
        ingredientes: "pão de hot, ketchup, salsicha, mostarda, batata",
        preco: "21.90",
        img: "https://as1.ftcdn.net/v2/jpg/07/21/34/36/1000_F_721343603_SptBXOnZVmFa4vlElE75aQF5ZdFHX2GW.jpg",
        quantidade: 0
      },
      {
        id: 6,
        nome: "X-Chedar",
        ingredientes: "pao,bacon,chedar-Extra,tomate, picles, frango",
        preco: "29.90",
        img: "https://img.freepik.com/fotos-gratis/cheeseburger-com-alface-e-tomate_140725-111.jpg?w=900&t=st=1721856511~exp=1721857111~hmac=8747b337e636d65219ae7d4147ee8f862037fa8eab7df5b6df03ed3549905ba5",
        quantidade: 1
      },
      {
        id: 7,
        nome: "Enrroladinho de Lanche",
        ingredientes: "panqueca,tomate,Carne,cebola,ketchup,pimentão",
        preco: "19.99",
        img: "https://img.freepik.com/fotos-premium/beef-seekh-kabab-shawarma-frango-afghani-kabab-wraps-queijo-derretido-paneer-wrap-ovo-frango-com-queijo-hamburguer-wrap-queijo-derretido-frango-wrap-fatias-e-batatas-fritas-com-molho-de-salada-e-molho-isolado-fastfood_689047-3224.jpg?w=900",
        quantidade: 1
      },
      {
        id: 8,
        nome: "X-Morte",
        ingredientes: "pão,batata,bacon,calabresa,picles",
        preco: "22.00",
        img: "https://img.freepik.com/fotos-gratis/fatias-de-doner-de-cordeiro-com-batatas-fritas-pepino-em-conserva-tomate-em-pao-pita_140725-10569.jpg?t=st=1721856609~exp=1721860209~hmac=5341043db3524153298d32cc98e8f641ca4ebb1856090763bc541baef90f0a49&w=900",
        quantidade: 1
      },
      {
        id: 9,
        nome: "Pira de Batata + Lanche ",
        ingredientes: "pão,alface,tomate,hamburguer,cebola,ketchup,maionese,pepino",
        preco: "29.20",
        img: "https://img.freepik.com/fotos-gratis/hamburguer-de-carne-servido-com-batata-frita-maionese-e-ketchup_140725-2469.jpg?t=st=1721856638~exp=1721860238~hmac=73a1ac3cc8629154079a2a367c5f6e363a55ff66beac9d8dfe985dc92535e0f2&w=900",
        quantidade: 1
      },
      {
        id: 10,
        nome: "Combo X-Salada Duplo",
        ingredientes: "pão,alface,tomate,2 hamburguer,cebola,ketchup,maionese",
        preco: "42.90",
        img: "https://img.freepik.com/fotos-gratis/hamburgueres-de-frango-com-queijo-e-salada-verde-na-mesa-de-madeira-e-sanduiches-fast-food_140725-25956.jpg?t=st=1721856668~exp=1721860268~hmac=6e6967767e8c8eccd472048f86d620ff6cc2bc084bc57fd11dfedf516bd8607f&w=900",
        quantidade: 1
      },
    ],
    lanchesSelecionados: [ ]
  },
  mutations:{
    REMOVE_LANCHE(state, lancheId) {
      state.lanchesSelecionados = state.lanchesSelecionados.filter(lanche => lanche.id !== lancheId);
    }
  },
  actions: {
    removeLanche({ commit }, lancheId) {
      commit('REMOVE_LANCHE', lancheId);
    }
  }
})
