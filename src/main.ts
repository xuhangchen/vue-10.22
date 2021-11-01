import { createApp, defineComponent } from 'vue';
import App from './App2.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router';
import { Store } from 'element-plus/lib/components/table/src/store';
import Vuex, { createStore } from 'vuex';
import Vue from 'vue';

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

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app');
