/* eslint-disable vue/no-parsing-error */
<template>
    <div style="height: 100%;width: 100%;position: absolute;">
        <el-container style="height: 100%;">
            <el-aside width="200px">
                <el-row class="tac">
                    <div
                        style="object-fit: cover;width:100%;display: flex;align-items: center;justify-content: center;"
                    >
                        <img style="width: 200px; height: 60px;" src="../assets/jr.jpg" alt="" />
                    </div>
                    <el-col :span="12">
                        <el-menu
                            class="el-menu-vertical-demo"
                            default-active="1"
                            router="true"
                            @open="handleOpen"
                            @close="handleClose"
                        >
                            <div v-for="(subMenu, index) in menuList" :key="index">
                                <div v-if="subMenu.type === 'MENU_LIST'">
                                    <el-sub-menu :index="subMenu.content">
                                        <template #title>
                                            <i :class="`el-icon-${subMenu.icon}`"></i>
                                            <span>{{ subMenu.content }}</span>
                                        </template>

                                        <el-menu-item-group
                                            v-for="(item, index) in subMenu.subMenuGroup"
                                            :key="index"
                                            :title="item.content"
                                        >
                                            <el-menu-item
                                                v-for="(menuItem, index) in item.subMenuList"
                                                :key="index"
                                                :index="menuItem.url"
                                            >
                                                {{ menuItem.content }}
                                            </el-menu-item>
                                        </el-menu-item-group>
                                    </el-sub-menu>
                                </div>

                                <div v-if="subMenu.type === 'ITEM'">
                                    <el-menu-item :key="index" :index="subMenu.url">
                                        <template #title>
                                            <i :class="`el-icon-${subMenu.icon}`"></i>
                                            <span>{{ subMenu.content }}</span>
                                        </template>
                                    </el-menu-item>
                                </div>
                            </div>
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
import { Bin, MenuItem, MenuType, SubMenuItem } from '@/model/menu.model';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        // CardList,
    },

    created() {
        let router = this.$route;
    },

    setup() {
        // constructor(public title: string, public id: string, public subMenu: Array<SubMenuItem>) {}

        let basic = new MenuItem('基础组件', '1', '', MenuType.MENU_LIST, 'wind-power');
        let basicGroup1 = new MenuItem('基础组件 -> 分组一', '', '', MenuType.MENU_GROUP, 'group1');
        let basicGroup2 = new MenuItem('基础组件 -> 分组二', '', '', MenuType.MENU_GROUP, 'group2');

        basicGroup1.subMenuList.push(
            new MenuItem('按钮', 'button', '/basic/button', MenuType.ITEM),
            new MenuItem('单选/多选', 'check', '/basic/check', MenuType.ITEM)
        );
        basicGroup2.subMenuList.push(
            new MenuItem('卡片', 'card', '/basic/card', MenuType.ITEM),
            new MenuItem('列表', 'list', '/basic/list', MenuType.ITEM)
        );
        basic.subMenuGroup.push(basicGroup1, basicGroup2);

        let router = new MenuItem('路由', '2', '/route-practise', MenuType.ITEM, 'menu');
        // let practise = new MenuItem('综合练习', '3', '', MenuType.MENU_LIST, 'food');
        // let vueX = new MenuItem('VueX', '4', '', MenuType.MENU_LIST, 'setting');

        // const menuList = [basic, router, practise, vueX];
        const menuList = [basic, router];

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
            menuList,
            handleOpen,
            handleClose,
            subList,
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
