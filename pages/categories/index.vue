<template>
    <div class="layout">
        <div class="content">
            <aside class="sidebar">
                sidebar =>
            </aside>
            <div class="categories">
                <div class="categories__body">
                    <h1 class="categories__title">CATEGORY page => ...</h1>
                    <ul class="categories__list">
                        <li class="categories__item" v-for="category in categories" :key="category.slug">
                            <nuxt-link :to="/categories/ + category.slug">
                                <div class="categories__picture">
                                    <img src="~assets/img-holder.png" alt="picture">
                                </div>
                                <div class="categories__text">id = {{ category.slug }}</div>
                                <div class="categories__text">title = {{ category.title }}</div>
                                <div class="categories__text">description = {{ category.description }}</div>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
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

<style lang="scss" scoped>
.content {
    display: flex;
}

.sidebar {
    width: 30%;
}

.categories {
    padding: 80px 0;
    width: 70%;

    &__title {
        margin-bottom: 40px;
        font-size: 32px;
        font-weight: 700;
        line-height: 44px;
        color: $global-black;
    }

    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }

    &__item {
        width: calc(33% - 16px);
        padding: 16px;
        border: 1px solid $global-black;
        border-radius: 10px;
    }

    &__picture {
        img {
            width: 100%;
        }
    }

    &__text {
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        color: $global-black;

        &:not(:last-of-type) {
            margin-bottom: 12px;
        }
    }
}
</style>
