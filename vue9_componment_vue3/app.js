const app = Vue.createApp({
  data() {
    return {
      courses: [
        { id: "POOP", name: "python", period: 35 },
        { id: "JAVA", name: "java", period: 35 },
      ],
    };
  },
  methods: {},
});

app.component("course-content", {
  template: `
    <li>
        <h2>{{course.id}}</h2>
        <button @click="toggleCourseDetail">show detail</button>
        <ul v-if="detailsVisible">
            <li>{{course.name}}</li>
            <li>{{course.period}}</li>
        </ul>
    </li>
    `,
  data() {
    return {
      course: { id: "POOP", name: "python", period: 35 },
      detailsVisible: true,
    };
  },
  methods: {
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});
app.mount("#app");
