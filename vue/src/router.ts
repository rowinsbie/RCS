import { createWebHistory,createRouter } from "vue-router";
import Login from './pages/Login.vue';
import HomePage from './pages/HomePage.vue';

const routes = [
    {
        path:"/",
        name:"login",
        component:Login
    },
    {
        path:"/homepage",
        name:"homepage",
        component:HomePage
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;