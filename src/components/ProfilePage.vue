<script lang="ts" setup>
import { h, ref } from "vue";
import { UserOutlined, ProfileOutlined } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";

import UserProfile from "./UserProfile.vue";

const current = ref<string[]>(["user"]);
const items = ref<MenuProps["items"]>([
  {
    key: "user",
    icon: () => h(UserOutlined),
    label: "Настройка профиля",
    title: "Настройка профиля",
  },
  {
    key: "org",
    icon: () => h(ProfileOutlined),
    label: "Настройка юридических данных",
    title: "Настройка юридических данных",
  },
]);
</script>
<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
  <UserProfile v-if="current.includes('user')" />
</template>
