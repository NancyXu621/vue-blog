<template>
    <div class="container">
        <div v-for="(item, index) in list" :key="index">
            {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [{}],
        };
    },
    methods: {
        getLisr() {
            /** 勇敢的人先享受世界 */
        },
    },
};
</script>

<style lang="scss">
.container {
    display: flex;
}
</style>
