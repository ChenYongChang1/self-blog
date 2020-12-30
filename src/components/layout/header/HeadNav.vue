<template>
  <div class="day-header day-flex day-flex-space day-align-center">
    <div class="logo">
      <img class="day-img day-img-cover" :src="'/@/assets/imgs/common/logo.png'" alt="" />
    </div>
    <div class="day-search flex-1">
      <el-input v-model="searchWord" placeholder="~ 搜索文档 ~"></el-input>
    </div>
    <div class="user-info day-flex day-flex-end day-align-center">
      <div class="user-cover day-pointer">
        <img src="https://profile.csdnimg.cn/5/1/E/2_weixin_44067251" alt="">
      </div>
      <div class="add-acticle">
        <img class="day-img day-img-contain day-pointer" src="/@/assets/imgs/layout/header/add.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HeadNav",
  setup() {
    const searchWord = ref("");
    return { searchWord };
  },
};
</script>

<style lang="scss" scoped>
.day-header {
  width: 100%;
  height: 48px;
  // background: url('/@/assets/imgs/common/toolbar_bg_dark.png');
  background-position: 0 0;
  background-size: cover;
  position: sticky;
  top: 0;
  .logo {
    width: 110px;
    height: 100%;
  }
  .day-search {
    max-width: 400px;
  }
  .user-info {
    width: 300px;
    height: 100%;
    .user-cover {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .add-acticle {
      width: 20px;
      height: 20px;
      margin-left: 30px;
    }
  }
}
</style>
