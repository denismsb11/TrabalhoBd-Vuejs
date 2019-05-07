<template>
  <div>
    <div class="row">
      <div class="col s12 center">
        <h3>
          <i class="mdi-content-send brown-text"></i>
        </h3>
        <h4>Adicionar Receitas</h4>
        <hr>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <form class="col l7 s12" @submit.prevent="salvar">
          {{ receita.passos }}
          {{ receita.autor }}
          {{ receita.imgs }}
          <div class="row">
            <div class="input-field col l10 s10">
              <input id="nome-receita" type="text" class="validate" v-model="receita.nome">
              <label for="nome-receita">Nome da Receita</label>
            </div>
          </div>
          <div class="row">
            <p>
              <label class="col s3">
                <input type="radio" checked name="group1">
                <span>Entrada</span>
              </label>
              <label class="col s3">
                <input type="radio" name="group1">
                <span>Principal</span>
              </label>
              <label class="col s3">
                <input type="radio" name="group1">
                <span>Sobremesa</span>
              </label>
            </p>
          </div>
          <div class="row">
            <div class="input-field col l10 s10">
              <input
                id="passos-da-receita"
                type="text"
                class="validate"
                name="receita.passos[]"
                v-model="receita.passos"
              >
              <label for="passos-da-receita">Passos da Receita</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col l10 s10">
              <input
                id="tempo-de-preparo"
                type="number"
                class="validate"
                v-model="receita.tempo_preparo"
              >
              <label for="tempo-de-preparo">Tempo de preparo</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col l10 s10">
              <input id="quantidade" type="number" class="validate" v-model="receita.qnt_porcoes">
              <label for="quantidade">Quantidade de porções</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col l10 s10">
              <input
                id="img"
                type="text"
                class="validate"
                name="receita.imgs[]"
                v-model="receita.imgs"
              >
              <label for="img">Imagem</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col l10 s10">
              <input id="quantidade" type="number" class="validate" v-model="receita.prato">
              <label for="quantidade">Prato de comida</label>
            </div>
          </div>

          <br>
          <div class="center">
            <button class="waves-effect waves-light btn">Cadastrar</button>
          </div>
          <br>
        </form>
        <div class="col l5 s12">
          <img width="400" src="../assets/chapeu.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Receita from "../services/receitas";

export default {
  data() {
    return {
      receita: {
        nome: "sd",
        passos: "d",
        qnt_porcoes: 1,
        tempo_preparo: 2,
        imgs: "[]",
        autor: 1,
        prato: 4
      }
    };
  },
  methods: {
    salvar() {
      this.receita["imgs"] = [this.receita.imgs];
      this.receita.passos = [this.receita.passos];
      console.log(this.receita);
      Receita.salvar(this.receita).then(response => {
        alert("Salvo com sucesso");
      });
    }
  }
};
</script>

