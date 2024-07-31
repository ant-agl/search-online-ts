<script setup>
import SignWrapped from "@/components/SignWrapped.vue";
import FormResetPassword from "@/components/FormResetPassword.vue";
</script>

<template>
  <SignWrapped :imgUrl="require('@/assets/images/auth/reset-password.png')">
    <template #formaUser>
      <FormResetPassword />
    </template>
  </SignWrapped>
</template>
