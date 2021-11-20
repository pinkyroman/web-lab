import Vue from 'vue';
import Router from 'vue-router';

import MainPage from '@/components/MainPage';
import SubPage from '@/components/SubPage';

Vue.use(Router);

export default new Router({
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
