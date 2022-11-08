<template>
    <div>
        <h1>Category component</h1>
        <br><br>
        <hr>
        <br><br>
        <div>
            <div>ID = {{ category.id }}</div>
            <div>TITLE = {{ category.title.ru }}</div>
            <div>DESCRIPTION = {{ category.description.ru }}</div>
            <div>
                <div>Products</div>
                <nuxt-link v-for="product in category.products" :to="/products/ + product.id">{{ product.title.en }}</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    async fetch(context) {
        await context.store.dispatch('categories/SET_CURRENT_CATEGORY_ACTION', context.route.params.id)
    },
    computed: {
        ...mapState({
            category: state => state.categories.currentCategory
        })
    }
}
</script>
