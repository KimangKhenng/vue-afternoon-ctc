<template>
    <div class="bg-white border-4 border-black shadow-brutal-sm p-4">
        <h3 class="font-extrabold uppercase">{{ question }}</h3>
        <p class="mt-1 text-sm font-medium">{{ answer }}</p>
    </div>
</template>
<script>
export default {
    props: ['question', 'answer']
}
</script>
