<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />

  <new-course @add-course="addCourse"></new-course>
  <course-intro
    v-for="course in courses"
    :key="course.id"
    :id="course.id"
    :name="course.name"
    :duration="course.duration"
    :current="course.current"
    @toggle-current="toggleCurrentState"
    @delete-course="deleteCourse"
  ></course-intro>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      courses: [
        { id: "POOP", name: "python", duration: 35, current: false },
        { id: "JAVA123", name: "java", duration: 35, current: true },
      ],
    };
  },
  methods: {
    deleteCourse(id) {
      this.courses = this.courses.filter((course) => course.id != id);
    },
    addCourse(id, name, duration) {
      const course = { id: id, name: name, duration: duration, current: false };
      this.courses.push(course);
    },
    toggleCurrentState(id) {
      console.log(`toggle current`);
      const course = this.courses.find((course) => course.id === id);
      course.current = !course.current;
    },
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

#app li,
#app form {
  box-shadow: 0 4px 8px rgba(0, 0, 128, 0.26);
  margin: 1rem auto;
  border-radius: 5px;
  text-align: center;
  width: 50%;
  max-width: 40rem;
}
</style>
