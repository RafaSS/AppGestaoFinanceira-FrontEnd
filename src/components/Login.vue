<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="title">Bem-vindo de volta</h2>
      <form class="form" @submit.prevent="fazerLogin">
        <input v-model="email" class="input" type="email" placeholder="Email" />
        <p v-show="!emailValido" class="error-message">Formato de email inválido.</p>

        <input v-model="senha" class="input" type="password" placeholder="Senha" />
        <p v-show="senha.length < 6" class="error-message">A senha deve ter no mínimo 6 caracteres.</p>

        <p class="page-link">Esqueceu a senha?</p>

        <button class="form-btn" type="submit">Entrar</button>
      </form>

      <p class="sign-up-label">
        Não tem uma conta? <span class="sign-up-link">Cadastre-se</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const email = ref('');
const senha = ref('');

const emailValido = computed(() => /\S+@\S+\.\S+/.test(email.value));

function fazerLogin() {
  if (emailValido.value && senha.value.length >= 6) {
    alert('Login realizado com sucesso!');
  } else {
    alert('Preencha os campos corretamente.');
  }
}
</script>

<style scoped>

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #3a8d99, #0e1e30);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  width: 100%;
  max-width: 300px;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 100%;
  background: #fff;
  padding: 40px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  text-align: center;
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.login-box:hover {
  transform: scale(1);
}

.title {
  color: #333;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input {
  padding: 12px 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  color: #333;
  outline: none;
  transition: border-color 0.3s;
}

.input:focus {
  border-color: #0e1e30;
}

.error-message {
  color: rgba(201, 4, 4, 0.811);
  font-size: 12px;
  margin-top: -8px;
}

.page-link {
  text-align: end;
  color: #0e1e30;
  text-decoration: underline;
  cursor: pointer;
  font-size: 13px;
}

.form-btn {
  padding: 12px 20px;
  background-color: #0e1e30;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-btn:hover {
  background-color: #3a8d99;
}

.form-btn:active {
  box-shadow: none;
}

.sign-up-label {
  font-size: 14px;
  color: #666;
}

.sign-up-link {
  color: #0e1e30;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
}

  .title {
    font-size: 28px;
  }

</style>
