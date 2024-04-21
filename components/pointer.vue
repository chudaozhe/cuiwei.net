<template>
<!--  分类页，标签页，搜索页的标志-->
  <div class="container">
    <div class="row pointer">
      <div class="block">
        <h1 class="sidebar-h1"><slot/></h1>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>

<style scoped>
.block {
  border: solid 1px #bbbeaf;
  -moz-box-shadow: 0 0 4px #888;
  -webkit-box-shadow: 0 0 4px #888;
  box-shadow: 0 0 4px #888;
  background: #fff;
  padding: 0;
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
.pointer {
  margin-top: 20px;
  padding: 0 12px;
  height: 30px;
  line-height:30px;
  text-indent: 1em;
}
.pointer .sidebar-h1 {
  padding: 0;
}
</style>