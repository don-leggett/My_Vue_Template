import Vue from "vue";
import App from "./App.vue";
//import { store } from './store'
//import router from 'vue-router';
import Axios from "axios";
import Moment from "moment";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//Vue.use(router);
Vue.use(Axios);
Vue.use(Moment);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
