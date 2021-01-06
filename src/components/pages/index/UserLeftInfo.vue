<template>
  <div>
    <left-info-modules>
      <template #info>
        <blog-info-count />
      </template>
      <template #search>
        <search-acticle />
      </template>
    </left-info-modules>
  </div>
</template>

<script>
import LeftInfoModules from '/@/components/pages/index/left-info/LeftInfoModules.vue'
import SearchActicle from '/@/components/pages/index/left-info/SearchActicle.vue'
import BlogInfoCount from '/@/components/pages/index/left-info/BlogInfoCount.vue'
export default {
  name: 'UserLeftInfo',
  components: { LeftInfoModules, SearchActicle, BlogInfoCount }
}
</script>

<style lang="scss" scoped></style>
