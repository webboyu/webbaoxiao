<template>
  <div class="search">
    <div class="all">
      <form @submit.prevent="search">
        <div class="border_search">
          <span class="placceholder">
            <img :src="img" alt />
          </span>
          <input type="search" placeholder="请输入要搜索的关键词" />
        </div>
        <button>搜索</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      img: require("@/assets/image/ic_zk_search.png")
    };
  }
};
</script>

<style scoped>
.search {
  height: 50px;
  width: 100%;
  /* position: fixed; */
  /* top: 0%; */
  background: rgba(255, 255, 255, 1);
  margin-bottom: 20px ;
  z-index: 10;
}
.all {
  margin: 0 auto;
  width: 90%;
  height: 100%;
}
form {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.border_search {
  width: 85%;
  height: 60%;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 27px;
  background: rgba(238, 238, 238, 1);
}
.border_search span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.border_search span img {
  height: 30px;
}
input {
  width: 100%;
  border: none;
  background: transparent;
}
button {
  border: none;
  background: transparent;
  margin-left: 15px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
</style>