<template>
  <aside>
    <!-- 推荐 start -->
    <div class="block">
      <h1 class="sidebar-h1">推荐</h1>
      <ul class="general">
        <li v-for="(field, index) in recommendList.list" :key="index">
          <a :href="'/p/'+field.code">{{field.title}}</a>
        </li>
      </ul>
    </div>
    <!-- 推荐 end -->
    <!-- 热门标签 start -->
    <div class="block">
      <h1 class="sidebar-h1">{{code? '相关标签' : '热门标签'}}</h1>
      <ul class='tag-cloud'>
        <li v-for="(field, index) in tagList.list" :key="index">
          <a :href="'/tag/'+field.name">{{field.name}}({{field.sum}})</a>
        </li>
      </ul>
    </div>
    <!-- 热门标签 end -->
    <!-- 开源项目 start -->
    <div class="block">
      <h1 class="sidebar-h1">开源项目</h1>
      <ul class="general">
        <li v-for="(field, index) in openList.list" :key="index">
          <a :href="'/p/'+field.code">{{field.title}}</a>
        </li>
      </ul>
    </div>
    <!-- 开源项目 end -->
    <!-- 友情链接 start -->
    <div class="block">
      <h1 class="sidebar-h1">友情链接</h1>
      <ul class="general">
        <li><a href="#" target="_blank">写代码的崔哥</a></li>
      </ul>
    </div>
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
.block {
  margin: 15px auto;
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

.tag-cloud {
  padding: 0 5px
}

.tag-cloud li {
  display: inline-block;
  line-height: 24px;
  padding: 5px;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.tag-cloud li a:hover {
  color: #7958D1
}

.general li {
  overflow: hidden;
  line-height: 30px;
  text-indent: 10px;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.general li a:hover {
  color: #9158D1
}

</style>