import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import routes from './routes.js';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history'
})

Vue.use(VueRouter)


Vue.config.productionTip = false;

import heartIcon from 'vue-ionicons/dist/ios-heart.vue'
Vue.component('heart-icon', heartIcon)

import './assets/css/vendors/bootstrap.min.css'
import './assets/css/vendors/slick.css'
import './assets/css/style.css'
// import 'https://apis.google.com/js/api.js'


new Vue({
  router:router,
  render: h => h(App)
}).$mount("#app");
