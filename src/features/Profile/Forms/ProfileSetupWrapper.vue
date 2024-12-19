<script setup lang="ts">
import { ref, computed, markRaw } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ProfileForm, SellerForm } from "@/features/Profile";
import { FormFillingWrapper, ProgressBar } from "@/widgets";

const router = useRouter();
const route = useRoute();

const userSteps = [
  { title: "Заполнение профиля", component: markRaw(ProfileForm) },
];

const sellerSteps = [
  { title: "Заполнение профиля", component: markRaw(ProfileForm) },
  { title: "Информация о продавце", component: markRaw(SellerForm) },
];

const accountType = route.query.accountType || "user";
const stepGroups = ref(accountType === "sell" ? sellerSteps : userSteps);

const steps = computed(() => stepGroups.value);
const currentStep = ref(1);

const totalSteps = computed(() => steps.value.length);
const currentComponent = computed(
  () => steps.value[currentStep.value - 1]?.component
);
const currentStepTitle = computed(
  () => steps.value[currentStep.value - 1]?.title
);

const isFirstStep = computed(() => currentStep.value === 1);
const isLastStep = computed(() => {
  return currentStep.value === totalSteps.value;
});

const nextStep = () => {
  if (currentStep.value < totalSteps.value) {
    currentStep.value++;
  } else {
    console.log("Все шаги завершены!");
    router.push({
      name: "product-filling",
      query: { accountType: accountType },
    });
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};
</script>

<template>
  <FormFillingWrapper>
    <a-flex vertical>
      <a-flex class="title-form" justify="space-between" align="center">
        {{ currentStepTitle }}
      </a-flex>
      <ProgressBar :currentStep="currentStep" :totalSteps="totalSteps" />
      <component
        class="user-profile"
        :is="currentComponent"
        :isFirstStep="isFirstStep"
        :isLastStep="isLastStep"
        @next="nextStep"
        @prev="prevStep"
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

  span {
    color: var(--color-second-primary);
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
  }
}

.user-profile {
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
