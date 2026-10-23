<template>
  <div class="min-h-screen bg-paper text-black font-sans">

    <AnnouncementBar />

    <NavHeader />

    <main id="top">
      <HeroSection />
      <FilterBar />
      <ProductSection />
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
    FooterSection
  }
}
</script>
