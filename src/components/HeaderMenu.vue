<template>
  <div class="wrapper-header">
    <img class="logo" src="@/img/Logo.svg" alt="" />
    <div class="header-main">
      <div class="search">
        <a-input placeholder="Поиск" class="search_input" />
        <a-button class="search_icon" type="none" :icon="h(SearchOutlined)" />
      </div>

      <a-menu
        class="menu"
        v-model:selectedKeys="current"
        mode="horizontal"
        :items="items"
      />
      <a-button class="header-button" type="primary">Вход</a-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

import { MenuProps } from "ant-design-vue";
import { SearchOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
const current = ref<string[]>(["main"]);
const items = ref<MenuProps["items"]>([
  {
    key: "main",

    label: "Главная",
    title: "Главная",
  },
  {
    key: "orders",

    label: "Заказы",
    title: "Заказы",
  },
  {
    key: "chat",

    label: "Чат",
    title: "Чат",
  },
  {
    key: "catalog",

    label: "Каталог",
    title: "Каталог",
  },
]);
</script>
<style scoped>
.wrapper-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
  box-shadow: 0px 0px 17px -10px;
}
.logo {
  margin-left: 10px;
}
.header-main {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 64px;
}
.search {
  position: relative;
}
.search_icon {
  position: absolute;
  right: 35px;
}
.search_input {
  width: 385px;
  padding-right: 30px;
  margin-right: 35px;
}
.header-button {
  width: 104px;
  height: 34px;
  margin: 0 26px;
}
:deep(.menu .ant-menu-item) {
  margin-right: 20px !important;
  height: 64px;
  align-content: center;
  opacity: 68% !important;
}
:deep(.menu .ant-menu) {
  border-bottom: none;
}
:deep(.menu .ant-menu-item-selected) {
  opacity: 1 !important;
}
</style>
