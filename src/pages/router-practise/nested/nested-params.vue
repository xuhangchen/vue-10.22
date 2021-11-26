<template>
    <div style="height: 100%;width: 100%;">
        <div style="color:green">参数跳转</div>

        <div>Params: {{ $route.params }}</div>
        <div>Query: {{ $route.query }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: {},

    setup() {
        return {};
    },
});
</script>

<style></style>
