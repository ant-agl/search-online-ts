<script setup lang="ts">
import { LabelTooltip } from "@/widgets";
import { ProductFormState } from "../model";
import { computed } from "vue";
import GlobalTexts from "@/app/locale";

const props = defineProps<{
  accountType: "sell" | "user";
}>();

const productData = defineModel<ProductFormState>("productData");

const options = [
  { value: "item", label: "Товар" },
  { value: "service", label: "Услуга" },
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
    <a-form-item class="section" name="select">
      <template #label>
        <LabelTooltip :label="$t.productService.type" :title="texts.type" />
      </template>
      <a-select
        v-model:value="productData.select"
        :options="options"
      ></a-select>
    </a-form-item>
  </a-flex>
</template>

<style scoped lang="scss">
.section {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
