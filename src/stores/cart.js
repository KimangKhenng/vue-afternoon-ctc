import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [
            { id: 1, name: 'Semicolon Sticker Pack', unitPrice: 4.00, quantity: 3 },
            { id: 2, name: 'Git Push Mug', unitPrice: 12.00, quantity: 1 },
            { id: 3, name: 'Dark Mode Tee', unitPrice: 22.00, quantity: 1 }
        ]
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