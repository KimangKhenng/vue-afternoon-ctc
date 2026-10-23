<template>
    <p>Hello WOrld</p>
</template>
<script>
export default {
    data() {
        return { count: 0 };
    },
    created() {
        this.count = 1;
        console.log("I was created. count is", this.count);
    },
    mounted() {
        console.log("I am on the page now.");
    },
};
</script>