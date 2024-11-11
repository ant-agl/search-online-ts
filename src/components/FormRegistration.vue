<template>
  <WrapperRegSign>
    <div class="registration">
      <div class="title">Регистрация</div>
      <div class="subtitle">Создайте новый аккаунт</div>

      <a-form
        ref="formRef"
        layout="inline"
        :model="formState"
        :rules="rules"
        class="form"
      >
        <a-form-item name="name">
          <a-input v-model:value="formState.name" placeholder="Имя">
            <template #prefix><UserOutlined /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="surname">
          <a-input v-model:value="formState.surname" placeholder="Фамилия">
            <template #prefix><UserOutlined /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="email">
          <a-input v-model:value="formState.email" placeholder="E-mail">
            <template #prefix><MailOutlined /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password
            v-model:value="formState.password"
            type="password"
            placeholder="Пароль"
          >
            <template #prefix><LockOutlined /></template>
          </a-input-password>
        </a-form-item>
        <a-form-item name="checkPassword">
          <a-input
            v-model:value="formState.checkPassword"
            type="password"
            placeholder="Повторите пароль"
          >
            <template #prefix><LockOutlined /></template>
          </a-input>
        </a-form-item>

        <a-button
          type="primary"
          @click="handleFinish"
          class="form-button"
          :disabled="false"
        >
          Регистрация
        </a-button>
      </a-form>
      <div class="rule">
        Регистрируясь, вы соглашаетесь с
        <RouterLink to="#" class="router">
          правилами <br />
          обработки персональных данных
        </RouterLink>
      </div>

      <div class="sign-in">
        Уже есть аккаунт? <RouterLink to="#" class="router">Войти</RouterLink>
      </div>
    </div>
  </WrapperRegSign>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import type { UnwrapRef } from "vue";
import type { FormInstance } from "ant-design-vue";
import type { Rule } from "ant-design-vue/es/form";
import { useUserStore } from "@/stores/user";
import WrapperRegSign from "@/components/wrapper/WrapperRegSign.vue";
import { message } from "ant-design-vue";

interface FormState {
  name: string;
  surname: string;
  email: string;
  password: string;
  checkPassword: string;
}

const userStore = useUserStore();
const success = (detail: string) => {
  message.success(detail, 2);
};
const error = (detail: string) => {
  message.error(detail, 2);
};
const formRef = ref<FormInstance>();
const formState: UnwrapRef<FormState> = reactive({
  name: "",
  surname: "",
  email: "",
  password: "",
  checkPassword: "",
});

const handleFinish = async () => {
  // Запускаем валидацию при нажатии кнопки
  try {
    await formRef.value?.validate();
    const data = {
      email: formState.email.trim(),
      password: formState.password.trim(),
      first_name: formState.name.trim(),
      last_name: formState.surname.trim(),
    };

    const result = await userStore.registrationUserData(data);
    if (result.data.status == 200) {
      success(result.data.detail);
    } else {
      error(result.data.detail);
    }
  } catch (validationErrors) {
    error("Пожалуйста, заполните все поля правильно.");
    console.error("Ошибки валидации:", validationErrors);
  }
};

const validatePass = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Пожалуйста введите пароль");
  }
  if (value.length < 8) {
    return Promise.reject("Минимальная длина пароля 8 символов");
  } else {
    if (formState.checkPassword !== "" && formRef.value) {
      formRef.value.validateFields(["checkPassword"]);
    }
    return Promise.resolve();
  }
};

const validatePass2 = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Повторите пароль");
  } else if (value !== formState.password) {
    return Promise.reject("Пароли не совпадают");
  } else {
    return Promise.resolve();
  }
};

const rules: Record<string, Rule[]> = {
  password: [
    {
      required: true,
      validator: validatePass,
    },
  ],
  checkPassword: [
    {
      validator: validatePass2,
    },
  ],
  email: [
    {
      required: true,
      type: "email",
      message: "Пожалуйста, введите корректный адрес электронной почты.",
    },
  ],
  name: [
    {
      required: true,
      message: "Имя обязательно",
    },
    {
      min: 2,
      message: "Имя должно содержать минимум 2 символа.",
    },
  ],
  surname: [
    {
      required: true,
      message: "Фамилия обязательна",
    },
    {
      min: 2,
      message: "Фамилия должна содержать минимум 2 символа.",
    },
  ],
};
</script>

<style scoped lang="scss">
.registration {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 24px;
}
.subtitle {
  color: rgb(0, 0, 0, 0.7);
  padding: 10px 0 24px 0;
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
.rule {
  font-size: 11px;
  color: rgb(69, 68, 68, 78%);
  line-height: 15px;
  text-align: center;
  margin: 7px 0 24px 0;
}
.sign-in {
  color: rgb(0, 0, 0, 0.7);
  font-size: 13px;
}
</style>
