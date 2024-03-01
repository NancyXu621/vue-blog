<template>
    <div class="home_page">
        <div>
            <el-button @click="$router.go(-1)">返回</el-button>
            <el-button @click="rest">重置</el-button>
            <div>关于js基础</div>
        </div>
        <div id="writer"></div>
        <div>{{ list }}</div>
        <div>{{ sum }}</div>
        <!-- <div>{{ objectList }}</div> --> 
        <!-- 关于js输出 -->
        <div class="home_page_contenrt">
            <el-button type="primary" @click="openPreview">写到html</el-button>
            <el-button type="success" @click="alertPreview">弹窗</el-button>
            <el-button type="warning" @click="writePreview">写write</el-button>
            <el-button type="info" @click="consolePreview">打印控制台</el-button>
            <!-- js数组方法-->
            <el-button @click="subMit">计算</el-button>
            <el-button @click="concatMit">concatMit</el-button>
            <el-button @click="copyWithinMit">copyWithinMit</el-button>
            <el-button @click="entriesMit"> entriesMit </el-button>
            <el-button @click="everyMit">everyMit</el-button>
            <el-button @click="mapMit">mapMit</el-button>
            <el-button @click="forEachMit">forEachMit</el-button>
            <el-button @click="popMit">popMit</el-button>
            <el-button @click="pushMit">pushMit</el-button>
            <el-button @click="reduceMit">reduceMit</el-button>
            <el-button @click="reverseMit">reverseMit</el-button>
            <el-button @click="shiftMit">shiftMit</el-button>
            <el-button @click="sortObjectList">排序ObjectList</el-button>
        </div>
        <el-table ref="tableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="date" label="日期" align="center"></el-table-column>
            <el-table-column prop="name" label="姓名" align="center"></el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { ref } from "vue";
const list = ref([1, 2, 3, 4, 5, 6]);
const sum = ref();
const url = ref("https://www.google.com");
const tableData = ref([
    {
        date: "2024-01-01 14:41",
        name: "xiaoyun",
    },
    {
        date: "2024-12-01 14:41",
        name: "xiaohu",
    },
    {
        date: "2024-12-01 14:41",
        name: "xiaoxu"
    }
]);
const objectList = ref({
    sqr: [{
        name: "xiaoyun",
        age: '10',
    }],
    beisqr: [{
        name: "xiaoming",
        age: '30',
    }],
    sjy: [{
        name: "xiaohu",
        age: '23',
    }],
    zcy: [{
        name: "xiaoxu",
        age: "22"
    }]
})
const roleTypes = ref({
    zcy: 1,
    sjy: 2,
    sqr: 3,
    beisqr: 4,
})
// 点击获取数据 
const handleSelectionChange = (val) => {
    sum.value = val
};
// 重置数据
const rest = () => {
    sum.value = ref();
    list.value = ref([1, 2, 3, 4, 5, 6]);
};
// 使用 innerHTML 写入到 HTML元素。
const openPreview = () => {
    document.getElementById("writer").innerHTML = url.value;
};
// 使用 window.alert() 弹出警告框。
const alertPreview = () => {
    window.alert(url.value);
};
// 使用 document.write() 方法将内容写到 HTML 文档中。
const writePreview = () => {
    document.write(url.value);
};
// 使用 console.log() 写入到浏览器的控制台。
const consolePreview = () => {
    console.log("查看打印的值", url.value);
};
// js at方法
const subMit = () => {
    sum.value = list.value.at(2);
    console.log("计算出值", sum.value);
};
// js concat方法 和并两个数组
const concatMit = () => {
    let list2 = ref([1, 4, 5, 9, 5, 32, 2]);
    sum.value = list.value.concat(list2.value);
    console.log("数组到长度", sum.value.length);
};
// js copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。
const copyWithinMit = () => {
    sum.value = list.value.copyWithin(2, 3);
};
//
const entriesMit = () => {
    sum.value = list.value.entries();
};
// everyMit
const everyMit = () => {
    const i = ref(3);
    console.log("改");
    // list.value.every(i.value);
};
// map
const mapMit = () => {
    sum.value = list.value.map((item) => {
        return item * 2;
    });
};
// forEach
const forEachMit = () => {
    sum.value = list.value.forEach((item) => {
        if ((item = 1)) {
            return item * 2;
        } else {
            return item;
        }
    });
};
// pop
const popMit = () => {
    const sites = ref(["Google", "Runoob", "Taobao", "Zhihu", "Baidu"]);
    sites.value.pop(1);
    sum.value = sites.value;
};
// push
const pushMit = () => {
    list.value.push(7);
};
// reduce 接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
const reduceMit = () => {
    sum.value = list.value.reduce((pre, cur) => {
        return pre + cur;
    });
};
// 将数组中的元素逆序排列
const reverseMit = () => {
    list.value.reverse();
};
// 删除数组的第一个元素 
const shiftMit = () => {
    list.value.shift();
};
// 排序多个对象
const sortObjectList = () => {
    console.log(objectList.value)
    sum.value = [objectList.value].sort((a, b) => {
        return a.value - b.value
    })
    console.log(sum.value)
}
</script>

<style lang="scss" scoped>
.home_page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    overflow: hidden;

    .home_page_contenrt {
        width: 100%;
        // height: 100%;
        padding: 20px;
    }
}
</style>
