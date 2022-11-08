export default {
    state() {
        return {
            product: {}
        }
    },
    mutations: {
        SET_PRODUCT(state, payload) {
            state.product = payload
        }
    },
    actions: {
        async SET_PRODUCT_ACTION(context, payload) {
            const response = await this.$axios.$get('http://bk.armar.solutions/api/product/' + payload)
            const responseData = await response.data

            context.commit('SET_PRODUCT', responseData)
        }
    }
}
