import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Cadastro from './pages/Cadastro.vue';
import Login from './pages/Login.vue';
import Admin from './pages/Admin.vue';
import Adminadd from './pages/Adminadd.vue';
import Adminatualiza from './pages/Adminatualiza.vue';
import Adminremove from './pages/Adminremove.vue';
import Adminavalia from './pages/Adminavalia.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home, titulo: 'Home' },
  { path: '/cadastro', component: Cadastro, titulo: 'Cadastre-se'},
  { path: '/login', component: Login, titulo: 'Login' },
  { path: '/admin', component: Admin, titulo: 'Admin' },
  { path: '/admin/addreceita', component: Adminadd },
  { path: '/admin/avaliareceita', component: Adminavalia },
  { path: '/admin/removereceita', component: Adminremove },
  { path: '/admin/atualizareceita', component: Adminatualiza },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');
