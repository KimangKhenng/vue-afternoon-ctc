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
export default {
    components: {
        ProductCard
    },
    data() {
        return {
            products: [
                {
                    number: '01', category: 'Stickers', name: 'Semicolon Sticker Pack',
                    description: '10 vinyl stickers for your laptop.', price: '$4.00',
                    imageClass: 'bg-brand text-white'
                },
                {
                    number: '02', category: 'Apparel', name: 'Bug Hunter Hoodie',
                    description: 'Heavy cotton. Warm for late-night fixes.', price: '$45.00', oldPrice: '$60.00',
                    imageClass: 'bg-black text-white',
                    badge: { label: 'Sale', class: 'bg-brand text-white border-2 border-white' }
                },
                {
                    number: '03', category: 'Desk', name: 'Git Push Mug',
                    description: 'Holds 350ml of coffee. Force push not included.', price: '$12.00',
                    imageClass: 'bg-white text-black', saved: true
                },
                {
                    number: '04', category: 'Apparel', name: 'Dark Mode Tee',
                    description: '100% black. Easy on the eyes.', price: '$22.00',
                    imageClass: 'bg-black text-white'
                },
                {
                    number: '05', category: 'Desk', name: 'Ctrl+Z Mousepad',
                    description: 'Large size. Undo your mistakes in style.', price: '$15.00',
                    imageClass: 'bg-white text-black'
                },
                {
                    number: '06', category: 'Stickers', name: 'Component Pin',
                    description: 'Metal pin. Small, reusable, and clean.', price: '$3.50',
                    imageClass: 'bg-brand text-white'
                },
                {
                    number: '07', category: 'Desk', name: '404 Notebook',
                    description: 'Blank pages. Page not found.', price: '$9.00',
                    imageClass: 'bg-white text-black', soldOut: true,
                    badge: { label: 'Sold out', class: 'bg-black text-white' }
                },
                {
                    number: '08', category: 'Desk', name: 'Rubber Duck Debugger',
                    description: 'Explain your bug to the duck. It always helps.', price: '$8.00', oldPrice: '$10.00',
                    imageClass: 'bg-white text-black',
                    badge: { label: 'Sale', class: 'bg-brand text-white border-2 border-black' }
                }
            ]
        }
    },
    emits: ['add'],
    methods: {
        addToCart(product) {
            this.$emit('add', product)
        }
    }
}
</script>
