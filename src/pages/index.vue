<template>
  <div class="dayday-blog">
    <index-modules>
      <template #user-title>
        <user-title-info />
      </template>
      <template #left-info>
        <user-left-info />
      </template>
      <template>
        <div>12</div>
      </template>
    </index-modules>
  </div>
</template>

<script>
import IndexModules from '/@/components/pages/index/IndexModules.vue'
import UserTitleInfo from '/@/components/pages/index/UserTitleInfo.vue'
import UserLeftInfo from '/@/components/pages/index/UserLeftInfo.vue'
export default {
  name: 'Index',
  components: { IndexModules, UserTitleInfo, UserLeftInfo },
  setup() {}
}
</script>

<style lang="scss" scoped>
.dayday-blog {
  width: 100%;
}
</style>
