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
      ><a-form-item name="select">
        <template #label>
          <LabelTooltip label="Тип" title="Какое то описание" />
        </template>
        <a-select
          class="select"
          v-model:value="serviceProduct.select"
          :options="options"
        ></a-select>
      </a-form-item>
      <a-form-item name="categorys">
        <template #label>
          <LabelTooltip label="Категория" title="Какое то описание" />
        </template>
        <CategoryCascader v-model:value="serviceProduct.categorys" />
      </a-form-item>
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
import { ref } from "vue";
import LabelTooltip from "../App/LabelTooltip.vue";
import CategoryCascader from "../App/CategoryCascader.vue";
import type { Rule } from "ant-design-vue/es/form";
const emit = defineEmits(["stepPrevNext", "updateServiceProductData"]);
const props = defineProps({
  serviceProduct: {
    type: Object,
  },
});
const options = [
  { value: "Товар", label: "Товар" },
  { value: "Услуга", label: "Услуга" },
];

const serviceProduct = ref({
  select:
    props.serviceProduct?.select === ""
      ? options[0].value
      : props.serviceProduct?.select,

  categorys: [...props.serviceProduct?.categorys],
});

const onFinish = (values: object) => {
  console.log("Success:", values);
  if (serviceProduct.value.select === "Услуга") {
    emit("updateServiceProductData", { ...values, delivery: false });
  } else {
    emit("updateServiceProductData", values);
  }

  emit("stepPrevNext", "next");
};
const prev = () => {
  emit("updateServiceProductData", serviceProduct);
  emit("stepPrevNext", "prev");
};
const onFinishFailed = (errorInfo: object) => {
  console.log("Failed:", errorInfo);
};
const rules: Record<string, Rule[]> = {
  select: [
    {
      required: true,
    },
  ],
  categorys: [
    {
      required: true,
      trigger: "change",
      message: "Выбор категории обязателен",
    },
  ],
};
</script>
<style scoped>
.select {
  width: 311px;
}
</style>
