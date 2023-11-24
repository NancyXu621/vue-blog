<template>
    <div class="login_bg">
        <!-- <el-form :model="user" :rules="rules">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="user.password" placeholder="请输入密码"></el-input>
            </el-form-item>
        </el-form>
        <el-button @click="submit">登录</el-button> -->
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
// 1
const addNum = () => {
    numAll.value = numList.value.filter((item) => {
        return item > 5
    })
    return numAll.value

}
// 2
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
onMounted(() => {
    getlist()
})
</script>
 
<style  scoped>
.login_bg {
    width: 100%;
    height: 100%;
    background: rgb(90, 162, 245)
}
</style>