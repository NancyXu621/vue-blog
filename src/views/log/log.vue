<template>
    <div class="log">
    </div>
</template>

<script>
export default {
    data() {
        return {
            logList: [
                {
                    time: "2024-4-1 09:50",
                    title: "待办",
                    content: "今天要写待办"
                },
                {
                    time: "2024-4-1 10:11",
                    title: "学习",
                    content: "今天要学习"
                },
                {
                    time: "2024-4-1 10:12",
                    title: "周报",
                    content: "今天开始学着写周报"
                }
            ],
        }
    },
}
</script>

<style scoped lang="scss">
.log {
    width: 100%;
    height: 100%;
}
</style>