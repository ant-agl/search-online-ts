<script setup>
import SignWrapped from "@/components/SignWrapped.vue";
import FormAuthUp from "@/components/FormAuthUp";
</script>

<template>
  <SignWrapped :imgUrl="require('@/assets/images/auth/sign-up.png')">
    <template #formaUser>
      <FormAuthUp />
    </template>
  </SignWrapped>
</template>
