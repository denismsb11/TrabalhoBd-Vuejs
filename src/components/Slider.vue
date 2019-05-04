<template>
  <div class="slider">
    <ul class="slides">
      <li>
        <img src="../assets/background1.jpg" id="img-cabecalho">
        <!-- random image -->
      </li>
      <li>
        <img src="../assets/background4.jpg">
        <!-- random image -->
        <div class="caption left-align">
          <h3>Aprenda novas receitas</h3>
          <h5 class="light grey-text text-lighten-3">Aqui você está em uma sala de aula.</h5>
        </div>
      </li>
      <li>
        <img src="../assets/background5.jpg">
        <!-- random image -->
        <div class="caption right-align">
          <h3>Se torne um chefe</h3>
          <h5 class="light grey-text text-lighten-3">Compartilhe todo seu conhecimento.</h5>
        </div>
      </li>
      <li>
        <img src="../assets/background6.jpg">
        <!-- random image -->
        <div class="caption center-align">
          <h3>Experimente algo novo</h3>
          <h5 class="light grey-text text-lighten-3">Se torne o melhor dos chefes.</h5>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    $(document).ready(function() {
    $(".slider").slider({
        height: 600,
        indicators: false,
        interval: 3500,
        duration: 600
    });
    });

    $(document).ready(function() {
    $(".tabs").tabs();
    });
</script>

