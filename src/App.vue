<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    watch: {
        $route(to, from) {
            console.log('请', to, from)
        }
    },
};
</script>

<style>
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
