<template>
  <div class="info-box">
    <div class="info common">
      <slot name="info"></slot>
    </div>
    <div class="info common">
      <slot name="search"></slot>
    </div>
    <div class="info common">
      <slot name="new"></slot>
    </div>
    <div class="info common">
      <slot name="hot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftInfoModules'
}
</script>

<style lang="scss" scoped>
$bg-color: #262728;
.info-box {
  width: 100%;
  .common {
    background: $bg-color;
    margin-bottom: 8px;
  }
}
</style>
