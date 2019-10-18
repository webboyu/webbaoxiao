<template>
  <div class="header">
    <div class="nav_left">
      <i v-if="leftImg">
        <img src="@/assets/image/ic_back.png" alt />
      </i>
    </div>
    <div class="nav_center">{{title}}</div>
    <div class="nav_right">
      <i>
        <img :src='rightImg' />
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
    };
  },
  props: {
    title: {
      type: String,
      default: "首页"
    },
    leftImg: {
      type: Boolean,
      default: false
    },
    rightImg: {
      type: String,
      default: ''
    }
  },
  mounted() {
    // console.log(require('../../assets/image/ic_about.png'))
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(108, 96, 253, 1) 0%,
    rgba(80, 7, 189, 1) 100%
  );
}
.nav_left img {
  margin-left: 15px;
  width: 12px;
}
.nav_right img {
  margin-right: 15px;
}
.nav_center {
  font-family: Source Han Sans SC;
  font-weight: 500;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
</style>