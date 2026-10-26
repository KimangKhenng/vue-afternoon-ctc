import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import ShopPage from "@/views/ShopPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: AboutPage },
        { path: '/shop', component: ShopPage },
        { path: "/:pathMatch(.*)*", component: NotFoundPage },
    ],
    linkActiveClass: 'border-black bg-black text-white',
    linkExactActiveClass: 'border-black bg-black text-white',
})

export default router;



