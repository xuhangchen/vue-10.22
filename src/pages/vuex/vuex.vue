<template>
    <div>VueX</div>
    <div>{{ count }}</div>
    <div>{{ localComputed }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
    components: {},

    data() {
        return {
            count: (this as any).$store!.state.count,
        };
    },

    setup() {
        return {};
    },
    computed: {
        localComputed: () => {
            return '123=456';
        },
        ...mapState(['count']),
        doneTodosCount: () => {
            return (this as any).$store.state.todos.filter((todo: any) => todo.done).length;
        },
    },
});
</script>

<style></style>
