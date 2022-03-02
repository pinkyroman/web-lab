import Vue from 'vue'
import VueRouter from 'vue-router'

import ProductList from './views/ProductList.vue'
import Product from './views/Product.vue'

import ProductHome from './views/Product/Home.vue'
import ProductReview from './views/Product/Review.vue'
import ProductReviewDetail from './views/Product/ReviewDetail.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/product",
            component: ProductList,
        },
        {
            path: "/product/:id",
            component: Product,
            props: route => ({ id: Number(route.params.id) }),
            children: [
                {
                    name: "product-home",
                    path: '',
                    component: ProductHome,
                    props: route => ({ id: Number(route.params.id) }),
                },
                {
                    name: "product-review",
                    path: "review",
                    component: ProductReview,
                },
                {
                    name: "review-detail",
                    path: "review/:rid",
                    component: ProductReviewDetail,
                },
            ],
        },
    ]
});

export default router;
