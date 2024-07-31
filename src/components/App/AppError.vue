<script setup>
defineProps({
  value: String,
});
</script>
<style scoped>
div {
  display: block;
  position: relative;
  margin-top: 5px;
  height: 20px;
}
</style>

<template>
  <div class="error">
    <div class="badge bg-danger">{{ value }}</div>
  </div>
</template>
