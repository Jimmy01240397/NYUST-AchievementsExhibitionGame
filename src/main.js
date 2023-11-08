import { createApp } from "vue";
import App from "./App.vue";
import vueCookies from "vue3-cookies";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

const app = createApp(App);
app.use(vueCookies, {expireTimes: "-1"}).use(router).use(vuetify).mount("#app");
export { app };
