<template>
    <section id="products" class="max-w-6xl mx-auto px-6 pt-14">
        <div class="flex items-center gap-3 mb-6">
            <div class="w-4 h-4 bg-brand border-2 border-black"></div>
            <h2 class="text-2xl font-black uppercase">Shop</h2>
        </div>

        <div class="bg-white border-4 border-black shadow-brutal p-4 flex flex-wrap items-center gap-4">
            <input ref="input" type="text" placeholder="Search products..."
                class="flex-1 min-w-48 border-2 border-black bg-paper px-3 py-2 font-bold focus:outline-none focus:bg-white">

            <div class="flex flex-wrap gap-2">
                <button v-for="category in categories" :key="category"
                    class="border-2 border-black px-3 py-2 text-sm font-extrabold uppercase cursor-pointer"
                    :class="category === activeCategory ? 'bg-black text-white' : 'bg-white hover:bg-paper'">
                    {{ category }}
                </button>
            </div>
        </div>

        <p class="mt-4 text-sm font-bold uppercase">Showing 8 of 12 products</p>
    </section>
</template>
<script>
export default {
    data() {
        return {
            categories: ['All', 'Stickers', 'Apparel', 'Desk'],
            activeCategory: 'All'
        }
    },
    mounted() {
        this.$refs.input.focus()
    }
}
</script>
