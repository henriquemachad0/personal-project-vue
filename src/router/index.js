import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/HomePage.vue'
import Product from '../views/ProductPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:id',
        name: 'Product',
        component: Product
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router