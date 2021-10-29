import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import CardList from '../pages/card-list.vue';
import CheckPage from '../pages/router-practise/rp-check.vue';
import ButtonPage from '../pages/router-practise/rp-button.vue';
import BorderPage from '../pages/router-practise/rp-border.vue';
import NestedPage from '../pages/router-practise/nested/rp-nested.vue';
import NtParamsPage from '../pages/router-practise/nested/nested-params.vue';
import NtNormalPage from '../pages/router-practise/nested/nested-normal.vue';
import PracticePage from '../pages/practice/practice.vue';
// import NtNormalPage from '../pages/router-practise/nested/nested-normal.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: CardList,
        // children: [{ path: '/about', name: 'about', component: CardList }],
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/check',
        name: 'Check',
        component: CheckPage,
    },
    {
        path: '/button',
        name: 'button',
        component: ButtonPage,
    },
    {
        path: '/border',
        name: 'Border',
        component: BorderPage,
    },
    {
        path: '/nested',
        name: 'Nested',
        component: NestedPage,
        children: [
            { path: '', name: '普通嵌套页面', component: NtNormalPage },
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
        ],
    },
    {
        path: '/practice',
        component: PracticePage,
    },

    {
        path: '',
        redirect: '/nested',
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
