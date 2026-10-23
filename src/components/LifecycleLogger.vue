<template>
    <div class="border-4 border-black bg-white p-4 shadow-brutal-sm">
        <p class="font-extrabold uppercase">Count: {{ count }}</p>
        <button @click="count++" class="mt-2 border-2 border-black px-3 py-1 font-extrabold cursor-pointer">+1</button>
    </div>
</template>

<script>
export default {
    data() {
        return { count: 0 };
    },
    beforeCreate() { console.log("Logger: beforeCreate. count =", this.count); },
    created() { console.log("Logger: created. count =", this.count); },
    beforeMount() { console.log("Logger: beforeMount"); },
    mounted() {
        console.log("Logger: mounted", this.$el);
    },
    beforeUpdate() { console.log("Logger: beforeUpdate"); },
    updated() { console.log("Logger: updated"); },
    beforeUnmount() { console.log("Logger: beforeUnmount"); },
    unmounted() { console.log("Logger: unmounted"); },
};
</script>
