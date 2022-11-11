<template>
    <div class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item">
                <nuxt-link to="/categories" class="navigation__link">To categories</nuxt-link>
            </li>
            <li class="navigation__item">
                <nuxt-link to="/categories" class="navigation__link">To categories</nuxt-link>
            </li>
            <li class="navigation__item">
                <nuxt-link to="/categories" class="navigation__link">To categories</nuxt-link>
            </li>
            <li class="navigation__item">
                <nuxt-link to="/categories" class="navigation__link">To categories</nuxt-link>
            </li>
            <li class="navigation__item">
                <nuxt-link to="/categories" class="navigation__link">To categories</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.navigation {
    &__list {}

    &__item {
        &:not(:last-of-type) {
            margin-bottom: 16px;
        }
    }

    &__link {
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        color: $global-white;
    }
}
</style>
