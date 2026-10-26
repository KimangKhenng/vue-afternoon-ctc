<template>
    <!-- <CourseSection /> -->
    <HeroSection />
    <FilterBar />
    <ProductSection @add="addToCard" />
    <CartSection :items="items" @remove-item="removeItem" @clear-item="clearItems" />
    <PerkSection />
    <FaqSection />
    <NewsletterSection />
</template>
<script>
import HeroSection from '@/components/HeroSection.vue'
import FilterBar from '@/components/FilterBar.vue'
import ProductSection from '@/components/ProductSection.vue'
import CartSection from '@/components/CartSection.vue'
import PerkSection from '@/components/PerkSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import NewsletterSection from '@/components/NewsletterSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import CourseSection from '@/components/CourseSection.vue'
export default {
    components: {
        HeroSection,
        FilterBar,
        ProductSection,
        CartSection,
        PerkSection,
        FaqSection,
        NewsletterSection,
        CourseSection
    },
    data() {
        return {
            show: true,
            items: [
                { name: 'Semicolon Sticker Pack', unitPrice: 4.00, quantity: 2 },
                { name: 'Git Push Mug', unitPrice: 12.00, quantity: 1 },
                { name: 'Dark Mode Tee', unitPrice: 22.00, quantity: 1 }
            ]
        }
    },
    computed: {
        totalCount() {
            return this.items.reduce((sum, item) => sum + item.quantity, 0);
        }
    },
    methods: {
        addToCard(product) {
            const existingItem = this.items.find((item) => item.name === product.name)
            if (existingItem) {
                existingItem.quantity++
            } else {
                this.items.push(
                    { name: product.name, unitPrice: product.price, quantity: 1 }
                )
            }
        },
        removeItem(item) {
            const index = this.items.indexOf(item)
            this.items.splice(index, 1)
        },
        clearItems() {
            this.items = []
        }
    }
}
</script>