<template>
    <div>
        <the-header></the-header>
        <main>
            <nuxt></nuxt>
        </main>
        <the-footer></the-footer>
    </div>
</template>

<script>
import TheHeader from '../components/header/header'
import TheFooter from '../components/footer/footer'

export default {
    components: {
        TheHeader,
        TheFooter
    }
}
</script>
