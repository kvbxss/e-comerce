import { MutationTree, ActionTree } from 'vuex'

export interface CartState {
    cartItems: any[]
}

export const state = (): CartState => ({
    cartItems: []
})

export const mutations: MutationTree<CartState> = {
    addToCart(state, product) {
        state.cartItems.push(product)
    },
    removeFromCart(state, index) {
        state.cartItems.splice(index, 1)
    }
}
