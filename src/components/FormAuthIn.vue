<template>
  <WrapperRegSign>
    <div class="sign-in">
      <div class="title">Вход</div>
      <div class="subtitle">Войдите в аккаунт чтобы продолжить</div>

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
          <a-input v-model:value="formState.email" placeholder="E-mail">
            <template #prefix><MailOutlined /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input
            v-model:value="formState.password"
            type="password"
            placeholder="Пароль"
          >
            <template #prefix><LockOutlined /></template>
          </a-input>
        </a-form-item>
        <RouterLink class="forgot" to="/forgot"> Забыли пароль?</RouterLink>
        <a-button
          type="primary"
          html-type="submit"
          class="form-button"
          :disabled="false"
        >
          Вход
        </a-button>
      </a-form>
      <div class="rule">
        Регистрируясь, вы соглашаетесь с
        <RouterLink to="#" class="router">
          правилами <br />
          обработки персональных данных
        </RouterLink>
      </div>
      <RouterLink to="#">
        <img class="tg" src="@/img/socials/tg.svg" alt="" />
      </RouterLink>

      <div class="sign-in">
        Еще нет аккаунт?
        <RouterLink to="/signup" class="router">Зарегистрироваться</RouterLink>
      </div>
    </div>
  </WrapperRegSign>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { MailOutlined, LockOutlined } from "@ant-design/icons-vue";
import type { UnwrapRef } from "vue";
import { useRouter } from "vue-router";
import type { FormProps, FormInstance } from "ant-design-vue";
import type { Rule } from "ant-design-vue/es/form";
import { useUserStore } from "@/stores/user";
import WrapperRegSign from "@/components/wrapper/WrapperRegSign.vue";
import { message } from "ant-design-vue";
import { isValidatedAxiosError } from "@/types/errorUtils";
const router = useRouter();
interface FormState {
  email: string;
  password: string;
}
const userStore = useUserStore();
const isAuth = computed({
  get: () => userStore.isAuth,
  set: (newValue) => {
    userStore.isAuth = newValue;
  },
});
const success = (detail: string) => {
  message.success(detail, 2);
};
const error = (detail: string) => {
  message.error(detail, 4);
};
const formRef = ref<FormInstance>();
const formState: UnwrapRef<FormState> = reactive({
  email: "",
  password: "",
});
const handleFinish: FormProps["onFinish"] = async (values) => {
  try {
    await formRef.value?.validate();
    console.log("dd");
    const data = {
      email: formState.email,
      password: formState.password,
    };

    const result = await userStore.login(data);
    console.log(result);
    if (result.status == 200) {
      localStorage.setItem("access_token", result.data.access_token);
      localStorage.setItem("refresh_token", result.data.refresh_token);
      isAuth.value = true;
      router.push("/menuprofile");
      success(result.data.detail);
    } else {
      error(result.data.detail);
    }
  } catch (err) {
    if (isValidatedAxiosError(err)) {
      const message = err.response?.data?.message;
      if (message) {
        console.error("Error Message:", message);
        error(message);
      } else {
        console.error(
          "Response data does not contain a message:",
          err.response?.data
        );
      }
    } else {
      console.error("Unexpected error:", err);
    }
  }
  console.log(values, formState);
};
const handleFinishFailed: FormProps["onFinishFailed"] = (errors) => {
  console.log(errors);
};

const rules: Record<string, Rule[]> = {
  password: [
    {
      required: true,
      trigger: "change",
      message: "Введите пароль",
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
};
</script>

<style scoped lang="scss">
.sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 24px;
}
:deep(.ant-form-item-control-input-content) {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  margin-top: 7px;
}
.tg {
  margin: 24px 0;
}
.sign-in {
  color: rgb(0, 0, 0, 0.7);
  font-size: 13px;
}
.forgot {
  text-align: end;
}
</style>
