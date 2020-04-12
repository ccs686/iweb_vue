import Vue from "vue";
import App from "./App.vue";

import animated from "animate.css";
Vue.use(animated);

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { axios_instance } from "./util/axios";
Vue.prototype.$axios = axios_instance;

import global_config from "./util/global";
Vue.prototype.$global = global_config;

import qs from "qs";
Vue.prototype.$qs = qs;

//是否为线上环境
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
