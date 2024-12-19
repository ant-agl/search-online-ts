<script setup lang="ts">
import { ref, computed, markRaw, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { FormFillingWrapper, ProgressBar } from "@/widgets";
import {
  ProductCategoryForm,
  ProductAboutForm,
  ProductCommentaryForm,
  ProductPhotosForm,
} from "./ProductForm";
import { ProductFormState } from "./ProductForm/model";
import GlobalTexts from "@/app/locale";
import { SkipModal } from "@/widgets/Modals";

const router = useRouter();
const route = useRoute();

const userSteps = [
  { component: markRaw(ProductCategoryForm) },
  { component: markRaw(ProductAboutForm) },
  { component: markRaw(ProductCommentaryForm) },
  { component: markRaw(ProductPhotosForm) },
];

const sellerSteps = [
  { component: markRaw(ProductCategoryForm) },
  { component: markRaw(ProductAboutForm) },
  { component: markRaw(ProductCommentaryForm) },
  { component: markRaw(ProductPhotosForm) },
];

const accountType = <"user" | "sell">(route.query.accountType || "user");
const stepGroups = ref(accountType === "sell" ? sellerSteps : userSteps);

const steps = computed(() => stepGroups.value);
const currentStep = ref(1);

const totalSteps = computed(() => steps.value.length);
const currentComponent = computed(
  () => steps.value[currentStep.value - 1]?.component
);

const currentStepTitle = computed(() => {
  const baseTitle =
    accountType === "sell"
      ? GlobalTexts.productService.addProductService
      : GlobalTexts.productService.findProductService;

  if (productData.select === "item") {
    return `${baseTitle} товара`;
  } else if (productData.select === "service") {
    return `${baseTitle} услуги`;
  } else {
    return baseTitle;
  }
});

const isFirstStep = computed(() => currentStep.value === 1);
const isLastStep = computed(() => {
  return currentStep.value === totalSteps.value;
});

const productData = reactive<ProductFormState>({
  select: "item",
  categories: [],
  productTitle: "",
  productDescription: "",
  priceSelect: "fix",
  fixPrice: 0,
  minPrice: 0,
  maxPrice: 0,
  delivery: false,
  productionTime: { fromTime: "", toTime: "" },
  commentary: "",
  images: [],
});

const modalVisible = ref<boolean>(false);

const nextStep = () => {
  if (currentStep.value < totalSteps.value) {
    currentStep.value++;
  } else {
    console.log("Все шаги завершены!");
    router.push("/final");
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const skipEvent = () => {
  modalVisible.value = true;
};
</script>

<template>
  <FormFillingWrapper>
    <a-flex vertical>
      <a-flex class="title-form" justify="space-between" align="center">
        <transition name="fade-up" mode="out-in">
          <p :key="currentStepTitle" class="title-text">
            {{ currentStepTitle }}
          </p>
        </transition>
        <span @click="nextStep">{{ $t.productService.skip }}</span>
      </a-flex>
      <ProgressBar :currentStep="currentStep" :totalSteps="totalSteps" />
      <component
        class="product-form"
        v-model:productData="productData"
        :is="currentComponent"
        :accountType="accountType"
        :isFirstStep="isFirstStep"
        :isLastStep="isLastStep"
        @next="nextStep"
        @prev="prevStep"
      />
      <SkipModal
        v-model:modalVisible="modalVisible"
        :accountType="accountType"
        :select="productData.select"
      />
    </a-flex>
  </FormFillingWrapper>
</template>

<style lang="scss" scoped>
.title-form {
  font-size: 24px;
  font-weight: 500;
  padding: 30px 60px;
  color: var(--color-text);
  box-shadow: 0px 4px 10px rgb(0, 0, 0, 10%);
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  // transition: 0.3s ease-in-out;

  .title-text {
    margin: 0;
    transition: 0.3s ease-in-out;
    // transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  span {
    color: var(--color-second-primary);
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
  }
}

.product-form {
  padding: 24px 60px 30px 60px;
  background-color: var(--color-back-modal);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

:deep(.ant-btn-primary) {
  padding: 6px 34px;
  line-height: 0;
}

@media (max-width: 700px) {
  :deep(.ant-form-item) {
    margin-bottom: 5px;
  }
}
@media (max-width: 500px) {
  .user-profile {
    padding: 24px 20px 18px 20px;
  }
}
</style>
