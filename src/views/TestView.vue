<template>
  <div>
    <SelectChoice
      v-model="selectedValue"
      :options="options"
      name="my-select"
      label="Выберите опцию"
      @update:searchValue="updateSearchValue"
    />
    <p>Вы выбрали: {{ selectedValue }}</p>
    <p>Поисковое значение: {{ searchValue }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SelectChoice from "@/components/App/SelectChoice.vue";

const selectedValue = ref(null);
const searchValue = ref("");
const options = [
  { id: "1", name: "Опция 1" },
  { id: "2", name: "Опция 2" },
  // Добавьте другие опции по необходимости
];

const updateSearchValue = (value) => {
  searchValue.value = value;
};
</script>
