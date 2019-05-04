<template>
  <div>
    <Navbaradmin/>
    <Removereceita/>
    <Footer/>
  </div>
</template>

<script>
import Navbaradmin from "../components/Navbaradmin.vue";
import Removereceita from "../components/Removereceita.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbaradmin,
    Removereceita,
    Footer
  }
};
</script>