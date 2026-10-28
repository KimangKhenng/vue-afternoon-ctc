<template>
    <section class="max-w-6xl mx-auto px-6 py-6">
        <select v-model="currentOption"
            class="border-2 border-black bg-white px-3 py-2 mb-6 text-sm font-extrabold uppercase cursor-pointer">
            <option v-for="(item, index) in pageOptions" :key="index" :value="item">{{ item }}</option>
        </select>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard @add="addToCart" v-for="product in products" :key="product.number" :product="product" />
        </div>

        <!-- EMPTY STATE (hidden now — show it when a search finds nothing) -->
        <p class="hidden mt-6 bg-white border-4 border-black shadow-brutal p-6 text-center font-extrabold uppercase">
            No products match your search.
        </p>

        <nav v-if="meta.totalPages > 1" aria-label="Pagination" class="flex flex-wrap items-center gap-2 mt-8">
            <button @click="previousPage" :disabled="!hasPreviousPage" :class="hasPreviousPage ? enabledClass : disabledClass"
                class="border-2 border-black px-3 py-2 text-sm font-extrabold uppercase">Previous</button>

            <template v-for="(item, index) in pageItems" :key="index">
                <span v-if="item === '...'" class="px-1 font-extrabold">...</span>
                <button v-else @click="goToPage(item)" :aria-current="item === meta.page ? 'page' : undefined"
                    :class="item === meta.page ? 'bg-black text-white' : 'bg-white hover:bg-paper cursor-pointer'"
                    class="border-2 border-black px-3 py-2 text-sm font-extrabold">{{ item }}</button>
            </template>

            <button @click="nextPage" :disabled="!hasNextPage" :class="hasNextPage ? enabledClass : disabledClass"
                class="border-2 border-black px-3 py-2 text-sm font-extrabold uppercase">Next</button>
        </nav>
    </section>
</template>
<script>
import ProductCard from '@/components/products/ProductCard.vue';
import { mapActions, mapState } from 'pinia';
import { useProductStore } from '@/stores/product';
export default {
    components: {
        ProductCard
    },
    data() {
        return {
            pageOptions: [4, 12, 24, 48],
            currentOption: 4,
            enabledClass: 'bg-brand text-white shadow-brutal-sm cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none',
            disabledClass: 'bg-paper text-black/40 cursor-not-allowed'
        }
    },
    async created() {
        await this.fetchProduct()
    },
    computed: {
        ...mapState(useProductStore, ['products', 'meta', 'hasPreviousPage', 'hasNextPage']),
        // 1 ... (current - 1) current (current + 1) ... last
        pageItems() {
            const { page, totalPages } = this.meta
            const pages = new Set([1, totalPages, page - 1, page, page + 1])
            const sorted = [...pages].filter(p => p >= 1 && p <= totalPages).sort((a, b) => a - b)
            const items = []
            sorted.forEach((p, i) => {
                if (i > 0) {
                    const gap = p - sorted[i - 1]
                    if (gap === 2) items.push(p - 1)
                    else if (gap > 2) items.push('...')
                }
                items.push(p)
            })
            return items
        }
    },
    watch: {
        async currentOption(value) {
            await this.fetchUpdateOption(value)
        }
    },
    emits: ['add'],
    methods: {
        ...mapActions(useProductStore, ["fetchProduct", "goToPage", "nextPage", "previousPage", "fetchUpdateOption"])
    }
}
</script>
