'use strict';

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from   '../store/index'

import Login from '../pages/Login'
import Home from '../pages/Home'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Login,
            redirect: "/login",
            children: [
                {
                  path: "login",
                  name: "Login",
                  component: Login
                },
            ]
        },
        {
            path: '/home',
            component: Home,
            name: 'home',
            meta: {
                authRequired: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.isAuthenticated) {
            next({
                path: '/'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router