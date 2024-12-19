<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { getCategory } from "@/shared/api";
import { CategoriesFormState } from "@/shared/types";
import { LabelTooltip } from "@/widgets";
import { ProductFormState } from "@/features/Profile/Forms/ProductForm/model";
import GlobalTexts from "@/app/locale";

const props = defineProps<{
  name: string;
  accountType: "sell" | "user";
  select?: "item" | "service";
}>();

const productData = defineModel<ProductFormState>("productData");
const options = ref<CategoriesFormState[]>([]);

const texts = computed(() =>
  GlobalTexts.popovers.getTextsHelpers(
    props.accountType,
    productData.value!.select
  )
);

const popupContainer = () => document.querySelector(".cascader");

watch(
  () => props.select,
  async (newValue) => {
    if (!newValue) return;
    else {
      productData.value!.categories = [];
      options.value = await getCategory(newValue);
    }
  },
  { immediate: true }
);
</script>

<template>
  <a-form-item v-if="productData" class="cascader-item" :name="name">
    <template #label>
      <LabelTooltip
        :label="$t.productService.category"
        :title="texts.category"
      />
    </template>
    <div class="cascader">
      <a-cascader
        v-model:value="productData.categories"
        :placeholder="$t.productService.selectCategory"
        :options="options"
        :getPopupContainer="popupContainer"
        :dropdownStyle="{
          width: '100%',
          height: 'auto !important',
          maxHeight: '900px',
          overflow: 'hide',
        }"
      >
        <template #displayRender="{ labels, selectedOptions }">
          <span
            v-for="(label, index) in labels"
            :key="selectedOptions[index].value"
          >
            {{ label }}
            <span v-if="index !== labels.length - 1"> > </span>
          </span>
        </template>
      </a-cascader>
    </div>
  </a-form-item>
</template>

<style scoped lang="scss">
.cascader-item {
  width: 100%;
  margin-bottom: 200px;
}

:deep(.ant-cascader-menu) {
  height: 200px !important;
}
</style>
