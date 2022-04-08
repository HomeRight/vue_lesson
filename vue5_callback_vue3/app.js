const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      toDo: "",
      currentArgent: "",
      checkArgent: "",
      num: 888,
    };
  },
  methods: {
    increase3(step) {
      this.num += step;
    },
    decrease3(step) {
      this.num -= step;
    },
    setArgent(event) {
      this.currentArgent = event.target.value;
    },
    submitArgent() {
      this.checkArgent = this.currentArgent;
    },
    submitForm() {
      alert("already submitted");
    },
    submitForm2(event) {
      event.preventDefault();
      alert("already submit form2");
    },
    increase1() {
      this.counter += 1;
    },
    decrease1() {
      this.counter -= 1;
    },
    increase2(step) {
      this.counter += step;
    },
    decrease2(step) {
      this.counter -= step;
    },
    setToDo(event, greeting) {
      this.toDo = `${greeting} ${event.target.value}`;
    },
  },
});

app.mount("#app");
