<template>
  <!--main START-->
  <div class="container single-post" style="padding: 0!important; margin-top: 20px">
    <div class="row" style="margin: 0!important;">
      <div class="col-lg-9 col-xs-12">
        <article class="post block">
          <header>
            <h1>{{field.title}}</h1>
            <div>
              <span v-if="field.update_time">
                编辑于 {{formatDate(field.update_time)}}
                <a class="iconfont" :title="'发布于 ' + formatDate(field.create_time)">&#xe689;</a>
              </span>
              <span v-else>发布于 {{formatDate(field.create_time)}}</span>
              <span>阅读 {{field.views}}</span>
            </div>
          </header>
          <!-- 内容 start -->
          <div class="bd markdown-body">
<!--            <?php if (!empty($field['iframe'])){?>-->
<!--            <iframe src="<?=$field['iframe'] ?>" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" id="bili-iframe"> </iframe>-->
<!--            <?=$field['content']?>-->
            <div v-html="html"></div>
          </div>
          <!-- 内容 start -->
          <footer>
            <p>广而告之，我的新作品《语音助手》上架Google Play了，欢迎下载体验</p>
            <a href="//www.cuiwei.net/p/1753475452/"><img src="/images/voice.jpg" width="100%" height="100%"></a>
          </footer>
        </article>
      </div>
      <div class="col-lg-3 col-xs-12">
        <Aside/>
      </div>
    </div>
  </div>
  <!--main END-->
</template>
<script setup>
import Aside from '../components/aside.vue'
import MarkdownIt from "markdown-it";
import {formatdate} from "~/utils/date.js";
import he from "he/he.js"

const route = useRoute()

const code = ref(route.params.code);
const field = ref();
field.value = await getArticleDetail(code.value, {})

useHead({
    title: field.value.title
  }
)

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

useSeoMeta({
  keywords() {
    return field.value.tags.join(',')
  },
  description() {
    return field.value.description.length > 0 ? field.value.description : buildDescription(field.value.content)
  },
})

const html = computed(() => {
  return md.render(field.value.content)
})

const formatDate = (time) => {
  if (time.length === 0) return ''
  let timestamp = new Date(parseInt(time + '000'))
  return formatdate(timestamp, 'yyyy-MM-dd hh:mm:ss') // 此处可根据自己的需要自定义想要的日期格式
}
// window.onload = function (){
//   changeIframe()
// }
// window.onresize = function (){
//   changeIframe()
// }
// function changeIframe(){
//   let biliIframe=document.getElementById("bili-iframe");
//   let width=biliIframe.offsetWidth;
//   // console.log(width)
//   biliIframe.height=width*(9/16)
// }

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

.post {
  position: relative;
  margin: 15px auto 30px
}

.post h1 {
  background: -moz-linear-gradient(top, #e8f5fe, #fff);
  background: -webkit-gradient(linear, left top, left bottom, from(#e8f5fe), to(#fff));
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e8f5fe', endColorstr='#ffffff');
  padding: 10px 10px 0 10px;
  font-size: 20px;
  overflow: hidden;
}

.post h1 a:hover {
  color: #7958D1
}
.post .bd {
  padding: 0 10px;
  margin: 15px 0 15px
}
.post .digest {
  overflow: hidden;
  line-height: 24px;
  position: relative
}

.post .info {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #999
}

.post .info a {
  text-decoration: underline
}

.post .author {
  position: absolute;
  top: -24px;
  left: 10px;
  display: none;
}

.post .author figure {
  border: 1px solid #cfebfd;
  -moz-border-radius: 3px;
  border-radius: 3px;
  width: 74px;
  height: 92px;
  background: #fff;
  -moz-box-shadow: 2px 2px 4px #888;
  -webkit-box-shadow: 2px 2px 4px #888;
  box-shadow: 2px 2px 4px #888
}

.post .author figure img {
  display: block;
  margin: 2px
}

.post .author figcaption {
  text-align: center;
  background: #cfebfd;
  line-height: 18px
}
/* detail */

.single-post .post .info {
  margin-top: 20px;
  color: #999
}

.single-post header h1 {
  font-size: 2em;
  text-align: center;
}

.single-post header div {
  text-align: center;
  color: #8590a6;
  margin-top: 20px;
  /*line-height: 50px;*/
}

.single-post header div span{
  margin-left: 10px;
}

.single-post header div span a{
  /*color: #7958D1;*/
}

.single-post header div span a:hover{
  text-decoration: none;
  cursor: pointer;
}

.single-post .entry-content p {
  margin-top: 20px
}
.entry-content .no-has-thumbnail {
  width: 100%;
  height: 100px
}
.single-post .post footer {
  border-top: 1px solid #ccc;
  padding: 0 10px 10px 10px;
  background: url(/images/author-bg.png) 0 0 repeat #e9e9fc
}
.single-post footer p {
  line-height: 30px;
  margin: 16px 0;
}

/* iconfont */
@font-face {
  font-family: 'iconfont';
  src: url('/font/iconfont.woff2?t=1653401969225') format('woff2'),
  url('/font/iconfont.woff?t=1653401969225') format('woff'),
  url('/font/iconfont.ttf?t=1653401969225') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 2px;
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
  .logo{
    text-align: left;
  }
  .logo img{
    width: 100px;
    height: 100px;
    border-radius: 25px;
  }
  #header .top {
    padding-top: 50px;
  }
  #header .menu-nav {
    margin-top: 34px;
  }
  #header .search {
    margin-top: 30px;
  }
  .post{
    margin-bottom: 60px;
  }
  .post .author {
    display: block;
  }
  .post h1.entry-title{
    text-indent: 90px;
  }
  .post h1{
    font-size: 30px;
    padding-top: 30px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 100%;
  }
  .logo{
    text-align: left;
  }
  .logo img{
    width: 100px;
    height: 100px;
    border-radius: 25px;
  }
  #header .top {
    padding-top: 50px;
  }
  #header .menu-nav {
    margin-top: 34px;
  }
  #header .search {
    margin-top: 30px;
  }
  .post{
    margin-bottom: 60px;
  }
  .post .author {
    display: block;
  }
  .post h1.entry-title{
    text-indent: 90px;
  }
  .post h1{
    font-size: 30px;
    padding-top: 30px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
  .logo{
    text-align: left;
  }
  .logo img{
    width: 100px;
    height: 100px;
    border-radius: 25px;
  }
  #header .top {
    padding-top: 50px;
  }
  #header .menu-nav {
    margin-top: 34px;
  }
  #header .search {
    margin-top: 30px;
  }
  .post{
    margin-bottom: 60px;
  }
  .post .author {
    display: block;
  }
  .post h1.entry-title{
    text-indent: 90px;
  }
  .post h1{
    font-size: 30px;
    padding-top: 30px;
  }
}
</style>