<template>
    <header class="bg-white border-b-4 border-black">
        <nav class="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <RouterLink to="/" class="text-2xl font-black uppercase tracking-tight">
                Brutal<span class="bg-brand text-white px-2 ml-1 border-2 border-black">Merch</span>
            </RouterLink>
            <ul class="flex flex-wrap items-center gap-3 text-sm font-extrabold uppercase">
                <li>
                    <RouterLink to="/" class="px-3 py-2 border-2 border-transparent hover:border-black ">Home
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/shop" class="px-3 py-2 border-2 border-transparent hover:border-black">Shop
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/about" class="px-3 py-2 border-2 border-transparent hover:border-black">About
                    </RouterLink>
                </li>
                <li>
                    <a href="#cart"
                        class="px-3 py-2 border-2 border-black bg-brand text-white shadow-brutal-sm flex items-center gap-2">
                        Cart
                        <span class="bg-white text-black px-2 border-2 border-black">{{ itemCount }}</span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    // props: ['itemCount']
    props: {
        itemCount: {
            type: Number,
            default: 0
        }
    }
}
</script>