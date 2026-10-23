<template>
    <section class="max-w-3xl mx-auto px-6 py-14">
        <div class="flex items-center gap-3 mb-6">
            <div class="w-4 h-4 bg-brand border-2 border-black"></div>
            <h2 class="text-2xl font-black uppercase">FAQ</h2>
        </div>
        <div class="space-y-4">
            <FaqItem v-for="faq in faqs" :key="faq.question" :question="faq.question" :answer="faq.answer" />
        </div>
    </section>
</template>
<script>
import FaqItem from '@/components/faq/FaqItem.vue';
export default {
    components: {
        FaqItem
    },
    data() {
        return {
            faqs: [
                { question: 'How long is shipping?', answer: 'We ship in 24 hours. Delivery takes 3 to 7 days.' },
                { question: 'Can I return an item?', answer: 'Yes. You have 30 days. The item must be unused.' },
                { question: 'Do you ship worldwide?', answer: 'Yes, to most countries. Prices change by country.' },
                { question: 'Which sizes do you have?', answer: 'Apparel comes in S, M, L and XL.' }
            ]
        }
    }
}
</script>
