<template>
    <div class="forgot-password-container">
      <div class="forgot-password-box">
        <h2 class="title">Esqueci a Senha</h2>
        <p class="description">Insira seu email para redefinir sua senha.</p>
        <form @submit.prevent="enviarEmailRecuperacao">
          <input v-model="email" type="email" placeholder="Email" class="input" />
          <p v-if="mostrarErroEmail" class="error-message">Formato de email inválido.</p>
          <button type="submit" class="form-btn">Enviar</button>
        </form>
        <p class="login-label">Lembrou sua senha? <span @click="navegarParaLogin" class="login-link">Entrar</span></p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const email = ref('');
  const mostrarErroEmail = ref(false);
  
  const validarEmail = () => (mostrarErroEmail.value = !/\S+@\S+\.\S+/.test(email.value));
  const enviarEmailRecuperacao = () => {
    validarEmail();
    if (!mostrarErroEmail.value) alert(`Um email foi enviado para ${email.value}`);
  };
  const navegarParaLogin = () => router.push('/login');
  </script>
  
  <style scoped>
  body, .forgot-password-container {
    display: flex; justify-content: center; align-items: center; margin: 0; font-family: 'Roboto', sans-serif;
  }
  .forgot-password-box {
    background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); text-align: center;
  }
  .title { font-size: 24px; color: #333; margin-bottom: 10px; }
  .description { color: #666; font-size: 14px; margin-bottom: 20px; }
  .input { padding: 10px; width: 100%; border: 1px solid #ccc; border-radius: 5px; font-size: 14px; margin-bottom: 10px; }
  .input:focus { border-color:#0e1e30; }
  .error-message { color: red; font-size: 12px; }
  .form-btn { padding: 10px 20px; background:#0e1e30;; color: white; border: none; border-radius: 5px; cursor: pointer; }
  .form-btn:hover { background: #3a8d99; }
  .login-label { font-size: 14px; color: #666; }
  .login-link { color: #0e1e30; cursor: pointer; font-weight: bold; text-decoration: underline; }
  </style>
  