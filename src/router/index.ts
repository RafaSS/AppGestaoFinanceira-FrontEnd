import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue'; // Tela de Login
import Cadastro from '../components/Cadastro.vue'; // Tela de Cadastro

const routes = [
  { path: '/', redirect: '/login' }, // Redireciona o caminho "/" para "/login"
  { path: '/login', name: 'Login', component: Login },
  { path: '/cadastro', name: 'Cadastro', component: Cadastro },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
