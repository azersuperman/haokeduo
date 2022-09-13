<template>
  <div class="city">
    <div class="citycontent">
      <van-nav-bar
        title="城市列表"
        left-arrow
        @click-left="onClickLeft"
        class="header"
      />
      <div class="list">
        <van-index-bar :index-list="hotcity">
          <van-index-anchor index="#">当前城市</van-index-anchor>
          <van-cell title="上海" />

          <van-index-anchor index="热">热门城市</van-index-anchor>
          <van-cell
            :title="item.label"
            v-for="(item, index) in hotcitys"
            :key="index"
          />
          <div v-for="item in city" :key="item">
            <van-index-anchor :index="item">{{ item }}</van-index-anchor>

            <van-cell
              v-for="(el, cindex) in letters(item)"
              :key="cindex"
              :title="el.label"
            />
          </div>
        </van-index-bar>
      </div>
    </div>
  </div>
</template>

<script>
import { getCityListAPI, getHotCityAPI } from '@/api'
export default {
  data() {
    return {
      id: 1,
      hotcity: [
        '#',
        '热',
        'A',
        'B',
        'C',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'Q',
        'S',
        'T',
        'W',
        'X',
        'Y',
        'Z'
      ],
      city: [
        'A',
        'B',
        'C',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'Q',
        'S',
        'T',
        'W',
        'X',
        'Y',
        'Z'
      ],
      citys: [],
      hotcitys: []
    }
  },
  created() {
    this.getCityList()
    this.getHotCity()
  },
  methods: {
    onClickLeft() {
      this.$router.push('/home')
    },
    async getCityList() {
      try {
        const { data } = await getCityListAPI(+this.id)
        this.citys = data.body
      } catch (error) {
        return error
      }
    },
    async getHotCity() {
      try {
        const { data } = await getHotCityAPI(+this.id)
        this.hotcitys = data.body
        console.log(this.hotcitys)
      } catch (error) {
        return error
      }
    }
  },
  computed: {
    letters() {
      return (item) =>
        this.citys.filter(
          (el) => el.short.substring(0, 1).toUpperCase() === item
        )
    }
  }
}
</script>

<style scoped lang="less">
.header {
  position: relative;
  z-index: 2;
}
.list {
  height: calc(100vh - 46px);
  overflow: auto;
}
:deep(.van-icon, ) {
  color: #fff;
}
:deep(.van-nav-bar__title) {
  color: #fff;
}
.van-nav-bar {
  background-color: rgb(33, 185, 122);
}
</style>
