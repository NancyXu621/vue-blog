<!-- 音转文 点击播放改文字的语音-->
<template>
    <el-button @click="add">新增</el-button>
    <audio src="//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/audio.mp3" preload id="music1"
        controls></audio>
    <div class="comment">
        <div class="comment-wrap" ref="wrapper">
            <ul class="list" ref="list">
                <li v-for="item in list" :key="item.id" @click="open(item)">
                    <span class="name">{{ item.time }}{{ item.roleplay }}：</span>
                    <span class="content">{{ item.text }}</span>
                </li>
            </ul>
        </div>
        <div class="rest-nums" v-show="restComment" @click="scrollBottom">
            {{ restComment }}条新消息
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            list: [
                {
                    id: 1,
                    text: "我说------",
                    roleplay: "申请人",
                    time: new Date,
                    startTime: 5,
                    endTime: 10,
                },
                {
                    id: 2,
                    text: "你说------",
                    roleplay: "被申请人",
                    time: new Date,
                    startTime: 30,
                    endTime: 35,
                },
                {
                    id: 3,
                    text: "你们说------",
                    roleplay: "书记员",
                    time: new Date,
                    startTime: 10,
                    endTime: 15,
                },
            ],
            restComment: 0, //显示新消息数
            restNums: 0,
            wrapperDom: null,
            listDom: null,
            wrapperHeight: 0,
        };
    },
    mounted() {
        this.wrapperDom = this.$refs.wrapper;
        this.listDom = this.$refs.list;
        this.wrapperHeight = this.wrapperDom.offsetHeight;//列表外的高度
    },
    methods: {
        // 播放
        open(item) {
            let myAud = document.getElementById("music1");
            // 设置当前时间
            myAud.currentTime = item.startTime;
            var pausing_function = function () {
                // 播放
                myAud.play();
                if (myAud.currentTime >= item.endTime) {
                    myAud.pause();
                    myAud.removeEventListener("timeupdate", pausing_function);
                }
            };
            myAud.addEventListener("timeupdate", pausing_function);
        },
        // 新增消息的数据
        add() {
            this.list.push({
                id: 1,
                text: "他们说------",
                roleplay: "仲裁员",
                time: new Date,
                startTime: 20,
                endTime: 50,
            });
            // 新增数据后面加载渲染数据
            this.$nextTick(() => {
                this.renderComment();
            });
        },
        // 渲染数据
        renderComment() {
            const listHight = this.listDom.offsetHeight;// 列表高度
            const diff = listHight - this.wrapperHeight; // 列表高度与容器高度差值
            const top = this.wrapperDom.scrollTop; // 列表滚动高度
            if (diff - top < 50) {
                if (diff > 0) {
                    this.wrapperDom.scrollTo({
                        top: diff + 20,
                        left: 0,
                        behavior: "smooth",// (平滑过渡效果)
                    });
                    this.restNums = 0;
                }
            } else {
                this.restNums++;
            }
            this.restComment = this.restNums >= 99 ? "99+" : this.restNums;
        },
        // 滚动到底部
        scrollBottom() {
            this.restNums = 0; // 清除剩余消息
            this.restComment = this.restNums;
            this.wrapperDom.scrollTo({
                top: this.listDom.offsetHeight,//x
                left: 0,//y
                behavior: "smooth",// (平滑过渡效果)
            });
        },
        router(item){
            this.$route.push(item)
        }
    },
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
  