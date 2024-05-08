<template>
    <div class="echat_pages">
        <div>听歌排行</div>
        <div class="echart_box">
            <div class="echart_content">
                <div class="echart_card">
                    <div>日</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stateList: [
                {
                    name: "日",
                    value: 0,
                }, {
                    name: "周",
                    value: 0,
                }, {
                    name: "月",
                    value: 0,
                }, {
                    name: "总",
                    value: 0,
                }
            ],
        };
    },
    mounted() {
        this.init();
    },
};
</script>

<style scoped>
.echat_pages {
    width: 100%;
}
</style>
