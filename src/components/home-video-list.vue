<template >
  <div class="list">
    <appVideoItem v-for="item in videoList" :key="item.id" :video="item" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import appVideoItem from './app-video-item.vue'
import axios from 'axios'
import { IVideoItem } from '@/types'

const videoList = ref <IVideoItem[]>([])

axios({
  method: 'get',
  url: '/videosList/'
}).then(res => {
  videoList.value = res.data.result
})

</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}

</style>
