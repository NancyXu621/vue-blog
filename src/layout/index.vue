<template>
    <div class="layout_index">
        <yun-header></yun-header>
        <div class="layout_index_content">
            <yun-aside></yun-aside>
            <router-view class="layout_index_content_pages"></router-view>
        </div>
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

<style lang="scss" scoped>
.layout_index {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    overflow: hidden;

    .layout_index_content {
        width: 100%;
        height: 100%;
        display: flex;

        .layout_index_content_pages {
            padding: 12px;
            flex: 1;
        }
    }
}
</style>
