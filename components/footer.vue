<template>
  <footer id="footer">
    <div class="hd"></div>

    <div class="ft">
      <p class="copyright copyright1">
        <a href="/rss"><img src="/images/rss-icon.png" alt=""> RSS</a> | <a href="/sitemap.xml">站点地图</a>
      </p>
      <p class="copyright">
        写代码的崔哥 | <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备18039637号-1</a> | <a href="https://github.com/chudaozhe/cuiwei.net" target="_blank">Github</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
#footer a {
  text-decoration: none
}

#footer .hd {
  background: url(/images/sprits-min.png) repeat-x 0 -488px transparent;
  height: 6px;
  overflow: hidden
}

#footer .ft {
  background: url(/images/sprits-min.png) repeat-x 0 -504px transparent;
  height: 56px
}

#footer .ft .copyright {
  text-align: center;
  padding-top: 6px;
  color: #fff;
}
#footer .ft .copyright1 {
  padding-top: 0;
}
#footer .ft .copyright a {
  color: #fff
}
#footer .ft .copyright img {
  display: inline-block;
  vertical-align: middle;
}
</style>