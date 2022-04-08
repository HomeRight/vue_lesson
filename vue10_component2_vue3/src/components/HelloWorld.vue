<template>
  <div class="hello">
    <h2>My course</h2>
    <ul>
      <li>**</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { course: { id: "POOP", name: "python" } };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
