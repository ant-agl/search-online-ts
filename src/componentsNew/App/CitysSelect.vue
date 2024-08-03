<script lang="ts" setup>
import type { SelectProps } from "ant-design-vue";
import { ref } from "vue";
import { debounce } from "lodash";
import { useStore } from "vuex";

const emit = defineEmits(["update:valueSelect"]);

const store = useStore();
const options = ref<SelectProps["options"]>([]);
const debouncedSearch = debounce((value) => {
  store.dispatch("searchCity", { name: value }).then(
    (citys) =>
      (options.value = citys.data.map((elem: any) => {
        return { value: String(elem.id), label: elem.name };
      }))
  );
}, 1000);
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
  emit("update:valueSelect", value);
};
const handleSearch = (val: string) => {
  debouncedSearch(val);
};
const filterOption = async (input: string, option: any) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const value = ref<string | undefined>(undefined);
</script>
<template>
  <a-select
    v-model:value="value"
    show-search
    placeholder="Найдите свой город"
    style="width: 300px"
    :options="options"
    :filter-option="filterOption"
    @search="handleSearch"
    @change="handleChange"
    not-found-content="Впишите минимум 2 буквы для отображения"
    dropdown-class-name="custom-dropdown"
  ></a-select>
</template>

<!-- <style>
.custom-dropdown .ant-select-item-option-content {
  white-space: normal; /* Позволяет тексту переноситься на новую строку */
  word-wrap: break-word; /* Переносит длинные слова на следующую строку */
}

.custom-dropdown .ant-select-item {
  white-space: normal; /* Перенос текста внутри опции */
}
</style> -->
