<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="vertical"
    :items="items"
    @click="handleClick"
  />
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import { MailOutlined, CalendarOutlined } from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";

const selectedKeys = ref([]);
const openKeys = ref([]);
const items = ref([
  {
    key: "1",
    icon: () => h(MailOutlined),
    label: "Navigation One",
    title: "Navigation One",
  },
  {
    key: "2",
    icon: () => h(CalendarOutlined),
    label: "Navigation Two",
    title: "Navigation Two",
  },
]);
const handleClick: MenuProps["onClick"] = (menuInfo) => {
  console.log("click ", menuInfo);
};
</script>
