<template>
  <div>
    <Navbar/>
    <Slider/>
    <Quemsomos/>
    <Recomendadosdia/>
    <Listareceitasmin/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import Slider from "./../components/Slider.vue";
import Quemsomos from "./../components/Quemsomos.vue";
import Recomendadosdia from "./../components/Recomendadosdia.vue";
import Listareceitasmin from "./../components/Listareceitasmin.vue";
import Footer from "./../components/Footer.vue";

export default {
  components: {
    Navbar,
    Slider,
    Quemsomos,
    Recomendadosdia,
    Listareceitasmin,
    Footer
  }
};
</script>
