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
        v-for="(item, index) in mydata"
        :key="index"
        :icon="item.icon"
        :text="item.name"
      >
      </van-grid-item>
    </van-grid>
    <div class="banner">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mydata: [
        {
          icon: 'star-o',
          name: '我的收藏'
        },
        {
          icon: 'wap-home-o',
          name: '我的出租'
        },
        {
          icon: 'clock-o',
          name: '看房记录'
        },
        {
          icon: 'newspaper-o',
          name: '成为房主'
        },
        {
          icon: 'contact',
          name: '个人资料'
        },
        {
          icon: 'service-o',
          name: '联系我们'
        }
      ]
    }
  }
}
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
  width: 70px;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 0 10px 5px #ddd;
  border-radius: 50%;
}
.myimg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  margin: auto;
}
.loadInfo {
  padding-top: 60px;
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
.tourists {
  margin-bottom: 20px;
  font-size: 13px;
}
.loadInfo a {
  display: block;
  margin: 0 auto;
  width: 80px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  font-size: 13px;
  background-color: #21b97a;
  border-radius: 5px;
}
</style>
