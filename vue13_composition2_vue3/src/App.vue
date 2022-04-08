<template>
  <section>
    <h3>{{ course }}</h3>
    <h3>{{ price }}</h3>
    <button @click="extraDuration">bad way</button>
    <h4>{{ courseDisplayName }}</h4>
  </section>
</template>

<script>
import { computed, reactive, ref } from "vue";

export default {
  name: "App",
  setup() {
    const course = reactive({ name: "poop", duration: 35 });
    const price = ref(24000);
    const hello = ref("hello");
    const vue = ref("vue");
    const courseDisplayName = computed(function () {
      return hello.value + " " + vue.value;
    });
    function extraDuration() {
      course.duration += 7;
      price.value += 2000;
    }

    return { course: course, price, extraDuration, courseDisplayName };
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
