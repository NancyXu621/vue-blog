<template>
    <div class="yun_aside">
        <el-menu :collapse="isCollapse" v-for="(item, index) in menuList" :key="index + 'a'" :default-active="index">
            <!-- 单个菜单 -->
            <el-sub-menu v-if="item.children.length">
                <template #title>
                    <router-link :to="item.path + '/' + item.children[0]?.path">
                        <span> {{ item.meta?.title }}</span>
                    </router-link>
                </template>
            </el-sub-menu>
            <!-- <el-menu-item v-if="item.children.length">
                <template #title>
                    <router-link :to="item.path + '/' + item.children?.path">
                        <span> {{ item.meta?.title }}</span>
                    </router-link>
                </template>
            </el-menu-item> -->
            <!-- 带有子菜单 -->
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false,
            menuList: [],
        };
    },
    mounted() {
        this.menuList = this.$router.getRoutes()
    },
    methods: {
        handleOpen() {
            this.isCollapse = true;
        },
        handleClose() {
            this.isCollapse = false;
        },
    },
};
</script>

<style lang="scss" socped>
.yun_aside {
    background-color: #fff;
    // ::deep() .el-menu {
    //     background-color: #a4c7ec;
    // }
}
</style>
