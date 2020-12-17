import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import mock from './utils/mock'

Vue.use(BootstrapVue)
    .use(mock) // <------------------ how to avoid "ESLint: 'Mock' is defined but never used.(no-unused-vars)"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
