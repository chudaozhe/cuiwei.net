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
  box-shadow: 0 0 4px #888;
  background: #fff;
  padding: 0;
}
.sidebar-h1 {
  color: #7958D1;
  font-size: 1.3em;
  background-image: linear-gradient(to bottom, #e8f5fe, #fff);
}
.pointer {
  margin-top: 20px;
  padding: 0 12px;
  height: 30px;
  line-height:30px;
  text-indent: 1em;
}

</style>