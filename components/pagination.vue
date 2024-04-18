<template>
  <div class="pagination" v-if="totalPages() > 1">
    <ul>
      <li v-if="currentPage > 1">
        <NuxtLink external :to="{ path: route.path, query: { ...route.query, page: currentPage -1 } }">
          上一页
        </NuxtLink>
      </li>

      <li v-for="(page, index) in displayedPages()" :key="page" :class="{ current: page === currentPage }">
        <NuxtLink external :to="{ path: route.path, query: { ...route.query, page: page } }">
          {{ page }}
        </NuxtLink>
      </li>

      <li v-if="currentPage < totalPages()">
        <NuxtLink external :to="{ path: route.path, query: { ...route.query, page: currentPage + 1 } }">下一页</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const route = useRoute();

const currentPage = ref(route.query.page?? 1);
const props = defineProps(['total', 'max'])
const totalItemsCount = ref(props.total);
const itemsPerPage = ref(props.max);

//转int
currentPage.value = parseInt(currentPage.value)

const nextPage = () => {
  return currentPage.value < totalPages() ? currentPage.value + 1 : null;
}
const totalPages = () => {
  return Math.ceil(totalItemsCount.value / itemsPerPage.value);
}
const displayedPages = () => {
  const start = Math.max(1, currentPage.value - 2);//2（包括,(1
  const end = Math.min(totalPages(), currentPage.value + 2);//5(不包括, (3
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

</script>
<style scoped>
.pagination {
  margin: 20px 0;
  overflow: hidden;
  text-align: center;
}
.pagination ul li {
  display:inline-block;
  border: 1px solid #ccc;
  padding: 2px 9px;
  margin: 0 3px;
  line-height: 20px;
  background: #fff;color:#999
}
.pagination ul li:hover{
  background:#7958d1;
  color:#fff;
  border: 1px solid #7958d1;
}
.pagination ul li:hover a{
  color:#fff;
}
.pagination ul li.current {
  display: inline-block;
  border: 1px solid #7958d1;
  padding: 2px 9px;
  margin: 0 3px;
  background: #7958d1;
  color: #fff;
}
.pagination ul li.current a {
  color: #fff;
}
.pagination ul li a{
  display:block;
  color:#999
}
.pagination ul li a:hover {
  color: #fff;
}
</style>