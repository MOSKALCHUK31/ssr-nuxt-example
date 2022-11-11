<template>
    <div>
        <base-modal :show="isModalOpened" title="This is a modal window" @close="closeModal">
            custom content
        </base-modal>
        <header class="header" id="header">
            <div class="header-top">
                <div class="layout">
                    <div class="header-top__content">
                        <div class="header-top__item">
                            <div class="header-top__icon">
                                <svg-icon name="icon-car"></svg-icon>
                            </div>
                            <div class="header-top__name">HUY HUEVIY</div>
                        </div>
                        <div class="header-top__item">
                            <div class="header-top__icon">
                                <svg-icon name="icon-check"></svg-icon>
                            </div>
                            <div class="header-top__name">HUY HUEVIY</div>
                        </div>
                        <div class="header-top__item">
                            <div class="header-top__icon">
                                <svg-icon name="icon-globe"></svg-icon>
                            </div>
                            <div class="header-top__name">HUY HUEVIY</div>
                        </div>
                        <div class="header-top__item">
                            <div class="header-top__icon">
                                <svg-icon name="icon-card"></svg-icon>
                            </div>
                            <div class="header-top__name">HUY HUEVIY</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-content">
                <div class="layout">
                    <div class="header-content__inner">
                        <header-logo></header-logo>
                        <header-navigation :categories="slicedCategories"></header-navigation>
                        <div class="header-content__modal">
                            <button @click="openModal" class="button">MODALKA</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderNavigation from './navigation'
import HeaderLogo from './logo'
import BaseModal from '../UI/modal'

export default {
    async fetch(context) {
        await context.store.dispatch('categories/SET_CATEGORIES_ACTION')
    },
    components: {
        HeaderNavigation,
        HeaderLogo,
        BaseModal
    },
    computed: {
        ...mapState({
            categories: state => state.categories.categories
        }),
        slicedCategories() {
            return this.categories.slice(0,5)
        }
    },
    data() {
        return {
            isModalOpened: false
        }
    },
    methods: {
        openModal() {
            this.isModalOpened = true
        },
        closeModal() {
            this.isModalOpened = false
        }
    }
}
</script>

<style lang="scss" scoped>
.header-content {
    padding: 12px 0;
    background: $global-dark-green;

    &__inner {
        display: flex;
        gap: 60px;
    }

    &__modal {
        display: flex;
        align-items: center;
    }
}

.header-top {
    display: flex;
    justify-content: center;
    padding: 12px 0;
    background: $global-light-green;

    &__content {
        display: flex;
        justify-content: center;
        gap: 24px;
    }

    &__item {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__icon {
        display: flex;
        align-items: center;
        svg {
            width: 24px;
            height: 24px;
        }
    }

    &__name {
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        color: $global-black;
    }
}

.button {
    width: 200px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: 500;
    color: $global-black;
    border: none;
    border-radius: 10px;
    background: $global-light-green;
}
</style>
