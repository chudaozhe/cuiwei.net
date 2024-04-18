<template>
  <article class="post block">
    <h2 class="entry-title">
      <a class="title" :href="'/p/' +field.code" :title="field.title">{{field.title}}</a>
    </h2>
    <div class="bd entry-content">
      <div class="digest no-has-thumbnail">
        <p>{{field.description}}</p>
      </div>
    </div>
    <footer>
      <div class="author ">
        <figure>
          <img alt='' src='/images/logo.jpg' class='avatar' height='70' width='70' />
          <figcaption><b><a href="#">cw</a></b></figcaption>
        </figure>
      </div>
      <p class="info"><a :href="'/category/' + field.category_id">{{field.category_name}}</a></p>
    </footer>
  </article>
</template>

<script setup>
const props = defineProps(['field'])

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
.entry-content .no-has-thumbnail {
  width: 100%;
  height: 100px
}
/* article-item */
.post {
  position: relative;
  margin: 15px auto 30px
}

.post h2 {
  background: -moz-linear-gradient(top, #e8f5fe, #fff);
  background: -webkit-gradient(linear, left top, left bottom, from(#e8f5fe), to(#fff));
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e8f5fe', endColorstr='#ffffff');
  padding: 10px 10px 0 10px;
  font-size: 20px;
  overflow: hidden;
}

.post h2 a:hover {
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

@media (min-width: 992px) {
  .post{
    margin-bottom: 60px;
  }
  .post .author {
    display: block;
  }
  .post h2.entry-title{
    text-indent: 90px;
  }
  .post h2{
    font-size: 30px;
    padding-top: 30px;
  }
}
@media (min-width: 1200px) {
  .post{
    margin-bottom: 60px;
  }
  .post .author {
    display: block;
  }
  .post h2.entry-title{
    text-indent: 90px;
  }
  .post h2{
    font-size: 30px;
    padding-top: 30px;
  }
}
@media (min-width: 1400px) {
  .post{
    margin-bottom: 60px;
  }
  .post .author {
    display: block;
  }
  .post h2.entry-title{
    text-indent: 90px;
  }
  .post h2{
    font-size: 30px;
    padding-top: 30px;
  }
}
</style>