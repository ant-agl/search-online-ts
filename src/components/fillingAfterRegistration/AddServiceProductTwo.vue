<template>
  <div class="product-service padding">
    <a-form
      :rules="rules"
      :model="serviceProduct"
      name="basic"
      layout="vertical"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <!-- Название и описание -->
      <a-form-item name="name" class="widthMax">
        <template #label>
          <LabelTooltip label="Название" title="Какое то описание" />
        </template>
        <a-input v-model:value="serviceProduct.name" placeholder="Название" />
      </a-form-item>

      <a-form-item name="description" class="description">
        <template #label>
          <LabelTooltip label="Описание" title="Какое то описание" />
        </template>
        <a-textarea
          v-model:value="serviceProduct.description"
          placeholder="Описание"
          :auto-size="{ minRows: 5, maxRows: 5 }"
        />
      </a-form-item>

      <!-- Выбор типа -->
      <div class="select-price widthMax">
        <a-form-item name="priceSelect" class="selects">
          <template #label>
            <LabelTooltip label="Тип" title="Какое то описание" />
          </template>
          <a-select
            v-model:value="serviceProduct.priceSelect"
            :options="options"
          ></a-select>
        </a-form-item>

        <!-- Диапазон цен -->
        <a-form-item
          v-if="serviceProduct.priceSelect === 'Диапазон'"
          name="minPrice"
        >
          <AppInputRange
            v-model:minPrice="serviceProduct.minPrice"
            v-model:maxPrice="serviceProduct.maxPrice"
          />
        </a-form-item>

        <!-- Фиксированная цена -->
        <a-form-item
          v-if="serviceProduct.priceSelect === 'Фиксированная'"
          name="fixPrice"
        >
          <AppInputMoney v-model:fixPrice="serviceProduct.fixPrice" />
        </a-form-item>
      </div>

      <!-- Доставка -->
      <a-form-item
        v-if="props.serviceProduct?.select === 'Товар'"
        name="delivery"
      >
        <a-checkbox v-model:checked="serviceProduct.delivery"
          >Доставка</a-checkbox
        >
      </a-form-item>

      <!-- Срок изготовления -->
      <a-form-item name="time" class="widthMax">
        <template #label>
          <LabelTooltip label="Срок изготовления" title="Какое то описание" />
        </template>
        <a-input v-model:value="serviceProduct.time" placeholder="1 неделя" />
      </a-form-item>

      <!-- Кнопки -->
      <div class="back-next">
        <a-button @click="prev" class="back" type="primary" ghost
          >Назад</a-button
        >
        <a-button class="next" html-type="submit" type="primary"
          >Далее</a-button
        >
      </div>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import LabelTooltip from "../App/LabelTooltip.vue";
import type { Rule } from "ant-design-vue/es/form";
import AppInputRange from "../App/AppInputRange.vue";
import AppInputMoney from "../App/AppInputMoney.vue";

const emit = defineEmits(["stepPrevNext", "updateServiceProductData"]);
const props = defineProps({
  serviceProduct: {
    type: Object,
  },
});
console.log(props.serviceProduct);
const options = [
  { value: "Фиксированная", label: "Фиксированная" },
  { value: "Диапазон", label: "Диапазон" },
];

const serviceProduct = ref({
  name: "",
  description: "",
  fixPrice: 0,
  minPrice: 0,
  maxPrice: 0,
  delivery: false,
  time: "",
  ...props.serviceProduct,
  priceSelect:
    props.serviceProduct?.priceSelect === ""
      ? options[0].value
      : props.serviceProduct?.priceSelect,
});

// Слушаем изменения в priceSelect и сбрасываем значения
watch(
  () => serviceProduct.value.priceSelect,
  (newValue) => {
    if (newValue === options[1].value) {
      serviceProduct.value.fixPrice = 0;
    } else {
      serviceProduct.value.minPrice = 0;
      serviceProduct.value.maxPrice = 0;
    }
  }
);

// Функция для динамических валидаторов
const createPriceValidator = (field: string): Rule => ({
  required: true,
  validator: (rule, value) => {
    if (
      serviceProduct.value.priceSelect === "Фиксированная" &&
      field === "fixPrice"
    ) {
      if (value <= 0) {
        return Promise.reject("Цена не может быть меньше или равна 0");
      }
    } else if (
      serviceProduct.value.priceSelect === "Диапазон" &&
      field === "minPrice"
    ) {
      if (value <= 0) {
        return Promise.reject(
          "Минимальная цена не может быть меньше или равна 0"
        );
      }
    }
    return Promise.resolve();
  },
  trigger: "change",
});

const onFinish = (values: object) => {
  console.log("Success:", values);
  emit("updateServiceProductData", values);
  emit("stepPrevNext", "next");
};

const prev = () => {
  console.log(serviceProduct);
  emit("updateServiceProductData", serviceProduct.value);
  emit("stepPrevNext", "prev");
};

const onFinishFailed = (errorInfo: object) => {
  console.log("Failed:", errorInfo);
  console.log(serviceProduct.value);
};

// Динамические правила с валидацией для fixPrice, minPrice и maxPrice
const rules: Record<string, Rule[]> = {
  name: [
    {
      required: true,
      trigger: "change",
      message: "Название обязательно",
    },
  ],
  description: [
    {
      required: true,
      trigger: "change",
      message: "Описание обязательно",
    },
  ],
  priceSelect: [
    {
      required: true,
    },
  ],
  fixPrice: [createPriceValidator("fixPrice")],
  minPrice: [createPriceValidator("minPrice")],
};
</script>

<style scoped lang="scss">
.widthMax {
  max-width: 311px;
}
.description {
  max-width: 636px;
}
.select-price {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 24px;
  &:deep(.ant-form-item) {
    margin-bottom: 0px;
  }
}
</style>
