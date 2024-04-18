<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - 写代码的崔哥`
      : '写代码的崔哥'
  }
})

useSeoMeta({
  keywords() {
    return '写代码的崔哥,PHP,Golang,运维,前端,Android,iOS'
  },
  description() {
    return '一名后端开发工程师，涉猎广泛：PHP，Golang，运维，前端，Android，iOS。会不定期给大家分享一些技术干货'
  },
})
</script>