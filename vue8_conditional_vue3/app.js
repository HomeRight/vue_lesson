const app = Vue.createApp({
  data() {
    return {
      courses: [],
      courseContent: "",
      poops: {
        name: "POOP",
        location: ["Taipei", "Taina"],
        prop: { name: "name", age: 13 },
      },
    };
  },
  computed: {},
  methods: {
    addCourse() {
      this.courses.push(this.courseContent);
    },
    removeCourse(i) {
      this.courses.splice(i, 1);
    },
  },
});

app.mount("#app");
