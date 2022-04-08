const app = Vue.createApp({
  data() {
    return {
      issue: "",
      issue2: "",
      counter2: 100,
      samleIssue: "SAMPLE",
      formatIssue2: "",
    };
  },
  methods: {
    increase() {
      this.counter2 += 1;
    },
    decrease() {
      this.counter2 -= 1;
    },
    setIssue(e) {
      this.issue = e.target.value;
    },
    resetIssue() {
      this.issue = "";
    },
    resetIssue2() {
      this.issue2 = "";
    },
  },
  computed: {
    formatIssue() {
      console.log("this.issue=" + this.issue);
      if (this.issue === "") {
        return "";
      }
      return `[!!]${this.issue}`;
    },
  },
  watch: {
    counter2(value) {
      if (value > 110) {
        this.counter2 = 100;
      }
    },
    issue2(value, oldValue) {
      this.formatIssue2 = `從${oldValue} to ${value}`;
    },
  },
});

app.mount("#app");
