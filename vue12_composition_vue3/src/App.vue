<template>
  <h3>{{ userName }}</h3>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const userNameRef = ref("Alen Su");
    setTimeout(function () {
      userNameRef.value = "alen suu";
    }, 2000);
    return { userName: userNameRef };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
