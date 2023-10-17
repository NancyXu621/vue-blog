<!-- 音转文 点击播放改文字的语音 -->
<template>
    <div class="comment">
        <div class="comment_audio">
            <audio src="//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/audio.mp3" preload="auto"
                id="music" type="audio/wav" controls></audio>
        </div>
        <div class="comment_list">
            <div class="comment_wrap" ref="wrapper">
                <div ref="list">
                    <div v-for="(item, index) in list" :key="item.id" class="comment_item">
                        <!-- <el-icon color="green" v-if="playAudio == true" @click="stop(item)">
                            <VideoPause />
                        </el-icon>
                        <el-icon color="red" v-else @click="open(item)">
                            <VideoPlay />
                        </el-icon> -->
                        <span>{{ item.speakerStartTime }}-{{ item.speakerEndTime }}</span>
                        <sapn> {{ item.speaker }}：{{ item.result }}</sapn>
                    </div>
                </div>
            </div>
            {{ result }}
            <div class="rest-nums" v-show="restComment" @click="scrollBottom">
                {{ restComment }}条新消息
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            restComment: 0, //显示新消息数
            restNums: 0,
            wrapperDom: null,
            listDom: null,
            wrapperHeight: 0,
            playAudio: false,
            result: "",
            ws: "",
        };
    },
    mounted() {
        this.wrapperDom = this.$refs.wrapper;
        this.listDom = this.$refs.list;
        this.wrapperHeight = this.wrapperDom.offsetHeight; //列表外的高度
        if (process.env.NODE_ENV == "development") {
            this.initwebscoket("ws://192.168.0.18:8050/api/voice/msg?trailId=1000");
        } else {
            this.initwebscoket(`wss://${window.location.hostname}:8083/api/voice/msg`);
        }
    },
    methods: {
        initwebscoket(url) {
            if ("WebSocket" in window) {
                // 打开一个 web socket
                this.ws = new WebSocket(url);
                let that = this;
                that.ws.onopen = function (evt) {
                    that.ws.send("发送数据");
                    setTimeout(function () {
                        that.ws.send("发送数据");
                    }, 30000)
                    console.log("发送消息", evt);
                };
                that.ws.onmessage = function (evt) {
                    console.log("接收消息");
                    if (evt.data) {
                        let data = JSON.parse(evt.data);
                        that.add(data);
                    }
                };
                that.ws.onclose = function (evt) {
                    if (evt.code == 4000) {
                        console.log("自主关闭");
                    } else {
                        console.log("连接关闭");
                    }
                };
                that.ws.onerror = function (error) {
                    console.log("连接出错", error);
                };
            } else {
                // ("您的浏览器不支持 WebSocket!");
                console.log("您的浏览器不支持 WebSocket!");
            }
        },
        // 修改内容保存
        inputText(index) {
            console.log("输入内容是", this.$refs.editor[index].innerHTML);
        },
        // 播放
        open(item) {
            this.playAudio = true;
            let myAud = document.getElementById("music");
            // 设置当前时间
            myAud.currentTime = item.audioStartSecond;
            myAud.play();
            // 播放
            var audioFun = function () {
                if (myAud.currentTime >= item.audioEndSecond) {
                    myAud.pause();
                    myAud.removeEventListener("timeupdate", audioFun);
                }
            };
            myAud.addEventListener("timeupdate", audioFun);
        },
        stop() {
            this.playAudio = false;
            let myAud = document.getElementById("music");
            myAud.pause();
        },
        // 新增说的数据
        // {
        //     speaker: "", //角色
        //     index: null, //序号
        //     result: "", //当前发言人说的话
        //     speakerStartTime: '', //开始时间
        //     speakerEndTime: '', //结束时间
        //     audioStartSecond: 0, //音频开始播放时间
        //     audioEndSecond: 0, //音频暂停时间
        //     audioDurationSecond: 0,
        // },
        add(item) {
            let found = false;
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].index === item.index) {
                    this.list[i] = item;
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.list.push(item);
            }
            // 新增数据后面加载数据
            this.$nextTick(() => {
                this.renderComment();
            });
        },
        // 渲染评论
        renderComment() {
            const listHight = this.listDom.offsetHeight; // 列表高度
            const diff = listHight - this.wrapperHeight; // 列表高度与容器高度差值
            const top = this.wrapperDom.scrollTop; // 列表滚动高度
            if (diff - top < 50) {
                if (diff > 0) {
                    this.wrapperDom.scrollTo({
                        top: diff + 20,
                        left: 0,
                        behavior: "smooth",
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
                top: this.listDom.offsetHeight,
                left: 0,
                behavior: "smooth",
            });
        },
    },
};
</script>

<style lang="scss" scoped>
#music {
    width: 100%;
}

.comment {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 24px;

    &_button {
        padding: 12px;
    }

    &_audio {
        margin: 0 12px 12px 12px;
    }

    &_list {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        background: #ebebeb;
        border-radius: 12px;
        padding: 24px;
    }

    &_wrap {
        flex: 1;
        overflow: auto;
    }

    &_item {
        padding: 4px;
        line-height: 2;
    }

    .comment_item_text {
        line-height: 24px;
    }

    .rest-nums {
        position: absolute;
        line-height: 24px;
        color: #f00;
        border-radius: 15px;
        padding: 0 15px;
        bottom: 10px;
        background: #fff;
        font-size: 14px;
        left: 10px;
    }
}
</style>
