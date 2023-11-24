<template>
    <div class="login_bg">
        <div class="login_box">
            <el-form ref="loginForm" :model="user" :rules="rules" label-width="80px" size="large"
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
    console.log('登录', user.value)
    router.push('/home')
}
onMounted(() => {
    console.log('onMounted')
})
</script>
 
<style  scoped>
.login_bg {
    width: 100%;
    height: 100%;
    /* background: rgb(90, 162, 245) */
}
</style>