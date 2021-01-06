<template>
  <div class="search-acticle day-flex day-align-center">
    <el-input v-model="searchWord" placeholder="搜博主文章" />
    <el-button type="primary" class="day-search day-flex day-flex-center day-align-center">
      <img src="/@/assets/imgs/layout/header/search.svg" class="day-search-icon day-block day-img-cover" alt="" />
    </el-button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'SearchActicle',
  setup() {
    const searchWord = ref('')
    return {
      searchWord
    }
  }
}
</script>

<style lang="scss" scoped>
$bg-color: #262728;
.search-acticle {
  width: 100%;
  height: 48px;
  padding: 0 16px;
  .day-search {
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 0 4px 4px 0;
    .day-search-icon {
      width: 15px;
      height: 15px;
      margin: auto;
    }
  }
  .el-input {
    width: auto;
  }
  ::v-deep .el-input__inner {
    width: 235px;
    height: 32px;
    background-color: #555557;
    color: #e8e8ed;
    border: none;
    outline: none;
    border-radius: 4px 0 0 4px;
  }
}
</style>
