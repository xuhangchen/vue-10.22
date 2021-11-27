<template>
    <div style="">
        <el-container class="home-root">
            <!-- Left -->
            <Menu></Menu>
            <!-- Right -->
            <el-container class="home-container">
                <el-header style="height: 60px;">
                    <div class="home-header">Hello Vue3</div>
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>

                <el-footer>
                    <div>
                        Copyright © 2021 .All rights reserved.
                    </div>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import mitt from 'mitt';
import { defineComponent, getCurrentInstance } from 'vue';
import { emitter } from '../practice/eventBus';
import Menu from './components/Menu.vue';
export default defineComponent({
    components: {
        Menu,
    },

    mounted() {
        // const vueEvent = getCurrentInstance()?.appContext.config.globalProperties.$mybus;
        emitter.on('testEvent', () => {
            console.log('成功了');
        });
    },

    created() {},

    setup() {
        return {};
    },
});
</script>

<style>
.el-header,
.el-footer {
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    background-color: #f0f2f5;
    color: var(--el-text-color-primary);
    text-align: center;
    height: 30%;
}

.el-aside {
    background-color: #fff;
    color: var(--el-text-color-primary);
    text-align: left;
    height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
}

.el-main {
    color: var(--el-text-color-primary);
    text-align: center;
    height: 30%;
}

.home-root {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #fff;
}

.home-container {
    height: 100%;
}

.home-header {
    text-align: center;
    line-height: 60px;
    height: 60px;
}
</style>
