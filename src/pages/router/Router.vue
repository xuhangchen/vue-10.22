<template>
    <div>
        <div>Router</div>
        <div>
            <router-link to="list">普通跳转1</router-link>
            |
            <router-link to="list">携带参数2</router-link>
            |
            <el-button type="warning">普通跳转</el-button>
            |
            <el-button type="success">携带参数</el-button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style></style>
