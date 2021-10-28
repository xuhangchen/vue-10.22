<template>
    <div style="height: 100%;width: 100%;position: absolute;">
        <el-container style="height: 100%;">
            <el-aside width="200px">
                <el-row class="tac">
                    <el-col :span="12">
                        <div style="text-align: center;"><h5>Hello Vue</h5></div>
                        <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                        >
                            <el-sub-menu index="1">
                                <template #title>
                                    <i class="el-icon-location"></i>
                                    <span>基础组件</span>
                                </template>

                                <el-menu-item-group title="基础组件分组一">
                                    <el-menu-item index="1-1">Card</el-menu-item>
                                    <el-menu-item index="1-2">item two</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group Two">
                                    <el-menu-item index="1-3">item three</el-menu-item>
                                </el-menu-item-group>
                                <el-sub-menu index="1-4">
                                    <template #title>item four</template>
                                    <el-menu-item index="1-4-1">item one</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span>路由</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <i class="el-icon-document"></i>
                                <span>禁用导航</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span>综合联系</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-container style="height: 100%; ">
                <el-header><el-page-header content="detail" @back="goBack" /></el-header>
                <el-main><CardList></CardList></el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CardList from './card-list.vue';

export default defineComponent({
    components: {
        CardList,
    },

    setup() {
        const goBack = () => {
            console.log('go back');
        };

        const handleOpen = (key: any, keyPath: any) => {
            console.log(key, keyPath);
        };
        const handleClose = (key: any, keyPath: any) => {
            console.log(key, keyPath);
        };

        return {
            handleOpen,
            handleClose,
            goBack,
        };
    },
});
</script>

<style>
.el-header,
.el-footer {
    background-color: #fff;
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
    background-color: green;
    color: var(--el-text-color-primary);
    text-align: center;
    height: 30%;
}
</style>
