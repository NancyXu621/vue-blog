<template>
    <div class="login_bg">
        <div class="login_box">
            <div class="login_box_title">登录</div>
            <el-form ref="loginForm" :model="user" :rules="rules" label-width="auto" @submit.native.prevent="handleLogin">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="user.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <div class="login_btn">
                    <el-button size="large" @click="loginFormSubmit" type="primary">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import router from "../../router";
const user = ref({
    username: "",
    password: ""
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
    router.push("/home")
}
const handleLogin = () => {
    router.push("login")
}
onMounted(() => {
    if (localStorage.getItem("token")) {
        router.push("/home");
    } else {
    }
})
</script>

<style lang="scss" scoped>
.login_bg {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/plog-login-bj.png");
    background-size: 100% 100%;

    .login_box {
        width: 300px;
        background: #fff;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 24px;

        .login_box_title {
            padding: 0 0 24px 0;
            font-size: 24px;
            font-weight: 500;
        }

        .login_btn {
            text-align: center;
            padding: 12px 0 0 0;
        }
    }
}
</style>
