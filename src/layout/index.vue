<template>
    <div class="layout_index">
        <!-- 头部 -->
        <yun-header></yun-header>
        <!-- 左侧菜单 -->
        <yun-aside></yun-aside>
        <router-view></router-view>
    </div>
</template>

<script>
import yunHeader from "./header/header.vue";
import yunAside from "./aside/aside.vue";
export default {
    components: {
        yunHeader,
        yunAside,
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
.layout_index {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    overflow: hidden;
}
</style>
