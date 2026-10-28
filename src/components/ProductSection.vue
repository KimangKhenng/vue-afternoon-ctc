<template>
    <section class="max-w-6xl mx-auto px-6 py-6">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard @add="addToCart" v-for="product in products" :key="product.number" :product="product" />
        </div>

        <!-- EMPTY STATE (hidden now — show it when a search finds nothing) -->
        <p class="hidden mt-6 bg-white border-4 border-black shadow-brutal p-6 text-center font-extrabold uppercase">
            No products match your search.
        </p>
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
    async created() {
        await this.fetchProduct()
    },
    computed: {
        ...mapState(useProductStore, ['products'])
    },
    emits: ['add'],
    methods: {
        ...mapActions(useProductStore, ["fetchProduct"])
    }
}
</script>
