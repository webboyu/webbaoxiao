<template>
  <div class="notic_bar">
    <van-notice-bar
      class="notic"
      mode="closeable"
      color="#726E89"
      background="#FFFFFF"
      :left-icon="noticeImg"
    >{{notic}}</van-notice-bar>
  </div>
</template>

<script>
export default {
  name: "noticBar",
  data() {
    return {
      noticeImg: ""
    };
  },

  props: {
    notic: {
      type: String,
      default: "【系统通知】 工程监理工程师_2019年报名开始了!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    }
  },
  mounted() {
    this.noticeImg = require("@/assets/image/ic_tip.png");
  },
  methods:{
      aaa(){
          this.$router.push('/login')
      }
  }
};
</script>

<style >
.notic{
    height: 50px;
}
.van-icon__image{
    height: 50px;
    width: 50px;
}
.notic_bar{
  margin: 0 auto;

}
</style>