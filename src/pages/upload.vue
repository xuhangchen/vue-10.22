<template>
    <div>上传组件</div>
    <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
    >
        <el-button size="small" type="primary">Click to upload</el-button>
        <template #tip>
            <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
            </div>
        </template>
    </el-upload>

    <div class="demo-color-block">
        <span class="demonstration">With default value</span>
        <el-color-picker v-model="color1" />
    </div>
    <div class="demo-color-block">
        <span class="demonstration">With no default value</span>
        <el-color-picker v-model="color2" />
    </div>

    <el-progress type="circle" :percentage="100" status="success" />

    <el-progress type="dashboard" :percentage="80">
        <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
            <span class="percentage-label">Progressing</span>
        </template>
    </el-progress>

    <div id="container" />
</template>

<script lang="ts">
import { TableItem } from '@/model/table.model';
import { getCurrentInstance, Ref, ref } from 'vue';
import { defineComponent } from 'vue-demi';
import { useRoute, useRouter } from 'vue-router';
import { Chart } from '@antv/g2';

export default defineComponent({
    data() {
        return {
            fileList: [
                {
                    name: 'food.jpeg',
                    url:
                        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
                },
                {
                    name: 'food2.jpeg',
                    url:
                        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
                },
            ],
        };
    },
    methods: {
        handleRemove(file: any, fileList: any) {
            console.log(file, fileList);
        },
        handlePreview(file: any) {
            console.log(file);
        },
        handleExceed(files: any, fileList: any) {
            // this.$message.warning(
            //     `The limit is 3, you selected ${files.length} files this time, add up to ${files.length +
            //         fileList.length} totally`
            // );
        },
        beforeRemove(file: any, fileList: any): any {
            // return this.$confirm(`Cancel the transfert of ${file.name} ?`);
        },
    },

    mounted() {
        const chart = new Chart({
            container: 'container',
            autoFit: true,
            height: 500,
            padding: [50, 20, 50, 20],
        });
        chart.data(this.data);
        chart.scale('value', {
            alias: '销售额(万)',
        });
        chart.axis('type', {
            tickLine: {
                alignTick: false,
            },
        });
        chart.axis('value', false);
        chart.tooltip({
            showMarkers: false,
        });
        chart.interval().position('type*value');
        chart.interaction('element-active');
        // // 添加文本标注
        this.data.forEach(item => {
            chart
                .annotation()
                .text({
                    position: [item.type, item.value],
                    content: item.value,
                    style: {
                        textAlign: 'center',
                    },
                    offsetY: -30,
                })
                .text({
                    position: [item.type, item.value],
                    content: (item.percent * 100).toFixed(0) + '%',
                    style: {
                        textAlign: 'center',
                    },
                    offsetY: -12,
                });
        });
        chart.render();
    },

    setup() {
        const data = ref([
            { type: '未知', value: 654, percent: 0.02 },
            { type: '17 岁以下', value: 654, percent: 0.02 },
            { type: '18-24 岁', value: 4400, percent: 0.2 },
            { type: '25-29 岁', value: 5300, percent: 0.24 },
            { type: '30-39 岁', value: 6200, percent: 0.28 },
            { type: '40-49 岁', value: 3300, percent: 0.14 },
            { type: '50 岁以上', value: 1500, percent: 0.06 },
        ]);
        const color1 = ref('#409EFF');
        const color2 = ref(null);
        return {
            color1,
            color2,
            data,
        };
    },
});
</script>

<style>
.el-table .warning-row {
    --el-table-tr-background-color: var(--el-color-warning-lighter);
}
.el-table .success-row {
    --el-table-tr-background-color: var(--el-color-success-lighter);
}
.percentage-value {
    display: block;
    margin-top: 10px;
    font-size: 28px;
}

.percentage-label {
    display: block;
    margin-top: 10px;
    font-size: 12px;
}
</style>
