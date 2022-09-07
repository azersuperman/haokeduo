<template>
  <div>
    <!-- 登录页表头 -->
    <van-nav-bar title="账号登录" left-arrow @click-left="goMy" />
    <!-- 登录页账号密码提交区 -->
    <van-form>
      <van-field v-model="username" name="用户名" placeholder="请输入账号" />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
      />
      <van-button type="primary" @click="onSubmit">登&nbsp;&nbsp;录</van-button>
    </van-form>
  </div>
</template>

<script>
import { getRecommendAPI } from '@/api/Land'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {},
  methods: {
    async onSubmit() {
      try {
        const { data } = await getRecommendAPI(this.username, this.password)
        console.log(data)
      } catch {
        alert('请刷新重试')
      }
    },
    goMy() {
      console.log(this.$route)
      this.$router.push('/home/profile')
    }
  }
}
</script>

<style scoped lang="less"></style>
