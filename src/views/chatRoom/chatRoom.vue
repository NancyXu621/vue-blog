<template>
    <div class="chat-room">
        <el-button type="primary" @click="exportExcel">导出elexl</el-button>
    </div>

</template>

<script>
import * as XLSX from 'xlsx'; // 使用命名导入

export default {
    data() {
        return {
            list: [
                {
                    creator: '6aa07f48b9bfd3a81958666',
                    address: "北京市,北京城区,东城区",
                    customerIndustry: 1,
                    customTag: 6,
                    mobile: 13988888
                }
            ]
        }
    },
    methods: {
        exportExcel() {
            const ws = XLSX.utils.json_to_sheet(this.list);
            // 创建一个新的工作簿
            const wb = XLSX.utils.book_new();
            // 将工作表添加到工作簿
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            // 生成 Excel 文件并触发下载
            XLSX.writeFile(wb, 'data.xlsx');
        }
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