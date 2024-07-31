<script setup>
import AppTheme from "./components/App/AppTheme.vue";
</script>
<style lang="scss">
.d {
  font-size: 60px;
}
body {
  background-color: white !important;
}
</style>
<template>
  <AppTheme />
  <router-view />
</template>
