<template>
  <div class="title-sign">
    <h1 class="title">
      天天的专栏
    </h1>
    <div class="description font-14">
      站在巨人的肩膀上，我们才能看得更远！
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserTitleInfo'
}
</script>

<style lang="scss" scoped>
$title-color: #e2e2e2;
.title-sign {
  width: 100%;
  color: $title-color;
  .title {
    font-size: 24px;
    margin: 0;
  }
}
</style>
