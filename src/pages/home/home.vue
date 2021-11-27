<template>
    <div style="height: 100%;width: 100%;position: absolute;">
        <el-container style="height: 100%;">
            <el-aside width="200px">
                <el-row class="tac">
                    <div style="width:100%;display: flex;align-items: center;justify-content: center;">
                        <h5>Hello Vue</h5>
                    </div>
                    <el-col :span="12">
                        <el-menu
                            class="el-menu-vertical-demo"
                            default-active="1"
                            router="true"
                            @open="handleOpen"
                            @close="handleClose"
                        >
                            <el-sub-menu index="1">
                                <template #title>
                                    <i class="el-icon-wind-power"></i>
                                    <span>基础组件</span>
                                </template>

                                <el-menu-item-group title="基础组件 -> 分组一">
                                    <el-menu-item>
                                        <router-link to="xxx">XXX</router-link>
                                    </el-menu-item>

                                    <el-menu-item index="home">
                                        <router-link to="/home">按钮</router-link>
                                    </el-menu-item>

                                    <el-menu-item index="about">
                                        <router-link to="/颜色">颜色</router-link>
                                    </el-menu-item>

                                    <el-menu-item>
                                        边框1
                                    </el-menu-item>

                                    <el-menu-item index="about">
                                        边框2
                                    </el-menu-item>

                                    <el-menu-item index="about">
                                        边框3
                                    </el-menu-item>
                                </el-menu-item-group>

                                <el-menu-item-group title="基础组件 -> 分组二">
                                    <el-menu-item v-for="(item, index) in subList" :key="index" :index="item.id">
                                        {{ item.title }}
                                    </el-menu-item>
                                </el-menu-item-group>

                                <el-sub-menu index="home">
                                    <template #title>一级标题</template>
                                    <el-menu-item index="3-1-1">二级标题</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>

                            <el-menu-item index="router">
                                <template #title>
                                    <i class="el-icon-menu"></i>
                                    <span>路由</span>
                                </template>
                            </el-menu-item>

                            <el-sub-menu>
                                <template #title>
                                    <i class="el-icon-food"></i>
                                    <span>路由练习</span>
                                </template>

                                <!-- <el-menu-item
                                    v-for="menuItem in routeMenuList[0].subMenu"
                                    :key="menuItem.id"
                                    :index="menuItem.url"
                                >
                                    <span>{{ menuItem.title }}</span>
                                </el-menu-item> -->

                                <el-sub-menu index="111">
                                    <template #title>
                                        嵌套路由
                                    </template>
                                    <el-menu-item index="/nested">普通路由-跳转Check</el-menu-item>

                                    <el-menu-item index="/nested/getData?wd={123}">路由传送参 QueryParams</el-menu-item>
                                    <el-menu-item index="/nested/getData/123/123/123">
                                        路由传送参 Params 123
                                    </el-menu-item>

                                    <el-menu-item :route="{ params: { q: 123 }, name: 'zczc', query: { 卧推: '123' } }">
                                        路由传送参综合
                                    </el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>

                            <el-menu-item index="3" disabled>
                                <i class="el-icon-document"></i>
                                <span>禁用导航</span>
                            </el-menu-item>
                            <el-menu-item index="/practice">
                                <i class="el-icon-setting"></i>
                                <span>综合练习</span>
                            </el-menu-item>
                            <el-menu-item index="/upload">
                                <i class="el-icon-upload"></i>
                                <span>上传组件</span>
                            </el-menu-item>
                            <el-menu-item index="/vuex">
                                <i class="el-icon-upload"></i>
                                <span>VueX</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>

            <el-container style="height: 100%; ">
                <el-header style="height: 60px;">
                    <div style="text-align: center;line-height:60px;height: 60px;">第一个超爷的项目</div>
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
import { Bin, MenuItem, SubMenuItem } from '@/model/menu.model';
import router from '@/router';
import mitt from 'mitt';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        // CardList,
    },

    created() {
        // let router = this.$route;
    },

    mounted() {
        console.log('home', '23');
        console.log('home', mitt());
        mitt().on('testEvent', () => {
            console.log('成功了');
        });
    },

    setup() {
        // clg
        // this.$route.query
        const onMenuClick = () => {
            // console.log('123');
            // router.push({ path: '/border' });
        };
        const subList = [
            new SubMenuItem('2-1', '边框', 'home'),
            new SubMenuItem('2-2', '按钮', 'home'),
            new SubMenuItem('2-3', '颜色', 'home'),
        ];

        // const routeMenuList = [
        //     new MenuItem('路由', '2', [
        //         new SubMenuItem('2-1', '边框', '/rp/border'),
        //         new SubMenuItem('2-2', '按钮', '/rp/button'),
        //         new SubMenuItem('2-3', '复选框', '/rp/check'),
        //     ]),
        // ];

        const goBack = () => {
            console.log('go back');
        };

        const handleOpen = (key: string, keyPath: string) => {
            console.log(key, keyPath);
        };
        const handleClose = (key: string, keyPath: string) => {
            console.log(key, keyPath);
        };

        return {
            handleOpen,
            handleClose,
            subList,
            // routeMenuList,
            goBack,
            onMenuClick,
        };
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
</style>
