<!--
 * @Description: 菜单栏组件
 * @Autor: xuhangchen
 * @Date: 2021-11-26 14:10
 * @LastEditTime: 2021-11-26 16:19
-->
<template>
    <el-aside class="root">
        <el-row class="tac">
            <div class="menu-head-image">
                <img class="head-image" :src="imgSrcAssets" alt="" />
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

                                <el-menu-item
                                    v-for="(item, index) in subMenu.subMenuList"
                                    :key="index"
                                    :index="subMenu.url + item.url"
                                >
                                    <span>{{ item.content }}</span>
                                </el-menu-item>
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
</template>

<script lang="ts">
import { MenuItem, MenuType } from '@/model/menu.model';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            imgSrc: '../../../assets/jr.jpg',
            imgSrcAssets: require('../../../assets/jr.jpg'),
        };
    },
    setup() {
        let basic = new MenuItem('基础组件', '1', '', MenuType.MENU_LIST, 'wind-power');
        let basicGroup1 = new MenuItem('基础组件 -> 分组一', '', '', MenuType.MENU_GROUP, 'group1');
        let basicGroup2 = new MenuItem('基础组件 -> 分组二', '', '', MenuType.MENU_GROUP, 'group2');

        basicGroup1.subMenuList.push(
            new MenuItem('按钮', 'button', '/basic/button', MenuType.ITEM),
            new MenuItem('单选/多选', 'check', '/basic/check', MenuType.ITEM)
        );
        basicGroup2.subMenuList.push(
            new MenuItem('卡片', 'card', '/basic/card', MenuType.ITEM)
            // new MenuItem('列表', 'list', '/basic/list', MenuType.ITEM)
        );
        basic.subMenuGroup.push(basicGroup1, basicGroup2);

        let router = new MenuItem('路由', '2', '/route-practise', MenuType.ITEM, 'menu');
        let practise = new MenuItem('综合练习', '3', '/practise', MenuType.MENU_LIST, 'food');
        practise.subMenuList.push(new MenuItem('列表', '1', '/list', MenuType.ITEM));

        const menuList = [basic, router, practise];

        const handleOpen = (key: string, keyPath: string) => {
            console.log(key, keyPath);
        };
        const handleClose = (key: string, keyPath: string) => {
            console.log(key, keyPath);
        };
        return { menuList, handleOpen, handleClose };
    },
});
</script>

<style scoped>
.menu-head-image {
    object-fit: cover;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.head-image {
    width: 200px;
    height: 60px;
}

.root {
    width: 200px;
}
</style>
