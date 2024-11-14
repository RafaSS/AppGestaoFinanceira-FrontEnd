<template>
  <div id="app">
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "./components/Login.vue";

export default defineComponent({
  name: "App",
  components: {
    Login,
  },
});
</script>

<style scoped>
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
}
</style>
