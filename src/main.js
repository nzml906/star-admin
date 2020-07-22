import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import "@/assets/scss/style.scss";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
