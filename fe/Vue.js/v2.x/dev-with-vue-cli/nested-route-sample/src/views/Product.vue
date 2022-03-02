<template>
    <div class="product">
        <h1>{{detail.name}}</h1>
        <nav class="nav">
            <router-link :to="{ name: 'product-home' }">Product Detail</router-link>
            <router-link :to="{ name: 'product-review' }">Review</router-link>
        </nav>
        <!-- here comes the selected child -->
        <transition name="view">            
            <router-view/>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: { id: Number },
    computed: mapGetters("product", [ "detail" ]),
    watch: {
        id: {
            handler() {
                this.$store.dispatch("product/load", this.id);
            },
            immediate: true,
        }
    },
    beforeDestroy() {
        this.$store.dispatch("product/destroy");
    },
}
</script>
