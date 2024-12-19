<script setup lang="ts">
import { ref, computed } from "vue";
import { TextArea } from "@/shared/ui";
import { FormButtons, LabelTooltip } from "@/widgets";
import { ProductFormState } from "../model";
import GlobalTexts from "@/app/locale";

const props = defineProps<{
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

const texts = computed(() =>
  GlobalTexts.popovers.getTextsHelpers(
    props.accountType,
    productData.value!.select
  )
);

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
    :model="productData"
    :label-wrap="true"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <TextArea
      name="productCommentary"
      v-model:value.trim="productData.commentary"
      :placeholder="$t.productService.description"
      :rows="6"
      allow-clear
    >
      <template #label>
        <LabelTooltip
          :label="$t.productService.customerInfo"
          :title="texts.customerInfo"
        />
      </template>
    </TextArea>

    <FormButtons
      :loading="loading"
      :isFirstStep="isFirstStep"
      :isLastStep="isLastStep"
      @prev="onPrev"
    />
  </a-form>
</template>
