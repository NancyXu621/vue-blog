<template>
    <div class="home">
        <div class="home_content">
            <el-table :data="list">
                <el-table-column prop="title" label="歌名" />
                <el-table-column prop="name" label="歌手" />
                <el-table-column prop="value" label="专辑" />
                <el-table-column>
                    <template #default>
                        <el-button type="primary" @click="play()">播放</el-button>
                        <el-button type="primary" @click="add()">收藏</el-button>
                        <el-button type="danger" @click="del()">移除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>

import { Moon, Sunny } from '@element-plus/icons-vue'

export default {
    data() {
        return {
            list: [
                {
                    title: "中国义勇军进行曲",
                    name: "聂耳",
                    value: "群"
                },
                {
                    title: "My Heart Will Go On",
                    name: "王菲",
                    value: "是"
                },
                {
                    title: "背包客",
                    name: "张国荣",
                    value: "否"
                }
            ],
            inputText: "",
            darkMode: false,
        };
    },
    components: { Moon, Sunny },
    methods: {
        /**
         * 
         */
        getList() {
            console.log('获取每天推荐的音乐')
        },
        /** 播放音乐 */
        play() {
            console.log('111添加')
        },
        add() {
            console.log('222收藏我的喜欢')
        }
    },
};
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .home_content {
        width: 100%;
        display: flex;
    }
}
</style>
