<template>
  <div class="day-header">
    <div class="day-inner-head day-flex day-flex-space day-align-center">
      <div class="logo">
        <img :src="'/@/assets/imgs/common/logo.png'" class="day-img day-img-cover" alt="" />
      </div>
      <div class="day-search day-flex flex-1">
        <el-input v-model="searchWord" class="day-input" placeholder="~ 搜索文档 ~" />
        <el-button class="day-search-btn day-flex day-flex-center day-align-center day-text-center" type="primary">
          <img src="/@/assets/imgs/layout/header/search.svg" class="day-search-icon day-block day-img-cover" alt="" />
        </el-button>
      </div>
      <div class="user-info day-flex day-flex-end day-align-center">
        <div class="user-cover day-pointer">
          <img src="https://avatar.csdnimg.cn/5/1/E/2_weixin_44067251.jpg" alt="" />
        </div>
        <div class="add-acticle">
          <img class="day-img day-img-contain day-pointer" src="/@/assets/imgs/layout/header/add.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HeadNav',
  setup() {
    const searchWord = ref('')
    return { searchWord }
  }
}
</script>

<style lang="scss" scoped>
.day-header {
  width: 100%;
  height: 48px;
  background: url('/@/assets/imgs/common/toolbar_bg_dark.png');
  background-position: 0 0;
  background-size: cover;
  position: sticky;
  top: 0;
  .day-inner-head {
    width: 1366px;
    height: 100%;
    margin: auto;
    .logo {
      width: 300px;
      height: 100%;
      padding-right: 190px;
    }
    .day-search {
      max-width: 400px;
      position: relative;
      ::v-deep .el-input_inner {
        padding-right: 60px;
        &:focus {
          border: none;
          outline: none;
        }
      }
      .day-search-btn {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 100%;
        padding: 0;
        border-radius: 0 4px 4px 0;
        line-height: 28px;
        .day-search-icon {
          width: 15px;
          height: 15px;
          margin: auto;
        }
      }
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
}
</style>
