<script setup>
defineProps({
  currentStep: { type: Number, required: true },
  totalSteps: { type: Number, required: true },
});
</script>

<template>
  <a-progress
    class="progress-bar"
    strokeColor="var(--color-primary)"
    trailColor="transparent"
    :percent="(currentStep / totalSteps) * 100"
    :show-info="false"
    size="small"
  ></a-progress>
</template>

<style scoped>
.progress-bar {
  top: -8px;
}
</style>
