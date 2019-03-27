import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes.js";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.use(VueRouter);
Vue.config.productionTip = false;

import heartIcon from "vue-ionicons/dist/ios-heart.vue";
import "./assets/css/vendors/bootstrap.min.css";
import "./assets/css/vendors/slick.css";
import "./assets/css/style.css";
Vue.component("heart-icon", heartIcon);

new Vue({
  router:router,
  render: h => h(App)
}).$mount("#app");
