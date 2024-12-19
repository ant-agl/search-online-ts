<script setup lang="ts">
import GlobalTexts from "@/app/locale";
import { LabelTooltip } from "@/widgets";
import { ProductFormState } from "../model";
import { computed } from "vue";

const props = defineProps<{
  accountType: "sell" | "user";
}>();

const productData = defineModel<ProductFormState>("productData");

const texts = computed(() =>
  GlobalTexts.popovers.getTextsHelpers(
    props.accountType,
    productData.value!.select
  )
);
</script>

<template>
  <a-flex vertical gap="small" v-if="productData">
    <a-form-item name="delivery">
      <a-flex gap="small">
        <a-checkbox v-model:checked="productData.delivery" />
        <LabelTooltip
          :label="$t.productService.delivery"
          :title="texts.delivery"
        />
      </a-flex>
    </a-form-item>
  </a-flex>
</template>
