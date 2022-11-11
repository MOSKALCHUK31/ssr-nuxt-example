<template>
    <div>
        <h1>Product page</h1>
        <br><br>
        <hr>
        <br><br>
        <div>
            <div>ID = {{ product.slug }}</div>
            <div>TITLE = {{ product.title }}</div>
            <div>DESCRIPTION = {{ product.description }}</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    async fetch(context) {
        await context.store.dispatch('products/SET_PRODUCT_ACTION', context.route.params.id)
    },
    computed: {
        ...mapState({
            product: state => state.products.product
        })
    }
}
</script>
