<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <a href="javascript:;"
          ><img
            :src="`http://liufusong.top:8080${item.imgSrc}`"
            alt=""
            class="size"
        /></a>
      </van-swipe-item>
    </van-swipe>

    <!-- 搜索框 -->
    <van-search v-model="value" show-action placeholder="请输入搜索关键词">
      <template #left>
        <router-link to="/city">上海<van-icon name="guide-o" /></router-link>
      </template>
    </van-search>
    <!-- 地图搜索入口 -->

    <!-- 租房方式 -->
    <van-grid :column-num="4" :border="false">
      <van-grid-item
        v-for="(item, index) in images1"
        :key="index"
        :border="false"
      >
        <template #icon>
          <img :src="`${item.url}`" width="60px" height="60px" />
        </template>
        <template #text>
          <span class="rent">{{ item.name }}</span>
        </template>
      </van-grid-item>
    </van-grid>

    <!-- 租房小组 -->
    <div class="rentteam">
      <van-cell-group :border="false">
        <van-cell>
          <template #title>
            <h3 class="rentteam-left">租房小组</h3>
          </template>
          <template>
            <span class="rentteam-right"><a href="javascript:;">更多</a></span>
          </template>
        </van-cell>
      </van-cell-group>
      <!-- 租房小组宫格区 -->
      <van-grid direction="horizontal" :column-num="2">
        <van-grid-item v-for="item in rentTeam" :key="item.id">
          <template #icon>
            <van-image
              :src="`http://liufusong.top:8080${item.imgSrc}`"
              width="50"
            />
          </template>
          <template #text>
            <div class="rentitem">
              <span>{{ item.title }}</span>
              <span>{{ item.desc }}</span>
            </div>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getSlideAPI, getRenHouseAPI } from '@/api'
export default {
  data() {
    return {
      value: '',
      // 轮播图数据
      images: [],
      // 租房方式数据
      images1: [
        {
          url: require('../../assets/imgs/2.png'),
          name: '整租'
        },
        {
          url: require('../../assets/imgs/4.png'),
          name: '合租'
        },
        {
          url: require('../../assets/imgs/3.png'),
          name: '地图找房'
        },
        {
          url: require('../../assets/imgs/1.png'),
          name: '去出租'
        }
      ],
      // 租房小组数据
      rentTeam: [],
      rentId: 'AREA|88cff55c-aaa4-e2e0'
    }
  },
  created() {
    this.getSlide()
    this.getRenHouse()
  },
  methods: {
    /* 轮播图请求 */
    async getSlide() {
      try {
        const { data } = await getSlideAPI()
        this.images = data.body
      } catch (error) {
        return error
      }
    },
    /* 租房小组 */
    async getRenHouse() {
      try {
        const { data } = await getRenHouseAPI(this.rentId)
        this.rentTeam = data.body
      } catch (error) {
        return error
      }
    }
  }
}
</script>

<style scoped lang="less">
.abc {
  position: relative;
}
.my-swipe .van-swipe-item {
  height: 212px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #a8bdca;
}
.size {
  width: 100%;
  height: 212px;
}
.van-search {
  position: absolute;
  top: 25px;
  left: 20px;
  margin: 0 auto;
  width: 300px;
  height: 34px;
  border-radius: 5px;
}
.van-search__content {
  background-color: #fff;
}
.van-search__content {
  padding-left: 0px;
}
.rent {
  font-size: 14px;
  font-weight: 400;
}
.rentteam .van-cell {
  padding: 0 16px 0 16px;
}
.rentteam-left {
  color: #333;
  font-size: 15px;
  height: 17px;
  line-height: 17px;
}
.rentteam-right a {
  font-size: 14px;
  margin-top: 13px;
  display: block;
  color: #787d82;
  height: 17px;
  line-height: 17px;
}
.rentitem {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
</style>
