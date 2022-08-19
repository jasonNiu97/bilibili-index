<template>
  <header class="app-header">
    <!-- logo -->
    <router-link :to="'/'">
     <a class="logo" href="#">
      <i class="iconfont Navbar_logo"></i>
     </a>
     </router-link>
    <!-- 搜索 -->
    <a class="search" href="#">
      <i class="iconfont ic_search_tab"></i>
    </a>
    <!-- 头像 -->
    <router-link class="face" href="#" :to="'/login'">
      <img src="@/assets/images/login.png" />
    </router-link>
    <!-- 下载按钮 -->
    <van-button type="default" url="https://apps.apple.com/cn/app/id736536022">下载 APP</van-button>
  </header>
</template>

<style lang="less" scoped>
.app-header {

  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 2vw 3vw;
  background-color: #fff;
  .logo {
    flex: 1;
    .Navbar_logo {
      color: #fb7299;
      font-size: 2rem;
    }
  }
  .search {
    padding: 0 2vw;
    .ic_search_tab {
      color: #ccc;
      font-size: 1.5rem;
    }
  }
  .face {
    padding: 0 4vw;
    img {
      width: 2rem;
    }
  }
  .van-button {
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fb7299;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
  }
}
</style>
