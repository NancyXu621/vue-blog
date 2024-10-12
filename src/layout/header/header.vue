<template>
    <div class="yun_blog_header">
        <span class="yun_blog_header_item">个人设置</span>
        <span class="yun_blog_header_item" style="margin:0 12px 0 auto" @click="logout">退出登录</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            darkMode: false,
        };
    },
    methods: {
        /**
         * 退出登录 
         */
        logout() {
            this.$router.push("/login");
        },
    },
};
</script>

<style lang="scss" scoped>
.yun_blog_header {
    width: 100%;
    background: #0960bd;
    display: flex;
    padding: 12px;

    .yun_blog_header_item {
        margin: 0 12px 0 0;
        color: #fff;
    }
}
</style>
