<template>
  <div class="corpo-admin">
    <div class="row">
      <div class="col s12 center">
        <h3>
          <i class="mdi-content-send brown-text"></i>
        </h3>
        <h4 class="white-text">Chefe de Cozinha - Administrador</h4>
        <hr>
      </div>
    </div>
    <br>

    <div class="container">
      <div class="center">
        <h5 class="white-text">Opções sobre Receitas</h5>
      </div>
      <ul class="collapsible">
        <li>
          <div class="collapsible-header">
            <i class="fas fa-hamburger fa-4x"></i>Adicionar Receita
          </div>
          <div class="collapsible-body">
            <span class="white-text">Adicione a receita que você acredita ser incrível</span>
            <br>
            <br>
            <router-link class="waves-effect waves-light btn" to="/admin/addreceita">Adicionar</router-link>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="fas fa-pizza-slice fa-4x"></i>Avaliar Receita
          </div>
          <div class="collapsible-body">
            <span class="white-text">Coloque um nota para as receitas</span>
            <br>
            <br>
            <router-link class="waves-effect waves-light btn" to="/admin/avaliareceita">Avaliar</router-link>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="fas fa-drumstick-bite fa-4x"></i>Remover Receita
          </div>
          <div class="collapsible-body">
            <span class="white-text">Remova a receita</span>
            <br>
            <br>
            <router-link class="waves-effect waves-light btn" to="/admin/removereceita">Remover</router-link>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <i class="fas fa-hotdog fa-4x"></i>Atualizar Receita
          </div>
          <div class="collapsible-body">
            <span class="white-text">Atualize uma informação sobre a receita</span>
            <br>
            <br>
            <router-link class="waves-effect waves-light btn" to="/admin/atualizareceita">Atualizar</router-link>
          </div>
        </li>
      </ul>
    </div>
    <br>
    <br>
  </div>
</template>


<style scoped>
    .corpo-admin {
    background-color: #2d2d2d;
    }
</style>

<script>
    $(document).ready(function() {
    $(".collapsible").collapsible();
    });
</script>
