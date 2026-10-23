<template>
    <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
        <div class="relative h-36 border-b-4 border-black flex items-end p-3" :class="product.imageClass">
            <span class="text-6xl font-black leading-none">{{ product.number }}</span>
            <span v-if="product.badge" class="absolute top-3 right-3 text-xs font-extrabold uppercase px-2 py-1"
                :class="product.badge.class">{{ product.badge.label }}</span>
        </div>
        <div class="p-4 flex flex-col gap-2 grow">
            <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">{{ product.category
            }}</span>
            <h3 class="text-lg font-black uppercase leading-tight">{{ product.name }}</h3>
            <p class="text-sm font-medium">{{ product.description }}</p>
            <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                <p class="text-xl font-black">{{ product.price }}
                    <span v-if="product.oldPrice" class="text-sm font-bold line-through text-black/50">{{
                        product.oldPrice }}</span>
                </p>
                <div class="flex gap-2">
                    <button class="border-2 border-black px-2 py-2 text-xs font-extrabold uppercase cursor-pointer"
                        :class="product.saved ? 'bg-black text-white' : 'bg-white'">
                        {{ product.saved ? 'Saved' : 'Save' }}
                    </button>
                    <button v-if="product.soldOut" disabled
                        class="border-2 border-black bg-paper text-black/40 px-3 py-2 text-xs font-extrabold uppercase cursor-not-allowed">Add</button>
                    <button @click="addToCart" v-else
                        class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    props: ['product'],
    emits: ['add'],
    methods: {
        addToCart() {
            this.$emit('add', this.product)
        }
    }
}
</script>
