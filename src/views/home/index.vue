<template>
    <div>
        <el-button @click="getList('1')">返回</el-button>
        <el-input v-model="inputText"></el-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            inputText: ""
        };
    },
    methods: {
        getList(item) {
            this.$router.push('/login');
            return this.list.push(item)
        },
    },
};
</script>

<style lang="scs3s" scoped></style>
