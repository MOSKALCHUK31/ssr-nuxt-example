<template>
    <div>
        <h1>Categories list component</h1>
        <br><br>
        <hr>
        <br><br>
        <div>
            <ul>
                <li v-for="category in categories" :key="category.id">
                    <div>id = {{ category.id }}</div>
                    <nuxt-link :to="/categories/ + category.id">title = {{ category.title.ru }}</nuxt-link>
                    <div>description = {{ category.description.ru }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    async fetch(context) {
        await context.store.dispatch('categories/SET_CATEGORIES_ACTION')
    },
    computed: {
        ...mapState({
            categories: state => state.categories.categories
        })
    }
}
</script>

<style scoped>
.link {
    color: dodgerblue;
    text-decoration: underline;
}

ul {
    list-style: none;
}


li {
    padding: 1rem;
    border: 1px solid #000;
}

li:not(:first-of-type) {
    margin-top: 24px;
}

</style>
