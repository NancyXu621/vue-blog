<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Layout from '../src/layout/index.vue'
export default {
    data() {
        return {
            include: [''],
        }
    },
    components: { Layout },
    mounted() { },
    methods: {
        getList() { }
    }
};
</script>

<style>
@import './assets/global.css';

html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

#app {
    width: 100%;
    height: 100%;
}
</style>
