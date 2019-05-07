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
                <div class="col s12 m6 l4 center card-receita">
                  <h3>
                    <i class="mdi-content-send brown-text"></i>
                  </h3>
                  <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" :src="receita.imgs">
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">{{ receita.nome }}</span>
                      <p class="left"><img class="icon-info-time" src="../assets/alarm-clock.png" alt="">:     {{ receita.tempo_preparo }}</p>
                      <p class="left"><img class="icon-info-porcao" src="../assets/restaurant.png" alt="">:     {{ receita.qnt_porcoes }}</p>
                      <br>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">
                        {{ receita.nome }}
                        <i class="material-icons right">close</i>
                      </span>
                      <p>Passos: {{ receita.passos }}</p>
                      <p>Tempo de Preparo: {{ receita.tempo_preparo }}</p>
                      <p>Quantidade de Porções: {{ receita.qnt_porcoes }}</p>
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
import Receita from '../services/receitas';

export default {

  data() {
    return {
      receitas: []
    };
  },
  mounted() {
    Receita.listar().then(response => {
      console.log(response.data);
      this.receitas = response.data;
    })
  }
};
</script>

<style>
  #card-receita {
    width: 1000px;
    height: 1200px;
  }
  .icon-info-time {
    width: 30px;
    height: 30px;
  }
    .icon-info-porcao {
    width: 34px;
    height: 34px;
  }

</style>
