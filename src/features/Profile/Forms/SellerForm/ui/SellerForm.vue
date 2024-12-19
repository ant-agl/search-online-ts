<script setup lang="ts">
import { ref, reactive } from "vue";
import { CategoryCascader, FormButtons } from "@/widgets";
import { SellerFormState, sellerRules } from "../model";
import FormOrganizationSection from "./FormOrganizationSection.vue";

defineProps<{
  isFirstStep: boolean;
  isLastStep: boolean;
}>();

const emit = defineEmits<{
  (e: "next"): void;
  (e: "prev"): void;
}>();

const sellerData = reactive<SellerFormState>({
  companyName: "",
  companyType: "",
  legalAddress: "",
  inn: "",
  ogrn: "",
  ogrnIp: "",
  kpp: "",
  companyDescription: "",
  categories: [],
});

const loading = ref<boolean>(false);

const onPrev = () => {
  emit("prev");
};

const onNext = () => {
  emit("next");
};

const onFinish = (values: SellerFormState) => {
  try {
    loading.value = true;
    console.log(values);
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
  <a-flex class="company-form">
    <div class="title-company">{{ $t.company.myOrganization }}</div>
    <a-form
      class="form-company"
      layout="vertical"
      :rules="sellerRules"
      :model="sellerData"
      :label-wrap="true"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <FormOrganizationSection :sellerData="sellerData" />
      <CategoryCascader
        name="categories"
        tooltipContent="Какое то описание"
        v-model:value="sellerData.categories"
      />
      <FormButtons
        :loading="loading"
        :isFirstStep="isFirstStep"
        :isLastStep="isLastStep"
        @prev="onPrev"
      />
    </a-form>
  </a-flex>
</template>

<style scoped lang="scss">
.company-form {
  padding: 24px 60px 30px 60px;
}

.title-company {
  font-size: 16px;
  margin-bottom: 24px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 600;
}

.form-company {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.warning {
  border: 1.5px solid #ffe49d;
  background: #fff6e0;
  height: 52px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgb(0, 0, 0, 10%);
}

.save {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 500px) {
  .save {
    margin-top: 20px;
    justify-content: center;
  }
  .warning {
    font-size: 12px;
  }
}
</style>
