import Vue from 'vue';
import VueRouter from 'vue-router';

import MainPage from '@/components/MainPage.vue';
import SubPage from '@/components/SubPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/', name: 'home', component: MainPage,
        },
        {
            path: '/main', name: 'main-page', component: MainPage,
        },
        {
            path: '/sub', name: 'sub-page', component: SubPage,
        },
    ],
});
