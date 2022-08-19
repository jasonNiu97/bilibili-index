<template>
  <router-link class="v-card" :to="`/video/${video?.id}`">
    <div class="card">
      <div class="card-img">
        <img class="pic" :src="video?.imgSrc" :alt="video?.desc" />
      </div>
      <div class="count">
        <span>
          <i class="iconfont icon_shipin_bofangshu"></i>
          {{ video?.playCount }}
        </span>
        <span>
          <i class="iconfont icon_shipin_danmushu"></i>
          {{ video?.commentCount }}
        </span>
      </div>
    </div>
    <p class="title"> {{ video?.desc }} </p>
  </router-link>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core'

interface IVideoItem {
  commentCount: string
  desc: string
  id: string
  imgSrc: string
  link: string
  playCount: string
  videoSrc: string
}

defineProps({
  video: {
    type: Object as PropType<IVideoItem>,
    require: true
  }
})

</script>

<style lang="less" scoped>
.v-card {
  width: 50%;
  padding: 2vw 1vw;
  .card {
    position: relative;
    background: #f3f3f3 url(~@/assets/images/default.png) center no-repeat;
    background-size: 36%;
    border-radius: 0.53333vw;
    overflow: hidden;
    .card-img {
      .pic {
        width: 100%;
        object-fit: cover;
      }
    }
    .count {
      background-image: linear-gradient(0deg, #000000d9, #0000);
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.2vw 1.5vw;
      span {
        .iconfont {
          font-size: 1em;
        }
      }
    }
  }
  .title {
    margin-top: 1.5vw;
    font-size: 1em;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
