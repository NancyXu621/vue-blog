<template>
  <div class="home">
    <el-table :data="list" class="home_content_table" style="width: 100%">
      <el-table-column prop="title" label="歌名" align="center" />
      <el-table-column prop="name" label="歌手" align="center" />
      <el-table-column prop="value" label="专辑" align="center" />
      <el-table-column label="操作" align="center">
        <template #default>
          <!-- <el-button type="primary" @click="play()">播放</el-button> -->
          <!-- <el-button type="primary" @click="add()">收藏</el-button> -->
          <!-- <el-button type="danger" @click="del()">移除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Moon, Sunny } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      list: [
        {
          title: "中国义勇军进行曲",
          name: "聂耳",
          value: "群星",
          url: "",
        },
        {
          title: "My Heart Will Go On",
          name: "王菲",
          value: "是",
          url: "",
        },
        {
          title: "那是你离开北京的生活",
          name: "薛之谦",
          value: "是",
          url: "",
        },
        {
          title: "爸爸去哪里呀",
          name: "群星",
          value: "群星",
          url: "",
        },
      ],
      inputText: "",
      darkMode: false,
    };
  },
  components: { Moon, Sunny },
  mounted() {
    // this.getList();
  },
  methods: {
    /** */
    getList() {
      // this.list = [{}]
      console.log("获取每天推荐的音乐");
    },
    /** 播放音乐 */
    play() {
      console.log("111添加我的喜欢");
    },
    /**  */
    add() {
      console.log("222收藏我的喜欢");
    },
    del() {
      console.log("333删除我的喜欢");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;

  .home_content_table {
    // width: 100%;
    height: 100%;
    flex: 1;
    padding: 12px;
  }

  // .home_content {
  //     display: flex;
  // todo
}
</style>
