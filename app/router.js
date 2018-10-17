import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../pages/main.vue';
import NotFound from '../pages/not-found.vue';
import i18n from './i18n.js';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'main', component: Main },
    { path: '/not-found', name: 'not-found', component: NotFound },
    { path: '*', redirect: '/not-found' }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});

router.beforeEach((to, from, next) => {
    document.title = i18n.t(to.name);
    next();
});

export default router;
