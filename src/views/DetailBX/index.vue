<template>
  <div class="detailBx">
    <Header :title="'报销管理详情'" :leftImg="true" :showImg="false" :goback="goback" />
    <div class="title_detail">
      <div class="left_title">
        <span @click="showBottom=true" :class="{active:showBottom}">基本信息</span>
        <i v-if="showBottom"></i>
      </div>
      <div class="right_title">
        <span @click="showBottom=false" :class="{active:!showBottom}">进度查看</span>
        <i v-if="!showBottom"></i>
      </div>
    </div>
    <div class="detail_main">
      <Scroller>
        <div class="scroll1" v-if="showBottom">
          <div class="top_message">
            <div class="bxlx">
              <span>报销类型</span>
              <span>计划内</span>
            </div>
            <div class="bxsy">
              <span>报销事由</span>
              <span>44</span>
            </div>
            <div class="je">
              <span>金额</span>
              <span>200元</span>
            </div>
            <div class="zflx">
              <span>支付类型</span>
              <span>现金</span>
            </div>
            <div class="bxr">
              <span>报销人</span>
              <span>张某</span>
            </div>
            <div class="sqrq">
              <span>申请日期</span>
              <span>2016-01-01</span>
            </div>
            <van-divider dashed></van-divider>
            <div class="remarks">
              <span>备注</span>
              <span>无</span>
            </div>
            <van-divider dashed></van-divider>
          </div>
          <div class="bottom_message">
            <div class="nav">
              <span>收款方对公汇款信息</span>
            </div>
            <div class="skfxm">
              <span>收款方姓名</span>
              <span>22</span>
            </div>
            <div class="skfyhzh">
              <span>收款方银行账号</span>
              <span>11</span>
            </div>
            <div class="skfyhhh">
              <span>收款方银行行号</span>
              <span>11</span>
            </div>
            <div class="skfdz">
              <span>收款方地址</span>
              <span>11</span>
            </div>
            <div class="skfkhh">
              <span>收款方开户行</span>
              <span>11</span>
            </div>
            <div class="sfnsqynsh">
              <span>是否纳税企业纳税号</span>
              <span>是</span>
            </div>
          </div>
        </div>
        <div class="scroll2" v-if="!showBottom">
          <div class="approval">
            <div class="nav">
              <span>审批流程</span>
            </div>
            <div class="main_approval">
              <div class="agree_detail">
                <div class="line"></div>
                <div class="nicai">
                  <div class="left_img">
                    <i>
                      <img :src="right_img" alt />
                    </i>
                    <i>
                      <img :src="people_img" alt />
                    </i>
                  </div>
                  <div class="right_detail">
                    <div class="title_agree">
                      <span>张某某 · 已同意</span>
                      <span>11/15 08:32</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="refuse_detail">
                <div class="line"></div>
                <div class="nicai">
                  <div class="left_img">
                    <i>
                      <img :src="refuse_img" alt />
                    </i>
                    <i>
                      <img :src="people_img" alt />
                    </i>
                  </div>
                  <div class="right_detail">
                    <div class="title_agree">
                      <span>张某某 · 已拒绝</span>
                      <span>11/15 08:32</span>
                    </div>
                  </div>
                </div>
                <div class="detail_refuse">
                  <span>说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥说点啥</span>
                </div>
              </div>
              <div class="wait_detail">
                <div class="nicai">
                  <div class="left_img">
                    <i></i>
                    <i>
                      <img :src="people_img" alt />
                    </i>
                  </div>
                  <div class="right_detail">
                    <div class="title_agree">
                      <span>张某某 · 审批中</span>
                      <span>11/15 08:32</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Scroller>
    </div>

    <div class="tabbar">
      <div class="tabbar_left">
        <i>
          <img :src="greenImg" alt />
        </i>
        <span>批准</span>
      </div>
      <div class="tabbar_center">
        <i>
          <img :src="redImg" alt />
        </i>
        <span>拒绝</span>
      </div>
      <div class="tabbar_right">
        <i>
          <img :src="grayImg" alt />
        </i>
        <span>驳回</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "detailBX",
  components: {
    Header
  },
  data() {
    return {
      active: 2,
      showBottom: true,
      greenImg: require("@/assets/image/ic_right.png"),
      redImg: require("@/assets/image/ic_wrong.png"),
      grayImg: require("@/assets/image/ic_reject.png"),
      left_line: require("@/assets/image/line.png"),
      people_img: require("@/assets/image/tx.jpg"),
      right_img: require("@/assets/image/ic_right_sm.png"),
      refuse_img: require("@/assets/image/ic_wrong_sm.png")
    };
  },
  methods: {
    goback(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="less" scoped>
.detailBx {
  width: 100%;
  height: 100%;
}
.title_detail {
  position: fixed;
  top: 8%;
  height: 8%;
  width: 100%;
  display: flex;
  background: rgba(255, 255, 255, 1);
  z-index: 10;
  .left_title {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Source Han Sans SC;
    font-weight: 400;
    i {
      position: absolute;
      bottom: 0;
      width: 40px;
      height: 3px;
      background: rgba(93, 105, 249, 1);
    }
  }
  .right_title {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Source Han Sans SC;
    font-weight: 400;
    i {
      position: absolute;
      bottom: 0;
      width: 40px;
      height: 3px;
      background: rgba(93, 105, 249, 1);
    }
  }
}
.detail_main {
  position: fixed;
  top: 18%;
  height: 74%;
  width: 100%;
  overflow-y: scroll;
  background: rgba(255, 255, 255, 1);
  .top_message {
    padding: 20px 20px 0 20px;
    .bxlx,
    .bxsy,
    .je,
    .zflx,
    .bxr,
    .sqrq,
    .remarks {
      margin-bottom: 15px;
      display: flex;
      span {
        flex: 1;
        text-align: left;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: rgba(112, 112, 112, 1);
      }
      span:nth-child(2) {
        text-align: right;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }
    }
    .je {
      span:nth-child(2) {
        color: rgba(93, 105, 249, 1);
      }
    }
  }
  .bottom_message {
    padding: 0 20px 20px 20px;
    .nav {
      margin-bottom: 15px;
      span {
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }
    }
    .skfxm,
    .skfyhzh,
    .skfyhhh,
    .skfdz,
    .skfkhh,
    .sfnsqynsh {
      margin-bottom: 15px;
      display: flex;
      span {
        flex: 1;
        text-align: left;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: rgba(112, 112, 112, 1);
      }
      span:nth-child(2) {
        text-align: right;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
  .approval {
    .nav {
      padding: 20px;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      border-bottom: 1px solid #f1f1f1;
    }
    .main_approval {
      padding: 20px;
      // height: 100%;
      .agree_detail,
      .refuse_detail {
        position: relative;
        .line {
          position: absolute;
          width: 2px;
          height: 100%;
          top: 30px;
          left: 4.5%;
          background: #5d69f9;
          z-index: 3;
        }
      }

      .nicai {
        display: flex;
        .left_img {
          width: 25%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          i {
            z-index: 10;

            img {
              width: 20px;
              // margin-right: 20px;
            }
          }
          i:nth-child(2) {
            img {
              width: 40px;
            }
          }
        }
        .right_detail {
          width: 75%;
          .title_agree {
            display: flex;
            // width: 100%;
            span {
              flex: 1;
              font-family: Source Han Sans SC;
              font-weight: 400;
              color: rgba(67, 63, 61, 1);
              text-align: left;
              margin: 15px 0 15px 15px;
            }
            span:nth-child(2) {
              color: rgba(160, 160, 160, 1);
              text-align: right;
            }
          }
        }
      }
      .detail_refuse {
        width: 75%;
        margin-left: 28%;
      }
      .wait_detail i:first-child {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(93, 105, 249, 1);
      }
    }
    .main_approval {
      padding: 20px;
    }
  }
}
// .main_approval .line img{
//   width: 10xp;
//   height: 1px;
// }
.tabbar {
  position: fixed;
  bottom: 0;
  height: 8%;
  width: 100%;
  display: flex;
  border-top: 1px solid #5d69f9;
  background: rgba(255, 255, 255, 1);

  .tabbar_left,
  .tabbar_center,
  .tabbar_right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      margin-left: 10px;
      img {
        width: 40px;
      }
    }
    span {
      font-size: 20px;
      font-family: Source Han Sans SC;
      font-weight: 400;
    }
  }
  .tabbar_left {
    color: rgba(10, 143, 0, 1);
  }
  .tabbar_center {
    color: rgba(216, 30, 6, 1);
  }
  .tabbar_right {
    color: rgba(138, 138, 138, 1);
  }
}
.active {
  color: #5d69f9;
}
</style>