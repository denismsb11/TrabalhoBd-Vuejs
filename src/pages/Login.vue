<template>
  <div>
    <Navbar/>
    <Logindados/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Logindados from "../components/Logindados.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Logindados,
    Footer
  }
};
</script>