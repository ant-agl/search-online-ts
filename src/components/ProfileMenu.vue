<script lang="ts" setup>
import { ref } from "vue";

import { MenuProps } from "ant-design-vue";

import UserProfile from "./UserProfile.vue";
import SalesmanProfile from "./SalesmanProfile.vue";

const current = ref<string[]>(["user"]);
const items = ref<MenuProps["items"]>([
  {
    key: "user",

    label: "Настройки профиля",
    title: "Настройки профиля",
  },
  {
    key: "salesman",

    label: "Настройки продавца",
    title: "Настройки продавца",
  },
]);
</script>
<template>
  <div class="profile-menu">
    <a-menu
      class="menu"
      v-model:selectedKeys="current"
      mode="horizontal"
      :items="items"
    />
    <UserProfile v-if="current.includes('user')" />
    <SalesmanProfile v-if="current.includes('salesman')" />
  </div>
</template>

<style scoped lang="scss">
.profile-menu {
  width: 758px;
  border-radius: 20px;

  overflow: hidden;

  box-shadow: 1px 1px 10px rgb(0, 0, 0, 15%);
}
.menu {
  padding-left: 46px;
  filter: drop-shadow(0px 4px 10px rgb(0, 0, 0, 15%));
  :deep(.ant-menu-item) {
    color: rgba(0, 0, 0, 0.7);
  }
}

@media (max-width: 500px) {
  .menu {
    padding-left: 0px;

    :deep(.ant-menu-item) {
      font-size: 10px;
    }
  }
}
</style>
