<template>
    <section class="max-w-6xl mx-auto px-6 py-6">
        <select v-model="currentOption" class="bg-red-500 text-white px-4 py-2 m-2">
            <option v-for="(item, index) in pageOptions" :key="index" :value="item">{{ item }}</option>
        </select>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard @add="addToCart" v-for="product in products" :key="product.number" :product="product" />
        </div>

        <!-- EMPTY STATE (hidden now — show it when a search finds nothing) -->
        <p class="hidden mt-6 bg-white border-4 border-black shadow-brutal p-6 text-center font-extrabold uppercase">
            No products match your search.
        </p>

        <div class="flex gap-2 mt-2">
            <button @click="previousPage" class="bg-red-500 p-2">Previous</button>
            <button @click="nextPage" class="bg-red-500 p-2">Next</button>
        </div>
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
            currentOption: 4
        }
    },
    async created() {
        await this.fetchProduct()
    },
    computed: {
        ...mapState(useProductStore, ['products'])
    },
    watch: {
        async currentOption(value) {
            await this.fetchUpdateOption(value)
        }
    },
    emits: ['add'],
    methods: {
        ...mapActions(useProductStore, ["fetchProduct", "nextPage", "previousPage", "fetchUpdateOption"])
    }
}
</script>
