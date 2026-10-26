import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import ShopPage from "@/views/ShopPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";
import ProductPage from "@/views/products/ProductPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: AboutPage },
        { path: '/shop', component: ShopPage },
        { path: '/products/:id', component: ProductPage },
        { path: "/:pathMatch(.*)*", component: NotFoundPage },
    ],
    linkActiveClass: 'border-black bg-black text-white',
    linkExactActiveClass: 'border-black bg-black text-white',
})

export default router;



