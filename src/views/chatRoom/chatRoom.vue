<template>
    <div class="chat-room">
        <div>快乐倒计时：</div>
        <div id="countdown"></div>
    </div>

</template>

<script>

export default {
    data() {
        return {
        }
    },
    async mounted() {
        this.getTime()
        setInterval(this.getTime, 1000);
    },
    methods: {
        getTime() {
            const now = new Date();
            const targetDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0);
            const currentDateTime = new Date().getTime();
            let remainingTime = targetDateTime - currentDateTime;
            let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            document.getElementById("countdown").innerHTML = hours + ":" + minutes + ":" + seconds;
        },
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