<template>
    <div class="compont_chatRoom">
        <div>1、请使用forEach、map、filter、some、every等相关api对1,2,3...,10这些数据进行处理：</div>
        <div> 1.请用相关api过滤出1-10大于5的值。（期望得到一个Array: [1,2,3...]）</div>
        {{ numAll }}
        <el-button @click="addNum">计算</el-button>
        <div>2.请用相关api查找出1-10中是否有数值11（期望得到一个Boolean: true、false）</div>
        <el-button @click="checkOut">查找</el-button>
        <div> 3.请用相关api得到一个都是乘以*2的新数组（期望得到一个Array: [2,4,6...]）</div>
        {{ numList }}
        <el-button @click="add2">计算</el-button>
        <div>4.请用相关api判断1-10中是否都大于5。（期望得到一个Boolean: true、false）</div>
        <el-button @click="add4">判断</el-button>
        <div>5.请用相关api判断1-10中是否存在大于9数值的（期望得到一个Boolean: true、false）</div>
        <el-button @click="add5">判断</el-button>
        <div>6.计算[1,2,3,4,5,6,7,8,9,10]加起来总数</div>
        <el-button @click="add6">计算</el-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import router from '../../router';
const user = ref({
    username: '',
    password: ''
})
const numAll = ref('')
const numList = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//
const addNum = () => {
    numAll.value = numList.value.filter((item) => {
        return item > 5
    })
    return numAll.value

}
/**  */
const checkOut = () => {
    let checkOutNum = numList.value.some(item => item == 11)
    console.log(checkOutNum)
}
/** 请用相关api得到一个都是乘以*2的新数组（期望得到一个Array: [2,4,6...]） */
const add2 = () => {
    let allList = []
    allList.value = numList.value.forEach((item) => {
        allList.push(item * 2)
    })
    console.log(allList)
}
const add4 = () => {
    let checkOutNum = numList.value.every(item => item > 9)
    console.log(checkOutNum)
}
const add5 = () => {
    let checkOutNum = numList.value.some(item => item > 9)
    console.log(checkOutNum)
    let checkOut = numList.value.forEach(item, index => {
        if (item > 9) {
            return checkOut.value.push(true)
        } else {
            return checkOut.value.push(false)
        }
    })
    console.log('checkOut', checkOut)
}
/** 方法1 */
const add6 = () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let all = ref(null)
    for (let i = 0; i < list.length; i++) {
        all.value += list[i]
    }
    console.log(all.value)
}
/** 方法2 */
const add66 = () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let all = list.reduce((a, b) => a + b);
    console.log(all);
};
const getlist = () => {
    console.log('获取倒聊天列表', getlist)
    console.log('省院案件号', add66())
    console.log('订阅-发布者')

}
onMounted(() => {
    getlist()
})
</script>
 
<style  lang="scss" scoped>
.compont_chatRoom {
    width: 100%;
    height: 100%;
    background: rgb(90, 162, 245)
}
</style>