<template>
    <div class="layout">
        <div class="product">
            <div class="product__image">
                <img src="~assets/img-holder.png" alt="image">
            </div>
            <div class="product__description">
                <div class="product__text">ID = {{ category.slug }}</div>
                <div class="product__text">TITLE = {{ category.title }}</div>
                <div class="product__text">DESCRIPTION = {{ category.description }}</div>
                <base-badge :products="category.products"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseBadge from '../../components/product-page/badge'

export default {
    async fetch(context) {
        await context.store.dispatch('categories/SET_CURRENT_CATEGORY_ACTION', context.route.params.id)
    },
    components: {
        BaseBadge
    },
    computed: {
        ...mapState({
            category: state => state.categories.currentCategory
        })
    }
}
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 80px 0;

    &__image {
        width: 100%;

        img {
            width: 100%;
        }
    }

    &__description {
        width: 100%;
    }

    &__text {
        font-size: 18px;
        font-weight: 500;
        line-height: 26px;
        text-align: center;
        border: 1px solid $global-light-green;
        border-radius: 10px;

        &:not(:last-of-type) {
            margin-bottom: 20px;
        }
    }
}
</style>
