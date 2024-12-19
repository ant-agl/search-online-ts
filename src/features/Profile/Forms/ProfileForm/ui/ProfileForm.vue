<script setup lang="ts">
import { ref, reactive } from "vue";
import { FormButtons } from "@/widgets";
import { UserFormState, userRules } from "../model";
import FormUserSection from "./FormUserSection.vue";
import FormContactsSection from "./FormContactsSection.vue";

defineProps<{
  isFirstStep: boolean;
  isLastStep: boolean;
}>();

const emit = defineEmits<{
  (e: "next"): void;
  (e: "prev"): void;
}>();

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

const loading = ref<boolean>(false);

const onPrev = () => {
  emit("prev");
};

const onNext = () => {
  emit("next");
};

const onFinish = (values: UserFormState) => {
  try {
    loading.value = true;
    console.log(values);
    onNext();
  } finally {
    loading.value = false;
  }
  // emit("updateUserData", values);
  // emit("stepPrevNext", "next");
};

const onFinishFailed = (errorInfo: object) => {
  console.log("Failed:", errorInfo);
};
</script>

<template>
  <a-flex class="profile-form">
    <div class="title-profile">{{ $t.profile.myProfile }}</div>
    <a-form
      class="form-user"
      layout="vertical"
      :rules="userRules"
      :model="userData"
      :label-wrap="true"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <FormUserSection :userData="userData" />
      <FormContactsSection :userData="userData" />

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
.profile-form {
  padding: 24px 60px 30px 60px;
}

.form-user {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.title-profile {
  font-size: 16px;
  margin-bottom: 24px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 600;
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
