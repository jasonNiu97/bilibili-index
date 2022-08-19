<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <AppHeader />
  <VideoPlay :videoInfo="videoInfo"/>
  <VideoInfo :videoInfo="videoInfo"/>
  <VideoButtom />
</template>

<script setup lang="ts">
// 导入组件
import AppHeader from '@/components/app-header.vue'
import VideoPlay from '@/components/video-play.vue'
import VideoInfo from '@/components/video-info.vue'
import VideoButtom from '@/components/video-buttom.vue'

import axios from 'axios'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
// 导入接口
import { IVideoInfo } from '@/types'

const videoInfo = ref<IVideoInfo>({})

const route = useRoute()

axios({
  method: 'get',
  url: '/videoDetail',
  params: { id: route.params.id }
}).then(({ data }) => {
  videoInfo.value = data.result
  console.log(videoInfo.value)
})

</script>

<style>

</style>
