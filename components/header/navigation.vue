<template>
    <div class="header-nav">
        <ul class="header-nav__list">
            <li class="header-nav__item">
                <nuxt-link class="header-nav__link" to="/">Главная</nuxt-link>
            </li>
            <li class="header-nav__item">
                <nuxt-link class="header-nav__link" to="/categories">Категории</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['categories'],
}
</script>

<style lang="scss" scoped>
.header-nav {
    display: flex;
    align-items: center;

    &__list {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    &__link {
        font-size: 18px;
        font-weight: 500;
        color: $global-white;
    }
}
</style>

