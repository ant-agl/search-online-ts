<script lang="ts" setup>
import { reactive } from "vue";
import { useUserStore } from "@/stores/user";
import type { Rule } from "ant-design-vue/es/form";
import { message } from "ant-design-vue";
const userStore = useUserStore();

const success = (detail: string) => {
  message.success(detail, 2);
};
const error = (detail: string) => {
  message.error(detail, 10);
};
const rules: Record<string, Rule[]> = {
  email: [
    {
      type: "email",
      trigger: "change",
      message: "Пожалуйста, введите корректный адрес электронной почты.",
    },
  ],
};
const formState = reactive({
  email: localStorage.getItem("email") || "",
});
interface ResetPassword {
  email: string;
}
const onFinish = async (values: ResetPassword) => {
  console.log("Success:", values);
  try {
    const data = {
      email: values.email,
    };

    const result = await userStore.userResetPassword(data);
    if (result.data.status == 200) {
      success(result.data.detail);
    } else {
      error(result.data.detail);
    }
  } catch (error) {
    console.error("Серьезная ошибка:", error);
  }
};

const onFinishFailed = (errorInfo: object) => {
  console.log("Failed:", errorInfo);
};
</script>
<template>
  <div class="auth-form">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 20 }"
      :wrapper-col="{ span: 50 }"
      :rules="rules"
      autocomplete="on"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      layout="vertical"
    >
      <a-form-item
        label="Электронная почта"
        name="email"
        :rules="[
          {
            type: 'email',
            message: 'Введите вашу электронную почту',
          },
          {
            required: true,

            message: 'Обязательное поле для входа',
          },
        ]"
      >
        <a-input v-model:value="formState.email" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 0, span: 16 }">
        <a-button type="primary" html-type="submit"
          >Восстановить пароль</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>
