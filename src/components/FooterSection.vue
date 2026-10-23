<template>
    <footer class="bg-white">
        <div class="max-w-6xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
                <p class="text-2xl font-black uppercase">Brutal<span
                        class="bg-brand text-white px-2 ml-1 border-2 border-black">Merch</span></p>
                <p class="mt-3 text-sm font-medium">A practice project from TFD. Not a real shop.</p>
            </div>
            <div v-for="column in columns" :key="column.title">
                <h3 class="text-sm font-black uppercase mb-3 border-b-4 border-black pb-1">{{ column.title }}</h3>
                <ul class="space-y-2 text-sm font-bold">
                    <li v-for="link in column.links" :key="link.label">
                        <a :href="link.href" class="hover:underline">{{ link.label }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bg-black text-white text-center text-xs font-bold uppercase tracking-widest py-3">
            © 2026 Brutal Merch · Built by students at TFD
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            columns: [
                {
                    title: 'Shop',
                    links: [
                        { label: 'All products', href: '#products' },
                        { label: 'Stickers', href: '#products' },
                        { label: 'Apparel', href: '#products' },
                        { label: 'Desk', href: '#products' }
                    ]
                },
                {
                    title: 'Help',
                    links: [
                        { label: 'Shipping', href: '#about' },
                        { label: 'Returns', href: '#about' },
                        { label: 'Contact', href: '#about' }
                    ]
                },
                {
                    title: 'Follow',
                    links: [
                        { label: 'Telegram', href: '#top' },
                        { label: 'Facebook', href: '#top' },
                        { label: 'YouTube', href: '#top' }
                    ]
                }
            ]
        }
    }
}
</script>
