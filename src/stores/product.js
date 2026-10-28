import { defineStore } from "pinia";

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [],
        meta: {},
        error: '',
        loading: false
    }),
    getters: {

    },
    actions: {
        async fetchProduct() {
            try {
                let response = await fetch('https://brutal-api-sample.onrender.com/api/products?limit=10&page=1')
                response = await response.json()
                this.products = response.data
                this.meta = response.meta
            } catch (err) {
                this.error = err.message
            }
        }
    },
})