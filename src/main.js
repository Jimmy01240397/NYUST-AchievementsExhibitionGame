import { createApp } from "vue";
import App from "./App.vue";
import vueCookies from "vue3-cookies";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App).use(vueCookies).use(router).use(vuetify).mount("#app");
