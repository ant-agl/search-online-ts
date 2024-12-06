<template>
  <a-cascader
    ref="cascaderRef"
    v-model:value="propsVal"
    :options="options"
    expand-trigger="click"
    placeholder="Выберите категорию"
    style="width: 100%"
    multiple
    :popupStyle="{
      width: popupWidth + 'px',
      height: 'auto !important',
      maxHeight: '900px',
      overflow: 'hide',
    }"
    popupClassName="custom-cascader-popup"
    :show-checked-strategy="showStrategy"
  />
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Cascader } from "ant-design-vue"; // Импорт компонента
import type { CascaderProps } from "ant-design-vue";

const propsVal = defineModel("value");

// Опции для Cascader
const options: CascaderProps["options"] = [
  {
    value: "Транспорт",
    label: "Транспорт",
  },
  {
    value: "Электроника",
    label: "Электроника",
    children: [
      {
        value: "Телефон1",
        label: "Телефон",
      },
      {
        value: "Телефон2",
        label: "Телефон",
        children: [
          {
            value: "Мобильные телефоны1",
            label: "Мобильные телефоны",
          },
          {
            value: "Мобильные телефоны2",
            label: "Мобильные телефоны",
          },
          {
            value: "Мобильные телефоны3",
            label: "Мобильные телефоны",
          },
          {
            value: "Мобильные телефоны4",
            label: "Мобильные телефоны",
          },
          {
            value: "Мобильные телефоны5",
            label: "Мобильные телефоны",
          },
          {
            value: "Мобильные телефоны6",
            label: "Мобильные телефоны",
          },
          {
            value: "Мобильные телефоны7",
            label: "Мобильные телефоны",
          },
        ],
      },
      {
        value: "Телефон3",
        label: "Телефон",
      },
      {
        value: "Телефон4",
        label: "Телефон",
      },
      {
        value: "Телефон5",
        label: "Телефон",
      },
      {
        value: "Телефон6",
        label: "Телефон",
      },
      {
        value: "Телефон7",
        label: "Телефон",
      },
    ],
  },
  {
    value: "Личные вещи",
    label: "Личные вещи",
  },
  {
    value: "Для дома",
    label: "Для дома",
  },
  {
    value: "Работа",
    label: "Работа",
  },
  {
    value: "Стройматериалы",
    label: "Стройматериалы",
  },
  {
    value: "Запчасти",
    label: "Запчасти",
  },
];

// Выбор стратегии отображения выбранных элементов
const showStrategy = ref<"SHOW_PARENT" | "SHOW_CHILD">("SHOW_CHILD"); // Измените на 'SHOW_CHILD', если нужно

// Ссылка на компонент Cascader с правильным типом
const cascaderRef = ref<InstanceType<typeof Cascader> | null>(null);

// Реактивная переменная для ширины popup
const popupWidth = ref(100); // Начальная ширина совпадает с шириной селектора

// Функция для обновления ширины popup
const updatePopupWidth = () => {
  if (cascaderRef.value) {
    const el = cascaderRef.value.$el as HTMLElement;
    // Получаем ширину селектора
    popupWidth.value = el.offsetWidth;
    console.log(`Cascader width: ${popupWidth.value}px`);
  }
};

// Измерение ширины после монтирования компонента
onMounted(() => {
  updatePopupWidth();

  // Добавляем обработчик изменения размера окна для динамического обновления
  window.addEventListener("resize", updatePopupWidth);
});

// Удаление обработчика при размонтировании
onBeforeUnmount(() => {
  window.removeEventListener("resize", updatePopupWidth);
});
</script>
<style scoped lang="scss">
/* :deep(.ant-cascader-menus .ant-cascader-menu) {
  height: auto !important;
  background-color: brown;
} */
.custom-cascader-popup {
  .ant-cascader-menu {
    height: 200px !important;
  }
}
</style>
