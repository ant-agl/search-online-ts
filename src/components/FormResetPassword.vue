<template>
  <WrapperRegSign>
    <div class="code">
      <div class="title">Восстановление пароля</div>
      <div class="subtitle">Введи E-mail для восставновлления пароля</div>
      <a-form
        ref="formRef"
        layout="inline"
        :model="formState"
        :rules="rules"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
        class="form"
      >
        <a-form-item name="email">
          <a-input
            v-model:value="formState.email"
            placeholder="E-mail"
            allow-clear
          >
            <template #prefix><MailOutlined /></template>
          </a-input>
        </a-form-item>

        <a-button type="primary" html-type="submit" class="form-button">
          Отправить
        </a-button>
      </a-form>
    </div>
  </WrapperRegSign>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { message } from "ant-design-vue";
import WrapperRegSign from "@/components/wrapper/WrapperRegSign.vue";
import { useUserStore } from "@/stores/user";
import { MailOutlined } from "@ant-design/icons-vue";
import type { FormInstance, RuleObject } from "ant-design-vue/es/form";

interface FormState {
  email: string;
}

const userStore = useUserStore();

const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
  email: "",
});

const rules: Record<string, RuleObject[]> = {
  email: [
    { required: true, message: "Введите E-mail", trigger: "blur" },
    { type: "email", message: "Введите корректный E-mail", trigger: "blur" },
  ],
};

const displayMessage = (type: "success" | "error", detail: string) => {
  message[type](detail, 2);
};

const handleFinish = async () => {
  try {
    await formRef.value?.validate();
    const result = await userStore.userResetPassword({
      email: formState.email.trim(),
    });

    if (result.data.status === 200) {
      displayMessage("success", result.data.detail);
    } else {
      displayMessage("error", result.data.detail);
    }
  } catch (err) {
    console.error("Серьезная ошибка:", err);
  }
};

const handleFinishFailed = (errors: any) => {
  console.log("Validation Failed:", errors);
};
</script>

<style scoped lang="scss">
.code {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle {
  color: rgba(0, 0, 0, 0.7);
  padding: 10px 0 24px;
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
