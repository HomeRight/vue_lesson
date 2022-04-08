const app = Vue.createApp({
  data: function () {
    return {
      word: "hello <em>word</em>",
      word2: "hello <em>word2</em>",
      word3: "hello word3",
      link: "https://www.google.com.tw/",
    };
  },
  methods: {
    outPutMessage: function () {
      const num = Math.random();
      if (num < 0.3) {
        return this.word;
      } else if (num < 0.6) {
        return this.word2;
      } else {
        return this.word3;
      }
    },
  },
});

app.mount("#alen");
