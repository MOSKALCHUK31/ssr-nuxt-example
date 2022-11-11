<template>
    <div class="product-badge">
        <h3 class="product-badge__title">OUR PRODUCTS</h3>
        <ul class="product-badge__list">
            <li v-for="product in products" :key="products.id" class="product-badge__item">
                <nuxt-link class="product-badge__link" :to="'/products/' + product.id">{{ product.title.en }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['products']
}
</script>

<style lang="scss" scoped>
.product-badge {

    &__title {
        margin-bottom: 16px;
        font-size: 20px;
        font-weight: 500;
    }

    &__list {
        display: flex;
        gap: 24px;
    }

    &__link {
        display: block;
        padding: 12px;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        color: $global-white;
        background: $global-dark-green;
        border-radius: 10px;
        cursor: pointer;
    }
}
</style>
