<template>
  <div class="block">
    <h1 class="sidebar-h1">{{ title }}</h1>
    <ul :class="listClassName">
      <li v-for="(item, index) in items" :key="index">
        <a :href="item.href" :target="openInNewTab ? '_blank' : '_self'">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Item {
  text: string;
  href: string;
}

interface Props {
  title: string;
  items: Item[];
  listClassName?: string;
  openInNewTab?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  listClassName: 'general',
});

</script>
<style scoped>
.block {
  margin: 15px auto;
  border: solid 1px #bbbeaf;
  box-shadow: 0 0 4px #888;
  background: #fff
}
.sidebar-h1 {
  padding: 10px 10px 0;
  color: #7958D1;
  font-size: 1.3em;
  background-image: linear-gradient(to bottom, #e8f5fe, #fff);
}

.tag-cloud {
  padding: 0 5px
}

.tag-cloud li {
  display: inline-block;
  line-height: 24px;
  padding: 5px;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.tag-cloud li a:hover {
  color: #7958D1
}

.general li {
  overflow: hidden;
  line-height: 30px;
  text-indent: 10px;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.general li a:hover {
  color: #9158D1
}
</style>