<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" :to="{ name: 'cs' }">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/home/house">找房</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/home/message"
        >咨询</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" to="/home/profile"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less"></style>
