import Vue from 'vue';
import VueRouter from 'vue-router';
import test from '../components/test.vue';
import test1 from '../components/test1.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/test',
            component: test,
        },
        {
            path: '/test1',
            component: test1,
        }
    ]
});