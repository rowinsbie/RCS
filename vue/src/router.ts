import { createWebHistory,createRouter, RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import Login from './pages/Login.vue';
import HomePage from './pages/HomePage.vue';
import UserStore from './statemanagement/UserStore';
const routes = [
    {
        path:"/",
        name:"login",
        component:Login
    },
    {
        path:"/homepage",
        name:"homepage",
        component:HomePage,
        meta:{requiresAuth:true}
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});


router.beforeEach((to:RouteLocationNormalized,from:RouteLocationNormalized,next:NavigationGuardNext) => {
      if(to.name !== 'login' && !localStorage.getItem('token')) next({name:'login'})
      else next()
})

export default router;