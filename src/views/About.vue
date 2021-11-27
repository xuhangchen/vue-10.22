<template>
    <div class="about">
        <h1>组员详情</h1>
    </div>

    <div>
        {{ $route.query.bro }}

        <el-descriptions title="User Info">
            <!-- <el-descriptions-item label="姓名">{{ JSON.parse($route!.query!.bro!). }}</el-descriptions-item> -->
            <el-descriptions-item label="入会日期">18100000000</el-descriptions-item>
            <el-descriptions-item label="地址">Suzhou</el-descriptions-item>
            <el-descriptions-item label="Remarks">
                <el-tag size="small">School</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="Address">
                No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            // data: $route.query.bro,
        };
    },
});
</script>

<style></style>
