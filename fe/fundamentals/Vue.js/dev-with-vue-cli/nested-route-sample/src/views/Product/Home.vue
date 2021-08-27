<template>
    <div class="product" v-if="item" key="procut">
        <h1>Product Information</h1>
        <dl class="product-table">
            <dt>Name</dt><dd>{{item.name}}</dd>
            <dt>Price</dt><dd>{{item.price}}</dd>
            <dt>Description</dt><dd>{{item.content}}</dd>
        </dl>
    </div>
    <div v-else key="loading">Loading product information ..</div>
</template>

<script>
import products from "../../api/products.js";

export default {
    props: { id: Number },
    data() {
        return {
            item: null,
        }
    },
    watch: {
        id: {
            handler() {
                products.asyncFind(this.id, item => {
                    this.item = item;
                });
            },
            immediate: true,
        }
    }
}
</script>