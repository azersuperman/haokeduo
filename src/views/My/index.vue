<template>
  <div class="myload">
    <div class="info">
      <div class="frame">
        <img
          class="myimg"
          src="http://liufusong.top:8080/img/profile/avatar.png"
        />
      </div>
      <div class="loadInfo">
        <div class="tourists">游客</div>
        <router-link to="/login">去登录</router-link>
      </div>
    </div>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="value in 6"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <div class="banner">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.myload {
  height: 700px;
  background: url('../../assets/imgs/bg.png') no-repeat;
  background-size: 100%;
}
.info {
  position: relative;
  top: 20%;
  left: 25px;
  width: 85%;
  height: 165px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 10px 3px #ddd;
}
.frame {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 0 10px 5px #ddd;
  border-radius: 50%;
}
.myimg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  margin: auto;
}
.loadInfo {
  padding-top: 80px;
}
.van-grid {
  top: 22%;
}
.banner {
  position: absolute;
  width: 345px;
  height: 86px;
  margin-left: 16px;
  margin-top: 160px;
}
.banner img {
  width: 100%;
  height: 86px;
}
</style>
