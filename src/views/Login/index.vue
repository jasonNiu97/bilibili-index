<!-- eslint-disable vue/multi-word-component-names -->
<template >
  <van-nav-bar
  title="登陆bilibili"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"/>

  <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="form.username"
      name="username"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="form.password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      登陆
    </van-button>
  </div>
</van-form>
</template>

<script setup>
import { reactive } from 'vue'
import { loginAPI } from '@/api/loginAPI'
import router from '@/router/index'
import { Notify } from 'vant'

// 表单数据
const form = reactive({
  username: '',
  password: ''
})

const onSubmit = async () => {
  const { data: res } = await loginAPI(form)

  if (res.meta.status !== 200) {
    Notify({ type: 'danger', message: `${res.meta.msg}` })
  } else {
    Notify({ type: 'success', message: `${res.meta.msg}` })
    // 将登录成功之后的 token,保存到客户端的 sessionStorage(会话机制/只在当前页面生效)中
    // 项目中除了登录之外的API接口,必须在登录之后才能访问
    // token 只应在当前网站打开期间生效, 所以将 token 保存在 sessionStorage中
    window.sessionStorage.setItem('token', res.data.token)
    router.push('/')
  }
}

// 返回按钮点击事件
const onClickLeft = () => history.back()

</script>
<style lang="less">
.van-button {
  margin: 30px;
}
</style>
