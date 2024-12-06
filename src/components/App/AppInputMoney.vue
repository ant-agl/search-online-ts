<template>
  <a-input-number
    :class="'input ' + props.class"
    :style="props.style"
    :formatter="formatPrice"
    v-model:value="fixPrice"
    :min="0"
    :parser="parsePrice"
  />
</template>

<script setup>
const props = defineProps({
  style: {
    type: String,
  },
  class: {
    type: String,
  },
});

const fixPrice = defineModel("fixPrice");

const formatPrice = (value) => {
  if (!value) return "";
  // Используем пробел вместо запятой для разделения тысяч
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
const parsePrice = (value) => {
  // Убираем все нецифровые символы (включая пробелы)
  return value.replace(/\D/g, "");
};
</script>
<style scoped lang="scss">
.input {
  background-color: #f2f2f2;
  border-radius: 30px;
  padding: 6px 14px;
  padding-right: 45px;
  width: 311px;
  :deep(.ant-input-number-handler-wrap) {
    right: 45px;
  }
  &::after {
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    background-image: url("@/img/icons/ruble.svg");
    position: absolute;
    right: 22px;
    top: 13px;
  }
}
</style>
