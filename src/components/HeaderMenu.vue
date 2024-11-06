<template>
  <div class="wrapper-header">
    <div class="header-menu-logo">
      <img class="logo" src="@/img/Logo.svg" alt="" />
      <a-menu
        :class="['menu']"
        v-model:selectedKeys="current"
        mode="horizontal"
        :items="items"
      />
    </div>

    <div class="header-main">
      <div class="search">
        <a-input placeholder="Поиск" class="search_input" />
        <a-button class="search_icon" type="none" :icon="h(SearchOutlined)" />
      </div>

      <a-button class="header-button" type="primary">Вход</a-button>

      <a-popover class="mobile-menu" trigger="click">
        <template #content>
          <div>
            <router-link to="#">Главная</router-link>
          </div>
          <div>
            <router-link to="#">Товары</router-link>
          </div>
          <div>
            <router-link to="#">Услуги</router-link>
          </div>
        </template>
        <a-button>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </a-button>
      </a-popover>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

import { MenuProps } from "ant-design-vue";
import { SearchOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
const showMenu = ref(false);
console.log(showMenu.value);

const current = ref<string[]>(["main"]);
const items = ref<MenuProps["items"]>([
  {
    key: "main",

    label: "Главная",
    title: "Главная",
  },
  {
    key: "products",

    label: "Товары",
    title: "Товары",
  },
  {
    key: "services",

    label: "Услуги",
    title: "Услуги",
  },
]);
</script>
<style scoped>
.header-menu-logo {
  display: flex;
  gap: 4px;
}
.wrapper-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
  box-shadow: 0px 0px 17px -10px;
  padding-left: 10px;
  padding-right: 20px;
  background-color: white;
}
.logo {
  max-width: 178px;
}

.header-main {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  height: 64px;
}
.search {
  position: relative;
}
.search_icon {
  position: absolute;
  right: 8px;
}
.search_input {
  width: 296px;
  border-radius: 25px;
  padding-right: 38px;
}
.header-button {
  width: 104px;
  height: 34px;
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
.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 6px;
  border: none;
}
.line {
  border: 1.7px solid var(--color-primary);
  width: 24px;
}

@media (max-width: 1000px) {
  .search {
    display: none;
  }
}
@media (max-width: 700px) {
  .menu {
    display: none;
  }
  .mobile-menu {
    display: flex;
  }
  .show-menu {
    right: 0;
  }
  .header-button {
    border-radius: 8px;
    width: auto;
    height: auto;
    font-size: 11px;
  }
  .logo {
    width: 122px;
  }
}
</style>
