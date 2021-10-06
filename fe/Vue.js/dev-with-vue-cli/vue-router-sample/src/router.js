import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./views/Home.vue";
import Product from "./views/Product.vue";
import ProductList from "./views/ProductList.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            name: "home",
            path: "/",
            component: Home,
        },
        {
            name: "product-list",
            path: "/products",
            component: ProductList,
        },
        {
            name: "product",
            path: "/products/:id", // parameter defined with a regular expression
            component: Product,
            props: route => ({ id: Number(route.params.id)}),
        }
    ]
});

export default router;



