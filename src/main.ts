import { createApp, defineComponent } from 'vue';
import CY from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Vuex, { createStore } from 'vuex';
import router from './router';

import { Store } from 'element-plus/lib/components/table/src/store';
import Vue from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// const CounterPage = defineComponent({
//     // state
//     data() {
//         return {
//             count: 0,
//         };
//     },
//     // view
//     template: `

//     <div>{{ count }}</div>
//     <div>{{ this.$store.state.count }}</div>
//     <button @click='onPulsClick()'>+1</button>
//   `,
//     // actions
//     methods: {
//         onPulsClick() {
//             // console.log('123', (store.state.count = store.state.count += 1));
//             store.commit('increment');
//         },
//         increment() {
//             this.count++;
//         },
//     },
// });

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            count: 9527,
        };
    },
    mutations: {
        increment(state: any) {
            state.count++;
        },
    },
});

// 1. 创建App
const app = createApp(CY, {
    onTestEvent() {
        console.log('嘿嘿嘿');
    },
});

import { emitter } from './pages/practice/eventBus';

app.config.globalProperties.$mybus = emitter;

// 2. 引入组件库
app.use(ElementPlus);

// 3. 引入路由
app.use(router);

// 4. 引入VueX状态管理   --->  Flex Redux
app.use(store);

app.mount('#app');
