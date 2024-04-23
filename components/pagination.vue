<template>
  <div class="pagination" v-if="totalPages() > 1">
    <NuxtLink external :to="{ path: route.path, query: { ...route.query, page: currentPage -1 } }" v-if="currentPage > 1">
      上一页
    </NuxtLink>

    <NuxtLink external :to="{ path: route.path, query: { ...route.query, page: page } }" v-for="(page, index) in displayedPages()" :key="page" :class="{ current: page === currentPage }">
      {{ page }}
    </NuxtLink>

    <NuxtLink external :to="{ path: route.path, query: { ...route.query, page: currentPage + 1 } }" v-if="currentPage < totalPages()">下一页</NuxtLink>
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
  text-align: center;
}
.pagination a {
  padding: 4px 10px;
  margin: 0 3px;
  background: #fff;
  color: #999;
  line-height: 20px;
  border: 1px solid #ccc;
}
.pagination a:hover {
  background: #7958d1;
  color: #fff;
  border: 1px solid #7958d1;
}

.pagination a.current {
  background:#7958d1;
  color: #fff;
}
</style>