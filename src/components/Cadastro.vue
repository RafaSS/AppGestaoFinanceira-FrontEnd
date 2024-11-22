<template>
  <div class="register-container">
    <div class="register-box">
      <h2 class="title">Crie sua conta</h2>
      <form class="form" @submit.prevent="fazerCadastro">
        <input 
          v-model="nome" 
          class="input" 
          type="text" 
          placeholder="Nome completo" 
          @input="validarNome"
        />
        <p v-show="mostrarErroNome" class="error-message">O nome deve ter pelo menos 3 caracteres.</p>

        <input 
          v-model="email" 
          class="input" 
          type="email" 
          placeholder="Email" 
          @input="validarEmail"
        />
        <p v-show="mostrarErroEmail" class="error-message">Formato de email inválido.</p>

        <input 
          v-model="senha" 
          class="input" 
          type="password" 
          placeholder="Senha" 
          @input="validarSenha"
        />
        <p v-show="mostrarErroSenha" class="error-message">A senha deve ter no mínimo 6 caracteres.</p>

        <button class="form-btn" type="submit">Cadastrar</button>
      </form>
      <p class="login-label">
        Já tem uma conta? <span class="login-link" @click="navegarParaLogin">Entrar</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function navegarParaLogin() {
  router.push('/login');
}

const nome = ref('');
const email = ref('');
const senha = ref('');
const mostrarErroNome = ref(false);
const mostrarErroEmail = ref(false);
const mostrarErroSenha = ref(false);

const nomeValido = computed(() => nome.value.trim().length >= 3);
const emailValido = computed(() => /\S+@\S+\.\S+/.test(email.value));
const senhaValida = computed(() => senha.value.length >= 6);

function validarNome() {
  mostrarErroNome.value = !nomeValido.value && nome.value !== '';
}

function validarEmail() {
  mostrarErroEmail.value = !emailValido.value && email.value !== '';
}

function validarSenha() {
  mostrarErroSenha.value = !senhaValida.value && senha.value !== '';
}

function fazerCadastro() {
  if (nomeValido.value && emailValido.value && senhaValida.value) {
    alert('Cadastro realizado com sucesso!');
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
  background: linear-gradient(135deg, #6a89cc, #3c6382);
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-container {
  width: 100%;
  max-width: 320px;
  justify-content: center;
  align-items: center;
}

.register-box {
  width: 100%;
  background: #fff;
  padding: 40px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  text-align: center;
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.register-box:hover {
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
  border-color: #3c6382;
}

.error-message {
  color: rgba(201, 4, 4, 0.811);
  font-size: 12px;
  margin-top: -8px;
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

.login-label {
  font-size: 14px;
  color: #666;
}

.login-link {
  color: #3c6382;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
}

.title {
  font-size: 28px;
}
</style>
