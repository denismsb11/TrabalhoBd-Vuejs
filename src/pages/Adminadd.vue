<template>
  <div>
    <Navbaradmin/>
    <Addreceita/>
    <Footer/>
  </div>
</template>

<script>
import Navbaradmin from "../components/Navbaradmin.vue";
import Addreceita from "../components/Addreceita.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbaradmin,
    Addreceita,
    Footer
  }
};
</script>