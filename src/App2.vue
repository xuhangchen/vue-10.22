<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <!-- <MyFirstComppnent></MyFirstComppnent>
    <el-scrollbar height="400px">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </el-scrollbar> -->
    <Home></Home>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import MyFirstComppnent from './components/MyFirstComppnent.vue';
import Home from './pages/home.vue';

export default defineComponent({
    name: 'App',
    components: {
        // HelloWorld,
        Home,
        // MyFirstComppnent,
    },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

html body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>
