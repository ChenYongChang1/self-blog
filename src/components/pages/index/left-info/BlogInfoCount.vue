<template>
  <div class="blog-info">
    <div class="info-cover">
      <div class="cover day-flex">
        <img class="user-cover day-img-cover" src="https://www.w3school.com.cn/i/eg_tulip.jpg" alt="" />
        <div class="name-desc day-flex day-flex-column day-flex-center">
          <div class="name font-14">快乐的美羊羊</div>
          <div class="personal-home-years font-13">码龄8年</div>
        </div>
      </div>
      <div class="count-info day-flex">
        <div class="count-item flex-1">
          <p class="num day-text-center">88</p>
          <p class="num-name day-text-center">原创</p>
        </div>
        <div class="count-item flex-1">
          <p class="num day-text-center">88</p>
          <p class="num-name day-text-center">转载</p>
        </div>
        <div class="count-item flex-1">
          <p class="num day-text-center">88</p>
          <p class="num-name day-text-center">总数</p>
        </div>
        <div class="count-item flex-1">
          <p class="num day-text-center">88</p>
          <p class="num-name day-text-center">访问</p>
        </div>
        <div class="count-item flex-1">
          <!-- <p class="num day-text-center">88</p>
          <p class="num-name day-text-center">访问</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogInfoCount'
}
</script>

<style lang="scss" scoped>
.blog-info {
  padding: 16px;
  .info-cover {
    width: 100%;
    height: 140px;
    .cover {
      width: 100%;
      height: 70px;
      padding-bottom: 6px;
      .user-cover {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      .name-desc {
        width: 212px;
        height: 48px;
        .name {
          width: 100%;
          height: 22px;
          line-height: 22px;
        }
        .personal-home-years {
          width: 100%;
          height: 20px;
          line-height: 20px;
          color: #999aaa;
        }
      }
    }
    .count-info {
      width: 100%;
      height: 70px;
      padding: 9px 0;
      border-bottom: solid 1px #373739;
      .num {
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        color: #c4c4c8;
      }
      .num-name {
        font-size: 14px;
        color: #999aaa;
        line-height: 22px;
        padding: 3px 0;
      }
    }
  }
}
</style>
