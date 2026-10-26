<template>
    <section id="about" class="bg-black border-y-4 border-black">
        <div class="max-w-6xl mx-auto px-6 py-14">
            <h2 class="text-2xl font-black uppercase text-white mb-6">Why Brutal Merch?</h2>
            <div class="grid gap-6 md:grid-cols-3">
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