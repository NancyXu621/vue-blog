<template>
    <el-menu :collapse="isCollapse" @open="handleOpen" @close="handleClose">
        <!-- 单个菜单 -->
        <el-menu-item v-for='(item, index) in menuList' :key="index">
            <template #title>
                {{ item.title }}
            </template>
        </el-menu-item>
        <!-- 带有子菜单 -->
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false,
            menuList: [
                {
                    icon: "el-icon-s-home",
                    title: "首页"
                },
                {
                    icon: "",
                    title: "书籍"
                },
                {
                    icon: "",
                    title: "音乐",
                    submenuList: [
                        {
                            icon: "",
                            subtitle: "我的音乐"
                        },
                        {
                            icon: "",
                            subtitle: "我的收藏"
                        },
                        {
                            icon: "",
                            subtitle: "我的歌单"
                        }
                    ]
                },
                {
                    icon: "",
                    title: "视频",
                    submenuList: [
                        {
                            icon: "",
                            subtitle: "电视剧"
                        },
                        {
                            icon: "",
                            subtitle: "电影"
                        },
                        {
                            icon: "",
                            subtitle: "动漫"
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleOpen() {
            this.isCollapse = true
        },
        handleClose() {
            this.isCollapse = false
        }
    }
}
</script>

<style></style>