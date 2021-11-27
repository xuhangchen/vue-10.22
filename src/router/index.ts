import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CardList from '../views/card-list.vue';
import CheckPage from '../pages/router-practise/rp-check.vue';
import ButtonPage from '../pages/router-practise/rp-button.vue';
import BorderPage from '../pages/router-practise/rp-border.vue';
import NestedPage from '../pages/router-practise/nested/rp-nested.vue';
import NtParamsPage from '../pages/router-practise/nested/nested-params.vue';
import NtNormalPage from '../pages/router-practise/nested/nested-normal.vue';
import PracticePage from '../pages/practice/practice.vue';
import UploadPage from '../views/upload.vue';
import VueXPage from '../pages/vuex/vuex.vue';
import LoginPage from '../pages/login/Login.vue';

import XXXPage from '../views/XXX.vue';
import OOOPage from '../views/OOO.vue';
import RouterPage from '../pages/router/Router.vue';
import Container from '../pages/container.vue';

// 1. 创建路由数组
const routes: Array<RouteRecordRaw> = [
    {
        path: '/basic',
        name: 'basic',
        component: Container,
        children: [
            {
                path: 'button',
                component: ButtonPage,
            },
            {
                path: 'check',
                component: CheckPage,
            },
            {
                path: 'card',
                component: CardList,
            },
            {
                path: 'list',
                component: PracticePage,
            },
        ],
    },
    {
        path: '/route-practise',
        component: RouterPage,
    },
    {
        path: '/practise',
        component: Container,
        children: [
            {
                path: 'list',
                component: PracticePage,
            },
        ],
    },
    // { path: '/router', component: RouterPage },
    {
        path: '/xxx',
        component: XXXPage,
    },
    {
        path: '/ooo',
        component: OOOPage,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/home',
        name: 'Home',
        component: CardList,
    },
    {
        path: '/memberDetail',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/nested',
        name: 'Nested',
        component: NestedPage,

        // /search 功能描述     ?wd=chaoye   queryParams 查询参数
        // /Users/xuhangchen/AndroidStudioProjects/SecoundeApp/gradle
        children: [
            { path: '', name: '普通嵌套页面', component: NtNormalPage },

            {
                path: 'getData/:a/:b/:c',
                component: NtParamsPage,
            },
            {
                path: 'getData',
                component: NtParamsPage,
            },
            {
                path: 'NtNormalPage/:q',
                component: NtParamsPage,
                name: 'zczc',
            },
            {
                path: 'params/:id',
                name: '携带参数',
                component: NtParamsPage,
                props: route => ({ query: route.query.q }),
            },
            {
                path: 'params',
                name: '携带参数',
                component: NtParamsPage,
                props: route => ({ query: route.query.q }),
            },
        ],
    },

    {
        path: '/rp/check',
        name: 'Check',
        component: CheckPage,
    },
    {
        path: '/rp/button',
        name: 'button',
        component: ButtonPage,
    },
    {
        path: '/rp/border',
        name: 'Border',
        component: BorderPage,
    },

    {
        path: '/upload',
        name: 'upload',
        component: UploadPage,
    },
    {
        path: '/vuex',
        name: 'vuex',
        component: VueXPage,
    },

    {
        path: '/practice',
        component: PracticePage,
    },
    {
        path: '/404',
        component: PracticePage,
    },

    {
        path: '',
        redirect: '/home',
    },
];

// 2. 创建Vue Router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 3. Ts导出
export default router;
