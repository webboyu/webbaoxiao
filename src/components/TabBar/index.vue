<template>
  <div class="tab_bar">
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <span>首页</span>
        <img slot="home_icon" slot-scope="props" :src="props.active ? icon.active : icon.normal" />
      </van-tabbar-item>
      <van-tabbar-item icon="search">
        <span>消息</span>
        <img slot="message_icon" slot-scope="props" :src="props.active ? icon.active : icon.normal" />
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o">
        <span>我的</span>
        <img slot="mine_icon" slot-scope="props" :src="props.active ? icon.active : icon.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      active: 0,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      }
    };
  }
};
</script>

<style scoped>
</style>