<template >
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
    <van-swipe-item v-for="image in swipeList" :key="image.imgSrc">
      <img :src="image.imgSrc" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

interface ISwipeItem {
  link:string
  imgSrc:string
}

const swipeList = ref <ISwipeItem[]>([])

axios({
  url: '/swiperList',
  method: 'get'
}).then(res => {
  swipeList.value = res.data.result
})

</script>

<style lang="less" scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
</style>
