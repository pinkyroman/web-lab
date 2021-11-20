import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
