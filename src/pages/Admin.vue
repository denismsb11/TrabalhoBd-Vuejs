<template>
  <div>
    <Navbaradmin/>
    <Administrando/>
    <Footer/>
  </div>
</template>

<script>
import Navbaradmin from "../components/Navbaradmin.vue";
import Administrando from "../components/Administrando.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbaradmin,
    Administrando,
    Footer
  }
};
</script>

