<template>
  <aside>
    <!-- 推荐 start -->
    <Block
      title="推荐"
      :items="recommendList.list.map((item) => ({
      text: `${item.title}`,
      href: `/p/${item.code}`,
    }))"
    />
    <!-- 推荐 end -->
    <!-- 热门标签 start -->
    <Block
      :title="code?'相关标签':'热门标签'"
      :items="tagList.list.map((item) => ({
      text: `${item.name}(${item.sum})`,
      href: `/tag/${item.name}`,
    }))"
      listClassName="tag-cloud"
    />
    <!-- 热门标签 end -->
    <!-- 开源项目 start -->
    <Block
      title="开源项目"
      :items="openList.list.map((item) => ({
      text: `${item.title}`,
      href: `/p/${item.code}`,
    }))"
    />
    <!-- 开源项目 end -->
    <!-- 友情链接 start -->
    <Block
      title="友情链接"
      :items="[
      { text: '写代码的崔哥', href: '#' }
    ]"
    />
    <!-- 友情链接 end -->
  </aside>
</template>

<script setup>
const route = useRoute()

const openList = ref();
const recommendList = ref();
const tagList = ref();
openList.value = await getArticleList({open: 1})
recommendList.value = await getArticleList({recommend: 1})

const code = ref(route.params?.code)
if (code) {
  tagList.value = await getTagList({code: code.value})
} else {
  tagList.value = await getTagList({})
}
</script>

<style scoped>

</style>