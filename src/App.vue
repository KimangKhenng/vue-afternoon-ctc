<template>
  <NavHeader />
  <h1>{{ message }} - {{ count }}</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <button @click="increment">Increase Counter</button>
</template>
<script>
import NavHeader from '@/components/NavHeader.vue'
export default {
  components: {
    NavHeader
  },
  data() {
    return {
      message: 'You did it 2!',
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>