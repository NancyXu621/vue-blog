<template>
    <div class="login_bg">
        <div class="login_box">
            <div class="login_box_title">用户登录</div>
            <el-form ref="loginForm" :model="user" :rules="rules" label-width="60px" size="large"
                @submit.native.prevent="handleLogin">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="user.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="loginFormSubmit" type="primary">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import router from '../../router';
const user = ref({
    username: '',
    password: ''
})
/**
 * 登录逻辑
 *  1. 校验用户名和密码
 *  2. 登录成功后，跳转到首页
 *  3. 登录失败，提示错误信息
 * @param {*} username
 * @param {*} password
 */
const loginFormSubmit = () => {
    // console.log('登录', user.value)
    router.push('/home')
}
// const sendSMS = () => {
//     sendSms().then((res) => {
//         console.log('发送短信码')
//     })
// }
const handleLogin = () => {
    router.push('login')
}
onMounted(() => {
    console.log('onMounted')
    if (localStorage.getItem('token')) {
        router.push('/home')
    } else {
    }
})
</script>
 
<style lang="scss" scoped>
.login_bg {
    width: 100%;
    height: 100%;
    //background: rgb(90, 162, 245);
    display: flex;
    justify-content: center;
    align-items: center;

    .login_box {
        width: 350px;
        // height: 400px;
        background: #fff;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .login_box_title {
            padding: 24px 0;
            font-size: 28px;
            font-weight: 500;
        }
    }
}
</style>