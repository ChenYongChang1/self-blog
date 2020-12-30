<template>
  <div class="dayday-blog">
    <head-nav></head-nav>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import HeadNav from "/@/components/layout/header/HeadNav.vue";
export default {
  name: "App",
  components: { HeadNav },
};
</script>

<style lang="scss" scoped>
.dayday-blog {
  color: white;
}
</style>
