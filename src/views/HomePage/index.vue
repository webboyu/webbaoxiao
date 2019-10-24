<template>
  <Scroller>
    <div class="home_page">
      <div class="main_home">
        <div class="xmgl">
          <NoticeBar />
          <div class="nav">
            <div class="bar"></div>
            <div>
              <span>项目管理</span>
            </div>
          </div>
          <div class="main_xmgl">
            <van-grid :column-num="3">
              <van-grid-item
                v-for="(item,value) in icon_img"
                :key="value"
                :icon="item"
                :to="route[value]"
                :text="titleText[value]"
              />
            </van-grid>
          </div>
        </div>
        <div class="bgoa">
          <div class="nav">
            <div class="bar"></div>
            <div>
              <span>办公OA</span>
            </div>
          </div>
          <div class="main_bgoa">
            <div class="zk">
              <div class="titel_oa">
                <div class="top_oa">
                  <router-link to="zk" tag="span">智库</router-link>
                </div>
                <div class="bottom_oa">
                  <span>文档/亮点</span>
                </div>
              </div>
              <div class="icon_oa">
                <i>
                  <img :src="imgOA1" alt />
                </i>
              </div>
            </div>
            <div class="bxgl">
              <div class="titel_oa">
                <div class="top_oa">
                  <router-link to="bxgl" tag="span">报销管理</router-link>
                </div>
                <div class="bottom_oa">
                  <span>计划内/计划外</span>
                </div>
              </div>
              <div class="icon_oa">
                <i>
                  <img :src="imgOA2" alt />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Scroller>
</template>

<script>
import NoticeBar from "@/components/NoticeBar";
export default {
  name: "homePage",
  data() {
    return {
      titleText: ["项目信息", "项目评定", "计划管理", "电子地图", "专家会议"],
      icon_img: [
        require("@/assets/image/ic_index_1_1.png"),
        require("@/assets/image/ic_index_1_2.png"),
        require("@/assets/image/ic_index_1_3.png"),
        require("@/assets/image/ic_index_1_4.png"),
        require("@/assets/image/ic_index_1_5.png")
      ],
      route: ["xmxi", "xmpd", "jhgl", "dzdt", "zjhy"],
      imgOA1: require("@/assets/image/ic_index_2_1.png"),
      imgOA2: require("@/assets/image/ic_index_2_2.png")
    };
  },
  components: {
    NoticeBar
  }
};
</script>

<style scoped>
.home_page {
  width: 100%;
  position: absolute;
  height: 100%;
  top: 8%;
  background: #f0f2f5;
}
.main_home {
  width: 90%;
  height: 100%;
  margin: 0 auto;
}
.main_xmgl {
  width: 95%;
  margin: 0 auto;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: rgba(241, 241, 241, 1) solid 1px;
  padding: 20px 0 20px 0;
}
.xmgl {
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
  margin-bottom: 30px;
}
.bgoa {
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
}
.bar {
  width: 5px;
  height: 20px;
  background: #8a8afd;
  margin: 0 20px 0 20px;
  border-radius: 3px;
}
.nav span {
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
}
.main_bgoa {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.main_bgoa .zk,
.main_bgoa .bxgl {
  width: 45%;
  height: 85px;
  margin: 10px;
  background: linear-gradient(
    130deg,
    rgba(111, 107, 249, 1) 0%,
    rgba(138, 138, 253, 1) 100%
  );
  border-radius: 7px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.icon_oa i img {
  width: 40px;
}

.top_oa {
  font-size: 16px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.bottom_oa {
  font-size: 8px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  opacity: 0.8;
}
</style>