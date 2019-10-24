<template>
  <div class="header">
    <div class="nav_left">
      <i v-if="leftImg">
        <img src="@/assets/image/ic_back.png" @click="goback" alt />
      </i>
    </div>
    <div class="nav_center">{{title}}</div>
    <div class="nav_right">
      <i v-if="showImg">
        <img :src="rightImg" />
      </i>
      <div v-else>
        <span>上报</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
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
      default: ""
    },
    showImg: {
      type: Boolean,
      default: true
    },
    goback:{
      type:Function,
      default:function(){}
    }
  },
  mounted() {
    // console.log(require('../../assets/image/ic_about.png'))
  },
  methods:{
    // goback(){
    //   this.$router.go(-1)
    // }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  z-index: 10;
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
.nav_right div {
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5d69f9;
  border-radius: 20px;

  width: 50px;
  height: 25px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  font-size: 10px;
}
.nav_center {
  font-family: Source Han Sans SC;
  font-weight: 500;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
</style>