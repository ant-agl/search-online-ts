<script setup lang="ts">
import GlobalTexts from "@/app/locale";
import { InputField, TextArea } from "@/shared/ui";
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
  <a-flex v-if="productData" vertical>
    <InputField
      class="section"
      name="productTitle"
      v-model:value.trim="productData.productTitle"
      :placeholder="$t.productService.title"
      allow-clear
    >
      <template #label>
        <LabelTooltip :label="$t.productService.title" :title="texts.title" />
      </template>
    </InputField>
    <TextArea
      name="productDescription"
      v-model:value.trim="productData.productDescription"
      :placeholder="$t.productService.description"
      :rows="4"
      allow-clear
    >
      <template #label>
        <LabelTooltip
          :label="$t.productService.description"
          :title="texts.description"
        />
      </template>
    </TextArea>
  </a-flex>
</template>

<style scoped lang="scss">
.section {
  display: grid;
  grid-template-columns: 4fr 2fr;
}
</style>
