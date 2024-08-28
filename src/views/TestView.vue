<template>
  <div>
    <p>Имя пользователя: {{ userData.name }}</p>
    <p>Email: {{ userData.email }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUserStore } from "@/stores/user";

// Создаем экземпляр хранилища
const userStore = useUserStore();

// Используем состояние из хранилища
const userData = computed(() => userStore.userData);
console.log(userData);
</script>
