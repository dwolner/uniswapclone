import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Swap from "./components/Swap.vue"
import Pool from "./components/Pool.vue"

export default new VueRouter({
    routes: [
        { path: '/', component: Swap },
        { path: '/pool', component: Pool }
    ] // short for `routes: routes`
})