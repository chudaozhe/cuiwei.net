<template>
  <pointer>{{category?.name}}</pointer>
  <div class="container">
    <div class="row">
      <div class="col-md-9 col-xs-12 custom-col-l">
        <article-item
          v-for="(field, index) in articleList?.list"
          :field="field"
          :key="field.id"
        />
        <Pagination :total="articleList?.count??0" :max="max" />
      </div>
      <div class="col-md-3 col-xs-12 custom-col-r">
        <Aside />
      </div>
    </div>
  </div>
</template>

<script setup>
import Aside from '../components/aside.vue'
import MarkdownIt from "markdown-it";
import ArticleItem from "~/components/article-item.vue";
import he from "he/he.js"

const route = useRoute()

const articleList = ref();
const page = ref(route.query.page??1)
const max = ref(route.query.max??10)
const category_id = ref(route.params.id??0)
const category = ref()
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});
const buildDescription = ((val) => {
  let desc = md.render(val);
  //先decode，去除字符串中的html标签
  desc = he.decode(desc).replace(/<\/?.+?>/g, '');
  return desc.length > 300 ? desc.substring(0, 300) + '...' : desc;
})
articleList.value = await getArticleList({category_id: category_id.value, page: page.value, max:max.value})
articleList.value.list.forEach((obj) => {
  obj.description = obj.description === '' ? obj.content : '';
  obj.description = buildDescription(obj.description)
});

category.value = await getCategoryDetail(category_id.value)

useHead({
    title: category.value.name
  }
)
useSeoMeta({
  keywords() {
    return category.value.name
  },
  description() {
    return category.value.name + '相关的文章'
  },
})
</script>
<style scoped>
@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 100%;
    margin-top: 10px;
  }
}
@media (min-width: 768px) {
  .custom-col-l {
    padding-right: 6px;
  }
  .custom-col-r {
    padding-left: 6px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    margin-top: 20px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}
@media (min-width: 1400px) {

}
</style>