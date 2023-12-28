<script setup>
import * as THREE from 'three'
import BIRDS from 'vanta/src/vanta.birds'
import { useUserStore } from '@/stores/user.js'
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const loginForm = reactive({
  username: '',
  password: ''
})
const loginFormRules = {
  //用户名
  username: [
    { required: true, message: '请输入用户名称', trigger: 'blur' },
    { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
  ],
  //密码
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 0, max: 100, message: '长度在 6 到 12 个字符', trigger: 'blur' }
  ]
}
const userStore = useUserStore()
// 重置表单
const resetloginform = () => {
  loginForm.username = ''
  loginForm.password = ''
}
// 登录
const login = async () => {
  await userStore.login(loginForm)
  // 跳转路由
  router.push('/news')
}
// 背景
let vantaRef = ref(null)
onMounted(() => {
  BIRDS({
    el: vantaRef.value,
    THREE: THREE
  })
})
</script>

<template>
  <div ref="vantaRef" style="width: 100%; height: 100vh">
    <div class="login-container">
      <div class="login-box">
        <!-- 头像区域 -->
        <div class="aventer-box">
          <img src="@/assets/img/avatar.png" alt="" />
        </div>
        <!-- 登录表单区域 -->
        <!-- 用户名 -->
        <el-form
          ref="loginformRef"
          :model="loginForm"
          :rules="loginFormRules"
          label-width="0px"
          class="login_form"
        >
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              prefix-icon="el-icon-edit"
              type="password"
            ></el-input>
          </el-form-item>
          <!-- 按钮区域 -->
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetloginform">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  height: 100%;
}

.login-box {
  width: 450px;
  height: 300px;
  background-color: rgba(97, 97, 97, 0.5);
  // rgb(51, 63, 127)
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .aventer-box {
    height: 130px;
    width: 130px;
    border: 3px solid #eee;
    border-radius: 50%;
    padding: 5px;
    box-shadow: 0 0 20px #ccc;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: antiquewhite;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: antiquewhite;
    }
  }
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.login_form {
  position: absolute;
  bottom: 0%;
  width: 80%;
  padding: 20px 20px;
  box-sizing: border-box;
}
</style>
