<template>
  <!--main START-->
  <div class="container">
    <div class="row" style="margin: 0!important;">
      <div class="block" style="margin-top: 20px; padding: 0; height: 30px; line-height:30px; text-indent: 1em">
        <h1 class="sidebar-h1" style="padding: 0;">{{tag?.name}}</h1>
      </div>
    </div>
  </div>
  <div class="container" style="padding: 0!important; margin-top: 20px">
    <div class="row" style="margin: 0!important;">
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
const tag_name = ref(route.params.name??'')
const tag = ref()
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
articleList.value = await getTagArticleList(tag_name.value, {page: page.value, max:max.value})
articleList.value.list.forEach((obj) => {
  obj.description = obj.description === '' ? obj.content : '';
  obj.description = buildDescription(obj.description)
});
tag.value = await getTagDetail(tag_name.value)

useHead({
    title: tag.value.name
  }
)
useSeoMeta({
  keywords() {
    return tag.value.name
  },
  description() {
    return tag.value.name + '相关的文章'
  },
})
</script>
<style scoped>
.block {
  border: solid 1px #bbbeaf;
  -moz-box-shadow: 0 0 4px #888;
  -webkit-box-shadow: 0 0 4px #888;
  box-shadow: 0 0 4px #888;
  background: #fff
}
.sidebar-h1 {
  padding: 10px 10px 0;
  vertical-align: middle;
  color: #7958D1;
  font-size: 1.3em;
  position: relative;
  background: -moz-linear-gradient(top, #e8f5fe, #fff);
  background: -webkit-gradient(linear, left top, left bottom, from(#e8f5fe), to(#fff));
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e8f5fe', endColorstr='#ffffff')
}
@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 100%;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 100%;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}
</style>