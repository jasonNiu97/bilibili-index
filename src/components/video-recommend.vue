<template>
<div class="list">
  <appVideoItem v-for="item in videoList" :key="item.id" :video="item"/>
</div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { IVideoItem } from '@/types'
import appVideoItem from './app-video-item.vue'

const videoList = ref <IVideoItem[]>([])

axios({
  method: 'get',
  url: '/recommendList/'
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
