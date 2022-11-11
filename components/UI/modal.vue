<template>
    <div>
        <div v-if="show" class="modal">
            <div class="modal__background" @click="handleClose"></div>
            <div class="modal__holder">
                <button class="modal__close" @click="handleClose">X</button>
                <div class="modal__content">
                    <div class="modal__inner">
                        <h3 v-if="title" class="modal__title">{{ title }}</h3>
                        <slot>
                            default content
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: false
        }
    },
    methods: {
        handleClose() {
            this.$emit('close')
        }
    }
}
</script>
<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &__background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba($global-black, 0.5);
    }

    &__holder {
        position: relative;
        width: 100%;
        max-width: 90%;
        max-height: 90%;
        background: $global-white;
        border-radius: 30px;

        @media (min-width: 768px) {
            max-width: 640px;
        }

        @media (min-width: 1024px) {
            max-width: 740px;
        }
    }

    &__close {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 40px;
        font-weight: 700;
        background: none;
        border: none;
    }

    &__inner {
        width: 100%;
        max-width: 380px;
        margin: 0 auto;
        padding: 60px 16px;

        @media (min-width: 768px) {
            padding: 40px 0;
        }

        @media (min-width: 1024px) {
            padding: 80px 0;
        }
    }

    &__title {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 500;
        line-height: 22;
        color: $global-black;
        text-align: center;

        @media (min-width: 768px) {
            font-size: 20px;
            line-height: 28px;
        }

        @media (min-width: 1024px) {
            margin-bottom: 32px;
            font-size: 24px;
            line-height: 30px;
        }
    }
}
</style>
