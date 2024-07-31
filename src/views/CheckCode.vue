<script setup>
import SignWrapped from "@/components/SignWrapped.vue";
import FormEnterCode from "@/components/FormEnterCode.vue";
import imgUrl from "@/assets/images/auth/reset-password.png";
</script>

<template>
  <SignWrapped :imgUrl="imgUrl">
    <template #formaUser>
      <FormEnterCode />
    </template>
  </SignWrapped>
</template>
