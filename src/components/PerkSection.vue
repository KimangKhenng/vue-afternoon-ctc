<template>
    <section id="about" class="bg-black border-y-4 border-black">
        <div class="max-w-6xl mx-auto px-6 py-14">
            <h2 class="text-2xl font-black uppercase text-white mb-6">Why Brutal Merch?</h2>
            <div class="grid gap-6 md:grid-cols-3">
                <!-- <div class="bg-white border-4 border-white shadow-[6px_6px_0_#e74c3c] p-5">
                    <p class="text-xs font-extrabold uppercase text-brand">Perk 01</p>
                    <h3 class="mt-1 text-xl font-black uppercase">Free shipping</h3>
                    <p class="mt-2 text-sm font-medium">Order more than $30 and we pay for the delivery.</p>
                </div>
                <div class="bg-white border-4 border-white shadow-[6px_6px_0_#e74c3c] p-5">
                    <p class="text-xs font-extrabold uppercase text-brand">Perk 02</p>
                    <h3 class="mt-1 text-xl font-black uppercase">30-day returns</h3>
                    <p class="mt-2 text-sm font-medium">Do not like it? Send it back. No questions.</p>
                </div>
                <div class="bg-white border-4 border-white shadow-[6px_6px_0_#e74c3c] p-5">
                    <p class="text-xs font-extrabold uppercase text-brand">Perk 03</p>
                    <h3 class="mt-1 text-xl font-black uppercase">Free sticker</h3>
                    <p class="mt-2 text-sm font-medium">Every box has one extra sticker inside.</p>
                </div> -->
                <PerkCard v-for="(item, index) in perks" :key="index" :perkNumber="item.number"
                    :perkDecription="item.description" :perkTitle="item.title" />
            </div>
        </div>
    </section>
</template>
<script>
import PerkCard from '@/components/perks/PerkCard.vue';
export default {
    components: {
        PerkCard
    },
    data() {
        return {
            perks: [
                { number: 'Perk 01', title: 'Free shipping', description: 'Order more than $30 and we pay for the delivery.' },
                { number: 'Perk 02', title: '30 days return', description: 'Order more than $30 and we pay for the delivery.' }
            ]
        }
    }
}
</script>