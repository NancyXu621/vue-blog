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
                    title: "首页"//视频推荐
                },
                {
                    icon: "",
                    title: "书籍"//文本编辑
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
                },
                {
                    icon: "",
                    title: "我的图库",
                    submenuList: [
                        {
                            icon: "",
                            subtitle: "收藏"
                        }
                    ]
                },
                {
                    icon: "",
                    title: "待办事项",
                    submenuList: [
                        {
                            iocn:"",
                            subtitle:"待办事项"
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