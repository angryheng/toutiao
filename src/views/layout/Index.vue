<template lang="html">
  <div class="layout-container">
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/qa" icon="question-o">问答</van-tabbar-item>
      <van-tabbar-item replace to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data() {
    return {
      active: 0
    }
  }

}
</script>

<style lang="less" scoped>
</style>
