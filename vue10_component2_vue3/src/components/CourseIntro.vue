<template>
  <li>
    <h2>this current {{ current }}</h2>
    <h2>{{ id }} - {{ isCurrent }}</h2>
    <button @click="toggleCourseDetail">show detail</button>
    <button @click="toggleCurrent">set current</button>
    <br />
    <button @click="deleteCourse">Delete</button>
    <ul v-if="detailsVisible">
      <li>{{ name }}</li>
      <li>{{ duration }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  emits: {
    "toggle-current": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("oops, id is missing");
        return false;
      }
    },
    "delete-course": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("oops, id is missing");
        return false;
      }
    },
  },
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    duration: {
      type: Number,
      required: true,
      validator: function (value) {
        return parseInt(value) > 7;
      },
    },
    current: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      detailsVisible: true,
      isCurrent: this.current,
    };
  },
  methods: {
    deleteCourse() {
      this.$emit("delete-course", this.id);
    },
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleCurrent() {
      //error
      //this.current = true;
      this.isCurrent = !this.isCurrent;
      //callback 中emit事件
      this.$emit("toggle-current", this.id);
    },
  },
};
</script>

<style>
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 4px 8px rgba(0, 0, 128, 0.26);
  margin: 1rem auto;
  border-radius: 5px;
  text-align: center;
  width: 50%;
  max-width: 40rem;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #c0ffee;
  color: black;
}
</style>