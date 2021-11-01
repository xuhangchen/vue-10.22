<template>
    <div>综合练习</div>
    <el-table
        height="85%"
        :data="tableData"
        @row-click="onRowClick"
        style="width: 100%"
        :row-class-name="tableRowClassName"
    >
        <el-table-column type="index" :index="indexMethod" />
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
        <el-table-column prop="深蹲" label="深蹲">
            <template #default="item">
                <div>
                    <div>index: {{ item.$index }}</div>
                    <div v-if="!tableData[item.$index].isEdit">{{ tableData[item.$index].squat }}</div>
                    <div v-if="tableData[item.$index].isEdit">
                        <el-input-number
                            v-model="tableData[item.$index].squat"
                            :min="0"
                            :max="100000"
                            @change="onSquatChange(tableData[item.$index])"
                        />
                    </div>
                </div>
            </template>
        </el-table-column>
        <el-table-column>
            <template #default="item">
                <div>
                    <button @click="onItemClick(tableData[item.$index], $event)">
                        {{ tableData[item.$index].isEdit ? '保存' : '编辑' }}
                    </button>
                </div>
            </template>
        </el-table-column>
        <el-table-column>
            <template #default="item">
                <div>
                    {{ tableData[item.$index] }}
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts">
import { TableItem } from '@/model/table.model';
import { getCurrentInstance, Ref, ref } from 'vue';
import { defineComponent } from 'vue-demi';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
    created() {
        this.getData();
    },
    methods: {
        indexMethod(index: number) {
            return index + 1;
        },

        onItemClick(item: TableItem, e: any) {
            console.log('event', e);
            // 因此它支持W3C的stopPropagation()方法
            e.stopPropagation();

            if (item.isEdit) {
                console.log(item.squat);
            }

            item.isEdit = !item.isEdit;
        },

        editSquat(squat: number) {
            console.log('深蹲');
        },

        onSquatChange(item: TableItem) {
            console.log(item);
        },
    },
    setup(props: any, context: any) {
        let tableData: Ref<Array<TableItem>> = ref([]);
        // let tableData: any = [];
        const getData = () => {
            setTimeout(() => {
                tableData.value.push(
                    new TableItem('2016-05-03', '超人超', 'ShangHai', 180),
                    new TableItem('2016-05-03', '体能蒋', 'ShangHai', 2000),
                    new TableItem('2016-05-03', '标杆海', 'ShangHai', 200),
                    new TableItem('2016-05-03', '社会杜', 'ShangHai', 160),
                    new TableItem('2016-05-03', '丁警官👮🏻', 'ShangHai', 220),
                    new TableItem('2016-05-03', '许弟弟', 'ShangHai', 1),
                    new TableItem('2016-05-03', '许弟弟', 'ShangHai', 1),
                    new TableItem('2016-05-03', '超人超', 'ShangHai', 180),
                    new TableItem('2016-05-03', '许弟弟', 'ShangHai', 1),
                    new TableItem('2016-05-03', '许弟弟', 'ShangHai', 1),
                    new TableItem('2016-05-03', '体能蒋', 'ShangHai', 2000),
                    new TableItem('2016-05-03', '许弟弟', 'ShangHai', 1),
                    new TableItem('2016-05-03', '许弟弟', 'ShangHai', 1)
                );
            }, 800);
        };

        const tableRowClassName = ref((row: any) => {
            let style = '';
            if (tableData.value[row.rowIndex]) {
                tableData.value[row.rowIndex].name === '超人超' ? (style = 'warning-row') : '';
                tableData.value[row.rowIndex].name === '体能蒋' ? (style = 'success-row') : '';
                return style;
            }
            return style;
        });

        const $route = useRoute();
        const $router = useRouter();
        console.log($route);
        console.log($router);

        const onRowClick = ref((x: TableItem, y: any, e: any) => {
            console.error('DATA', x, y, e);
            console.log(y);

            if (y.property === '深蹲') {
                return;
            }
            $router.push({ path: '/about', query: { bro: JSON.stringify(x) } });
        });
        return {
            tableData,
            getData,
            tableRowClassName,
            onRowClick,
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
</style>
