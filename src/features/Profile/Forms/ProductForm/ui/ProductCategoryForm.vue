<script setup lang="ts">
import { ref } from "vue";
import { CategoryCascader, FormButtons } from "@/widgets";
import { ProductFormState, productCategoryRules } from "../model";
import TypeSection from "./TypeSection.vue";

defineProps<{
  accountType: "sell" | "user";
  isFirstStep: boolean;
  isLastStep: boolean;
}>();

const emit = defineEmits<{
  (e: "next"): void;
  (e: "prev"): void;
}>();

const productData = defineModel<ProductFormState>("productData");

// productData.value!.categories = [];

const loading = ref<boolean>(false);

const onPrev = () => {
  emit("prev");
};

const onNext = () => {
  emit("next");
};

const onFinish = () => {
  try {
    loading.value = true;
    console.log(productData.value);
    onNext();
  } finally {
    loading.value = false;
  }
};

const onFinishFailed = (errorInfo: object) => {
  console.log("Failed:", errorInfo);
};
</script>

<template>
  <a-form
    v-if="productData"
    layout="vertical"
    :rules="productCategoryRules"
    v-model:model="productData"
    :label-wrap="true"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-flex vertical>
      <TypeSection
        v-model:productData="productData"
        :accountType="accountType"
      />
      <CategoryCascader
        name="categories"
        v-model:productData="productData"
        :accountType="accountType"
        :select="productData.select"
      />
    </a-flex>
    <FormButtons
      :loading="loading"
      :isFirstStep="isFirstStep"
      :isLastStep="isLastStep"
      @prev="onPrev"
    />
  </a-form>
</template>
