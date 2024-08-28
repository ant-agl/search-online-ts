<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { Rule } from "ant-design-vue/es/form";
import type { FormInstance } from "ant-design-vue";
import { useUserStore } from "@/stores/user";
import { message } from "ant-design-vue";
import { RegistrationUser } from "@/types/user";
const success = (detail: string) => {
  message.success(detail, 10);
};
const error = (detail: string) => {
  message.error(detail, 10);
};
const userStore = useUserStore();

const formRef = ref<FormInstance>();
const formState = reactive<RegistrationUser>({
  pass: "",
  checkPass: "",
  email: "",
  fio: "",
});

const validatePass = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Пожалуйста введите пароль");
  }
  if (value.length < 8) {
    return Promise.reject("Мнимальная длина пароля 8");
  } else {
    if (formState.checkPass !== "" && formRef.value) {
      formRef.value.validateFields("checkPass");
    }
    return Promise.resolve();
  }
};
const validatePass2 = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Повторите пароль");
  } else if (value !== formState.pass) {
    return Promise.reject("Пароли не совпадают");
  } else {
    return Promise.resolve();
  }
};

const rules: Record<string, Rule[]> = {
  pass: [
    {
      required: true,
      validator: validatePass,
      trigger: "change",
    },
  ],
  checkPass: [
    {
      validator: validatePass2,
      trigger: "change",
    },
  ],
  email: [
    {
      required: true,
      type: "email",
      trigger: "change",
      message: "Пожалуйста, введите корректный адрес электронной почты.",
    },
  ],
  fio: [
    {
      required: true,
      trigger: "change",
      message: "ФИО обязательно",
    },
    {
      min: 6,
      trigger: "change",
      message: "ФИО должно содержать минимум 6 символов.",
    },
  ],
};
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};
const handleFinish = async () => {
  try {
    const data = {
      email: formState.email.trim(),
      password: formState.pass.trim(),
      name: formState.fio.trim(),
    };

    const result = await userStore.registrationUserData(data);
    if (result.data.status == 200) {
      success(result.data.detail);
    } else {
      error(result.data.detail);
    }
  } catch (error) {
    console.error("Серьезная ошибка:", error);
  }
};
const handleFinishFailed = (errors: object) => {
  console.log(errors);
};
const resetForm = () => {
  if (formRef.value) {
    formRef.value.resetFields();
  }
};
</script>

<template>
  <a-form
    ref="formRef"
    name="custom-validation"
    :model="formState"
    :rules="rules"
    v-bind="layout"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item has-feedback label="ФИО" name="fio">
      <a-input v-model:value="formState.fio" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="Электронная почта" name="email">
      <a-input v-model:value="formState.email" type="email" autocomplete="on" />
    </a-form-item>
    <a-form-item has-feedback label="Пароль" name="pass">
      <a-input
        v-model:value="formState.pass"
        type="password"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item has-feedback label="Потверждение" name="checkPass">
      <a-input
        v-model:value="formState.checkPass"
        type="password"
        autocomplete="off"
      />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 15, offset: 4 }">
      <a-button type="primary" html-type="submit">Зарегистрироваться</a-button>
      <a-button style="margin-left: 10px" @click="resetForm"
        >Стереть все</a-button
      >
    </a-form-item>
  </a-form>
</template>
