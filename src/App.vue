<template>
  <div class="min-h-screen bg-paper text-black font-sans">
    <AnnouncementBar />
    <NavHeader />
    <main id="top">
      <RouterView />
    </main>
    <FooterSection />
  </div>
</template>
<script>
import AnnouncementBar from '@/components/AnnouncementBar.vue';
import NavHeader from '@/components/NavHeader.vue'
import FooterSection from '@/components/FooterSection.vue'
export default {
  components: {
    AnnouncementBar,
    NavHeader,
    FooterSection
  }
}
</script>