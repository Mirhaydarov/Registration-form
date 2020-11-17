/* eslint-disable import/prefer-default-export */
// Core
import Vue from 'vue';
import Vuelidate from 'vuelidate';

// Components
import App from './App.vue';

Vue.use(Vuelidate);

export const eventEmitter = new Vue();

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
