<template>
  <van-tabs v-model:active="active">
    <van-tab title="推荐">
      <VideoRecommend />
    </van-tab>
    <van-tab title="评论">
      <VideoComments />
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VideoRecommend from './video-recommend.vue'
import VideoComments from './video-comments.vue'

const active = ref(0)

</script>
<style lang="less" scoped>

</style>
