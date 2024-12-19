<script setup lang="ts">
import { ref } from "vue";
import { FormButtons } from "@/widgets";
import { ProductFormState, productAboutRules } from "../model";
import AboutSection from "./AboutSection.vue";
import PriceSection from "./PriceSection.vue";
import TimeProductionSection from "./TimeProductionSection.vue";
import DeliverySection from "./DeliverySection.vue";

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
    :rules="productAboutRules"
    :model="productData"
    :label-wrap="true"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-flex vertical>
      <AboutSection
        v-model:productData="productData"
        :accountType="accountType"
      />
      <PriceSection
        v-model:productData="productData"
        :accountType="accountType"
      />
      <DeliverySection
        v-if="productData.select === 'item'"
        v-model:productData="productData"
        :accountType="accountType"
      />
      <TimeProductionSection
        v-model:productData="productData"
        :accountType="accountType"
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
