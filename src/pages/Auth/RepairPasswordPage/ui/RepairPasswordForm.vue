<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useUserStore, RepairPasswordType } from "@/entities/user";
import { MailOutlined } from "@ant-design/icons-vue";

import { InputField } from "@/shared/ui";
import { RepairPasswordFormState, rules } from "../model";

const { repairPassword } = useUserStore();

const formState = reactive<RepairPasswordFormState>({
  email: "",
});

const loading = ref<boolean>(false);

const handleFinish = async () => {
  const emailData = <RepairPasswordType>{
    email: formState.email,
  };

  try {
    loading.value = true;
    // await repairPassword(emailData);

    // console.log(result);
    // if (result.status === 204) {
    //   displayMessage("success", result.data.detail);
    // } else {
    //   displayMessage("error", result.data.detail);
    // }
  } finally {
    loading.value = false;
  }
};

const handleFinishFailed = (errors: any) => {
  console.log("Validation Failed:", errors);
};
</script>

//TODO: Работоспособность страницы не тестировалась, так как апи не работает
<template>
  <a-flex vertical align="center">
    <div class="title">{{ $t.auth.resetPassword }}</div>
    <div class="subtitle">{{ $t.auth.enterEmail }}</div>
    <a-form
      class="form"
      layout="inline"
      :model="formState"
      :rules="rules"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <InputField
        name="email"
        v-model:value.trim="formState.email"
        :placeholder="$t.auth.email"
        allow-clear
        :icon="MailOutlined"
      />

      <a-button
        class="form-button"
        type="primary"
        html-type="submit"
        :loading="loading"
      >
        {{ $t.auth.send }}
      </a-button>
    </a-form>
  </a-flex>
</template>

<style scoped lang="scss">
.subtitle {
  color: rgba(0, 0, 0, 0.7);
  padding-bottom: 24px;
  font-size: 13px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 311px;
  gap: 10px;

  .form-button {
    height: 42px;
  }
}
</style>
