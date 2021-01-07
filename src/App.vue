<template>
  <div class="dayday-blog">
    <!-- <head-nav /> -->
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import HeadNav from '/@/components/layout/header/HeadNav.vue'
export default {
  name: 'App',
  components: { HeadNav }
}
</script>

<style lang="scss" scoped>
.dayday-blog {
  width: 100%;
  color: white;
  margin: auto;
}
</style>
