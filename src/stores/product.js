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
        hasPreviousPage: (state) => state.meta.page > 1,
        hasNextPage: (state) => state.meta.page < state.meta.totalPages,
    },
    actions: {
        async fetchProduct() {
            try {
                let response = await fetch(`https://brutal-api-sample.onrender.com/api/products?limit=${this.meta.limit}&page=${this.meta.page}`);
                response = await response.json()
                if (response.error) throw new Error(response.error)
                this.products = response.data
                this.meta = response.meta
            } catch (err) {
                this.error = err.message
            }
        },
        async goToPage(page) {
            const target = Math.floor(Number(page))
            // the API rejects page < 1 and returns empty data past totalPages
            if (!Number.isFinite(target) || target < 1) return
            if (this.meta.totalPages && target > this.meta.totalPages) return
            if (target === this.meta.page) return
            this.meta.page = target
            await this.fetchProduct()
        },
        async nextPage() {
            await this.goToPage(this.meta.page + 1)
        },
        async previousPage() {
            await this.goToPage(this.meta.page - 1)
        },
        async fetchUpdateOption(option) {
            this.meta.limit = option
            // total pages change with the page size, so start over from page 1
            this.meta.page = 1
            await this.fetchProduct()
        }
    },
})