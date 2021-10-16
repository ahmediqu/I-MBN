import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import store from "./store/index";
import './components/component';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/solaimanlipi.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import router from './router/index';

window.axios = require('axios');
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false
Vue.use(Vuex);


new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')


