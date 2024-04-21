<template>
  <!--main START-->
  <div class="container">
    <div class="row">
      <div class="col-md-9 col-xs-12">
        <article-item
          v-for="(field, index) in articleList?.list"
          :field="field"
          :key="field.id"
        />
        <Pagination :total="articleList?.count??0" :max="max" />
      </div>
      <div class="col-md-3 col-xs-12">
        <Aside />
      </div>
    </div>
  </div>
  <!--main END-->
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
// const { data } = await useApiFetch('http://blog.cw.net/admin/1/category/1/article')
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

articleList.value = await getArticleList({page: page.value, max:max.value})
articleList.value.list.forEach((obj) => {
  obj.description = obj.description === '' ? obj.content : '';
  obj.description = buildDescription(obj.description)
});
onMounted(()=>{
//   nuxt ssr 不支持这里调用
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

}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    /* 大于992px 文章列表才显示作者头像 */
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