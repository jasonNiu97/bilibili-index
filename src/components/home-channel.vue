<template>
  <van-tabs v-model:active="active" >
    <van-tab :title="item.text" v-for="item in list" :key="item.id"> </van-tab>
  </van-tabs>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
const active = ref(0)

interface INavItem {
  id: string
  text: string
}

const list = ref <INavItem[]>([])

axios({
  method: 'get',
  url: '/navList'
}).then(res => {
  list.value = res.data.result
})

</script>
