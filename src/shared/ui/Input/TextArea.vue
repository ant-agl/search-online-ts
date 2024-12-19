<script setup lang="ts">
const props = defineProps<{
  name: any;
  label?: string;
  placeholder: string;
  rows?: number;
  minRows?: number;
  maxRows?: number;
  allowClear?: boolean;
  icon?: any | undefined;
}>();

const value = defineModel<string | number>("value");
</script>

<template>
  <a-form-item class="form-item" :name="props.name">
    <template #label>
      <slot name="label">
        {{ props.label || "" }}
      </slot>
    </template>
    <a-textarea
      v-model:value="value"
      :placeholder="props.placeholder"
      :rows="props.rows || 2"
      :allowClear="props.allowClear"
    >
      <template v-if="props.icon" #prefix>
        <component :is="props.icon" />
      </template>
    </a-textarea>
  </a-form-item>
</template>

<style lang="scss" scoped>
.form-item {
  &.full-w {
    width: 100%;
  }
}
</style>
