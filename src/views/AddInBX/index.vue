<template>
  <div class="addInBX">
    <Header :title="'费用报销单（计划内）'" :leftImg="true" />
    <div class="main_add">
      <Scroller>
        <div class="main_add_1">
          <div class="people_bx">
            <div class="text">
              <span>报销人</span>
              <span>
                <input type="text" placeholder="请输入报销人" />
              </span>
            </div>
            <div class="text">
              <span>报销部门</span>
              <span>
                请选择报销部门
                <i>
                  <img src alt />
                </i>
              </span>
            </div>
            <div class="text">
              <span>支付类型</span>
              <span>
                请选择支付类型
                <i>
                  <img src alt />
                </i>
              </span>
            </div>
            <div class="text">
              <span>报销事由</span>
              <span>
                <input type="text" placeholder="请输入报销事由" />
              </span>
            </div>
            <div class="text _one">
              <span>附单据</span>
              <span>
                共
                <input type="text" />张
              </span>
            </div>
          </div>
          <div class="bxdetail">
            <div class="nav">
              <span>报销明细</span>
            </div>
            <div class="detail_main">
              <div class="bx_dan">
                <span>食宿费报销</span>
                <span>
                  ￥ 234.00元
                  <i>
                    <img src alt />
                  </i>
                </span>
              </div>
            </div>
            <div class="footter_detail">
              <i>
                <img src alt />
              </i>
              <span>增加报销明细</span>
            </div>
          </div>
        </div>
      </Scroller>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "addInBX",
  components: {
    Header
  }
};
</script>

<style lang="less" scoped>
.addInBX {
  width: 100%;
  height: 100%;
  .main_add {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 8%;
    .main_add_1 {
      position: relative;
      top: 2%;
      height: 1000px;
      width: 100%;
      .people_bx {
        margin: 20px 0;
        // padding: 20px 20px 0 20px;
        background: #ffffff;
        .text {
          width: 100%;
          padding: 20px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(238, 238, 238, 1);
          span:last-child {
            margin-right: 15px;
            position: absolute;
            right: 0;
            input {
              border: none;
              text-align: right;
            }
          }
        }
        ._one {
          input {
            width: 50px;
          }
        }
      }
      .bxdetail {
        background: #ffffff;
        .nav {
          padding: 15px;
          border-bottom: 1px solid rgba(238, 238, 238, 1);
        }
        .detail_main {
          padding: 15px;
          border-bottom: 1px solid rgba(238, 238, 238, 1);
          span:last-child {
            margin-right: 15px;
            position: absolute;
            right: 0;
          }
        }
        .footter_detail {
          padding: 15px;
          border-bottom: 1px solid rgba(238, 238, 238, 1);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>