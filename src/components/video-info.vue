<template>
  <div class="video-info">
    <h4> {{ videoInfo.videoTitle }} </h4>
    <div class="info">
      <!-- 用户详情 -->
      <div class="author-info">
        <span> <img :src="videoInfo.authorIconSrc" alt=""> </span>
        <span> {{ videoInfo.author }} </span>
      </div>
      <!-- 视频数据 -->
      <div class="video-num">
        <span> {{ videoInfo.playCount }}观看 </span>
        <span> {{ videoInfo.likeCount }}赞 </span>
        <span> {{ videoInfo.favCount }}收藏 </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
// 导入接口
import { IVideoInfo } from '../types'

defineProps({
  videoInfo: {
    type: Object as PropType<IVideoInfo>,
    required: true
  }
})

</script>

<style lang="less" scoped>
.video-info {
  margin: 0;
  padding: 1em 2em;
  h4 {
    margin: 2vw 0;
    font-weight: 400;
    font-size: 2 rem;
  }

  .info {
    padding: 0 2vw;
    font-size:  1em;
    display: flex;
    .author-info {
      flex: 1;
      img {
      margin: 0 2em 0 0;
      border-radius: 50%;
      width: 4em;
      vertical-align: middle;
    }
    }
    .video-num {
      font-size: 0.5em;
      flex: 1;
      color: gray;
      display: flex;
      justify-content: end ;
      span {
        margin: 0 1vw;
      }
    }
  }
}
</style>
