import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/account',
        name: 'Account',
        component: Account,
    },
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '*',
        redirect: '/',
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user-token')

    if (authRequired && !loggedIn) {
        return next('/')
    }

    if (loggedIn && to.path == '/') {
        return next('/home')
    }

    next()
})

export default router
