<template>
    <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>

    <!-- <table class="demo-border">
        <tbody>
            <tr>
                <td class="text">Name</td>
                <td class="text">Thickness</td>
                <td class="line">Demo</td>
            </tr>
            <tr>
                <td class="text">Solid</td>
                <td class="text">1px</td>
                <td class="line">
                    <div></div>
                </td>
            </tr>
            <tr>
                <td class="text">Dashed</td>
                <td class="text">2px</td>
                <td class="line">
                    <div class="dashed"></div>
                </td>
            </tr>
        </tbody>
    </table> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style>
td {
    color: red;
}
.demo-border .text {
    width: 15%;
}
.demo-border .line {
    width: 70%;
}
.demo-border .line div {
    width: 100%;
    height: 0;
    border-top: 1px solid var(--el-border-color-base);
}
.demo-border .line .dashed {
    border-top: 2px dashed var(--el-border-color-base);
}

.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
