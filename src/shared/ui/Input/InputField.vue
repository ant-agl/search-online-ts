<script setup lang="ts">
const props = defineProps<{
  name: any;
  label?: string;
  placeholder: string;
  allowClear?: boolean;
  disabled?: boolean;
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
    <a-input
      v-model:value="value"
      :placeholder="props.placeholder"
      :allowClear="props.allowClear"
      :disabled="props.disabled"
    >
      <template v-if="props.icon" #prefix>
        <component :is="props.icon" />
      </template>
    </a-input>
  </a-form-item>
</template>

<style lang="scss" scoped>
.form-item {
  &.full-w {
    width: 100%;
  }
}
</style>
