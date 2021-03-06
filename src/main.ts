import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PortalVue from "portal-vue";
import VueI18n from "vue-i18n";

Vue.config.productionTip = false;

Vue.use(PortalVue);
Vue.use(VueI18n);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
