<template>
    <li class="flex items-center justify-between gap-3 border-2 border-black bg-paper p-3">
        <div>
            <p class="text-sm font-extrabold uppercase">{{ item.name }}</p>
            <p class="text-xs font-medium">{{ item.price }} × {{ item.quantity }}</p>
        </div>
        <div class="flex items-center gap-3">
            <p class="font-black">{{ item.price * item.quantity }}</p>
            <button @click="removeItem(item.id)"
                class="border-2 border-black bg-white px-2 py-1 text-xs font-extrabold uppercase cursor-pointer hover:bg-brand hover:text-white">Remove</button>
        </div>
    </li>
</template>
<script>
import { mapActions } from 'pinia';
import { useCartStore } from '@/stores/cart';

export default {
    props: ['item'],
    methods: {
        ...mapActions(useCartStore, { removeItem: 'remove' })
    }
}
</script>
