<template>
    <Home></Home>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import MyFirstComppnent from './components/MyFirstComppnent.vue';
import Home from './pages/home-improve.vue';

export default defineComponent({
    name: 'App',
    components: {
        Home,
        // HelloWorld,
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
