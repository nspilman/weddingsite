import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import heartIcon from 'vue-ionicons/dist/ios-heart.vue'
Vue.component('heart-icon', heartIcon)

import './assets/css/vendors/bootstrap.min.css'
import './assets/css/vendors/slick.css'
import './assets/css/style.css'
// import 'https://apis.google.com/js/api.js'

new Vue({
  render: h => h(App)
}).$mount("#app");
