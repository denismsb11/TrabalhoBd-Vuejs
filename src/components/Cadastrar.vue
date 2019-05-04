<template>
  <div>
    <div class="row">
      <div class="col s12 center">
        <h3>
          <i class="mdi-content-send brown-text"></i>
        </h3>
        <h4>Cadastre-se</h4>
        <hr>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id="nome" type="text" class="validate">
              <label for="nome">Nome</label>
            </div>
            <div class="input-field col s6">
              <input id="sobrenome" type="text" class="validate">
              <label for="sobrenome">Sobrenome</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6 l12">
              <input type="text" class="datepicker validate" placeholder="Data de Nascimento">
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 validate">
              <select>
                <option value disabled selected>Tipo de Autor</option>
                <option value="1">Amador</option>
                <option value="2">Estudante</option>
                <option value="3">Profissional</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate">
              <label for="password">Senha</label>
            </div>
          </div>
        </form>
        <div class="center">
          <button class="waves-effect waves-light btn">Cadastrar</button>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>
