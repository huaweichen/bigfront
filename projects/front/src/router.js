import {createRouter, createWebHistory} from 'vue-router'

const Login = () => import(/* webpackChunkName: 'login' */ '@/pages/Login.vue')
const Register = () => import(/* webpackChunkName: 'register' */ '@/pages/Register')
const ForgetPassword = () => import(/* webpackChunkName: 'forget' */ '@/pages/ForgetPassword')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/forget-password',
            name: 'forgetPassword',
            component: ForgetPassword,
        }, {
            path: '/login',
            name: 'login',
            component: Login,
        }, {
            path: '/register',
            name: 'register',
            component: Register,
        }
    ]
})

export default router