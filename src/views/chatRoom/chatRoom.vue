<template>
    <div class="chat-room">
        <div>聊天室</div>
        <el-input v-model="content"></el-input>
    </div>
</template>

<script>
import { Room } from 'livekit-client';


export default {
    data() {
        return {
            wsRUL: "", // WebSocket服务的URL
            token: "", // 用户认证的令牌
            content: "TD" // 
        }
    },
    async mounted() {
    },
    methods: {
    }
}
</script>

<style scoped>
.chat-room {
    width: 200px;
    background: #fdfdfd;
    margin: 12px;
}
</style>