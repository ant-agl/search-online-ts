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

      <a-form-item
        label="Пароль"
        name="password"
        :rules="[
          { required: true, message: 'Введите ваш пароль' },
          { min: 8, message: 'Пароль должен состоять из 8 символов' },
        ]"
      >
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
<style setup>
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
<script lang="ts" setup>
import { reactive } from "vue";
import { useStore } from "vuex";
const store = useStore();

import { message } from "ant-design-vue";
const success = (detail: string) => {
  message.success(detail, 2);
};
const error = (detail: string) => {
  message.error(detail, 10);
};
interface FormState {
  email: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  email: localStorage.getItem("email") || "",
  password: localStorage.getItem("password") || "",
  remember: true,
});
const onFinish = async (values: any) => {
  //   console.log("Success:", values);
  try {
    const data = {
      email: values.email,
      password: values.password,
    };
    const result = await store.dispatch("login", data);
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

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
