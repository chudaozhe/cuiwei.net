<template>
  <div class="container single-post">
    <div class="row">
      <div class="col-lg-9 col-xs-12 custom-col-l">
        <article class="post block">
          <header>
            <h1>{{field.title}}</h1>
            <div>
              <span v-if="field.updated_at">
                编辑于 {{field.updated_at}}
                <a class="iconfont" :title="'发布于 ' + field.created_at">&#xe689;</a>
              </span>
              <span v-else>发布于 {{field.created_at}}</span>
              <span>阅读 {{field.views}}</span>
            </div>
          </header>
          <!-- 内容 start -->
          <div class="bd markdown-body">
            <iframe v-if="field.iframe" :src="field.iframe" class="iframe" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" id="bili-iframe" />
            <div v-html="html"></div>
          </div>
          <!-- 内容 end -->
          <footer>
            <p>广而告之，我的新作品《语音助手》上架Google Play了，欢迎下载体验</p>
            <a href="//www.cuiwei.net/p/1753475452"><img src="/images/voice.jpg" width="100%" height="100%"></a>
          </footer>
        </article>
      </div>
      <div class="col-lg-3 col-xs-12 custom-col-r">
        <Aside/>
      </div>
    </div>
  </div>
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

/**
 * 作废
 * @param time
 * @returns {*|string}
 */
const formatDate = (time) => {
  if (time.length === 0) return ''
  let timestamp = new Date(parseInt(time + '000'))
  return formatdate(timestamp, 'yyyy-MM-dd hh:mm:ss') // 此处可根据自己的需要自定义想要的日期格式
}

onMounted(()=>{
  changeIframe()
  window.addEventListener('resize', changeIframe)
})
onBeforeUnmount(()=>{
  window.removeEventListener('resize', changeIframe)
})
const changeIframe = () => {
  let biliIframe=document.getElementById("bili-iframe");
  if (biliIframe) {
    let width=biliIframe.offsetWidth;
    // console.log(width)
    biliIframe.height=width*(9/16)
  }
}

</script>

<style scoped>
.block {
  margin: 15px auto;
  border: solid 1px #bbbeaf;
  box-shadow: 0 0 4px #888;
  background: #fff
}

.post {
  margin: 15px auto 10px
}

.post h1 {
  background-image: linear-gradient(to bottom, #e8f5fe, #fff);
  padding: 10px 10px 0 10px;
  font-size: 20px;
}

.post h1 a:hover {
  color: #7958D1
}
.post .bd {
  padding: 0 10px;
  margin: 15px 0 15px
}

/* detail */
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

.iframe {
  margin-bottom: 10px;
}

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
  .post {
    margin: 15px auto 30px
  }
  .post h1{
    font-size: 30px;
    padding-top: 30px;
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