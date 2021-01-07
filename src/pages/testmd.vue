<template>
  <div>
    >>>
    <textarea v-model="source" cols="30" rows="10"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
// import marked from 'marked'
export default {
  setup() {
    // const marked = require('marked')
    const source = ref('1111')
    const compiledMarkdown = computed(() => {
      return source.value
    })
    return {
      source,
      compiledMarkdown
    }
  }
}
</script>

<style></style>
