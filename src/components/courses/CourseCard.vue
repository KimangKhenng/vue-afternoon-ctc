<template>
    <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
        <div class="relative h-36 border-b-4 border-black flex items-end p-3">
            <span class="text-6xl font-black leading-none">{{ course.id }}</span>
        </div>
        <div class="p-4 flex flex-col gap-2 grow">
            <h3 class="text-lg font-black uppercase leading-tight">{{ course.full_name }}</h3>
        </div>
    </article>
</template>
<script>
export default {
    props: {
        course: {
            type: Object,
            default: () => {
                return {
                    id: '',
                    full_name: '',
                }
            }
        }
    }
}
</script>
