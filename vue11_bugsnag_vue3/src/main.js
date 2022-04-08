import { createApp } from "vue";
import App from "./App.vue";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginVue from "@bugsnag/plugin-vue";
Bugsnag.start({
  apiKey: "314aa77f3dd5b7b6ae12b2c18bbadd7d",
  plugins: [new BugsnagPluginVue()],
});
const bugsnagVue = Bugsnag.getPlugin("vue");
createApp(App).use(bugsnagVue).mount("#app");
