<template>
  <div class="login">
    <div class="main">
      <div class="icon_login">
        <div class="_icon">
          <i>
            <img src="@/assets/image/icon_96.png" />
          </i>
        </div>
        <div class="_title">
          <span>黑龙江省公路工程监理咨询公司管理平台</span>
        </div>
      </div>
      <section id="form_login">
        <form @submit.prevent="login">
          <h3>登 录</h3>

          <div class="config_form">
            <i>
              <img src="../../assets/image/ic_user.png" alt />
            </i>
            <input type="text" placeholder="用户名" v-model="username" @focus="show=2" @blur="show=''"/>
            <i v-if="show == 2" @touchstart="bbb">
              <img src="../../assets/image/ic_delete.png" alt />
            </i>
          </div>
          <div class="config_form">
            <i>
              <img src="../../assets/image/ic_password.png" alt />
            </i>
            <input type="text" placeholder="密码" v-model="password" @focus="show=1"  @blur="show=''"/>
            <i v-if="show == 1" @touchstart="aaa">
              <img src="../../assets/image/ic_delete.png" alt />
            </i>
          </div>
          <button id="login-form-submit">登录</button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import {Toast} from 'vant'
export default {
  name: "login",
  data() {
    return {
      username: "admin",
      password: "1111",
      show:''
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === '1111') {
        this.$router.push("/");

      }else{
        Toast('账号密码错误请从新输入');
      }
    },
    bbb(){
      this.username=""
    },
    aaa(){
      this.password=""
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/login.less");
</style>