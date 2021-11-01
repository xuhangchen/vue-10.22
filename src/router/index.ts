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
import UploadPage from '../pages/upload.vue';
import VueXPage from '../pages/vuex/vuex.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: CardList,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
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
