<template>
  <div class="index-modules">
    <div class="user-title day-flex day-align-center">
      <slot name="user-title"></slot>
    </div>
    <div class="inner-container day-flex day-flex-space">
      <div class="left-info">
        <slot name="left-info"></slot>
      </div>
      <div class="container-list">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexModules'
}
</script>

<style lang="scss" scoped>
$bg-color: #262728;
.index-modules {
  width: 1366px;
  margin: auto;
  padding: 0 24px;
  .user-title {
    width: 100%;
    height: 100px;
  }
  .inner-container {
    width: 100%;
    margin: auto;
    .left-info {
      width: 300px;
    }
    .container-list {
      width: 1010px;
      background: $bg-color;
    }
  }
}
</style>
