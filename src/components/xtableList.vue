<template>
    <el-table :data="tableData">
    </el-table>
</template>

<script>
export default {
    props: {
        tableData: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            /**
             * 
             */
        }
    }
}
</script>

<style></style>