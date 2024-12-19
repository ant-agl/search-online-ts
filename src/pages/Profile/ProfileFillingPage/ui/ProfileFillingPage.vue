<!-- <script setup lang="ts">
import { ref, computed, reactive } from "vue";
import {
  SellerFormState,
  UserFormState,
  ProfileForm,
  SellerForm,
} from "@/features/Profile";

const emit = defineEmits(["stepPrevNext", "updateUserData"]);
const props = defineProps({
  userData: {
    type: Object,
  },
});

const userDataDefault = computed(() => props.userData);
const userData = reactive<UserFormState>({
  firstName: "",
  lastName: "",
  patronymic: "",
  location: null,
  email: "",
  contacts: [
    {
      type: "vk",
      value: "https://vk.com",
      hide: true,
    },
  ],
});
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

const percentBar = ref(50);

const next = () => {
  percentBar.value = 100;
};

const prev = () => {
  emit("stepPrevNext", "prevRouter");
};
</script>

<template>
  <a-flex vertical>
    <div class="title-form">
      {{ $t.profile.profileFilling }}
    </div>
    <div class="progress-bar" :style="{ width: percentBar + '%' }" />
    <component
      class="user-profile"
      :is="SellerForm"
      v-model:userData="userData"
      v-model:sellerData="sellerData"
      @next="next"
      @prev="prev"
    />
  </a-flex>
</template>

<style scoped lang="scss">
.title-form {
  font-size: 24px;
  font-weight: 500;
  padding: 30px 60px;
  color: var(--color-text);
  width: 100%;
  box-shadow: 0px 4px 10px rgb(0, 0, 0, 10%);
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: var(--color-second-primary);
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
  }
}

.progress-bar {
  height: 3px;
  background-color: var(--color-primary);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
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
</style> -->

<script setup lang="ts">
import { ProfileSetupWrapper } from "@/features/Profile";
</script>

<template>
  <ProfileSetupWrapper />
</template>
