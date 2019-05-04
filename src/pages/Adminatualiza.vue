<template>
  <div>
    <Navbaradmin/>
    <Avaliareceita/>
    <Footer/>
  </div>
</template>

<script>
import Navbaradmin from "../components/Navbaradmin.vue";
import Avaliareceita from "../components/Avaliareceita.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbaradmin,
    Avaliareceita,
    Footer
  }
};
</script>