<template>
    <section class="max-w-6xl mx-auto px-6 py-6">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <CourseCard v-for="(item, index) in courses" :key="index" :course="item" />
        </div>

        <!-- EMPTY STATE (hidden now — show it when a search finds nothing) -->
        <p class="hidden mt-6 bg-white border-4 border-black shadow-brutal p-6 text-center font-extrabold uppercase">
            No products match your search.
        </p>
        <button @click="nextPage"> Next page</button>
    </section>
</template>
<script>
import CourseCard from '@/components/courses/CourseCard.vue';
export default {
    components: {
        CourseCard
    },
    async created() {
        await this.fetchCourse()
    },
    data() {
        return {
            courses: [],
            error: '',
            loading: false,
            page: 1,
            items: 10
        }
    },
    methods: {
        async fetchCourse() {
            const api = `https://api.github.com/users/tfd-ed/repos?per_page=${this.items}&page=${this.page}`;
            this.loading = true
            try {
                const response = await fetch(api)
                this.courses = await response.json()
            } catch (err) {
                this.error = err.messages
            } finally {
                this.loading = false
            }
        },
        async nextPage() {
            this.page++
            await this.fetchCourse()
        }
    }
}
</script>
