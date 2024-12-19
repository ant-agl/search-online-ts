<script setup lang="ts">
defineProps<{
  loading: boolean;
  isFirstStep: boolean;
  isLastStep: boolean;
}>();

const emit = defineEmits<{
  (e: "prev"): void;
}>();

const onPrev = () => {
  emit("prev");
};
</script>

<template>
  <a-flex class="back-next" justify="flex-end" gap="middle">
    <a-button
      class="back"
      type="primary"
      :disabled="isFirstStep"
      @click="onPrev"
      ghost
    >
      {{ $t.productService.back }}
    </a-button>
    <a-button class="next" type="primary" html-type="submit" :loading="loading">
      {{ isLastStep ? $t.productService.end : $t.productService.next }}
    </a-button>
  </a-flex>
</template>

<style lang="scss" scoped></style>
