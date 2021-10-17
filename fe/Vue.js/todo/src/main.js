import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
    vuetify,
    store: store,
    render: (h) => h(App),
}).$mount("#app");
