<template>
  <div>
    <!-- 登录页表头 -->
    <van-nav-bar title="账号登录" left-arrow @click-left="goMy" />
    <!-- 登录页账号密码提交区 -->
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" placeholder="请输入账号" />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { getRecommendAPI } from '@/api'
// import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {},
  methods: {
    // ...mapMutations(['SET_TOKEN']),
    loading() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
    },
    async onSubmit() {
      this.loading()
      try {
        const { data } = await getRecommendAPI(this.username, this.password)
        // this.SET_TOKEN(data.body.token)
        console.log(data)
        if (data.status && data.status === 200) {
          this.$router.push('/home/profile')
          this.$toast.success(data.description)
        } else if (data.status && data.status === 400) {
          this.$toast.fail(data.description)
        }
      } catch (error) {
        console.log(error)
      }
    },
    goMy() {
      console.log(this.$route)
      this.$router.push('/home/profile')
    }
  }
}
</script>

<style scoped lang="less">
.van-nav-bar {
  height: 46px;
  background-color: rgb(33, 185, 122);
  align-items: center;
  :deep(.van-nav-bar__title) {
    height: 46px;
    line-height: 46px;
    font-size: 18px;
    color: #fff;
  }
}
.van-cell {
  height: 74px;
  padding: 25px 20px;
  font-size: 17px;
}
.van-button--info {
  color: #fff;
  background-color: rgb(33, 185, 122);
  border: 1px solid rgb(33, 185, 122);
}
.van-button--block {
  margin: 20px auto 0;
  width: 337px;
  height: 50px;
}
.van-button__text {
  font-size: 18px;
}
:deep(.van-icon) {
  color: #fff;
}
</style>
