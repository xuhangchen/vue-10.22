<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>Card name</span>
                <el-button class="button" type="text">Operation button</el-button>
            </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>

    <el-row>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </el-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({});
</script>

<style>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 480px;
}
</style>
