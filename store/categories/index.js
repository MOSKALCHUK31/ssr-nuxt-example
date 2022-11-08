export default {
    state() {
        return {
            categories: [],
            currentCategory: {}
        }
    },
    mutations: {
        SET_CATEGORIES(state, payload) {
            state.categories = payload
        },
        SET_CURRENT_CATEGORY(state, payload) {
            state.currentCategory = payload
        }
    },
    actions: {
        async SET_CATEGORIES_ACTION(context) {
            const response = await this.$axios.$get('http://bk.armar.solutions/api/categories')
            const responseData = await response.data

            context.commit('SET_CATEGORIES', responseData)
        },
        async SET_CURRENT_CATEGORY_ACTION(context, payload) {
            const response = await this.$axios.$get('http://bk.armar.solutions/api/category/' + payload)
            const responseData = await response.data

            context.commit('SET_CURRENT_CATEGORY', responseData)
        }
    }
}
