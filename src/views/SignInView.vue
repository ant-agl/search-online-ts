<script setup lang="ts">
import SignWrapped from "@/components/SignWrapped.vue";
import FormAuthIn from "@/components/FormAuthIn";
</script>

<template>
  <SignWrapped :imgUrl="require('@/assets/images/auth/sign-in.png')">
    <template #formaUser>
      <FormAuthIn />
    </template>
  </SignWrapped>
</template>
