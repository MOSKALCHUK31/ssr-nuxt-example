<template>
    <footer class="footer" id="footer">
        <div class="layout">
            <div class="footer-layout">
                <div class="footer-logo">
                    <picture>
                        <img src='~assets/logo.svg' alt="">
                    </picture>
                </div>
                <footer-navigation></footer-navigation>
            </div>
        </div>
    </footer>
</template>

<script>
import FooterNavigation from './navigation'

export default {
    components: {
        FooterNavigation
    }
}
</script>

<style lang="scss" scoped>
.footer {
    padding: 50px 0;
    background: $global-dark-green;
}

.footer-layout {
    display: flex;
    align-items: center;
}

.footer-logo {
    margin-right: 60px;
    img {
        height: 56px;
    }
}
</style>
