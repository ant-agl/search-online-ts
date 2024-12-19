<script setup lang="ts">
import GlobalTexts from "@/app/locale";
import { LabelTooltip } from "@/widgets";
import { ProductFormState } from "../model";
import { computed } from "vue";

const props = defineProps<{
  accountType: "sell" | "user";
}>();

const productData = defineModel<ProductFormState>("productData");

const options = [
  { value: "fix", label: "Фиксированная" },
  { value: "range", label: "Диапазон" },
];

const texts = computed(() =>
  GlobalTexts.popovers.getTextsHelpers(
    props.accountType,
    productData.value!.select
  )
);
</script>

<template>
  <a-flex vertical gap="small" v-if="productData">
    <a-form-item class="section price-type" name="priceSelect">
      <template #label>
        <LabelTooltip :label="$t.productService.price" :title="texts.price" />
      </template>
      <a-select v-model:value="productData.priceSelect" :options="options" />
    </a-form-item>
    <a-form-item
      v-if="productData.priceSelect === 'fix'"
      class="section"
      name="fixPrice"
    >
      <a-input-number
        v-model:value="productData.fixPrice"
        prefix="₽"
        :min="0"
        :controls="false"
      />
    </a-form-item>
    <div v-else class="price-section">
      <a-input-number
        class="min-price"
        name="minPrice"
        v-model:value="productData.minPrice"
        prefix="от"
        :min="0"
        :controls="false"
      />
      <a-input-number
        class="max-price"
        name="maxPrice"
        v-model:value="productData.maxPrice"
        prefix="до"
        :min="productData.minPrice"
        :controls="false"
      />
    </div>
  </a-flex>
</template>

<style scoped lang="scss">
.section {
  display: grid;
  grid-template-columns: 4fr 2fr;
}

.price-type {
  margin-bottom: 0;
}

.price-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.min-price {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: 24px;
}
.max-price {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-bottom: 24px;
}
</style>
