import { defineStore } from "pinia";

export const useCartStore = defineStore('carts', {
    state: () => ({
        items: []
    }),
    getters: {
        count: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
        total: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    },
    actions: {
        add(product) {
            const line = this.items.find((item) => item.id === product.id);
            if (line) {
                line.quantity++;
            } else {
                this.items.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
            }
        },
        remove(id) {
            this.items = this.items.filter((item) => item.id !== id);
        },
        clear() {
            this.items = [];
        },
    },
})