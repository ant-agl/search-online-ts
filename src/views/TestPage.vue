<template>
  <a-cascader
    v-model:value="value"
    :options="options"
    expand-trigger="hover"
    placeholder="Please select"
    style="width: 300px"
  />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { CascaderProps } from "ant-design-vue";
const options: CascaderProps["options"] = [
  {
    value: "1",
    label: "1",
    children: [
      {
        value: "12",
        label: "12",
        children: [
          {
            value: "23",
            label: "23 Lake",
          },
        ],
      },
    ],
  },
  {
    value: "2",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const value = ref<string[]>([]);
</script>
