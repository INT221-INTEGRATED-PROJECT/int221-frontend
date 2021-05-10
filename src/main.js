import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import BaseButton from "./components/BaseButton";
import axios from "axios";
import VueAxios from "vue-axios";
// Vue.use(VueAxios,axios);
// const app = createApp(App);
// app.component("base-button", BaseButton);
// app.use(VueAxios, axios);
// app.use(Sto)
// app.use(router).mount("#app");

createApp(App)
	.component("base-button", BaseButton)
	.use(router)
	.use(VueAxios, axios)
	.mount("#app");
