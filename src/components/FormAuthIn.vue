<script lang="ts" setup>
import { reactive } from "vue";
import { AuthIn } from "@/types/user";
import { useUserStore } from "@/stores/user";
import { message } from "ant-design-vue";
import type { Rule } from "ant-design-vue/es/form";
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
      message: "Введите вашу электронную почту",
      trigger: "change",
    },
    {
      required: true,
      message: "Обязательное поле для входа",
    },
  ],
  password: [
    { required: true, message: "Введите ваш пароль" },
    {
      min: 8,
      message: "Пароль должен состоять из 8 символов",
      trigger: "change",
    },
  ],
};
const formState = reactive<AuthIn>({
  email: localStorage.getItem("email") || "",
  password: localStorage.getItem("password") || "",
  remember: true,
});
const onFinish = async (values: AuthIn) => {
  //   console.log("Success:", values);
  try {
    const data = {
      email: values.email,
      password: values.password,
    };

    const result = await userStore.login(data);
    if (result.data.status == 200) {
      localStorage.setItem("token", result.data.token);
      success(result.data.detail);
    } else {
      error(result.data.detail);
    }
    if (values.remember) {
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);
    }
    // router.push("/CheckAuth");
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
      class="form"
      :model="formState"
      name="basic"
      :label-col="{ span: 20 }"
      :wrapper-col="{ span: 50 }"
      autocomplete="on"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      layout="vertical"
      :rules="rules"
    >
      <a-form-item label="Электронная почта" name="email">
        <a-input v-model:value="formState.email" />
      </a-form-item>

      <a-form-item label="Пароль" name="password">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 0, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Запомнить</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 0, span: 16 }">
        <a-button type="primary" html-type="submit">Войти</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<style scoped>
.auth-form {
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  width: 300px;
}
</style>
