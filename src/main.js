import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import BaseButton from "./components/BaseButton";

// createApp(App)
// 	.use(router)
// 	.mount("#app");
const app = createApp(App);
app.component("base-button", BaseButton);
app.use(router).mount("#app");
