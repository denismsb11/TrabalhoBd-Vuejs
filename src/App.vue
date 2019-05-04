<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import Cadastro from './pages/Cadastro.vue'

export default {
  name: 'app',
  components: {
    Home,
    Cadastro
  }
}
</script>

