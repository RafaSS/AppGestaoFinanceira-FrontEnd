import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue'; // Tela de Login
import Cadastro from '../components/Cadastro.vue'; // Tela de Cadastro
import Senha from '../components/Senha.vue'; // Tela de Esqueci a Senha

const routes = [
  { path: '/', redirect: '/login' }, 
  { path: '/login', name: 'Login', component: Login },
  { path: '/cadastro', name: 'Cadastro', component: Cadastro },
  { path: '/senha', name: 'Senha', component: Senha }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
