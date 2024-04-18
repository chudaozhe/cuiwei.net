<template>
  <header id="header">
    <div class="top">
      <div class="container" style="padding: 0!important;">
        <div class="row" style="margin: 0!important;">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 logo">
            <a href="/"><img src="/images/logo.jpg" width="44" height="44"></a>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12" style="padding-left: 10px">
            <section class="search">
              <form method="get" action="/search">
                <div class="area"><input type="text" :value="keyword" name="keyword" /></div>
                <button class="search-btn"><span>搜索</span></button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="container" style="padding: 0!important;">
        <div class="row" style="margin: 0!important;">
          <nav class="menu-nav">
            <ul>
              <li v-for="(item, index) in navigation">
                <a :href="item.href" :target="item.current?'':'_blank'">{{item.name}}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const route = useRoute()
const keyword = ref(route.query.keyword)
const navigation = ref([
  { name: '首页', href: '/', current: true },
  { name: 'Backend', href: '/category/1', current: true },
  { name: 'Frontend', href: '/category/2', current: true },
  { name: 'AIGC', href: '/category/3', current: true },
  { name: '开源', href: 'https://github.com/chudaozhe', current: false },
])
</script>
<style scoped>
#header .top {
  padding-top: 30px;
  background: url(/images/sprits-min.png) repeat-x 0 0 transparent;
  height: 177px;
}

#header .menu {
  background: url(/images/sprits-min.png) repeat-x 0 -177px transparent;
  height: 75px;
}

#header .search {
  position: relative;
  padding: 4px;
  margin: 18px auto 0;
  vertical-align: baseline;
  border-radius: 4px;
  background: #7967A8;
  max-width: 600px;
}

#header .search .area {
  background: #fff;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  height: 30px;
  margin-right:82px;
}

#header .search input {
  border: 0;
  height: 30px;
  width: 100%;
  padding: 0;
  text-indent: 0.2em;
}

#header .search .search-btn {
  position: absolute;
  right: 3px;
  top: 4px;
  height: 30px;
  width: 80px;
  border: none;
  border-radius: 3px;
  background: white;
}
#header .search .search-btn:hover{
  background-color: #ccc;
}

#header .search .search-btn span {
  color: #404040;
  letter-spacing: 5px;
  font-size: 16px;
  font-weight: 700
}

#header .menu-nav {
}
#header .menu-nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

#header .menu-nav a:hover {
  color: #CFEBFD
}

#header .menu-nav li {
  width: 20%;
  font-size: 20px;
  text-align: center;
  line-height: 72px;
}

#header .menu-nav li a {
  text-decoration: none;
  color: #fff
}

#header .menu-nav li a:hover {
  text-decoration: underline;
}

.logo{
  text-align: center;
}
.logo img{
  display: inline-block;
  width: 70px;
  height: 70px;
  border-radius: 25px;
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
  #header .search {
    margin-top: 30px;
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
  #header .search {
    margin-top: 30px;
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
  #header .search {
    margin-top: 30px;
  }
}
</style>