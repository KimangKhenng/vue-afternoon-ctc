import { defineStore } from "pinia";

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [],
        meta: {
            page: 1,
            limit: 4,
            total: 0,
            totalPages: 0,
        },
        error: '',
        loading: false
    }),
    getters: {

    },
    actions: {
        async fetchProduct() {
            try {
                let response = await fetch(`https://brutal-api-sample.onrender.com/api/products?limit=${this.meta.limit}&page=${this.meta.page}`);
                response = await response.json()
                this.products = response.data
                this.meta = response.meta
            } catch (err) {
                this.error = err.message
            }
        },
        async nextPage() {
            this.meta.page++
            console.log("Hello")
            console.log(this.meta.page)
            await this.fetchProduct()
        },
        async previousPage() {
            this.meta.page--
            await this.fetchProduct()
        },
        async fetchUpdateOption(option) {
            this.meta.limit = option
            await this.fetchProduct()
        }
    },
})