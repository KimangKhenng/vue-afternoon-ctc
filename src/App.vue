<template>
  <div class="min-h-screen bg-paper text-black font-sans">
    <!-- <LifecycleLogger v-if="show" />
    <button class="bg-blue-400 p-2 text-white" @click="show = !show">SHow</button>
    <TestCompo /> -->
    <AnnouncementBar />
    <NavHeader :item-count="itemCount" />
    <main id="top">
      <HeroSection />
      <FilterBar />
      <ProductSection @add="increaseCount" />
      <CartSection />
      <PerkSection />
      <FaqSection />
      <NewsletterSection />
    </main>
    <FooterSection />

  </div>
</template>
<script>
import AnnouncementBar from '@/components/AnnouncementBar.vue'
import NavHeader from '@/components/NavHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import FilterBar from '@/components/FilterBar.vue'
import ProductSection from '@/components/ProductSection.vue'
import CartSection from '@/components/CartSection.vue'
import PerkSection from '@/components/PerkSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import NewsletterSection from '@/components/NewsletterSection.vue'
import FooterSection from '@/components/FooterSection.vue'
export default {
  components: {
    AnnouncementBar,
    NavHeader,
    HeroSection,
    FilterBar,
    ProductSection,
    CartSection,
    PerkSection,
    FaqSection,
    NewsletterSection,
    FooterSection,
  },
  data() {
    return {
      show: true,
      itemCount: 0
    }
  },
  methods: {
    increaseCount(product) {
      this.itemCount++
    }
  }
}
</script>
