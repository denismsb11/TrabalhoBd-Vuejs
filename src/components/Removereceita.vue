<template>
  <div>
    <div class="row">
      <div class="col s12 center">
        <h3>
          <i class="mdi-content-send brown-text"></i>
        </h3>
        <h4>Remover Receitas</h4>
        <hr>
      </div>
    </div>

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
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">
                        {{ receita.nome }}
                        <i class="material-icons right">close</i>
                      </span>
                      <p>Passos: {{ receita.passos }}</p>
                      <p>Tempo de Preparo: {{ receita.tempo_preparo }}</p>
                      <p>Quantidade de Porções: {{ receita.qnt_porcoes }}</p>
                      <form action>
                        <div class="center">
                          <button class="waves-effect waves-light btn">Remover</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Receita from "../services/receitas";

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
    });
  },
  methods: {
      
  }
};
</script>

<style>
#card-receita {
  width: 1000px;
  height: 1200px;
}
</style>