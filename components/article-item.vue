<template>
  <article class="post block">
    <header>
      <div class="author">
        <figure>
          <img alt='' src='/images/logo.jpg' class='avatar' height='49' width='49' />
          <figcaption><b><a href="#">cw</a></b></figcaption>
        </figure>
      </div>
      <h2>
        <a class="title" :href="'/p/' +field.code" :title="field.title">{{field.title}}</a>
      </h2>
      <p class="category"><a :href="'/category/' + field.category_id">{{field.category_name}}</a></p>
    </header>
    <div class="bd entry-content">
      <div class="description">
        {{field.description}}
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps(['field'])

</script>

<style scoped>
.block {
  margin: 15px auto;
  border: solid 1px #bbbeaf;
  box-shadow: 0 0 4px #888;
  background: #fff
}

/* article-item */
.post {
  position: relative;
  margin: 15px auto 30px
}

.post header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(to bottom, #e8f5fe, #fff);
  padding: 10px 10px 0 10px;
}

.post h2 {
  font-size: 20px;
  white-space: nowrap;
  /* 启用文本溢出隐藏并显示省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
}

.post h2 a:hover {
  color: #7958D1
}
.post .bd {
  padding: 0 10px;
  margin: 15px 0 15px
}
.post .description {
  overflow: hidden;
  text-align: justify;
}

.post .category {
  color: #999;
  padding-left: 10px;
}

.post .category a {
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
  border-radius: 3px;
  width: 54px;
  height: 72px;
  background: #fff;
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

@media (min-width: 992px) {
  .post{
    margin-bottom: 40px;
  }
  .post .author {
    display: block;
  }
  .post h2{
    text-indent: 70px;
  }
  .post h2{
    font-size: 25px;
  }
}
@media (min-width: 1200px) {

}
@media (min-width: 1400px) {

}
</style>