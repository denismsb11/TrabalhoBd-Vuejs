<template>
  <div>
    <Navbar/>
    <Cadastrar/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Cadastrar from "../components/Cadastrar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Cadastrar,
    Footer
  }
};
</script>
