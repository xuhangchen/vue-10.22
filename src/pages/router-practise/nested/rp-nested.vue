<template>
    <div style="height: 100%;width: 100%;">
        <h3>Nested - 嵌套路由</h3>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: {},

    setup() {
        const checked1 = ref(true);
        const checked2 = ref(false);
        const checked3 = ref(false);
        const checked4 = ref(false);
        const checked5 = ref(false);
        const checked6 = ref(false);
        const checked7 = ref(false);
        const checked8 = ref(false);

        const submit = () => {
            console.log(checked8.value);
        };

        return {
            checked1,
            checked2,
            checked3,
            checked4,
            checked5,
            checked6,
            checked7,
            checked8,
            submit,
        };
    },
});
</script>

<style></style>
