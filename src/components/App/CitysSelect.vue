<script lang="ts" setup>
import type { SelectProps } from "ant-design-vue";
import { ref } from "vue";
import { debounce } from "lodash";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

const emit = defineEmits(["update:valueSelect"]);
const props = defineProps({
  defaultValue: {
    type: Object,
    required: false,
  },
});
interface City {
  id: number;
  name: string;
}
const options = ref<SelectProps["options"]>([]);
const debouncedSearch = debounce((value) => {
  userStore.searchCity({ name: value }).then(
    (citys) =>
      (options.value = citys.data.map((elem: City) => {
        //Нужно чтобы данные приходили с label а не с name здесь костыль
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
interface OptionFilter {
  value: string;
  label: string;
}
const filterOption = async (input: string, option: OptionFilter) => {
  console.log(option);
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const value = ref<string | undefined>(props?.defaultValue?.label);
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
