<template >
<div class="video-play">
  <video controls class="video" :poster="videoInfo.poster" :src="videoInfo.videoSrc" ></video>
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
.video-play {
  width: 100%;

  .video {
    width: 100%;
  }
}
</style>
