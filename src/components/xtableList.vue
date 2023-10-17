<template>
    <el-table :data="data">
        
    </el-table>
</template>

<script>
export default {
    props:{
        tableData:{
            type: Array,
			default: () => [],
        }
    },
    data(){
        return{

        }
    }
}
</script>

<style></style>