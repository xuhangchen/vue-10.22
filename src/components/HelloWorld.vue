<template>
    <div id="app">
        <el-button>{{ message }}</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    data() {
        return {
            message: 'ElementButton',
        };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
div {
    font-size: 100px;
    color: #42b983;
}
</style>
