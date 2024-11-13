<template>
    <div class="login-container"> <!--p/ toda pagina-->
      <div class="login-box"> <!--p/ apenas o formulario-->
        <img src="/logo-pequena.jpg" alt="Icone" class="icon">
        <h1>Login</h1>
        <form @submit.prevent="login"> <!--evento acionado quando clicamos no login-->
          <input
            v-model="email"
            type="email"
            placeholder="Digite seu e-mail"
            required
          />
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'" 
            placeholder="Digite sua senha"
            required
          /> <!--se quiser true exibe, se false oculta-->
          <button type="button" @click="togglePassword">
            {{ showPassword ? 'Ocultar Senha' : 'Mostrar Senha' }}
          </button> <!--adicionei um metodo para o botao-->
          <button type="submit">Entrar</button>
          <div class="links" v-show="showLinks"> <!--controla a visibiliadade-->
            <a href="#">Esqueceu a senha?</a> <!--ADICIONAR AS TELAS-->
            <a href="#">Criar conta</a>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts"> //aqui onde define o ts
  import { defineComponent, ref } from "vue"; //exportando o vue

  //temos 4 variaveis (email,password,showP e showL) e dois metodos (login e toogleP)
  
  export default defineComponent({
    name: "Login",
    setup() {
      // Definindo variáveis/metodos

      //variaveis reativas com ref: cria um objeto reativo
      const email = ref<string>("");
      const password = ref<string>("");
      const showPassword = ref<boolean>(false);
      const showLinks = ref<boolean>(true);
  
      // Função para fazer o login
      
      const login = () => {
        if (!email.value || !password.value) { 
          alert("Por favor, preencha todos os campos.");//verica se está vazio
          return;
        }
        console.log(`E-mail: ${email.value}, Senha: ${password.value}`);
      };
  
      // Função para alternar a visibilidade da senha 

      const togglePassword = () => {
        showPassword.value = !showPassword.value;
      };
  
      return {
        email,
        password,
        showPassword,
        showLinks,
        login,
        togglePassword,
      };
    },
  });
  </script>
  
  <style scoped>

  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;

  }
  
  .login-box {
    width: 300px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border-radius: 8px;
    text-align: center
  }

  .links {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    text-decoration: none
  }

  .icon {
  width: 90px;
  height: auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

h1 {
  font-size: 25px;
  color:#cd0519;
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding-bottom: 20px;
  margin-top: 0;
}

  input {
    width: 90%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: #cd0519;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background: linear-gradient(to right, #F9D423, #e65c00); 
  }

  a:hover {
  color: #ff5722;
  text-decoration: underline; 
}
  
  </style>
  