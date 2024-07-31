<template>
  <button :type="type" :class="classBtn">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from "vue";

// Define props with their types
const props = defineProps<{
  classBtn?: string;
  type?: "submit" | "button" | "reset";
}>();

// Define default values within `setup`
const defaultProps = {
  classBtn: "btn btn-white btn-hover w-100",
  type: "submit" as "submit" | "button" | "reset",
};

// Create reactive properties with defaults
const classBtn = computed(() => props.classBtn ?? defaultProps.classBtn);
const type = computed(() => props.type ?? defaultProps.type);
</script>
