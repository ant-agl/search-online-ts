<template>
  <div :class="'inputRange ' + props.class" :style="props.style">
    От
    <a-input-number
      class="input"
      :formatter="formatPrice"
      v-model:value="minPrice"
      :min="0"
      :parser="parsePrice"
      @change="handleMinChange"
    />
    до
    <a-input-number
      class="input"
      :formatter="formatPrice"
      v-model:value="maxPrice"
      :min="0"
      :parser="parsePrice"
      @change="handleMaxChange"
    />
    <img src="@/img/icons/ruble.svg" />
  </div>
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

// Используем v-model для привязки minPrice и maxPrice
const minPrice = defineModel("minPrice");
const maxPrice = defineModel("maxPrice");

const formatPrice = (value) => {
  if (!value) return "";
  // Используем пробел вместо запятой для разделения тысяч
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const parsePrice = (value) => {
  // Убираем все нецифровые символы (включая пробелы)
  return value.replace(/\D/g, "");
};

const handleMinChange = (value) => {
  // Если минимальная цена больше максимальной, устанавливаем максимальную равной минимальной
  if (maxPrice.value !== null && value > maxPrice.value) {
    maxPrice.value = value;
  }
};

const handleMaxChange = (value) => {
  // Если максимальная цена меньше минимальной, устанавливаем минимальную равной максимальной
  if (minPrice.value !== null && value < minPrice.value) {
    minPrice.value = value;
  }
};
</script>

<style scoped>
.inputRange {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 7px 14px;
  max-width: 311px;
}
.input {
  border: none;
  margin: 0 10px;
  background-color: inherit;
}
</style>
