<template>
<div>
  <nav role="navigation">
    <div class="nav-wrapper container">
      <router-link to="/" class="brand-logo">CookChef</router-link>
      <ul class="right hide-on-med-and-down">
        <li><router-link to="/cadastro">Cadastre-se</router-link></li>
        <li><router-link to="/login">Logar</router-link></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li><router-link to="/cadastro">Cadastre-se</router-link></li>
        <li><router-link to="/login">Logar</router-link></li>
      </ul>
      <router-link href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></router-link>
    </div>
  </nav>
</div>
</template>

