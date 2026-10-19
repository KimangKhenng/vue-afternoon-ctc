<template>
    <div class="bg-white border-4 border-white shadow-[6px_6px_0_#e74c3c] p-5">
        <p class="text-xs font-extrabold uppercase text-brand">{{ perkNumber }}</p>
        <h3 class="mt-1 text-xl font-black uppercase">{{ perkTitle }}</h3>
        <p class="mt-2 text-sm font-medium">{{ perkDecription }}</p>
    </div>
</template>
<script>
export default {
    props: ['perkNumber', 'perkTitle', 'perkDecription']
}
</script>