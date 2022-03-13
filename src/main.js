import Vue from 'vue';
import Vuelidate from 'vuelidate';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Clipboard from 'clipboard';
import App from './App.vue';
import router from './router';
import store from './store';
import SideBar from './component/SideBar.vue';

import './assets/scss/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.prototype.Clipboard = Clipboard;

Vue.component('sideBar', SideBar);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(Vuelidate);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  SideBar,
  render: (h) => h(App),
}).$mount('#app');
