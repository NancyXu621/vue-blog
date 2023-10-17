<template>
  <div class="comment">
    <div class="comment-wrap" ref="wrapper">
      <ul class="list" ref="list">
        <li v-for="item in list" :key="item.id" @click="open(item)">
          <span class="name">{{ item.time }}{{ item.name }}：</span>
          <span class="content">{{ item.content }}</span>
        </li>
      </ul>
    </div>
    <div class="rest-nums" v-show="restComment" @click="scrollBottom">{{ restComment }}条新消息</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [],//消息显示列表
      restComment: 0,//显示新消息数
      restNums: 0,
      wrapperDom: null,
      listDom: null,
      wrapperHeight: 0
    };
  },
  mounted() {
    this.initDom();
    const data = new Array(20).fill('');
    this.queue(data);
    setTimeout(() => {
      const list = new Array(10).fill('');
      this.queue(list);
    }, 30000);
  },
  methods: {
    // 初始化获取列表高度
    initDom() {
      this.wrapperDom = this.$refs.wrapper;
      this.listDom = this.$refs.list;
      this.wrapperHeight = this.wrapperDom.offsetHeight;//列表外的高度
    },
    // 队列添加消息 
    queue(data) {
      for (let i = 0; i < data.length; i++) {
        const opt = {
          time: new Date,
          name: "用户名",
          content: "评论内容................................",
          id: Date.now()
        }
        this.addTimeOut(opt);
      }
    },
    // 添加定时器
    addTimeOut(opt) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.addComment(opt);
          resolve()
        }, 1000);
      });
    },
    // 添加评论
    addComment(data) {
      this.list.push(data);
      this.$nextTick(() => {
        this.renderComment();
      });
    },
    // 渲染评论
    renderComment() {
      const listHight = this.listDom.offsetHeight;// 列表高度
      const diff = listHight - this.wrapperHeight; // 列表高度与容器高度差值
      const top = this.wrapperDom.scrollTop; // 列表滚动高度
      if (diff - top < 50) {
        if (diff > 0) {
          if (this.isBindScrolled) {
            this.isBindScrolled = false;
            this.wrapperDom.removeEventListener("scroll", this.addScroll);
          }
          this.wrapperDom.scrollTo({
            top: diff + 10,
            left: 0,
            behavior: "smooth"
          });
          this.restNums = 0;
        }
      } else {
        this.restNums++;
        if (!this.isBindScrolled) {
          this.isBindScrolled = true;
          this.wrapperDom.addEventListener("scroll", this.addScroll);
        }
      }
      this.restComment = this.restNums >= 99 ? "99+" : this.restNums;
    },
    addScroll() {
      this.debounce(this.listScroll, 200);
      this.isBindScrolled = true;
    },
    debounce(func, wait) {
      // 缓存一个定时器id
      let timer = 0;
      // 这里返回的函数是每次用户实际调用的防抖函数
      // 如果已经设定过定时器了就清空上一次的定时器
      // 开始一个新的定时器，延迟执行用户传入的方法
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(args)
        }, wait)
      }
    },
    //列表的滚动
    listScroll() {
      const ele = this.wrapperDom;
      const isBottom = isScrollBottom(ele, ele.clientHeight);
      if (isBottom) {
        this.restNums = 0;
        this.restComment = 0;
      }
    },
    isScrollBottom(ele, wrapHeight, threshold = 30) {
      const h1 = ele.scrollHeight - ele.scrollTop;
      const h2 = wrapHeight + threshold;
      const isBottom = h1 <= h2;
      return isBottom;
    },
    // 滚动到底部
    scrollBottom() {
      this.restNums = 0; // 清除剩余消息
      this.restComment = this.restNums;
      this.wrapperDom.scrollTo({
        top: this.listDom.offsetHeight,
        left: 0,
        behavior: "smooth"
      });
    },
    open(item) {
      console.log("获取消息的信息", item)
    }
  }
};
</script>


<style scoped>
.comment {
  width: 70%;
  height: 350px;
  position: relative;
  margin: 100px 0 0 20px;
}

.comment-wrap {
  height: 350px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.comment-wrap li {
  text-align: left;
  line-height: 30px;
  padding-left: 10px;
  background: rgba(0, 0, 0, 0.3);
  margin-top: 5px;
  border-radius: 15px;
  color: #fff;
}

.rest-nums {
  position: absolute;
  height: 24px;
  line-height: 24px;
  color: #f00;
  border-radius: 15px;
  padding: 0 15px;
  bottom: 10px;
  background: #fff;
  font-size: 14px;
  left: 10px;
}
</style>
