<template>
    <!-- <CourseSection /> -->
    <HeroSection />
    <FilterBar />
    <ProductSection />
    <CartSection />
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
export default {
    components: {
        HeroSection,
        FilterBar,
        ProductSection,
        CartSection,
        PerkSection,
        FaqSection,
        NewsletterSection,
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