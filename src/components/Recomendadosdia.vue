<template>
  <div>
    <section>
      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 center">
              <h3>
                <i class="mdi-content-send brown-text"></i>
              </h3>
              <h4>Recomendados do dia</h4>
              <hr>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="section">
          <div class="row">
            <ul>
              <li v-for="receita of receitas" :key="receita.id">
                <div class="col s12 m6 l4 center">
                  <h3>
                    <i class="mdi-content-send brown-text"></i>
                  </h3>
                  <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" :src="receita.foto">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">{{ receita.tipo }}</span>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">
                        {{ receita.titulo }}
                        <i class="material-icons right">close</i>
                      </span>
                      <p>{{ receita.descricao }}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div class="parallax-container valign-wrapper">
      <div class="section no-pad-bot">
        <div class="container">
          <div class="row center">
            <h5
              class="header col s12 light"
            >Não perca a oportunidade de se torna um grnade chefe de cozinha.</h5>
          </div>
        </div>
      </div>
      <div class="parallax">
        <img src="../assets/background3.jpg" alt="Unsplashed background img 3">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      receitas: [
        {
          titulo: "Carne Frita",
          ingredientes: "feijão, arroz, batata",
          foto: '../assets/carne.jpg',
          tipo: "Entrada",
          nota: "5",
          descricao: "A carne deve ser primeiramente bem preparada...",
          tipoAutor: "Amador",
          id: 1
        },
        {
          titulo: "Feijoada",
          ingredientes: "feijão, arroz, batata",
          foto: '../assets/escondidinho.jpg',
          tipo: "Principal",
          nota: "4",
          descricao: "A feijoada deve ser primeiramente bem preparada...",
          tipoAutor: "Estudante",
          id: 2
        },
        {
          titulo: "Bananada",
          ingredientes: "feijão, arroz, batata",
          foto: '../assets/carne.jpg',
          tipo: "Sobremesa",
          nota: "2",
          descricao: "A bananada deve ser primeiramente bem preparada...",
          tipoAutor: "Profissional",
          id: 3
        }
      ]
    };
  }
};
</script>
