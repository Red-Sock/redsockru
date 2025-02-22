import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import {Routes} from "@/app/router/routes.ts";

const routes = [
    { path: Routes.Home, component: HomePage },
]

export default createRouter({
    history: createMemoryHistory(),
    routes,
})
