import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import "@/styles/styles.scss";
import "vuesax/dist/vuesax.css";

import TheHeader from "@/components/TheHeader";
import MainPage from "@/pages/MainPage";

Vue.config.productionTip = false;
Vue.component("TheHeader", TheHeader);
Vue.component("MainPage", MainPage);
Vue.use(Vuesax);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
