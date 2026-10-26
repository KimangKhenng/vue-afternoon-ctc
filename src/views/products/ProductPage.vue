<template>
    <div>Hello Product - {{ $route.params.id }}</div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$route.params.id)
        const api = `https://ecom.products/${this.$route.params.id}`
        // const response = fetch(api)
    }
}
</script>