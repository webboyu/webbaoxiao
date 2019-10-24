<template>
  <div class="tab_bar">
    <van-tabbar v-model="active" active-color="#6C60FD" inactive-color="#9A9A9A">
      <van-tabbar-item>
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? home_icon.active : home_icon.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item>
        <span>消息</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? message_icon.active : message_icon.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? mine_icon.active : mine_icon.normal"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      active: Number(sessionStorage.getItem("tabBarActive")) || 0,
      home_icon: {
        normal: require("@/assets/image/home.png"),
        active: require("@/assets/image/home_fill.png")
      },
      message_icon: {
        normal: require("@/assets/image/desk.png"),
        active: require("@/assets/image/desk_fill.png")
      },
      mine_icon: {
        normal: require("@/assets/image/my.png"),
        active: require("@/assets/image/my_fill.png")
      }
    };
  }
};
</script>

<style scoped>
</style>