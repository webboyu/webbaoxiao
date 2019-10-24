<template>
  <div class="bxgl">
    <div class="header">
      <div class="nav_left">
        <i @click="goBack">
          <img src="@/assets/image/ic_back.png" alt />
        </i>
      </div>
      <div class="nav_center">
        <div class="jihuanei" @click="show = 1" :class="{active:show===1}">
          <router-link tag="div" to="injihua">计划内</router-link>
        </div>
        <div class="jihuwai" @click="show = 0" :class="{active:show===0}">
          <router-link tag="div" to="outjihua">计划外及部门</router-link>
        </div>
      </div>
      <div class="nav_right">
        <i>
          <img :src="rightImg" @click="toAdd" />
        </i>
      </div>
    </div>
    <div class="scroll">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import BXGLDetail1 from "@/components/BXGLDetail";
export default {
  name: "BXGL",
  data() {
    return {
      rightImg: require("@/assets/image/add-light.png"),
      show: 1
    };
  },
  components: {
    // Search,
    // BXGLDetail1
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    toAdd(){
      this.$router.push('/addinbx')
    }
  }
};
</script>

<style scoped>
.bxgl {
  width: 100%;
  height: 100%;
}
.scroll {
  padding-top: 15%;
  width: 100%;
  height: 100%;
}
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
  width: 25px;
}
.nav_center {
  font-family: Source Han Sans SC;
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jihuanei {
  margin-left: 10px;
  padding: 10px 0;
  opacity: 0.7;
}
.jihuwai {
  margin-left: 10px;
  padding: 10px 0;
  opacity: 0.7;
}
.active {
  font-size: 20px;
  font-weight: 500;
  border-bottom: 2px solid white;
  opacity: 1;
}
</style>