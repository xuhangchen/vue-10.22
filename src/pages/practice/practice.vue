<template>
    <div style="height: 100%;">
        <div @click="onTitleClick">综合练习</div>
        <div style="display: flex;">
            <el-button style="margin-left: auto;" @click="onAddClick()" type="primary">Add</el-button>
        </div>

        <el-table height="85%" :data="tableData" @row-click="onRowClick" :row-class-name="tableRowClassName">
            <el-table-column type="index" :index="indexMethod" />

            <el-table-column prop="date" label="日期" width="200" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />

            <el-table-column prop="深蹲" label="深蹲">
                <template #default="item">
                    <div>
                        <div>index: {{ item.$index }}</div>

                        <div v-if="!item.row.isEdit">{{ item.row.squat }}</div>

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

            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button type="text" size="small" @click.prevent="deleteRow(scope.$index, $event)">
                        不够歪开除
                    </el-button>
                </template>
            </el-table-column>

            <el-table-column>
                <template #default="item">
                    <div>
                        <button @click="onItemClick(tableData[item.$index], $event)">
                            {{ item.row.isEdit ? '保存' : '编辑' }}
                        </button>
                    </div>
                </template>
            </el-table-column>

            <el-table-column>
                <template #default="item">{{ item.row }}</template>
            </el-table-column>
        </el-table>
    </div>

    <el-dialog v-model="dialogFormVisible" title="组员入会">
        <el-form :model="form">
            <el-form-item
                v-for="item in tableKeyList"
                :key="item"
                :label="item === 'date' ? '日期' : item === 'name' ? '姓名' : '深蹲'"
                :label-width="formLabelWidth"
            >
                <el-input v-if="'date' === item" v-model="form.date" autocomplete="off"></el-input>
                <el-input v-if="'name' === item" v-model="form.name" autocomplete="off"></el-input>
                <el-input v-if="'shendun' === item" v-model="form.shendun" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="Address" :label-width="formLabelWidth">
                <el-select v-model="form.address" placeholder="Please select a Address">
                    <el-option label="Shanghai" value="shanghai"></el-option>
                    <el-option label="dongguan" value="dongguan"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="addMembers()">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import Vue, { getCurrentInstance } from 'vue';
import { TableItem } from '@/model/table.model';
import router from '@/router';
import { Ref, ref, SetupContext } from 'vue';
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import mitt from 'mitt';
import { emitter } from './eventBus';

export default defineComponent({
    data() {
        return {
            tableKeyList: ['date', 'name', 'shendun'],
            dialogFormVisible: false,

            dialogTableVisible: false,
            gridData: {
                data: 123,
            },
            formLabelWidth: '120px',
        };
    },
    created() {
        this.getData();
    },
    methods: {
        deleteRow(index: number, e: Event): void {
            this.tableData.splice(index, 1);
            e.stopPropagation();
        },
        addMembers() {
            console.log(this.form);
            this.tableData.push(this.form);
            this.form = ref({});
            this.dialogFormVisible = false;
        },
        getKeyNameByString(keyName: string): any {
            Object.entries(this.form).map(([k, v]) => {
                console.log('KEYXXX---', k);
                if (k === keyName) {
                    console.log('成功');
                    return this.form;
                }
            });

            return 'default';
        },
        onAddClick() {
            this.dialogFormVisible = true;
        },
        indexMethod(index: number) {
            return index + 1;
        },

        onItemClick(item: TableItem, e: Event) {
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

    mounted() {
        // this.$on('testEvent', this.customLog);
    },

    setup(props: any, context: SetupContext) {
        // const vueEvent = getCurrentInstance()?.appContext.config.globalProperties.$mybus;
        // console.log('vueEvenSET', vueEvent);
        // console.log('vueEvent', getCurrentInstance());

        let onTitleClick = ref((eventx: Event) => {
            // Vue.$on('test', this.customLog);
            // Vue.$emits('testEvent');
            console.log('123');
            // eventBus.$emit('testEvent');
            // const vueEvent = getCurrentInstance()?.appContext.config.globalProperties.$mybus;
            console.log('vueEvent', emitter);
            emitter.emit('testEvent');
        });

        let customLog = () => {
            console.log('触发事件');
        };
        let form: Ref<any> = ref({
            name: '',
            date: '默认时间',
            address: 'Shanghai',
            shendun: 0,
            desc: '',
        });
        let tableData: Ref<Array<TableItem>> = ref([]);
        // let tableData: any = [];
        const getData = () => {
            setTimeout(() => {
                tableData.value.push(
                    new TableItem('2016-05-03', '超人超', 'ShangHai', 180),
                    new TableItem('2016-05-03', '体能蒋', 'ShangHai', 200),
                    new TableItem('2016-05-03', '大老王', 'ShangHai', 200),
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
                tableData.value[row.rowIndex].name === '大老王' ? (style = 'error-row') : '';
                return style;
            }
            return style;
        });

        const $route = useRoute();
        // const $router = useRouter();
        console.log($route);
        // console.log($router);

        const onRowClick = ref((x: TableItem, y: any, e: any) => {
            console.warn('DATA', x, y, e);
            console.log(y);

            if (y.property === '深蹲') {
                return;
            }
            router.push({ path: '/memberDetail', query: { bro: JSON.stringify(x) } });
            // $router.push({ path: '/about', query: { bro: JSON.stringify(x) } });
        });
        return {
            tableData,
            getData,
            tableRowClassName,
            onRowClick,
            form,
            customLog,
            onTitleClick,
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

.el-table .error-row {
    --el-table-tr-background-color: skyblue;
}
</style>
